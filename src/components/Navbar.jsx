
/* START OF FILE: components/Navbar.jsx */
import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = ["Home", "About", "Skills", "Projects", "Resume", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-primary shadow z-50">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-accent">Muhammad Arbaz</h1>
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-300 hover:text-secondary transition"
            >
              {link}
            </Link>
          ))}
        </div>
        <div className="md:hidden text-white text-xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 pb-4">
          {links.map((link) => (
            <Link
              key={link}
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              className="text-gray-300 hover:text-secondary transition"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
