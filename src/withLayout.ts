export type Layout = React.ComponentType<{ children: React.ReactNode }>;

export type WithLayoutOptional<P> = React.ComponentType<P> & {
  Layout?: Layout;
};

const WithLayout = <P>(
  Layout: Layout,
  component: React.ComponentType<P>,
): WithLayoutOptional<P> => Object.assign(component, { Layout });

export default WithLayout;
