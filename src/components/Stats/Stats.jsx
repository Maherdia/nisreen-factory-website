import "./Stats.css";

import {
  FaShieldAlt,
  FaIndustry,
  FaCertificate,
  FaGlobe
} from "react-icons/fa";

function Stats() {
  return (
    <section className="stats">

      <div className="stats-header">

        <span>WHY CHOOSE SSW</span>

        <h2>Trusted Security Engineering Partner</h2>

        <p>
          We deliver specialized security solutions backed by engineering
          expertise, certified quality, and successful projects throughout
          Saudi Arabia and the GCC.
        </p>

      </div>

      <div className="stats-grid">

        <div className="stat-card">

          <FaShieldAlt className="stat-icon"/>

          <h3>Certified Products</h3>

          <p>
            Products supported by internationally recognized testing and
            certifications including UL, Intertek, DNV and TÜV.
          </p>

        </div>

        <div className="stat-card">

          <FaIndustry className="stat-icon"/>

          <h3>Specialized Manufacturing</h3>

          <p>
            CNC-based production with advanced fabrication for blast,
            ballistic, fire-rated and custom steel solutions.
          </p>

        </div>

        <div className="stat-card">

          <FaCertificate className="stat-icon"/>

          <h3>ISO 9001 Quality</h3>

          <p>
            Manufacturing processes follow ISO 9001 quality management
            standards with continuous quality improvement.
          </p>

        </div>

        <div className="stat-card">

          <FaGlobe className="stat-icon"/>

          <h3>Regional Experience</h3>

          <p>
            Successfully delivered projects across Saudi Arabia and
            international markets including embassies and critical
            infrastructure.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Stats;