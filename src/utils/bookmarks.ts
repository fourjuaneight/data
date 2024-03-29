import {
  HasuraErrors,
  HasuraInsertResp,
  HasuraQueryResp,
  HasuraQueryTagsResp,
  Record,
  RecordData,
} from './types';

const BK_FIELDS = {
  articles: ['title', 'author', 'site', 'url'],
  comics: ['title', 'creator', 'url'],
  podcasts: ['title', 'creator', 'url'],
  reddits: ['title', 'subreddit', 'url'],
  tweets: ['tweet', 'user', 'url'],
  videos: ['title', 'creator', 'url'],
};
const CONFIG: RequestInit = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Hasura-Admin-Secret': `${process.env.NEXT_PUBLIC_HASURA_ADMIN_SECRET}`,
  },
};

const objToQueryString = (obj: { [key: string]: any }) =>
  Object.keys(obj).map(key => {
    const value = obj[key];
    const fmtValue =
      typeof value === 'string'
        ? `"${value
            .replace(/\\/g, '')
            .replace(/"/g, '\\"')
            .replace(/\n/g, '\\n')}"`
        : Array.isArray(value)
        ? `"${value.join(',')}"`
        : value;

    return `${key}: ${fmtValue}`;
  });

/**
 * Get bookmark tags from Hasura.
 * @function
 * @async
 *
 * @param {string} schema
 * @param {string} table
 * @returns {Promise<string[]>}
 */
export const queryTags = async (
  schema: string,
  table: string
): Promise<string[]> => {
  const query = `
    {
      meta_tags(where: {schema: {_eq: "${schema}"}, table: {_eq: "${table}"}}) {
        name
      }
    }
  `;

  try {
    const request = await fetch(`${process.env.NEXT_PUBLIC_HASURA_ENDPOINT}`, {
      ...CONFIG,
      body: JSON.stringify({ query }),
    });
    const response: HasuraQueryTagsResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(queryTags) - ${schema} - ${table}: \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    const tags = (response as HasuraQueryTagsResp).data.meta_tags.map(
      tag => tag.name
    );

    return tags;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Get bookmark entries from Hasura.
 * @function
 * @async
 *
 * @param {string} table
 * @returns {Promise<Record[]>}
 */
export const queryBookmarkItems = async (table: string): Promise<Record[]> => {
  const query = `
    {
      bookmarks_${table}(order_by: {
        ${table === 'tweets' ? 'tweet' : 'title'}: asc
      }) {
        id
        ${BK_FIELDS[table].join('\n')}
        tags
        archive
      }
    }
  `;

  try {
    const request = await fetch(`${process.env.NEXT_PUBLIC_HASURA_ENDPOINT}`, {
      ...CONFIG,
      body: JSON.stringify({ query }),
    });
    const response: HasuraQueryResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(queryBookmarkItems) - ${table}: \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    return (response as HasuraQueryResp).data[`bookmarks_${table}`];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Search bookmark entries from Hasura.
 * @function
 * @async
 *
 * @param {string} table
 * @param {string} pattern
 * @param {[string]} column
 * @returns {Promise<Record[]>}
 */
export const searchBookmarkItems = async (
  table: string,
  pattern: string,
  column: string
): Promise<Record[]> => {
  const query = `
    {
      bookmarks_${table}(
        order_by: {${column}: asc},
        where: {${column}: {_iregex: ".*${pattern}.*"}}
      ) {
        id
        ${BK_FIELDS[table].join('\n')}
        tags
        archive
      }
    }
  `;

  try {
    const request = await fetch(`${process.env.NEXT_PUBLIC_HASURA_ENDPOINT}`, {
      ...CONFIG,
      body: JSON.stringify({ query }),
    });
    const response: HasuraQueryResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(searchBookmarkItems) - ${table}: \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    return (response as HasuraQueryResp).data[`bookmarks_${table}`];
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Upload record object to Hasura.
 * @function
 * @async
 *
 * @param {string} list table name
 * @param {RecordData} record data to upload
 * @returns {Promise<string>}
 */
export const addHasuraRecord = async (
  list: string,
  record: RecordData
): Promise<string> => {
  const isTweet = list === 'bookmarks_tweets';
  const bkColumn = isTweet ? 'tweet' : 'title';
  const bkTitle = isTweet ? record.tweet : record.title;
  const query = `
    mutation {
      insert_${list}_one(object: { ${objToQueryString(record)} }) {
        id
      }
    }
  `;

  try {
    const existing = await searchBookmarkItems(
      list.replace('bookmarks_', ''),
      bkTitle ?? '',
      bkColumn
    );

    if (existing?.length !== 0) {
      throw '(addHasuraRecord): Bookmark already exists.';
    }

    const request = await fetch(`${process.env.NEXT_PUBLIC_HASURA_ENDPOINT}`, {
      ...CONFIG,
      body: JSON.stringify({ query }),
    });
    const response: HasuraInsertResp | HasuraErrors = await request.json();

    if (response.errors) {
      const { errors } = response as HasuraErrors;

      throw `(addHasuraRecord) - ${list}: \n ${errors
        .map(err => `${err.extensions.path}: ${err.message}`)
        .join('\n')} \n ${query}`;
    }

    return (response as HasuraInsertResp).data[`insert_${list}_one`].id;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
