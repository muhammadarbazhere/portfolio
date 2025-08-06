
/* START OF FILE: components/Skills.jsx */
import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaHtml5, FaCss3Alt, FaSass, FaBootstrap } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiRedux, SiTailwindcss, SiTypescript, SiExpress, SiMysql } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-4xl text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-4xl text-green-600" /> },
  { name: "Express", icon: <SiExpress className="text-4xl text-black" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-4xl text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-4xl text-blue-400" /> },
  { name: "Redux", icon: <SiRedux className="text-4xl text-purple-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-4xl text-teal-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-4xl text-indigo-500" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-4xl text-orange-600" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-4xl text-blue-500" /> },
  { name: "SASS", icon: <FaSass className="text-4xl text-pink-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-4xl text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-4xl text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-4xl text-orange-400" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-secondary mb-10 text-center">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
        {skills.map((skill, i) => (
          <div key={i} className="flex flex-col items-center bg-white text-primary p-4 rounded-lg shadow hover:scale-105 transition">
            {skill.icon}
            <p className="mt-2 font-semibold text-sm">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;