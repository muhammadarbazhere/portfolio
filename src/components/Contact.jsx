import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-secondary mb-6">Contact</h2>

      <p className="text-gray-300 mb-4 flex items-center gap-2">
        <FaWhatsapp className="text-[#25D366] text-xl" />
        WhatsApp: <a href="https://wa.me/923104163789" className="text-accent underline">+92 310 4163789</a>
      </p>

      <p className="text-gray-300 mb-4 flex items-center gap-2">
        <FaLinkedin className="text-[#0077B5] text-xl" />
        LinkedIn: <a href="https://www.linkedin.com/in/arbaz-mern" target="_blank" rel="noopener noreferrer" className="text-accent underline">arbaz-mern</a>
      </p>

      <p className="text-gray-300 flex items-center gap-2">
        <FaGithub className="text-white text-xl" />
        GitHub: <a href="https://github.com/muhammadarbazhere" target="_blank" rel="noopener noreferrer" className="text-accent underline">muhammadarbazhere</a>
      </p>
    </section>
  );
};

export default Contact;
