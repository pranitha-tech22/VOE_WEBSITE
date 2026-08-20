import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>VOE</h2>

          <p>
            Voice of Easwarians
          </p>

          <span>
            Your Voice. Our Campus. One Community.
          </span>
        </div>


        {/* Quick Links */}
        <div className="footer-links">

          <h3>QUICK LINKS</h3>

          <div className="footer-link-list">
            <span>HOME</span>
            <span>ABOUT</span>
            <span>TEAM</span>
            <span>EVENTS</span>
          </div>

        </div>


        {/* Connect */}
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


      {/* Bottom */}
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