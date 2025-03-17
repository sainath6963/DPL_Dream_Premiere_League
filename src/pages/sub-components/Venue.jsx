import { motion } from "framer-motion";
import ground1 from "../../photos/Ground1.png";
import ground2 from "../../photos/location.png";
import ground3 from "../../photos/Ground2.png";

const venueData = [
  {
    img: ground1,
    title: "World-Class Facilities",
    text: "Our venue boasts top-tier cricket pitches, floodlights for night matches, and seating arrangements that provide a spectacular view of the action.",
    reverse: false,
  },
  {
    img: ground3,
    title: "Amenities & Comfort",
    text: "The venue is equipped with modern dressing rooms, a well-maintained outfield, and food stalls offering refreshments for both players and spectators.",
    reverse: true,
  },
  {
    img: ground2,
    title: "Easily Accessible Location",
    text: "Located in the heart of the city, the stadium is easily accessible via public and private transport, making it convenient for everyone to join in on the excitement.",
    reverse: false,
  },
];

const Venue = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-blue-700 uppercase tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          DPL Venue
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 leading-relaxed mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          The DPL Cricket Tournament takes place in one of the finest cricket
          stadiums, offering world-class facilities and a thrilling atmosphere
          for players and fans alike.
        </motion.p>
      </div>

      {venueData.map((section, index) => (
        <motion.div
          key={index}
          className={`mt-16 max-w-6xl mx-auto flex flex-col md:flex-row ${
            section.reverse ? "md:flex-row-reverse" : ""
          } items-center gap-8`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src={section.img}
            alt={section.title}
            className="w-full md:w-1/2 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <div className="md:w-1/2">
            <h3 className="text-3xl font-semibold text-blue-600">
              {section.title}
            </h3>
            <p className="text-gray-600 mt-4">{section.text}</p>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Venue;
