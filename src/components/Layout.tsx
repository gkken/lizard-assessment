const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className="max-w-screen flex flex-col space-y-5">{children}</div>;
};

export default Layout;
