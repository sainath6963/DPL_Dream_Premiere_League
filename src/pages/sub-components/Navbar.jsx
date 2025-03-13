import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import BplLogo from "../../photos/bpl.png";

const Menu = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "About Us", link: "/AboutUs" },
  { id: 3, name: "Venue", link: "/Venue" },
  { id: 4, name: "Teams", link: "/Teams" },
];

const DropDownLinks = [
  { id: 1, name: "Photos", link: "/" },
  { id: 2, name: "Register", link: "/Registration" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = () => {
    if (location.pathname === "/Registration") {
      navigate("/");
    } else {
      navigate("/Registration");
    }
  };

  return (
    <div className="shadow-md bg-slate-400">
      <div className="bg-black py-3 sm:py-0">
        <div className="container mx-auto flex items-center justify-between px-[40px]">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={BplLogo} className="h-20" alt="BPL Logo" />
            </a>
          </div>
          <div className="flex justify-between items-center gap-3">
            <button
              onClick={handleNavigation}
              type="button"
              className="w-full mt-2 bg-orange-600 text-white p-2 rounded-md hover:bg-green-500"
            >
              {location.pathname === "/Registration"
                ? "Go Home"
                : "Registration Page"}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-white duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <a
              href="#"
              className="flex items-center gap-[2px] py-2 hover:text-white duration-200"
            >
              More
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[150px] rounded-md bg-blue-200 p-2 text-black">
              <ul>
                {DropDownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 bg-amber-100 hover:bg-amber-500"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
