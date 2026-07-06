import "./Hero.css";
import hero from "../../assets/images/factory.png";

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="overlay"></div>

      <div className="hero-content">

  <span className="hero-subtitle">
    Since 2011
  </span>

  <h1>
    NISREEN FACTORY
  </h1>

  <h2>
    SPECIAL & SAFETY WORK
  </h2>

  <p>
    SSW is a leading Saudi manufacturer specializing in blast resistant,
    bullet resistant, fire rated and custom engineered security solutions
    for military, industrial, commercial and government sectors.
  </p>

</div>

      <div className="certifications">
        <span>ISO 9001</span>
        <span>UL</span>
        <span>INTERTEK</span>
        <span>DNV</span>
        <span>TUV</span>
      </div>

    </section>
  );
}

export default Hero;