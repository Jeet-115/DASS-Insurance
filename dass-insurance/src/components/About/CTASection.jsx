import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="bg-[#1F2D3C] text-white py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        Let’s Secure Your Future Together
      </motion.h2>
      <p className="mb-8 text-lg">
        Get in touch with us for a free consultation or instant quote.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="flex justify-center gap-4 flex-wrap"
      >
        <Link
          to="/quote"
          className="bg-[#D71920] text-white px-6 py-3 rounded-full shadow hover:bg-[#B71C1C] transition-transform transform hover:scale-105 font-semibold"
        >
          📋 Get a Quote
        </Link>
        <Link
          to="/contact"
          className="bg-white text-[#1F2D3C] px-6 py-3 rounded-full shadow hover:bg-[#ECEFF1] transition-transform transform hover:scale-105 font-semibold"
        >
          📞 Contact Us
        </Link>
      </motion.div>
    </section>
  );
}
