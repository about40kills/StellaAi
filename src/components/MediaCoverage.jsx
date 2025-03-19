import React, { useState } from "react";
import "../styles/MediaCoverage.css";

const MediaCoverage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const mediaCoverage = [
    {
      id: 1,
      date: "March 13, 2025",
      title:
        "Insilico Medicine Secures $110 Million Series E Financing to Advance AI-Driven Drug Discovery Innovation",
      image: "/images/lab-equipment.jpg",
      link: "https://www.eurekalert.org/news-releases/1076031",
    },
    {
      id: 2,
      date: "March 06, 2025",
      title:
        "First end-to-end generative AI-assisted drug ISM001-055 receives official generic name Rentosertib from USAN",
      image: "/images/green-network.jpg",
    },
    {
      id: 3,
      date: "March 05, 2025",
      title:
        "Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory",
      image: "/images/robot-lab.jpg",
    },
    {
      id: 3,
      date: "March 05, 2025",
      title:
        "Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory",
      image: "/images/robot-lab.jpg",
    },
    {
      id: 3,
      date: "March 05, 2025",
      title:
        "Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory",
      image: "/images/robot-lab.jpg",
    },
    {
      id: 3,
      date: "March 05, 2025",
      title:
        "Insilico Medicine deploys the first bipedal humanoid AI scientist in the fully-robotic drug discovery laboratory",
      image: "/images/robot-lab.jpg",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < mediaCoverage.length - 3) {
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
        <h1>Media Coverage</h1>
        <a href="/news" className="read-more">
          Read More →
        </a>
      </div>

      <div className="press-container">
        <div
          className="press-cards"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {mediaCoverage.map((press) => (
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

        {currentIndex < mediaCoverage.length - 3 && (
          <button className="nav-button next" onClick={nextSlide}>
            <span>›</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default MediaCoverage;
