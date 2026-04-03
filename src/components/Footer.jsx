import fb from "../assets/fb.svg";
import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import linkedIn from "../assets/linkedIn.svg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-top">
          {/* Left */}
          <div className="footer-brand">
            <h2 className="footer-logo">Appebel</h2>
            <p className="footer-description">
              Empowering event organizers to create unforgettable
              <br />
              experiences through cutting-edge mobile technology. Build,
              <br />
              customize, and launch your event app without coding.
            </p>

            <div className="social-icons">
              <a href="/" className="social-icon">
                <img src={insta} alt="Instagram" />
              </a>
              <a href="/" className="social-icon">
                <img src={fb} alt="Facebook" />
              </a>
              <a href="/" className="social-icon">
                <img src={twitter} alt="Twitter" />
              </a>
              <a href="/" className="social-icon">
                <img src={linkedIn} alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Middle */}
          <div className="footer-links">
            <div className="footer-column">
              <h3>Company</h3>
              <a href="/">About Us</a>
              <a href="/">Our Story</a>
              <a href="/">Careers</a>
              <a href="/">Press Kit</a>
              <a href="/">Contact</a>
            </div>

            <div className="footer-column">
              <h3>Resources</h3>
              <a href="/">Documentation</a>
              <a href="/">Help Center</a>
              <a href="/">Blog</a>
              <a href="/">Case Studies</a>
              <a href="/">Templates</a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="newsletter-box">
          <div className="newsletter-left">
            <h3>Stay Updated</h3>
            <p>
              Get the latest tips, features, and event industry insights
              delivered to your inbox.
            </p>
          </div>

          <div className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <p>© 2024 Appebel. All rights reserved.</p>

          <div className="footer-policy-links">
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;