import React, { useState } from "react";
import "../styles/Pipeline.css";

const Pipeline = () => {
  const [activePhase, setActivePhase] = useState("all");

  const pipelineData = [
    {
      indication: "Idiopathic Pulmonary Fibrosis",
      target: "TNIK",
      phase: "PHASE II",
      status: "New Zealand",
      additional: "FDA",
    },
    {
      indication: "Kidney Fibrosis",
      target: "TNIK",
      phase: "PHASE I",
      status: "Active",
    },
    {
      indication: "IPF Inhalable",
      target: "TNIK",
      phase: "IND ENABLING",
      status: "In Progress",
    },
    {
      indication: "BRCA-mutant Cancer",
      target: "USP1",
      phase: "PHASE I",
      status: "Out-licensed to Exelixis",
    },
    {
      indication: "Immuno-Oncology",
      target: "QPCTL",
      phase: "PHASE I",
      status: "Co-development with Fosun Pharma",
    },
    {
      indication: "ER+/HER2- Breast Cancer",
      target: "KAT6",
      phase: "PHASE I",
      status: "Out-Lisenced to Menarini",
    },
    {
      indication: "Solid Tumors",
      target: "DGKA",
      phase: "PHASE I",
      status: "Out-Lisenced",
    },
  ];

  return (
    <section className="pipeline-section">
      <h2>THERAPEUTIC PIPELINE</h2>

      <div className="pipeline-filters">
        <button
          className={activePhase === "all" ? "active" : ""}
          onClick={() => setActivePhase("all")}
        >
          All Phases
        </button>
        <button
          className={activePhase === "phase2" ? "active" : ""}
          onClick={() => setActivePhase("phase2")}
        >
          Phase II
        </button>
        <button
          className={activePhase === "phase1" ? "active" : ""}
          onClick={() => setActivePhase("phase1")}
        >
          Phase I
        </button>
        <button
          className={activePhase === "ind" ? "active" : ""}
          onClick={() => setActivePhase("ind")}
        >
          IND Enabling
        </button>
      </div>

      <div className="pipeline-table">
        <div className="table-header">
          <div className="col">INDICATION</div>
          <div className="col">TARGET/ID</div>
          <div className="col">LEAD OPT.</div>
          <div className="col">IND ENABLING</div>
          <div className="col">PHASE I</div>
          <div className="col">PHASE II</div>
        </div>

        {pipelineData.map((item, index) => (
          <div className="table-row" key={index}>
            <div className="col indication">
              <span className="indicator"></span>
              {item.indication}
            </div>
            <div className="col">{item.target}</div>
            <div className="col progress-bar">
              <div
                className="progress"
                style={{
                  width: getProgressWidth(item.phase),
                }}
              ></div>
            </div>
            <div className="col status">{item.status}</div>
            <div className="col phase">{item.phase}</div>
            <div className="col additional">{item.additional}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

const getProgressWidth = (phase) => {
  switch (phase) {
    case "PHASE II":
      return "100%";
    case "PHASE I":
      return "80%";
    case "IND ENABLING":
      return "60%";
    case "LEAD OPT.":
      return "40%";
    default:
      return "20%";
  }
};

export default Pipeline;
