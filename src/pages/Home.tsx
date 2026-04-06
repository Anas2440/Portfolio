import React from "react";
import Hero from "../components/sections/Hero";
import AboutTimeline from "../components/sections/AboutTimeline";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  return (
    <div className="bg-black text-white selection:bg-apple-blue selection:text-white pb-20">
      <Hero />
      <AboutTimeline />
      <Projects />
      <Skills />
      <ContactSection />
    </div>
  );
};

export default Home;
