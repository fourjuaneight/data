import { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';

import '../styles/reset.css';
import '../styles/critical.css';
import '../styles/tailwind.css';
import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  <UserProvider>
    <Component {...pageProps} />
  </UserProvider>
);

export default App;
