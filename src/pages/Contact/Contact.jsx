import "./Contact.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import PageHeader from "../../components/PageHeader/PageHeader";

import heroDesktop from "../../assets/images/hero.png";
import heroMobile from "../../assets/images/hero-mobile.png";

function Contact() {

    return (

        <>

            <Navbar />

            <PageHeader
                title="Contact Us"
                subtitle="Let's Discuss Your Security & Engineering Requirements"
                image={
                    window.innerWidth <= 1000
                    ? heroMobile
                    : heroDesktop }
            />

            {/* HERO */}

            <section className="contact-hero">

                <span className="section-tag">
                    GET IN TOUCH
                </span>

                <h2>
                    Engineering Support Starts Here
                </h2>

                <p>
                    Whether you require standard security products or a fully customized engineering solution,
                    our specialists are ready to assist with technical consultation, project planning and
                    manufacturing support.
                </p>

                <div className="contact-actions">

                    <a
                        href="tel:+966596688787"
                        className="primary-btn"
                    >
                        Call Us
                    </a>

                    <a
                        href="mailto:info@nisreenfactory.com"
                        className="primary-btn"
                    >
                        Email Us
                    </a>

                </div>

            </section>

            {/* CONTACT DETAILS */}

            <section className="contact-details">

                <div className="contact-card">

                    <h3>Phone</h3>

                    <p>
                        +966 59 668 8787
                    </p>

                </div>

                <div className="contact-card">

                    <h3>Email</h3>

                    <p>
                        info@nisreenfactory.com
                    </p>

                </div>

                <div className="contact-card">

                    <h3>Working Hours</h3>

                    <p>
                        Sunday – Thursday
                        <br />
                        8:00 AM – 5:00 PM
                    </p>

                </div>

            </section>
            
            {/* MAP */}

            <section className="map-section">

                <span className="section-tag">
                    FACTORY LOCATION
                </span>

                <h2>
                    Visit Our Manufacturing Facility
                </h2>

                <p className="section-description">

                    We welcome project discussions and technical meetings at our factory.

                </p>

                <div className="map-placeholder">
 
            <section className="contact-map">

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7256.250616553204!2d46.8287857!3d24.5848713!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa75b14ffcd9f%3A0x68f51d01e1788a00!2sSpecial%20and%20Safety%20Work%20Nisreen%20Factory!5e0!3m2!1sen!2ssa!4v1782894217255!5m2!1sen!2ssa"
                    title="Special & Safety Work Location"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>

            </section>


                </div>

            </section>

            {/* SERVICES */}

            <section className="contact-services">

                <span className="section-tag">
                    HOW WE CAN HELP
                </span>

                <h2>
                    Engineering & Technical Support
                </h2>

                <p className="section-description">

                    Our team provides engineering consultation, technical support and
                    customized manufacturing solutions for projects of every size.

                </p>

                <div className="services-grid">

                    <div className="service-card">
                        Engineering Consultation
                    </div>

                    <div className="service-card">
                        Technical Specifications
                    </div>

                    <div className="service-card">
                        Custom Manufacturing
                    </div>

                    <div className="service-card">
                        Project Planning
                    </div>

                    <div className="service-card">
                        Certified Products
                    </div>

                    <div className="service-card">
                        Fast Technical Response
                    </div>

                </div>

            </section>

            {/* PRODUCTS */}

            <section className="contact-products">

                <span className="section-tag">
                    OUR PRODUCTS
                </span>

                <h2>
                    Looking For A Specific Solution?
                </h2>

                <p className="section-description">

                    Browse our complete range of engineered security products and industrial solutions.

                </p>

                <div className="products-links">

                    <a href="/products#security-doors">
                        <h3>Security Doors</h3>
                        <span>Explore Products →</span>
                    </a>

                    <a href="/products#security-windows">
                        <h3>Security Windows</h3>
                        <span>Explore Products →</span>
                    </a>

                    <a href="/products#fire-rated">
                        <h3>Fire Protection</h3>
                        <span>Explore Products →</span>
                    </a>

                    <a href="/products#industrial-steel">
                        <h3>Industrial Steel Products</h3>
                        <span>Explore Products →</span>
                    </a>

                    <a href="/products#engineering">
                        <h3>Security Systems</h3>
                        <span>Explore Products →</span>
                    </a>

                </div>

            </section>

            {/* CTA */}

            <section className="contact-cta">

                <h2>
                    Ready To Start Your Project?
                </h2>

                <p>

                    Our engineering specialists are ready to discuss your project,
                    specifications and manufacturing requirements.

                </p>

                <div className="contact-actions">

                    <a
                        href="tel:+966596688787"
                        className="primary-btn"
                    >
                        Call Us
                    </a>

                    <a
                        href="mailto:info@nisreenfactory.com"
                        className="primary-btn"
                    >
                        Email Us
                    </a>

                </div>

            </section>
           
            <Footer />

        </>

    );

}

export default Contact;