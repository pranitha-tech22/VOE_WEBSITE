import "./Footer.css";

function Footer({ setActivePage }) {

  const handleFooterNavigation = (page) => {
    setActivePage(page);
  };

  return (
    <footer className="footer">

      {/* ================= FOOTER CONTAINER ================= */}

      <div className="footer-container">

        {/* BRAND */}

        <div className="footer-brand">

          <h2>VOE</h2>

          <p>
            Voice of Easwarians
          </p>

          <span>
            Your Voice. Our Campus. One Community.
          </span>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-links">

          <h3>QUICK LINKS</h3>

          <div className="footer-link-list">

            <span onClick={() => handleFooterNavigation("home")}>
              HOME
            </span>

            <span onClick={() => handleFooterNavigation("about")}>
              ABOUT
            </span>

            <span onClick={() => handleFooterNavigation("gallery")}>
              GALLERY
            </span>

            <span onClick={() => handleFooterNavigation("team")}>
              TEAM
            </span>

            <span onClick={() => handleFooterNavigation("events")}>
              EVENTS
            </span>

            <span onClick={() => handleFooterNavigation("contact")}>
              CONTACT
            </span>

          </div>

        </div>


        {/* CONNECT */}

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