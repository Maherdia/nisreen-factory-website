import "./About.css";

import { Link } from "react-router-dom";

import factory from "../../assets/images/hero.jpg";

function About() {
  return (
    <section className="about-section">
      <div className="about-image">
        <img src={factory} alt="SSW Factory" />
      </div>

      <div className="about-content">
        <span className="section-tag">
          ABOUT SSW
        </span>

        <h2>
          Engineering Security Solutions for Critical Infrastructure
        </h2>

        <p>
          Special & Safety Work (SSW - Nisreen Factory) is a Saudi manufacturer
          specializing in blast resistant doors, bullet resistant doors,
          fire-rated doors, security windows, and custom engineered security
          solutions for military, governmental, industrial, and commercial
          projects across the GCC.
        </p>

        <p>
          With experienced engineers, advanced manufacturing technologies, and
          internationally recognized testing standards, SSW delivers reliable,
          high-quality products tailored to each project's unique requirements.
        </p>

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

        <Link to="/about" className="about-btn">
          Learn More
        </Link>
      </div>
    </section>
  );
}

export default About;