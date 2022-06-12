/* eslint-disable camelcase */
export interface BookmarkData {
  title: string;
  creator: string;
  url: string;
}

export interface PageData {
  title: string;
  author: string;
  site: string;
  url: string;
}

export interface RedditData {
  title: string;
  content: string;
  subreddit: string;
  url: string;
}

export interface TwitterData {
  tweet: string;
  user: string;
  url: string;
}

export interface RecordData {
  id: string;
  archive?: string;
  tags: string;
}

export type Record = RecordData &
  (BookmarkData | PageData | RedditData | TwitterData);

export interface RequestPayload {
  type: string;
  table: string;
  tagList?: string;
  query?: string;
  column?: string;
  data?: PageData;
}

export interface HasuraInsertResp {
  data: {
    [key: string]: {
      id: string;
    };
  };
}

export interface HasuraMutationResp {
  [key: string]: {
    returning: {
      id: string;
    }[];
  };
}

export interface HasuraQueryResp {
  data: {
    [key: string]: RecordData[];
  };
}

export interface HasuraQueryTagsResp {
  data: {
    meta_tags: { name: string }[];
  };
}

export interface HasuraErrors {
  errors: {
    extensions: {
      path: string;
      code: string;
    };
    message: string;
  }[];
}
