import "./Footer.css";

import { Link } from "react-router-dom";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-column">
          <h2 className="footer-logo">
            Nisreen Factory
          </h2>

          <p>
            Nisreen Factory, operating under the Special &amp; Safety Work (SSW) brand,
            is a Saudi manufacturer specializing in the design, engineering,
            fabrication and installation of advanced security doors, security
            windows, fire rated systems, industrial steel products, physical
            security systems and custom-engineered protective solutions for
            government, military, oil &amp; gas, petrochemical, commercial and
            critical infrastructure facilities.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/certifications">Certifications</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/about">About Us</Link>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>

          <a
            href="https://www.google.com/maps/place/Special+and+Safety+Work+Nisreen+Factory/@24.5848323,46.8295846,16z/data=!4m6!3m5!1s0x3e2fa75b14ffcd9f:0x68f51d01e1788a00!8m2!3d24.5848713!4d46.8339355!16s%2Fg%2F12ml2vlyp"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FaMapMarkerAlt />
            <span>
              Nisreen Factory
              <br />
              Riyadh, Saudi Arabia
            </span>
          </a>

          <p>
            <FaPhoneAlt />
            +966 59 668 8787
          </p>

          <p>
            <FaEnvelope />
            info@nisreenfactory.com
          </p>
        </div>

      </div>

      <div className="footer-bottom">

        <span className="footer-copyright">
          © 2026 Special &amp; Safety Work (Nisreen Factory). All Rights Reserved.
        </span>

        <a
          href="https://www.linkedin.com/in/maher-dia"
          target="_blank"
          rel="noopener noreferrer"
          className="developer-link"
        >
          Website by Eng. Maher Dia
        </a>

      </div>

    </footer>
  );
}

export default Footer;