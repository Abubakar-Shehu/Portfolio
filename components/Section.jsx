export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className="section-content">
        {children}
      </div>
    </section>
  );
}
