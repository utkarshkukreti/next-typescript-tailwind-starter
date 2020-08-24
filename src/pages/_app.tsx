import '@/index.css';
import { WithLayoutOptional } from '@/WithLayout';

type Props<P extends {}> = {
  Component: WithLayoutOptional<P>;
  pageProps: P;
};

const App = <P extends {}>({ Component, pageProps }: Props<P>) =>
  Component.Layout ? (
    Component.Layout(<Component {...pageProps} />)
  ) : (
    <Component {...pageProps} />
  );

export default App;
