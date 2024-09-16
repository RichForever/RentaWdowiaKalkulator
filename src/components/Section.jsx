const Section = ({ children, className='', fullHeight, isFirst }) => {

  return (
      <section className={`flex items-center justify-center ${className} ${fullHeight && isFirst ? 'min-h-[calc(100lvh_-_var(--navbar-height))]' : fullHeight && !isFirst ? 'min-h-lvh' : ''}`}>
        <div className="p-6">
          {children}
        </div>
      </section>
  );
};
export default Section;
