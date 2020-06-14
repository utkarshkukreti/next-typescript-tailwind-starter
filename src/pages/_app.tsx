import { AppProps } from 'next/app';

import '@/index.css';
import 'typeface-work-sans';

export default ({ Component, pageProps }: AppProps) => (
  <div className="bg-cool-gray-200 min-h-screen antialiased">
    <Component {...pageProps} />
  </div>
);
