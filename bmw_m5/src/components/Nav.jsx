import React from "react";
import headerLogo from "../assets/images/headerLogo.png";
import { navLinks } from "../constants";

const Nav = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md py-4 px-8 sm:px-16 z-50">
      <nav className="flex justify-between items-center max-container">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={headerLogo} alt="logo" width={220} height={29} className="hover:opacity-80 transition" />
        </a>

        {/* Navigation Links */}
        <ul className="flex justify-center items-center gap-12 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleScroll(e, link.href.substring(1))}
                className="font-serif text-lg text-gray-600 hover:text-blue-600 transition"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
