import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../photos/DPL.png";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaYoutube,
} from "react-icons/fa";
import Banner from "../../photos/footer3.jpg";

const FooterLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about_us" },
  { title: "Venue", link: "/venue" },
  { title: "Register", link: "/registration" },
];

const Footer = () => {
  const navigate = useNavigate();

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
            <img
              src={logo}
              alt="DPL Logo"
              className="h-14 w-18 rounded-xl mr-3 border-2 border-black"
            />
          </h1>
          <p className="mt-3 text-gray-50 max-w-sm">
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
                onClick={() => navigate(link.link)}
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
            <a
              href="https://www.instagram.com/dpl_butibori/?igsh=dGN6eWpyYW1uYWVw#"
              className="hover:text-yellow-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/share/1F6opoFhSK/?mibextid=wwXIfr"
              className="hover:text-yellow-400 transition"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.youtube.com/@DPLButibori"
              className="hover:text-yellow-400 transition"
            >
              <FaYoutube />
            </a>
          </div>
          <div className="mt-4 text-gray-50">
            <div className="flex items-center gap-2">
              <FaLocationArrow className="text-6xl text-gray-700" />{" "}
              <Link
                to={
                  "https://www.google.com/maps/place/HBL+Tower/@20.9217839,79.0067145,17z/data=!4m6!3m5!1s0x3bd4981b59924013:0x9cced4458f759db8!8m2!3d20.9217839!4d79.0071381!16s%2Fg%2F11c6qc9qpb?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                }
              >
                <span className="hover:text-yellow-500">
                  HBL Tower Main Road, Butibori, Nagpur, Maharashtra – 441108
                </span>
              </Link>
              <FaLocationArrow className="text-6xl text-gray-700" />{" "}
              <Link
                to={
                  "https://www.google.com/maps/place/Ghatate+Chambers+Building/@21.1388414,79.0764918,17z/data=!4m14!1m7!3m6!1s0x3bd4c093d6c05819:0x5289cd80b06abbae!2sGhatate+Chambers+Building!8m2!3d21.1388364!4d79.0790721!16s%2Fg%2F11gfnddgdb!3m5!1s0x3bd4c093d6c05819:0x5289cd80b06abbae!8m2!3d21.1388364!4d79.0790721!16s%2Fg%2F11gfnddgdb?entry=ttu&g_ep=EgoyMDI1MDMxOS4yIKXMDSoASAFQAw%3D%3D"
                }
              >
                <span className="hover:text-yellow-500">
                  2nd Floor, Ghatate Chamber, Panchshil Chowk, Nagpur,
                  Maharashtra, India
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <FaMobileAlt /> <span>+91 8698108101</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-50 text-sm mt-8"
      >
        © {new Date().getFullYear()} DPL Cricket Tournament All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
