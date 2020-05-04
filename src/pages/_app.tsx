import { AppProps } from 'next/app';

import '../index.css';
import '../../node_modules/typeface-work-sans';

export default ({ Component, pageProps }: AppProps) => (
  <div className="bg-purple-600 text-purple-50 min-h-screen">
    <Component {...pageProps} />
  </div>
);
