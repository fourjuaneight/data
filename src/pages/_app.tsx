import { AppProps } from 'next/app';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/reset.css';
import '../styles/critical.css';
import '../styles/tailwind.css';
import '../styles/main.css';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
);

export default App;
