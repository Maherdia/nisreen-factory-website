import "./PageHeader.css";

function PageHeader({ title, subtitle, image }) {
  return (
    <section
      className="page-header"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="page-header-overlay"></div>

      <div className="page-header-content">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

export default PageHeader;