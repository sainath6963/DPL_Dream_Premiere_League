import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../photos/DPL.png";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/teamManagement" },
  { id: 3, name: "Venue", link: "/venue" },
  { id: 3, name: "Videos", link: "/watchVideos" },
];

const DropDownLinks = [
  { id: 1, name: "Rules And Regulations", link: "/Rules" },
  { id: 2, name: "Prizes", link: "/prize-money" },
  { id: 3, name: "blogs", link: "/about_us" },
  { id: 4, name: "Register", link: "/registration" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavigation = (link) => {
    setDropdownOpen(false); // Close dropdown before navigating
    setTimeout(() => navigate(link), 150); // Delay ensures smooth transition
  };

  return (
    <nav className="shadow-md bg-gray-800 text-white">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={logo}
            alt="DPL Logo"
            className="h-14 w-18 rounded-xl mr-3 border-2 border-black"
          />
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
              className={`absolute left-0 top-10 bg-stone-600 text-white shadow-lg rounded-md w-40 z-50 transition-all duration-200 ${
                dropdownOpen ? "block" : "hidden"
              }`}
            >
              <ul>
                {DropDownLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => handleNavigation(link.link)}
                      className="block w-full px-4 py-2 hover:bg-orange-500"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        {/* Dynamic Registration & Admin Button */}
        <div className="flex gap-4">
          <button
            onClick={() =>
              navigate(
                location.pathname === "/registration" ? "/" : "/registration"
              )
            }
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-black font-semibold"
          >
            {location.pathname === "/registration" ? "Home" : "Register"}
          </button>
          <button
            onClick={() => navigate("/admin/login")} // Navigates to Admin Dashboard
            className="bg-yellow-500 hover:bg-yellow-600 px-4 py-2 rounded-md text-black font-semibold"
          >
            Admin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
