/* START OF FILE: components/Hero.jsx */
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-primary to-[#1e293b]"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 text-white"
      >
        Hi, I'm <span className="text-accent">Muhammad Arbaz</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-xl mb-8"
      >
        MERN Stack Developer passionate about crafting responsive, fast, and elegant web experiences.
      </motion.p>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="bg-secondary text-primary px-8 py-3 text-lg rounded-full font-semibold hover:bg-accent transition cursor-pointer"
      >
        Get In Touch
      </Link>
    </section>
  );
};

export default Hero;
