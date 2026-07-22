import "./About.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";

import factory from "../../assets/logos/ssw.png";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <Navbar />

            <PageHeader
                title="ABOUT SPECIAL & SAFETY WORK"
                subtitle="ENGINEERING SECURITY SOLUTIONS SINCE 2011"
            />

            <section id="company" className="about-company">
                <div className="about-company-image">
                    <img src={factory} alt="SSW Factory" />
                </div>

                <div className="about-company-content">

                    <span className="section-tag">
                        WHO WE ARE
                    </span>

                    <h2>
                        Engineering Security Solutions for Critical Infrastructure
                    </h2>

                    <p>
                        <strong>Nisreen Factory (Special &amp; Safety Work)</strong>, a member of
                        <strong> Saudi Etqaan Group</strong>, is a Saudi manufacturer specializing in
                        advanced engineered security doors and protection systems for government,
                        military, industrial, commercial and infrastructure projects.
                    </p>

                    <p>
                        Our products combine modern manufacturing technologies with
                        international engineering standards to deliver reliable,
                        durable and high-performance security solutions.
                    </p>

                    <p>
                        From blast-resistant and bullet-resistant doors to fire-rated
                        doors and security windows, every product is designed to provide
                        maximum protection without compromising quality or appearance.
                    </p>

                </div>

            </section>

            <section className="mission-vision">

                <div className="mv-card">

                    <h3>Our Mission</h3>

                    <p>
                        To manufacture innovative security products that exceed
                        international quality standards while providing dependable
                        protection for critical facilities throughout Saudi Arabia
                        and the GCC.
                    </p>

                </div>

                <div className="mv-card">

                    <h3>Our Vision</h3>

                    <p>
                        To become the Middle East's leading manufacturer of engineered
                        security systems through innovation, quality and continuous
                        technological advancement.
                    </p>

                </div>

            </section>

            <section id="technology" className="manufacturing">

                <div className="manufacturing-left">

                    <span className="section-tag">
                        MANUFACTURING EXCELLENCE
                    </span>

                    <h2>
                        Advanced Engineering & Precision Manufacturing
                    </h2>

                    <p>
                        Our production facility combines skilled engineers,
                        modern machinery and strict quality control procedures
                        to manufacture high-performance security products that
                        satisfy demanding international specifications.
                    </p>

                    <p>
                        Every product undergoes careful inspection throughout
                        the manufacturing process to ensure durability, safety
                        and long-term reliability.
                    </p>

                </div>

                <div className="manufacturing-right">

                    <div className="capability-card">
                        <h3>Advanced Manufacturing</h3>
                        <p>Modern production equipment with precision engineering.</p>
                    </div>

                    <div className="capability-card">
                        <h3>Custom Engineering</h3>
                        <p>Tailored security solutions designed for every project.</p>
                    </div>

                    <div className="capability-card">
                        <h3>Quality Assurance</h3>
                        <p>Continuous inspections throughout every production stage.</p>
                    </div>

                    <div className="capability-card">
                        <h3>International Standards</h3>
                        <p>Products manufactured to recognized global testing standards.</p>
                    </div>

                </div>

            </section>
            <section className="why-choose">

                <span className="section-tag">
                    WHY CHOOSE SSW
                </span>

                <h2>
                    Why Clients Choose Special & Safety Work
                </h2>

                <p className="why-subtitle">
                    Combining engineering expertise, advanced manufacturing and uncompromising quality to deliver reliable security solutions.
                </p>

                <div className="why-grid">

                    <div className="why-card">
                        <h3>Saudi Manufacturing</h3>
                        <p>
                            Proudly designed and manufactured in Saudi Arabia using modern production facilities.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Custom Engineering</h3>
                        <p>
                            Every project can be engineered to meet unique operational and security requirements.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Certified & Tested</h3>
                        <p>
                            Independently tested and certified by internationally recognized organizations including Intertek, DNV, TÜV NORD, SIRIM QAS and ARA.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Proven Project Experience</h3>
                        <p>
                            Successfully delivered security solutions for military, governmental, industrial, commercial and critical infrastructure projects.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Advanced Manufacturing</h3>
                        <p>
                            Precision fabrication supported by modern machinery and strict quality control.
                        </p>
                    </div>

                    <div className="why-card">
                        <h3>Long-Term Reliability</h3>
                        <p>
                            Engineered for durability, performance and dependable protection throughout their service life.
                        </p>
                    </div>

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
            <section className="about-cta">

                <span className="section-tag">
                    GET IN TOUCH
                </span>

                <h2>
                    Looking for a Custom Security Solution?
                </h2>

                <p>
                    Our engineering team is ready to support your project with specialized security products, industrial steel fabrication and tailored engineering solutions.
                </p>

                <a
                    href="/contact"
                    className="primary-btn"
                >
                    CONTACT US
                </a>

            </section>


            <Footer />
        </>
    );
}

export default About;