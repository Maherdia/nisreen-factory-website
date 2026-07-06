import "./Certifications.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";
import PdfModal from "../../components/PdfModal/PdfModal";

import hero from "../../assets/images/factory.png";

import certificates from "../../data/certificates";
import { Link } from "react-router-dom";


function Certifications() {

    const [selectedCertificate, setSelectedCertificate] = useState(null);

    const features = [

        "Blast Resistance Testing",
        "Ballistic Testing",
        "Fire Resistance Testing",
        "Quality Assurance",
        "Continuous Inspection",
        "International Standards"

    ];

    return (

        <>

            <Navbar />

            <PageHeader
                title="Certifications"
                subtitle="Certified Quality. Proven Performance."
                image={hero}
            />

            <section className="cert-intro">

                <span className="section-tag">
                    CERTIFIED EXCELLENCE
                </span>

                <h2>
                    International Certifications & Independent Testing
                </h2>

                <p>
                    Special & Safety Work manufactures security products under internationally recognized quality management systems while working with leading testing organizations to verify product performance, safety and compliance.
                </p>

            </section>

            <section className="certifications-section">

                <div className="container">

                    <div className="iso-section">

                        {certificates
                            .filter(cert => cert.name.startsWith("ISO"))
                            .map(cert => (

                                <div
                                    key={cert.id}
                                    className={`iso-card ${cert.pdfs.length ? "clickable" : ""}`}
                                    onClick={() =>
                                        cert.pdfs.length &&
                                        setSelectedCertificate(cert)
                                    }
                                >

                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                    />

                                    <div>

                                        <h3>{cert.name}</h3>

                                        <div className="certificate-status">

                                            {cert.pdfs.length ? (

                                                <span className="certificate-badge">
                                                    📄 {cert.pdfs.length} {cert.pdfs.length === 1 ? "Report" : "Reports"}
                                                </span>

                                            ) : (

                                                <span className="certificate-coming">
                                                    Coming Soon
                                                </span>

                                            )}

                                        </div>

                                    </div>

                                </div>

                            ))}

                    </div>

                    <h2 className="testing-title">
                        International Testing Organizations
                    </h2>

                    <div className="testing-grid">

                        {certificates
                            .filter(cert => !cert.name.startsWith("ISO"))
                            .map(cert => (

                                <div
                                    key={cert.id}
                                    className={`testing-card ${cert.pdfs.length ? "clickable" : ""}`}
                                    onClick={() =>
                                        cert.pdfs.length &&
                                        setSelectedCertificate(cert)
                                    }
                                >

                                    <img
                                        src={cert.image}
                                        alt={cert.name}
                                    />

                                    <h3>{cert.name}</h3>

                                    <div className="certificate-status">

                                        {cert.pdfs.length ? (

                                            <span className="certificate-badge">
                                                📄 {cert.pdfs.length} {cert.pdfs.length === 1 ? "Report" : "Reports"}
                                            </span>
                                        )
                                            :
                                            (
                                                <span className="certificate-coming">
                                                    Coming Soon
                                                </span>
                                            )}

                                    </div>
                                </div>

                            ))}

                    </div>

                </div>

            </section>
            <section className="testing">

                <div className="testing-left">

                    <span className="section-tag">
                        ENGINEERING VALIDATION
                    </span>

                    <h2>
                        Product Testing & Compliance
                    </h2>

                    <p>
                        Our products undergo comprehensive testing and inspection throughout manufacturing to ensure compliance with demanding blast, ballistic, fire resistance and quality requirements for critical infrastructure projects.
                    </p>

                </div>

                <div className="testing-right">

                    {features.map((feature, index) => (

                        <div
                            className="feature-card"
                            key={index}
                        >
                            ✓ {feature}
                        </div>

                    ))}

                </div>

            </section>

            <section id="quality" className="industries">

                <span className="section-tag">
                    INDUSTRIES WE SERVE
                </span>

                <h2>
                    Trusted Across Critical Sectors
                </h2>

                <div className="industries-grid">

                    <Link to="/projects?filter=Government" className="industry">
                        Government Buildings
                    </Link>

                    <Link to="/projects?filter=Military" className="industry">
                        Military Facilities
                    </Link>

                    <Link to="/projects?filter=Industrial" className="industry">
                        Oil & Gas
                    </Link>

                    <Link to="/projects?filter=Government" className="industry">
                        Airports
                    </Link>

                    <Link to="/projects?filter=Commercial" className="industry">
                        Commercial Buildings
                    </Link>

                    <Link to="/projects?filter=Industrial" className="industry">
                        Critical Infrastructure
                    </Link>

                </div>
            </section>


            <section className="cert-cta">

                <h2>
                    Need Certified Security Products?
                </h2>

                <p>
                    Contact our engineering team to discuss your project requirements.
                </p>

                <a
                    href="/contact"
                    className="primary-btn"
                >
                    Contact Us
                </a>

            </section>

            <PdfModal
                isOpen={!!selectedCertificate}
                title={selectedCertificate?.name}
                pdfs={selectedCertificate?.pdfs || []}
                onClose={() => setSelectedCertificate(null)}
            />

            <Footer />

        </>

    );

}

export default Certifications;