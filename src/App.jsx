/* START OF FILE: App.jsx */
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans bg-primary text-white">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
     
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;