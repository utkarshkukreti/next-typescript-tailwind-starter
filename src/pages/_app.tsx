import { AppProps } from 'next/app';

import '@/index.css';
import 'typeface-work-sans';

export default ({ Component, pageProps }: AppProps) => (
  <div className="antialiased">
    <Component {...pageProps} />
  </div>
);
