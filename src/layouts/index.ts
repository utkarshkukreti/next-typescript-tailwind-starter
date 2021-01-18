export type Layout<P> = (node: React.ReactNode, props: P) => React.ReactNode

export type WithLayoutOptional<P> = React.ComponentType<P> & {
  Layout?: Layout<P>
}

export const WithLayout = <P>(
  component: React.ComponentType<P>,
  Layout: Layout<P>,
): WithLayoutOptional<P> => Object.assign(component, { Layout })
