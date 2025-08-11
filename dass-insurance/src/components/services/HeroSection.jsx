// src/components/services/HeroSection.jsx
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#1F2D3C] to-[#3E3E3E] text-white overflow-hidden">
      {/* Animated Red Glow */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-96 h-96 bg-[#D71920]/30 rounded-full blur-3xl top-10 -left-24"
      />
      {/* Animated Blue Glow */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.25 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute w-96 h-96 bg-blue-400/20 rounded-full blur-3xl bottom-10 -right-24"
      />

      <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Our Insurance Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
        >
          Explore a wide range of customized insurance plans built to protect your health, assets, and future.
        </motion.p>
      </div>
    </section>
  );
}
