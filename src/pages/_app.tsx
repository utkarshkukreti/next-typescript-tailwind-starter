import '@/index.css';
import 'typeface-work-sans';
import { WithLayout } from '@/withLayout';

type Props<P> = {
  Component: WithLayout<P>;
  pageProps: P & {};
};

export default <P extends any>({ Component, pageProps }: Props<P>) =>
  Component.Layout ? (
    <Component.Layout>
      <Component {...pageProps} />
    </Component.Layout>
  ) : (
    <Component {...pageProps} />
  );
