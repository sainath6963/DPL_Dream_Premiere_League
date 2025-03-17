import React from "react";
import { motion } from "framer-motion";
import {
  FaLightbulb,
  FaUserShield,
  FaVideo,
  FaBalanceScale,
  FaMusic,
  FaCouch,
} from "react-icons/fa";

const FacilitiesData = [
  {
    id: 1,
    title: "State-of-the-Art Cricket Ground",
    description: "Equipped with floodlights for thrilling night matches.",
    icon: <FaLightbulb className="text-yellow-400 text-4xl" />,
  },
  {
    id: 2,
    title: "Security & Safety",
    description:
      "8-10 security personnel stationed outside the ground for smooth operations.",
    icon: <FaUserShield className="text-red-500 text-4xl" />,
  },
  {
    id: 3,
    title: "High-Tech Live Broadcasting",
    description: "4-6 camera setups ensuring professional coverage.",
    icon: <FaVideo className="text-blue-500 text-4xl" />,
  },
  {
    id: 4,
    title: "Senior Group Umpires",
    description: "Ensuring fair and transparent decision-making.",
    icon: <FaBalanceScale className="text-green-500 text-4xl" />,
  },
  {
    id: 5,
    title: "Entertainment & Cultural Programs",
    description: "Live performances and shows every night.",
    icon: <FaMusic className="text-purple-500 text-4xl" />,
  },
  {
    id: 6,
    title: "Premium Seating & Refreshments",
    description:
      "Exclusive seating area with water and refreshments for players.",
    icon: <FaCouch className="text-orange-500 text-4xl" />,
  },
];

const Tournament = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="mt-14 mb-12 px-6"
    >
      {/* Header Section */}
      <div className="text-center mb-10 max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-amber-600 font-semibold"
        >
          Match-Day Experience
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold"
        >
          Unforgettable Facilities & Entertainment
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-gray-500 mt-2 text-sm"
        >
          Enjoy world-class amenities, live entertainment, and top-notch
          security for a seamless match-day experience.
        </motion.p>
      </div>

      {/* Facilities Cards */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {FacilitiesData.map((facility) => (
          <motion.div
            key={facility.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
            className="bg-white shadow-lg rounded-lg p-5 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="h-20 w-20 bg-gray-200 rounded-full flex items-center justify-center"
            >
              {facility.icon}
            </motion.div>
            <h3 className="font-semibold text-lg mt-4">{facility.title}</h3>
            <p className="text-sm text-gray-600">{facility.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Tournament;
