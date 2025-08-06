import React from "react";
import { FaDownload, FaEye } from "react-icons/fa";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-4 md:px-20 bg-[#111827] dark:bg-primary">
      <h2 className="text-4xl font-bold text-secondary mb-12 text-center">
        Resume
      </h2>

      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 text-primary dark:text-white rounded-2xl shadow-lg p-8">
        <p className="text-lg mb-6 text-center">
          View or download my resume using the buttons below.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-accent hover:text-primary transition-all duration-300"
          >
            <FaEye className="text-lg" />
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download="Muhammad_Arbaz_Resume.pdf"
            className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-accent hover:text-primary transition-all duration-300"
          >
            <FaDownload className="text-lg" />
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
