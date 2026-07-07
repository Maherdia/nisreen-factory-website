import "./About.css";

import { Link } from "react-router-dom";

function About() {
    return (
        <section className="about-section">

            <div className="about-content">

                <h2>
                    ABOUT NISREEN FACTORY (SSW)
                </h2>

                <div className="about-intro">

                    <p className="lead">
                        <strong>Special & Safety Work (SSW)</strong>, operating under the
                        well-established <strong>Nisreen Factory</strong>, is one of Saudi
                        Arabia's leading manufacturers of engineered physical security
                        solutions. We specialize in the design, engineering,
                        manufacturing, testing and installation of advanced protection
                        systems for military, governmental, industrial, commercial and
                        critical infrastructure projects throughout Saudi Arabia and
                        the GCC.
                    </p>

                </div>

                <div className="about-features">

                    <div className="feature">
                        ✓ Saudi Manufacturing
                    </div>

                    <div className="feature">
                        ✓ International Quality Standards
                    </div>

                    <div className="feature">
                        ✓ Custom Engineering Solutions
                    </div>

                    <div className="feature">
                        ✓ Advanced Security Products
                    </div>

                </div>

                <div className="about-cards">

                    <div className="about-card">

                        <h3>
                            <span>01</span>
                            Engineering & Manufacturing
                        </h3>

                        <p>
                            Our experienced engineers and skilled technicians manufacture
                            blast resistant doors, bullet resistant doors and windows,
                            fire-rated doors, detention systems, vault doors, hangar
                            doors, blast valves, industrial steel products,
                            architectural metal works and fully customized security
                            solutions using modern manufacturing technologies and strict
                            quality control procedures.
                        </p>

                    </div>

                    <div className="about-card">

                        <h3>
                            <span>02</span>
                            Certified Performance
                        </h3>

                        <p>
                            Every product is engineered to meet demanding operational
                            requirements and independently tested by internationally
                            recognized organizations including Intertek, TÜV NORD, DNV,
                            SIRIM QAS, ARA, JODDB, Close Focus Research and TestEx.
                            Our manufacturing processes operate under ISO 9001:2015 and
                            ISO 45001:2018 management systems, demonstrating our
                            commitment to quality, safety and continuous improvement.
                        </p>

                    </div>

                    <div className="about-card">

                        <h3>
                            <span>03</span>
                            Trusted Across Critical Industries
                        </h3>

                        <p>
                            SSW has successfully delivered security solutions for
                            ministries, military facilities, embassies, airports,
                            oil & gas installations, petrochemical plants, refineries,
                            power plants and major industrial developments across Saudi
                            Arabia and the GCC. Every solution is engineered to provide
                            dependable long-term protection for critical infrastructure
                            and high-security environments.
                        </p>

                    </div>

                </div>

                <div className="about-btn-wrapper">

                   <Link
                    to="/about"
                     className="about-btn" >
                    LEARN MORE
                    </Link>

                </div>

            </div>

        </section>
    );
}

export default About;