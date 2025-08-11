// src/components/services/CTASection.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0B1E33] to-[#143B63] text-white py-16 text-center">
      {/* Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-0 left-0 w-80 h-80 bg-[#D71920] rounded-full blur-3xl opacity-20"
      ></motion.div>

      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Need Assistance Choosing?
        </motion.h2>
        <p className="mb-8 text-lg text-blue-100">
          Not sure which policy is right for you? We're happy to guide you personally.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-[#143B63] font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/quote"
            className="bg-blue-100 text-[#0B1E33] font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
