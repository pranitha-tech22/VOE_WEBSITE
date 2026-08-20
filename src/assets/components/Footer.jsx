import "./Footer.css";

function Footer({ setActivePage }) {

  const handleNavigation = (page) => {
    setActivePage(page);

    // Move the website to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-container">

        {/* ================= BRAND ================= */}

        <div className="footer-brand">

          <h2>VOE</h2>

          <p>
            Voice of Easwarians
          </p>

          <span>
            Your Voice. Our Campus. One Community.
          </span>

        </div>


        {/* ================= QUICK LINKS ================= */}

        <div className="footer-links">

          <h3>QUICK LINKS</h3>

          <div className="footer-link-list">

            <span onClick={() => handleNavigation("home")}>
              HOME
            </span>

            <span onClick={() => handleNavigation("about")}>
              ABOUT
            </span>

            <span onClick={() => handleNavigation("team")}>
              TEAM
            </span>

            <span onClick={() => handleNavigation("events")}>
              EVENTS
            </span>

          </div>

        </div>


        {/* ================= CONNECT ================= */}

        <div className="footer-connect">

          <h3>CONNECT</h3>

          <p>
            Stay connected with VOE and be part
            of our growing community.
          </p>

          <div className="footer-socials">

            <a
              href="https://www.instagram.com/voe.eec"
              target="_blank"
              rel="noopener noreferrer"
            >
              INSTAGRAM
            </a>

            <span>LINKEDIN</span>

          </div>

        </div>

      </div>


      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom">

        <span>
          © 2026 VOE — VOICE OF EASWARIANS
        </span>

        <span>
          CREATE • CONNECT • LEAD • INSPIRE
        </span>

      </div>

    </footer>
  );
}

export default Footer;