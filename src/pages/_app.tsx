import '@/index.css';
import 'typeface-work-sans';
import { WithLayoutOptional } from '@/withLayout';

type Props<P extends {}> = {
  Component: WithLayoutOptional<P>;
  pageProps: P;
};

export default <P extends {}>({ Component, pageProps }: Props<P>) =>
  Component.Layout ? (
    <Component.Layout>
      <Component {...pageProps} />
    </Component.Layout>
  ) : (
    <Component {...pageProps} />
  );
