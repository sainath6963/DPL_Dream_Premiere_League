import { motion } from "framer-motion";

const PrizeAwards = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-blue-700 uppercase tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Prize Money & Awards
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Recognizing excellence, rewarding champions, and celebrating talent.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: "Winner’s Prize",
            amount: "₹ more than 2 lakh",
            emoji: "🏅",
          },
          { title: "Runner-up Prize", amount: "₹ 150000", emoji: "🥈" },
          {
            title: "Top Performers & Best Players",
            amount: "Special Recognition",
            emoji: "🎖️",
          },
          {
            title: "High-Achieving",
            amount: "Honored on Final Stage",
            emoji: "🏅",
          },
        ].map((award, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-5xl mb-3">{award.emoji}</p>
            <h3 className="text-xl font-semibold text-blue-600">
              {award.title}
            </h3>
            <p className="text-gray-600 mt-2">{award.amount}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PrizeAwards;
