export type Layout = React.ComponentType<{ children: React.ReactNode }>;

export type WithLayout<P> = React.ComponentType<P> & {
  Layout?: Layout;
};

export default <P>(
  Layout: Layout,
  component: React.ComponentType<P>,
): WithLayout<P> => Object.assign(component, { Layout });
