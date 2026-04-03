import mobile1 from "../assets/mobile1.svg";
import mobile2 from "../assets/mobile2.svg";
import mobile3 from "../assets/mobile3.svg";
import mobile4 from "../assets/mobile2.svg";

const showcaseData = [
  {
    title: "EDM Festival",
    subtitle: "Music Festival",
    image: mobile1,
  },
  {
    title: "Wellness Retreat",
    subtitle: "Health & Wellness",
    image: mobile2,
  },
  {
    title: "Tech Conference",
    subtitle: "Business Conference",
    image: mobile3,
  },
  {
    title: "Food Festival",
    subtitle: "Culinary Event",
    image: mobile4,
  },
];

const Showcase = ({ currentIndex, prevSlide, nextSlide }) => {
  return (
    <section className="showcase-section">
      <div className="showcase-container">
        <h2 className="showcase-title">See What We've Built</h2>

        <p className="showcase-subtitle">
          From intimate wellness retreats to massive music festivals, discover
          the diverse range
          <br />
          of event apps we've created for organizers worldwide.
        </p>

        <div className="slider-wrapper">
          <button className="nav-btn left-btn" onClick={prevSlide}>
            &#8249;
          </button>

          <div className="slider-viewport">
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${currentIndex * 250}px)`,
              }}
            >
              {[...showcaseData, ...showcaseData].map((item, index) => (
                <div className="showcase-card" key={index}>
                  <div className="mobile-frame">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mobile-img"
                    />
                  </div>

                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-subtitle">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>

          <button className="nav-btn right-btn" onClick={nextSlide}>
            &#8250;
          </button>
        </div>

        <button className="examples-btn">View All Examples</button>
      </div>
    </section>
  );
};

export default Showcase;