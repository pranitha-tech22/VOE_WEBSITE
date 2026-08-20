import "./Hero.css";
import voeLogo from "../voe-logo.png";

const logoFragments = [
  "fragment-top",
  "fragment-upper-left",
  "fragment-upper-right",
  "fragment-left",
  "fragment-right",
  "fragment-inner-left",
  "fragment-inner-center",
  "fragment-inner-right",
  "fragment-bottom-left",
  "fragment-bottom-right",
  "fragment-badge",
];

function Hero({ setActivePage }) {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-tag">
  YOUR VOICE • OUR CAMPUS • ONE COMMUNITY
        </p>

        <h1 className="hero-title">
  <small>VOICE OF</small>
  <span>EASWARIANS</span>
</h1>
        <p className="hero-description">
          The official club of Easwarians, empowering students
          through technology, innovation, creativity and collaboration.
        </p>

        <div className="hero-buttons">
          <a href="#events" className="primary-btn">
            Explore Events
          </a>

          <button
  className="secondary-btn"
  onClick={() => setActivePage("about")}
>
  ABOUT VOE
</button>
        </div>

      </div>

      <div className="hero-logo-stage">
        <div className="voe-logo-entrance">
          <div className="voe-elemental-effects" aria-hidden="true">
            <span className="voe-fire-ring"></span>
            <span className="voe-water-ring"></span>
            <span className="voe-electricity"></span>
          </div>

          <img
            className="voe-logo-emblem"
            src={voeLogo}
            alt="Voice of Easwarians logo"
          />

          <span className="voe-logo-fragments" aria-hidden="true">
            {logoFragments.map((fragment) => (
              <span
                className={`voe-logo-fragment ${fragment}`}
                key={fragment}
                style={{ backgroundImage: `url(${voeLogo})` }}
              ></span>
            ))}
          </span>

          <span className="voe-logo-sheen" aria-hidden="true"></span>
        </div>
      </div>

    </section>
  );
}

export default Hero;
