import { motion } from "framer-motion";
import img1 from "../../photos/DPL3.jpg";
import img2 from "../../photos/match.jpg";
import img3 from "../../photos/DPL6.jpg";

const sections = [
  {
    img: img1,
    title: "A Commitment to the Game",
    text: "What started as a small initiative quickly gained momentum. Players, fans, and communities embraced the DPL spirit, leading to larger tournaments, better facilities, and a commitment to fostering cricket talent at every level.",
    reverse: false,
  },
  {
    img: img2,
    title: "Where We Are Today",
    text: "Today, the DPL Cricket Tournament is a leading event in the cricketing calendar. With passionate players, dedicated teams, and an ever-growing audience, we continue to push the boundaries, making every season bigger and better.",
    reverse: true,
  },
  {
    img: img3,
    title: "The Future Ahead",
    text: "As we move forward, our goal is to expand the tournament, introduce new formats, and nurture young talent. We envision DPL becoming a global name in grassroots cricket, inspiring generations to come.",
    reverse: false,
  },
];

const AboutUs = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-blue-700 uppercase tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          The Beginning
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The DPL Cricket Tournament started with a simple vision – to unite
          cricket enthusiasts and create a competitive yet inclusive platform
          for players of all skill levels. What began as a small local event has
          grown into a prestigious tournament recognized for its sportsmanship
          and excellence.
        </motion.p>
      </div>

      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={`mt-16 max-w-6xl mx-auto flex flex-col md:flex-row ${
            section.reverse ? "md:flex-row-reverse" : ""
          } items-center gap-8`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <motion.img
            src={section.img}
            alt={section.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-semibold text-blue-600">
              {section.title}
            </h3>
            <p className="text-gray-600 mt-4">{section.text}</p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
};

export default AboutUs;
