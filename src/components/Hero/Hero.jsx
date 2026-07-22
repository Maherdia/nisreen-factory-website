import "./Hero.css";
import heroDesktop from "../../assets/images/hero.png";
import heroMobile from "../../assets/images/hero-mobile.png";

function Hero() {

  const heroImage =
    window.innerWidth <= 1000 ? heroMobile : heroDesktop;

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
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
          SSW, a member of <strong>Saudi Etqaan Group</strong>, is a leading Saudi
          manufacturer specializing in blast-resistant, bullet-resistant, fire-rated
          and custom-engineered security solutions for military, industrial,
          commercial and government sectors.
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