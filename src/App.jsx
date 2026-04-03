import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Showcase from "./components/Showcase";
import Features from "./components/Features";
import YearRound from "./components/YearRound";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? 3 : prev - 1,
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === 3 ? 0 : prev + 1,
    );
  };

  return (
    <div>
      <Hero />
      <Showcase currentIndex={currentIndex} prevSlide={prevSlide} nextSlide={nextSlide} />
      <Features />
      <YearRound />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
