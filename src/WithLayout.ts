export type Layout = (_: React.ReactNode) => React.ReactNode;

export type WithLayoutOptional<P> = React.ComponentType<P> & {
  Layout?: Layout;
};

const WithLayout = <P>(
  component: React.ComponentType<P>,
  Layout: Layout,
): WithLayoutOptional<P> => Object.assign(component, { Layout });

export default WithLayout;
