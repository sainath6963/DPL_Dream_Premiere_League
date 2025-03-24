import { motion } from "framer-motion";

const RulesRegulations = () => {
  const rules = [
    "The DPL will have 16 franchises participating in the tournament.",
    "All matches will be played under floodlights.",
    "The tournament will follow a single-elimination knockout format in June 2025.",

    // Team Composition & Player Regulations
    "Each team must have at least 4 local players in the playing .",
    "Teams must register their players before the tournament begins.",
    "Players must meet the age and fitness criteria set by the organizers.",

    // Match Rules
    "All matches will be played in T10 format (10 overs per side).",

    // Code of Conduct & Discipline
    "All teams must follow DCC’s Code of Conduct for players and officials.",
    "Any form of abuse, match-fixing, or cheating will result in immediate disqualification.",
    "Umpire decisions are final and binding.",
    "Players must adhere to the dress code and sponsorship obligations.",

    // Disputes & Governance
    "Any unforeseen disputes will be resolved by the DPL governing body.",
    "The organizers hold the right to make changes to the rules if necessary.",
    "Player Eligibility: Only players residing within a 10 km radius of Butibori are eligible to register. Proof of address may be required during registration.",
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
            <span className="text-blue-600 font-bold text-xl">{}️</span>
            <p className="text-gray-800">{rule}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RulesRegulations;
