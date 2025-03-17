import React from "react";
import banner from "../../photos/DPL7.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={banner}
              alt=""
              className=" bg-gray-800 rounded-sm max-w-[500px] h-[350px] w-full mx-auto drop-shadow-[0_20px_30px_rgba(0,0,0,1)] object-cover]"
            />
          </div>
          {/* text details */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
              Tournament Highlights & Structure
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Welcome to the ultimate cricketing experience, where passion meets
              competition! Whether you're a player, a fan, or a team looking to
              showcase your skills, we bring you the best of the game.
            </p>
            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex item-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " />
                <p className="hover:scale-105 duration-300 py-2.5">
                  Franchise Teams – Competing for glory & massive cash prizes
                </p>
              </div>
              <div data-aos="fade-up" className="flex item-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " />
                <p className="hover:scale-105 duration-300 py-2.5">
                  Live Broadcast – Matches will be streamed nationwide
                </p>
              </div>
              <div data-aos="fade-up" className="flex item-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " />
                <p className="hover:scale-105 duration-300 py-2.5">
                  Grand Cultural Nights – Entertainment every night
                </p>
              </div>
              <div data-aos="fade-up" className="flex item-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " />
                <p className="hover:scale-105 duration-300 py-2.5">
                  Premium Inauguration & Closing Ceremonies.
                </p>
              </div>
              <div data-aos="fade-up" className="flex item-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " />
                <p className="hover:scale-105 duration-300 py-2.5">
                  VIP Guests & Celebrity Appearances
                </p>
              </div>
              <div data-aos="fade-up" className="flex item-center gap-4">
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 " />
                <p className="hover:scale-105 duration-300 py-2.5">
                  Tournament Dates: June 5 – June 10, 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
