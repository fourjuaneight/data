import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

import { Main } from '@/templates/Main';
import NoAuth from '@/components/NoAuth';

const Home = () => {
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  useEffect(() => {
    if (user) {
      router.push('/bookmarks');
    }
  }, [router, user]);

  return (
    <Main>{user ? null : <NoAuth error={error} isLoading={isLoading} />}</Main>
  );
};

export default Home;
