import React from "react";
import Hero from "../components/sections/Hero";
import AboutTimeline from "../components/sections/AboutTimeline";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import ContactSection from "../components/sections/ContactSection";
import WorldBackdrop from "../components/WorldBackdrop";

const Home = () => {
  return (
    <div className="relative text-white selection:bg-apple-blue selection:text-white pb-20 overflow-hidden">
      <WorldBackdrop />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),transparent_12%,transparent_88%,rgba(255,255,255,0.02))] pointer-events-none" />
      <Hero />
      <AboutTimeline />
      <Projects />
      <Skills />
      <ContactSection />
    </div>
  );
};

export default Home;
