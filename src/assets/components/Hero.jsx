import "./Hero.css";

function Hero() {
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

          <a href="#about" className="secondary-btn">
            About VOE
          </a>
        </div>

      </div>

      {/* 3D Animation Area — Mohit's work will go here */}
      <div className="hero-3d-placeholder">
        <div className="placeholder-glow"></div>

        <div className="placeholder-content">
          <span>3D</span>
          <p>EXPERIENCE</p>
        </div>
      </div>

    </section>
  );
}

export default Hero;