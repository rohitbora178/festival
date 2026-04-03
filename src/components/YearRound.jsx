import mobile1 from "../assets/mobile1.svg";
import mobile2 from "../assets/mobile2.svg";

const YearRound = () => {
  return (
    <section className="year-round-section">
      <div className="year-round-container">
        {/* Left Content */}
        <div className="year-round-left">
          <h2 className="year-round-title">
            Single-Event or <span>Year-</span>
            <br />
            <span>Round</span>
          </h2>

          <p className="year-round-subtitle">
            Keep your community engaged all year long. Swap themes,
            <br />
            update content, and refresh your app for seasonal events while
            <br />
            maintaining your core audience.
          </p>

          <ul className="year-round-list">
            <li>Instant theme switching for seasonal events</li>
            <li>Content updates without app store resubmission</li>
            <li>Maintain user base across multiple events</li>
            <li>Automated notifications for new content</li>
            <li>Analytics tracking across all seasons</li>
          </ul>

          <div className="stats-row">
            <div className="stat-box">
              <h3>85%</h3>
              <p>Retention Rate</p>
            </div>

            <div className="stat-box">
              <h3>12x</h3>
              <p>More Engagement</p>
            </div>

            <div className="stat-box">
              <h3>3min</h3>
              <p>Theme Switch</p>
            </div>
          </div>

          <button className="build-btn">Start Building Your Own</button>
        </div>

        {/* Right Content */}
        <div className="year-round-right">
          <div className="glow glow-green"></div>
          <div className="glow glow-purple"></div>

          <div className="phone-stack">
            <div className="phone-card phone-left">
              <img
                src={mobile1}
                alt="Summer Festival"
                className="stack-phone-img"
              />
            </div>

            <div className="phone-card phone-right">
              <img
                src={mobile2}
                alt="Wellness Retreat"
                className="stack-phone-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YearRound;