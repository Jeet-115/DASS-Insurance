import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#1F2D3C] to-[#3E3E3E] text-white overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-96 h-96 bg-[#D71920]/30 rounded-full blur-3xl top-10 -left-24"
      />
      <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Your Trustworthy Insurance Partner
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Comprehensive solutions for health, vehicle, life, and business insurance.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex gap-4 flex-wrap"
          >
            <Link
              to="/quote"
              className="bg-[#D71920] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#B71C1C] transition-transform transform hover:scale-105"
            >
              Get a Quote
            </Link>
            <Link
              to="/contact"
              className="bg-white text-[#1F2D3C] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#ECEFF1] transition-transform transform hover:scale-105"
            >
              Contact Us
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 mt-12 md:mt-0"
        >
          <img
            src="./hero-image.jpg"
            alt="Insurance Hero"
            className="rounded-xl shadow-2xl w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
