import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Banner from "../../photos/footer-pattern.jpg";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about_us" },
  { title: "Venue", link: "/Venue" },
  { title: "Register", link: "/register" },
];

const Footer = () => {
  return (
    <footer
      className="text-white bg-cover bg-center py-12"
      style={{ backgroundImage: `url(${Banner})` }}
    >
      <div className="container mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-10">
        {/* Company Details */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-start"
        >
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <img src={""} className="max-w-[50px]" /> DPL
          </h1>
          <p className="mt-3 text-gray-300 max-w-sm">
            Experience the thrill of the DPL Cricket Tournament, where talent
            meets passion on the grandest stage.
          </p>
        </motion.div>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2">
            {FooterLinks.map((link) => (
              <li
                key={link.title}
                className="cursor-pointer hover:text-yellow-400 transition-transform transform hover:translate-x-2"
              >
                {link.title}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social Links & Contact */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl font-semibold mb-3">Connect With Us</h2>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-yellow-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-yellow-400 transition">
              <FaLinkedin />
            </a>
          </div>
          <div className="mt-4 text-gray-300">
            <div className="flex items-center gap-2">
              <FaLocationArrow /> <span>Pune, India</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaMobileAlt /> <span>+91 123456789</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-400 text-sm mt-8"
      >
        © {new Date().getFullYear()} DPL Cricket Tournament & SB9Codes Pvt Ltd.
        All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
