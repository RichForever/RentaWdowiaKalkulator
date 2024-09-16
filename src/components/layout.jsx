const Layout = ({ children, className='' }) => {

  return (
    <section className={`py-12 px-6 ${className}`}>
      <div className="container mx-auto">
        {children}
      </div>
    </section>
  );
};
export default Layout;
