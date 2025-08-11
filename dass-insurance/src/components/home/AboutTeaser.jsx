import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutTeaser() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold mb-6"
      >
        About DASS Insurance
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-[#37474F] max-w-3xl mx-auto mb-8"
      >
        At DASS Insurance, we help you secure your life, vehicles, and businesses. With years of
        experience and a customer-first approach, we’ve earned the trust of hundreds of clients.
      </motion.p>
      <Link
        to="/about"
        className="inline-block bg-[#D71920] text-white px-6 py-3 rounded-full shadow hover:bg-[#B71C1C] transition-transform transform hover:scale-105 font-semibold"
      >
        Learn More About Us
      </Link>
    </section>
  );
}
