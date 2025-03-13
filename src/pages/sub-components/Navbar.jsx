import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/about-us" },
  { id: 3, name: "Venue", link: "/venue" },
  { id: 4, name: "Teams", link: "/teams" },
];

const DropDownLinks = [
  { id: 1, name: "Photos", link: "/photos" },
  { id: 2, name: "Register", link: "/registration" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = (link) => {
    setDropdownOpen(false); // Close dropdown before navigating
    setTimeout(() => navigate(link), 150); // Delay to ensure smooth transition
  };

  return (
    <nav className="shadow-md bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          BPL
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6">
          {Menu.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigation(item.link)}
                className={`px-4 py-2 hover:text-yellow-400 ${
                  location.pathname === item.link
                    ? "text-yellow-400 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </button>
            </li>
          ))}

          {/* Dropdown Menu */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="px-4 py-2 hover:text-yellow-400">More</button>
            <div
              className={`absolute left-0 top-10 bg-white text-black shadow-lg rounded-md w-40 z-50 transition-all duration-200 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <ul>
                {DropDownLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigation(link.link)}
                      className="block w-full px-4 py-2 hover:bg-gray-200"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Registration Button */}
        <button
          onClick={() => navigate("/registration")}
          className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-black font-semibold"
        >
          Register
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
