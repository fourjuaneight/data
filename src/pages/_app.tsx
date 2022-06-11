import { AppProps } from 'next/app';

import '../styles/reset.css';
import '../styles/critical.css';
import '../styles/tailwind.css';
import '../styles/main.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
