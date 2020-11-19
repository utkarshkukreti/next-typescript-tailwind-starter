export type Layout<P> = (_: React.ReactNode, props: P) => React.ReactNode

export type WithLayoutOptional<P> = React.ComponentType<P> & {
  Layout?: Layout<P>
}

const WithLayout = <P>(
  component: React.ComponentType<P>,
  Layout: Layout<P>,
): WithLayoutOptional<P> => Object.assign(component, { Layout })

export default WithLayout
