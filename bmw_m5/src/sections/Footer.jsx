import React from "react";
import fb from "../assets/logo/facebook.png"
import insta from "../assets/logo/insta.png"
import twt from "../assets/logo/twitter.png"
import yt from "../assets/logo/yt.png"

const Footer = () => {
  return (
    <footer className="rounded-2xl w-full py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 text-white text-center">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        
        <h2 className="text-xl font-bold tracking-wide">BMW M5</h2>

        <div className="flex gap-6 mt-4 sm:mt-0">
          <a href="#" className="hover:opacity-80 transition">
            <img src={fb} alt="Facebook" className="w-6 h-6 rounded-full" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src={twt} alt="Twitter" className="w-6 h-6 rounded-full" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src={insta} alt="Instagram" className="w-6 h-6 rounded-full" />
          </a>
          <a href="#" className="hover:opacity-80 transition">
            <img src={yt} alt="YouTube" className="w-6 h-6 rounded-4xl" />
          </a>
        </div>

        <p className="text-sm mt-4 sm:mt-0 opacity-80">© 2025 BMW M5. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
