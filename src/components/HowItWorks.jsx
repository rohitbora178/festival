import message from "../assets/message.svg";
import color2 from "../assets/color2.svg";
import plane from "../assets/plane.svg";

const HowItWorks = () => {
  return (
    <section className="how-section">
      <div className="how-container">
        <h2 className="how-title">How It Works</h2>

        <p className="how-subtitle">
          From concept to launch in just three simple steps. Get your event
          app up
          <br />
          and running faster than ever.
        </p>

        {/* Top Steps */}
        <div className="steps-wrapper">
          {/* Step 1 */}
          <div className="step-card">
            <div className="step-icon-circle">
              <img src={message} alt="Get in touch" />
            </div>
            <h3>Get in Touch</h3>
            <p>
              Schedule a consultation with our team to discuss
              <br />
              your event vision and requirements.
            </p>
          </div>

          <div className="step-line-wrap">
            <div className="step-number">01</div>
            <div className="step-line"></div>
          </div>

          {/* Step 2 */}
          <div className="step-card">
            <div className="step-icon-circle">
              <img src={color2} alt="Customize app" />
            </div>
            <h3>Customize Your App</h3>
            <p>
              Use our templates and themes to create your perfect
              <br />
              event app with your branding.
            </p>
          </div>

          <div className="step-line-wrap">
            <div className="step-number">02</div>
            <div className="step-line"></div>
          </div>

          {/* Step 3 */}
          <div className="step-card">
            <div className="step-icon-circle">
              <img src={plane} alt="Launch and engage" />
            </div>
            <h3>Launch & Engage</h3>
            <p>
              Publish to app stores and start connecting with your
              <br />
              attendees in real-time.
            </p>
          </div>

          <div className="step-line-wrap last-step-number">
            <div className="step-number">03</div>
          </div>
        </div>

        {/* Bottom Timeline Card */}
        <div className="timeline-card">
          <h3>
            From Idea to App Store in <span>48 Hours</span>
          </h3>

          <p>
            Our streamlined process means you can have your fully functional
            event app ready for
            <br />
            download in just two days. No coding, no complexity, just results.
          </p>

          <div className="timeline-flow">
            <div className="timeline-step">
              <div className="timeline-circle day1">Day 1</div>
              <span>Consultation & Design</span>
            </div>

            <div className="timeline-bar pink-bar"></div>

            <div className="timeline-step">
              <div className="timeline-circle day2">Day 2</div>
              <span>Build & Test</span>
            </div>

            <div className="timeline-bar orange-bar"></div>

            <div className="timeline-step">
              <div className="timeline-circle live">Live</div>
              <span>Launch & Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;