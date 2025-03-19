import React, { useState } from "react";
import "../styles/Publications.css";

const Publications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const publications = [
    {
      id: 1,
      date: "March 17, 2025",
      title:
        "Discovery of Potent, Highly Selective, and Orally Bioavailable MTA Cooperative PRMT5 Inhibitors with Robust In Vivo Antitumor Activity",
      journal: "Journal of Medicinal Chemistry",
      link: "https://doi.org/10.18632/aging.206212",
    },
    {
      id: 2,
      date: "February 27, 2025",
      title:
        "Variability in radiotherapy outcomes across cancer types: a comparative study of glioblastoma multiforme and low-grade gliomas",
      journal: "Aging",
      link: "#",
    },
    {
      id: 3,
      date: "February 17, 2025",
      title:
        "AI-Driven Robotics Laboratory Identifies Pharmacological TNIK Inhibition as a Potent Senomorphic Agent",
      journal: "Aging and Disease",
      link: "#",
    },
    // Add more publications as needed
    {
      id: 4,
      date: "February 10, 2025",
      title: "Novel Applications of Deep Learning in Pharmaceutical Research",
      journal: "Nature Medicine",
      link: "#",
    },
    {
      id: 5,
      date: "February 5, 2025",
      title: "Advances in AI-Driven Drug Discovery Platforms",
      journal: "Science Advances",
      link: "#",
    },
  ];

  const nextSlide = () => {
    if (currentIndex < publications.length - 3) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0); // Reset to beginning if at end
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(publications.length - 3); // Go to end if at beginning
    }
  };

  return (
    <section className="publications-section">
      <div className="publications-header">
        <h1>Publications</h1>
        <a href="/publications" className="read-more">
          Read More →
        </a>
      </div>

      <div className="publications-carousel-container">
        <div
          className="publications-carousel"
          style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}
        >
          {publications.map((pub) => (
            <div key={pub.id} className="publication-card">
              <div className="pub-date">{pub.date}</div>
              <h3 className="pub-title">{pub.title}</h3>
              <div className="pub-journal">{pub.journal}</div>
            </div>
          ))}
        </div>

        {currentIndex > 0 && (
          <button className="carousel-button prev" onClick={prevSlide}>
            <span>‹</span>
          </button>
        )}

        {currentIndex < publications.length - 3 && (
          <button className="carousel-button next" onClick={nextSlide}>
            <span>›</span>
          </button>
        )}
      </div>
    </section>
  );
};

export default Publications;
