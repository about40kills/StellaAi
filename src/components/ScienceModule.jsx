import React from "react";
import "../styles/ScienceModule.css";

const ScienceModule = () => {
  const modules = [
    {
      id: "dora",
      title: "DORA",
      description: "Multi-agent Generative Research Assistant",
      icon: "🤖",
      color: "green",
    },
    {
      id: "llm",
      title: "LLM Assistant",
      description: "Advanced Language Model for Scientific Research",
      icon: "🧠",
      color: "blue",
    },
    {
      id: "robotics",
      title: "Robotic Lab",
      description: "Automated Laboratory Systems",
      icon: "🦾",
      color: "purple",
    },
    {
      id: "Generative Chemistry",
      title: "Generative Chemistry",
      description: "Generate Novel Molecules",
      icon: "⚗️",
      color: "red",
    },
    {
      id: "Alchemistry",
      title: "Alchemistry",
      description: "Physics based Relative Binding Free Energy Engine",
      icon: "⚗️",
      color: "red",
    },
    {
      id: "Model Training",
      title: "Model Training",
      description: "Train a state-of-the-art model on your data",
      icon: "⚗️",
      color: "red",
    },
    {
      id: "Retrosynthesis",
      title: "Retrosynthesis",
      description: "Pridict synthetic roules for molecular structures",
      icon: "⚗️",
      color: "red",
    },
    {
      id: "PandaOmics",
      title: "PandaOmics",
      description: "Discover and Prioritize Novel Targets",
      icon: "🎯",
      color: "black",
    },
    {
      id: "Biologics",
      title: "Generative Biologics",
      description: "Discover and Optimize Novel biomolecules",
      icon: "🎯",
      color: "black",
    },
    {
      id: "Life Star ",
      title: "Life Star 1",
      description: "AI-driven Robotic Lab Operating Environment",
      icon: "🎯",
      color: "black",
    },
    {
      id: "inClinico",
      title: "inClinico",
      description: "Generate Novel Molecules",
      icon: "🦾",
      color: "pink",
    },
  ];

  return (
    <section className="science-module">
      <h2>Science42</h2>
      <div className="module-grid">
        {modules.map((module) => (
          <div key={module.id} className={`module-card ${module.color}`}>
            <div className="module-icon">{module.icon}</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScienceModule;
