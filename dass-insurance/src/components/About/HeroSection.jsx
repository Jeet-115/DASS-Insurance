import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-[#1F2D3C] to-[#3E3E3E] text-white overflow-hidden">
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute w-96 h-96 bg-[#D71920]/30 rounded-full blur-3xl top-10 -left-24"
      />
      <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          About DASS Insurance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
        >
          Your trusted partner for life, health, vehicle, and business
          insurance — delivering peace of mind since day one.
        </motion.p>
      </div>
    </section>
  );
}
