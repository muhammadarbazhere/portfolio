/* START OF FILE: components/About.jsx */
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-20 bg-[#111827]">
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-secondary mb-10 text-center"
      >
        About Me
      </motion.h2>
      <div className="max-w-4xl mx-auto bg-[#1f2937] p-8 rounded-lg shadow-lg">
        <p className="text-gray-300 text-lg leading-8">
          Hello! I'm <span className="text-accent font-semibold">Muhammad Arbaz</span>, a dedicated MERN Stack Developer based in Lahore. I hold an
          <span className="text-accent"> Associate Degree in Computer Science</span> from Virtual University of Pakistan. My passion lies in building
          dynamic, responsive, and scalable web applications.
        </p>
        <br />
        <p className="text-gray-300 text-lg leading-8">
          In <span className="text-accent">October–November 2024</span>, I completed a hybrid internship as a Frontend Developer at <span className="text-accent">Social Swirl</span>,
          where I honed my skills in React, UI design, and component-based architecture. Following that, I worked as a <span className="text-accent">Customer Support Representative</span> at
          <span className="text-accent"> Mindbridge</span> from <span className="text-accent">December 2024 to May 2025</span>, developing strong communication and
          teamwork abilities.
        </p>
        <br />
        <p className="text-gray-300 text-lg leading-8">
          I thrive in team environments and enjoy solving complex challenges using modern technologies. I'm continuously learning and looking
          for opportunities to contribute to meaningful and impactful projects.
        </p>
      </div>
    </section>
  );
};

export default About;