import "./Certifications.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";

import hero from "../../assets/images/factory.jpg";

import iso9001 from "../../assets/certificates/iso9001-2015.webp";
import iso45001 from "../../assets/certificates/iso45001-2018.png";
import intertek from "../../assets/certificates/Intertek.png";
import tuv from "../../assets/certificates/tuv-nord.webp";
import dnv from "../../assets/certificates/dnv.jpg";
import ara from "../../assets/certificates/ara.png";
import closeFocus from "../../assets/certificates/close-focus.gif";
import joddb from "../../assets/certificates/joddb.png";
import testex from "../../assets/certificates/testex.png";
import sirim from "../../assets/certificates/SirimQAS.png";

function Certifications() {

    const testingOrganizations = [

        {
            id: "intertek",
            logo: intertek,
            name: "Intertek",
            description: "Independent testing, inspection and certification organization verifying product performance and compliance with international standards."
        },

        {
            id: "tuv",
            logo: tuv,
            name: "TÜV NORD",
            description: "International certification body providing product testing, engineering verification and quality certification services."
        },

        {
            id: "dnv",
            logo: dnv,
            name: "DNV",
            description: "Global assurance and certification organization specializing in quality management, product verification and technical compliance."
        },

        {
            id: "close-focus",
            logo: closeFocus,
            name: "Close Focus Research",
            description: "Specialized ballistic testing laboratory performing firearm resistance and qualification testing for security products."
        },

        {
            id: "joddb",
            logo: joddb,
            name: "JODDB",
            description: "Jordan Design and Development Bureau providing advanced defense research, military engineering and product evaluation."
        },

        {
            id: "ara",
            logo: ara,
            name: "ARA",
            description: "Independent engineering and testing laboratory evaluating the performance and durability of security products."
        },

        {
            id: "testex",
            logo: testex,
            name: "TestEx",
            description: "Accredited testing laboratory supporting independent verification and certification of engineered products."
        },

        {
            id: "sirim",
            logo: sirim,
            name: "SIRIM QAS International",
            description: "International certification body providing product testing, inspection and quality certification services."
        }

    ];

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

                        <div id="iso9001" className="iso-card">

                            <img src={iso9001} alt="ISO 9001" />

                            <div>

                                <h3>ISO 9001:2015</h3>

                                <p>
                                    Internationally recognized Quality Management System certification demonstrating consistent manufacturing processes, customer satisfaction and continual improvement.
                                </p>

                            </div>

                        </div>

                        <div id="iso45001" className="iso-card">

                            <img src={iso45001} alt="ISO 45001" />

                            <div>

                                <h3>ISO 45001:2018</h3>

                                <p>
                                    International Occupational Health & Safety Management System certification ensuring safe operations, employee wellbeing and continuous risk management.
                                </p>

                            </div>

                        </div>

                    </div>

                    <h2 className="testing-title">
                        International Testing Organizations
                    </h2>

                    <div className="testing-grid">

                        {testingOrganizations.map((item, index) => (

                            <div
                                id={item.id}
                                className="testing-card"
                                key={index}
                            >

                                <img
                                    src={item.logo}
                                    alt={item.name}
                                />

                                <h3>{item.name}</h3>

                                <p>{item.description}</p>

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

            <section className="cert-industries">

                <h2>
                    Industries We Support
                </h2>

                <div className="industries-grid">

                    <div>Government</div>
                    <div>Military</div>
                    <div>Oil & Gas</div>
                    <div>Petrochemical</div>
                    <div>Airports</div>
                    <div>Critical Infrastructure</div>

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

            <Footer />

        </>

    );

}

export default Certifications;