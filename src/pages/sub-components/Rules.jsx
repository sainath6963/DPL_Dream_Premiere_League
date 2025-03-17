import { motion } from "framer-motion";

const RulesRegulations = () => {
  const rules = [
    "Only franchise-owned teams can participate in the DPL.",
    "Every franchise must select at least 4 local talented players in the auction.",
    "Each team can draft up to 7 additional players of their choice.",
    "Franchise owners will be recognized with honorary awards.",
    "Franchise agreements are valid for 3 years, with ownership transfers requiring DPL board approval.",
    "The DPL board holds authority to change rules and agreements.",
    "Franchises must follow DPL policies for fair play and sportsmanship.",
  ];

  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-5xl font-bold text-blue-700 uppercase tracking-wide"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Rules & Regulations
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Ensuring fair play, transparency, and excellence in the Dream Premium
          League.
        </motion.p>
      </div>

      <div className="max-w-3xl mx-auto mt-10">
        {rules.map((rule, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-lg p-5 mb-4 flex items-center gap-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-600 font-bold text-xl">
              {index + 1}️⃣
            </span>
            <p className="text-gray-800">{rule}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RulesRegulations;
