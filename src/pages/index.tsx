import { useUser } from '@auth0/nextjs-auth0';

import Intro from '@/components/Intro';
import { Main } from '@/templates/Main';
import NoAuth from '@/components/NoAuth';

const Home = () => {
  const { user, error, isLoading } = useUser();

  return (
    <Main>
      {user ? <Intro /> : <NoAuth error={error} isLoading={isLoading} />}
    </Main>
  );
};

export default Home;
