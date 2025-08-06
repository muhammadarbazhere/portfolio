import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Jobs & Courses Portal",
    desc: "A full-featured MERN stack web portal where users can apply for jobs or enroll in courses, while a secure admin panel allows the administrator to manage jobs and courses with full CRUD operations. Key features include JWT authentication, responsive UI with React and Tailwind CSS, file uploads, form validation, and email notifications—making it a robust and scalable platform.",
    link: "https://web-craft-arbaz.vercel.app/",
    github: "https://github.com/muhammadarbazhere/JOBS-AND-COURSES_PORTAL.git",
  },
  {
    title: "E-commerce Platform",
    desc: "A responsive MERN e-commerce app with secure login, shopping cart, and admin controls.",
    link: "#",
    github: "#",
  },
  {
    title: "URL Shortener",
    desc: "Built with MERN stack, this app allows users to generate and manage short URLs easily.",
    link: "#",
    github: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 md:px-20 bg-[#111827] dark:bg-primary">
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold text-secondary mb-12 text-center"
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              {proj.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.desc}</p>
            <div className="flex items-center gap-4">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 transition"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white transition"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
