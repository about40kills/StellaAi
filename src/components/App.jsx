import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import PressReleases from "@/components/PressReleases";
import MediaCoverage from "@/components/MediaCoverage";
import Publications from "@/components/Publications";
import Footer from "@/components/Footer";

import Pipeline from "@/components/Pipeline";
import ScienceModule from "./ScienceModule";
import "@/styles/App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <ScienceModule />
          <Pipeline />
          <Mission />
          <PressReleases />
          <Publications />
          <MediaCoverage />
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
