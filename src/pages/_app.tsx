import '../index.css';
import '../../node_modules/typeface-work-sans';

export default <Props extends any>({
  Component,
  pageProps,
}: {
  Component: React.FC<Props>;
  pageProps: Props;
}) => (
  <div className="bg-purple-600 text-purple-50 min-h-screen">
    <Component {...pageProps} />
  </div>
);
