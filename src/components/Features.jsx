import analytics from "../assets/analytics.svg";
import color from "../assets/color.svg";
import watch from "../assets/watch.svg";
import profile from "../assets/profile.svg";

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">All-in-One Platform</h2>

        <p className="features-subtitle">
          Everything you need to create, manage, and scale your event app.
          From customization
          <br />
          to analytics, we've got you covered.
        </p>

        <div className="features-grid">
          {/* Card 1 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img src={color} alt="themes" />
            </div>
            <h3>Customizable Themes</h3>
            <p>
              Choose from multiple themes and adapt colors, fonts, layouts to
              match your brand perfectly.
            </p>
          </div>

          {/* Card 2 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img src={profile} alt="vendor" />
            </div>
            <h3>Vendor & Artist Management</h3>
            <p>
              Manage stalls, bookings, lineups and payments all in one unified
              platform.
            </p>
          </div>

          {/* Card 3 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img src={analytics} alt="analytics" />
            </div>
            <h3>Real-Time Analytics</h3>
            <p>
              Live dashboards, attendee behavior insights, and comprehensive
              KPI tracking.
            </p>
          </div>

          {/* Card 4 */}
          <div className="feature-card">
            <div className="feature-icon">
              <img src={watch} alt="offline" />
            </div>
            <h3>Offline & Year-Round</h3>
            <p>
              Offline maps and schedules plus recurring updates throughout the
              year.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;