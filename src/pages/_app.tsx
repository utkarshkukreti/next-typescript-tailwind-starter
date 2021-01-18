import '@/index.css'

import { WithLayoutOptional } from '@/layouts/WithLayout'

type Props<P extends {}> = {
  Component: WithLayoutOptional<P>
  pageProps: P
}

const App = <P extends {}>({ Component, pageProps }: Props<P>) =>
  Component.Layout ? (
    Component.Layout(<Component {...pageProps} />, pageProps)
  ) : (
    <Component {...pageProps} />
  )

export default App
