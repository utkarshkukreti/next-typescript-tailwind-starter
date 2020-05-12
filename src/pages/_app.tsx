import { AppProps } from 'next/app';

import 'index.css';
import 'typeface-work-sans';

export default ({ Component, pageProps }: AppProps) => (
  <div className="bg-purple-500 text-purple-50 min-h-screen flex flex-col">
    <Component {...pageProps} />
  </div>
);
