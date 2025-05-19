import React, { useState, useEffect } from "react";
import modelImage from "@/photos/ModelPhoto.png"; // Assume this is a transparent PNG
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ManagementTeam = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
      });
    } else {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.5 } });
    }
  }, [controls, inView]);

  const imageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    loaded: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={controls}
      className="max-w-7xl mx-auto px-6 py-10 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 rounded-3xl shadow-xl"
    >
      <motion.h2
        variants={textVariants}
        custom={1}
        className="text-4xl md:text-5xl font-extrabold text-center text-indigo-700 mb-10"
      >
        The Visionary Behind Dreams:{" "}
        <span className="text-gray-900">Mr. Mujib Pathan</span>
      </motion.h2>

      {/* IMAGE */}
      <motion.div
        variants={imageVariants}
        initial="initial"
        animate={isImageLoaded ? "loaded" : "initial"}
        className="mx-auto w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-white/60 border-4 border-white shadow-2xl backdrop-blur-lg flex justify-center items-center relative"
      >
        <img
          src={modelImage}
          alt="Mr. Mujib Pathan"
          className="object-cover w-full h-full hover:scale-105 transition-transform duration-700 ease-in-out"
          onLoad={() => setIsImageLoaded(true)}
          style={{ filter: "grayscale(5%)" }}
        />
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gray-100 flex justify-center items-center">
            <svg
              className="animate-spin h-8 w-8 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0c-3.14 0-6 1.86-8 4z"
              ></path>
            </svg>
          </div>
        )}
      </motion.div>

      {/* TEXT */}
      <motion.div
        className="mt-10 max-w-4xl mx-auto text-gray-800 text-lg md:text-xl leading-relaxed space-y-6 px-4"
        initial="initial"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {[
          `More than just a name, Mr. Mujib Pathan embodies a mission in active progress. As the esteemed Founder and Managing Director of DCC – Dream Cricket Club, he has constructed a vibrant ecosystem dedicated to identifying, nurturing, and championing cricketing talent across the nation.`,
          `Having personally experienced the constraints of limited opportunities growing up in a modest village, Mr. Pathan is driven by a profound desire to rewrite the narrative for generations to come. His personal journey inspired the creation of DCC on one powerful principle: no dream, regardless of its origin, should be left unrealized.`,
          `In 2025, he spearheaded the Dream Premier League (DPL), a national-level cricket tournament bringing together players from diverse backgrounds. DPL 2025 became more than a tournament—it became a celebration of unity, potential, and passion.`,
          `But his vision doesn’t end with sports.`,
          `He also founded the Dream Group of Schools, Dream Developers (a fast-growing real estate firm), and Star Apex News (a media outlet promoting grassroots stories) — all driving real change across sectors.`,
          `Through all his ventures, Mr. Mujib Pathan proves that when dreams are nurtured with vision and purpose, they transform into movements that uplift generations.`,
        ].map((paragraph, idx) => (
          <motion.p key={idx} variants={textVariants} custom={idx + 2}>
            {paragraph}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ManagementTeam;
