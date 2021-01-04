import '@/index.css'

type Props<P extends {}> = {
  Component: React.ComponentType<P>
  pageProps: P
}

const App = <P extends {}>({ Component, pageProps }: Props<P>) => (
  <Component {...pageProps} />
)

export default App
