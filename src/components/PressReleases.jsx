import React, { useState } from "react";
import "../styles/PressReleases.css";

import download1 from "../assets/download1.png";
import download2 from "../assets/download2.png";
import download3 from "../assets/download3.png";
import download4 from "../assets/images.png";

const PressReleases = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const pressReleases = [
    {
      id: 1,
      date: "February 20, 2025",
      title:
        "Insilico Medicine Secures $110 Million Series E Financing to Advance AI-Driven Drug Discovery Innovation",
      image: download1,
      link: "https://www.eurekalert.org/news-releases/1076031",
    },
    {
      id: 2,
      date: "March 06, 2025",
      title:
        "First end-to-end generative AI-assisted drug ISM001-055 receives official generic name Rentosertib from USAN",
      image: download2,
    },
    {
      id: 3,
      date: "March 10, 2025",
      title:
        "Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory",
      image: download4,
    },
    {
      id: 4,
      date: "March 13, 2025",
      title:
        "Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory",
      image: download3,
    },
    {
      id: 5,
      date: "March 15, 2025",
      title:
        "Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory",
      image: download4,
    },
    {
      id: 6,
      date: "March 20, 2025",
      title:
        "Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory",
      image: download1,
    },
  ];

  const nextSlide = () => {
    if (currentIndex < pressReleases.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="press-section">
      <div className="press-header">
        <h1>Press Releases</h1>
        <a href="/news" className="read-more">
          Read More →
        </a>
      </div>

      <div className="press-container">
        <div
          className="press-cards"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {pressReleases.map((press) => (
            <div key={press.id} className="press-card">
              <div className="card-image">
                <img src={press.image} alt={press.title} />
              </div>
              <div className="card-content">
                <span className="date">{press.date}</span>
                <h3>{press.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {currentIndex > 0 && (
          <button className="nav-button prev" onClick={prevSlide}>
            <span>‹</span>
          </button>
        )}

        {currentIndex < pressReleases.length - 3 && (
          <button className="nav-button next" onClick={nextSlide}>
            <span>›</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PressReleases;
