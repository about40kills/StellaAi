import React from "react";
import earthimage from "../assets/Planet_Earth-removebg-preview.png";
import "../styles/Mission.css";

const Mission = () => {
  return (
    <section className="mission">
      <div className="mission-content">
        <h2>
          OUR MISSION IS TO EXTEND HEALTHY <br /> PRODUCTIVE LONGEVITY FOR
          EVERYONE
        </h2>
        <p>
          Med InSilico is a biotechnology company that leverages artificial{" "}
          <br />
          intelligence and machine learning to discover new drugs and therapies.{" "}
          <br />
          Our mission is to accelerate the drug discovery process and bring new{" "}
          <br />
          treatments to patients faster.
        </p>
      </div>
      <img src={earthimage} alt="Mission" className="earthimage" />
      <div className="mission-content">
        <button className="button">Contact Us</button>
        <button className="button">Join Us</button>
      </div>
    </section>
  );
};
export default Mission;
