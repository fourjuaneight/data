import { useQuery } from 'react-query';
import { useMemo, useState } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

import Intro from '@/components/Intro';
import Table from '@/components/Table';
import { Main } from '@/templates/Main';
import { queryBookmarkItems } from '@/utils/bookmarks';

const Bookmarks = () => {
  // local state
  const [bkTable, setBkTable] = useState<string>('articles');
  const columns = useMemo(
    () => [
      { Header: 'Title', accessor: 'title' },
      { Header: 'Author', accessor: 'author' },
      { Header: 'Site', accessor: 'site' },
      { Header: 'URL', accessor: 'url' },
      { Header: 'Tags', accessor: 'tags' },
    ],
    []
  );
  // methods
  const getBookmarks = async () => queryBookmarkItems(bkTable);
  // query data
  const { user } = useUser();
  const { data, refetch } = useQuery(
    [`bookmarks_${bkTable}`, user],
    getBookmarks,
    {
      refetchOnWindowFocus: false,
    }
  );

  return (
    <Main title="About This Site">
      <h1 className="post-title md:text-6xl mr-auto text-4xl">Bookmarks</h1>
      {data && <Table data={data} columns={columns} />}
      <Intro />
    </Main>
  );
};

export default Bookmarks;
export const getServerSideProps = withPageAuthRequired();
