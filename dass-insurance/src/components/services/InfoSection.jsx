import { motion } from "framer-motion";
import { FaHeartbeat, FaCar, FaHome, FaPlane, FaIndustry, FaCheckCircle } from "react-icons/fa";

export default function InfoSection() {
  const types = [
    { name: "Health Insurance", desc: "Covers medical expenses from illness, injury, or hospitalization.", icon: <FaHeartbeat className="text-[#D71920] text-3xl" /> },
    { name: "Motor Insurance", desc: "Protects vehicles against damage, theft, and third-party liabilities.", icon: <FaCar className="text-[#D71920] text-3xl" /> },
    { name: "Home Insurance", desc: "Secures your home and belongings from fire, theft, or natural disasters.", icon: <FaHome className="text-[#D71920] text-3xl" /> },
    { name: "Travel Insurance", desc: "Covers trip cancellations, medical emergencies abroad, and lost luggage.", icon: <FaPlane className="text-[#D71920] text-3xl" /> },
    { name: "Commercial Insurance", desc: "Protects businesses with fire, marine, liability, and engineering coverage.", icon: <FaIndustry className="text-[#D71920] text-3xl" /> },
  ];

  const features = [
    "Short-term, renewable contracts tailored to your needs",
    "Covers specific risks for peace of mind",
    "Affordable premiums based on coverage & risk factors",
    "Financial protection from unexpected events",
    "Mandatory coverage for certain categories (like motor insurance)",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#F7F9FB] to-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Intro */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-[#1C2B33] mb-4"
        >
          Understanding General Insurance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto"
        >
          Life is unpredictable — but your future doesn’t have to be. Our General Insurance
          plans safeguard your health, home, vehicles, and business from life’s uncertainties,
          giving you the peace of mind you deserve.
        </motion.p>

        {/* Types of General Insurance */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {types.map((t, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center"
            >
              {t.icon}
              <h3 className="text-lg font-semibold text-[#D71920] mt-3 mb-2">{t.name}</h3>
              <p className="text-sm text-gray-600">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Features & Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-[#D71920] text-white rounded-xl p-8 max-w-4xl mx-auto shadow-lg"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Key Features & Benefits</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-2">
                <FaCheckCircle className="text-white text-lg mt-1" />
                <p className="text-sm">{f}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
