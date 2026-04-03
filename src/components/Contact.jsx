import mail from "../assets/profile.svg";
import phone from "../assets/plane.svg";
import liveChat from "../assets/message.svg";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Let's Build Together</h2>

        <p className="contact-subtitle">
          Ready to transform your event experience? Get in touch with our team
          and
          <br />
          let's create something amazing.
        </p>

        <div className="contact-grid">
          {/* LEFT FORM */}
          <div className="contact-form-card">
            <h3 className="form-title">Send us a message</h3>

            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="Rohit" />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Bora" />
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input type="email" placeholder="rohitbora178@gmail.com" />
            </div>

            <div className="form-group">
              <label>Event Type</label>
              <input
                type="text"
                placeholder="Music Festival, Conference, Retreat..."
              />
            </div>

            <div className="form-group">
              <label>Tell us about your event</label>
              <textarea placeholder="Describe your event, expected attendees, special requirements..." />
            </div>

            <button className="send-btn">Send Request</button>

            <p className="form-footer">
              By submitting this form, you agree to our{" "}
              <span>Terms & Conditions</span> and <span>Privacy Policy</span>
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="contact-right">
            <h3 className="right-title">Get Started Today</h3>

            <div className="contact-options">
              <div className="contact-option">
                <div className="icon-box gradient-purple">
                  <img src={mail} alt="email" />
                </div>
                <div className="contact-info">
                  <h4>Email Us</h4>
                  <p>hello@appebel.com</p>
                </div>
              </div>

              <div className="contact-option">
                <div className="icon-box gradient-blue">
                  <img src={phone} alt="phone" />
                </div>
                <div className="contact-info">
                  <h4>Call Us</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="contact-option">
                <div className="icon-box gradient-green">
                  <img src={liveChat} alt="chat" />
                </div>
                <div className="contact-info">
                  <h4>Live Chat</h4>
                  <p>Available 24/7</p>
                </div>
              </div>
            </div>

            {/* EXPECT CARD */}
            <div className="expect-card">
              <h3>What to Expect</h3>

              <ul className="expect-list">
                <li>Response within 2 hours during business hours</li>
                <li>Free consultation and project scoping</li>
                <li>Detailed timeline and pricing proposal</li>
                <li>Demo of similar event apps we've built</li>
                <li>Dedicated project manager assigned</li>
              </ul>

              <div className="discovery-box">
                <div className="discovery-text">
                  <h4>Free Discovery Call</h4>
                  <p>30 minutes with our experts</p>
                </div>
                <div className="white-pill-small"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;