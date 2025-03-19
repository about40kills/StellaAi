import React from "react";
import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>SOFTWARE FOR SCIENCE</h1>
          <p>
            Generative AI Software for Drug Discovery, Scientific Research &
            Sustainability
          </p>
        </div>
        <div className="hero-logo">
          <img src="/hero-logo.svg" alt="Company Logo" />
        </div>
        <div className="hero-text">
          <h1>THERAPEUTIC PIPELINE</h1>
          <p>
            High Quality Therapeutic Programs Discovered Using Generative AI and
            Robotics
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
