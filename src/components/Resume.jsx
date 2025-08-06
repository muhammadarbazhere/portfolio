import React from "react";
import { FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section
      id="resume"
      className="py-20 px-4 md:px-20 bg-[#111827] dark:bg-primary"
    >
      <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
        Resume
      </h2>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 text-primary dark:text-white rounded-3xl shadow-2xl p-10">
        <p className="text-lg mb-8 text-center">
         With hands-on experience in modern web development and a strong focus
          on clean, scalable code, my resume showcases the skills and
          experience I bring to every project. Explore it below.
        </p>

        <div className="flex justify-center">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-gradient-to-r from-secondary to-accent text-white px-8 py-4 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            <FaEye className="text-xl" />
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
