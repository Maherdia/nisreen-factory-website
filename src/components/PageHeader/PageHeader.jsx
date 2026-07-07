import "./PageHeader.css";

import hero from "../../assets/images/PageHeader.png";

function PageHeader({ title, subtitle }) {
    return (
        <section
            className="page-header"
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div className="page-header-overlay"></div>

            <div className="page-header-content">
                <h1>{title}</h1>

                {subtitle && (
                    <p>{subtitle}</p>
                )}
            </div>
        </section>
    );
}

export default PageHeader;