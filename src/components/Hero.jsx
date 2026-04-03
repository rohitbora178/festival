import add from "../assets/add.svg";
import community from "../assets/community.svg";
import food from "../assets/food.svg";
import music from "../assets/music.svg";
import wellness from "../assets/wellness.svg";
import Corporate from "../assets/corporate.svg";
import festivalImage from "../assets/mainImage.jpg";

const themes = [
  { name: "Music", icon: music, className: "music" },
  { name: "Food", icon: food, className: "food" },
  { name: "Wellness", icon: wellness, className: "wellness" },
  { name: "Community", icon: community, className: "community" },
  { name: "Corporate", icon: Corporate, className: "corporate" },
  { name: "Custom", icon: add, className: "custom" },
];

const Hero = () => {
  return (
    <section className="app">
      <div className="hero-container">
        <h1 className="hero-title">
          Design Festivals <br /> Like Never Before
        </h1>

        <p className="hero-subtitle">
          Six themes + custom — all in a single festival <br />
          management tool.
        </p>

        <div className="festival-card">
          <div className="live-badge">
            <span className="live-dot"></span>
            LIVE
          </div>

          <img
            src={festivalImage}
            alt="Festival"
            className="festival-image"
          />

        </div>

        <button className="trial-btn">Start Free Trial</button>

        <div className="white-pill"></div>

        <div className="themes-section">
          <p className="themes-label">AVAILABLE THEMES</p>

          <div className="themes-list">
            {themes.map((theme, index) => (
              <div key={index} className={`theme-pill ${theme.className}`}>
                <img
                  src={theme.icon}
                  alt={theme.name}
                  className="theme-icon"
                />
                <span>{theme.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;