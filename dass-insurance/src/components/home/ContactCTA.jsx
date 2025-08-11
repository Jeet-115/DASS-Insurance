import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ContactCTA() {
  return (
    <section className="bg-[#1F2D3C] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Ready to Get Insured?
        </motion.h2>
        <p className="text-lg mb-8">Call us now or get your free quote instantly.</p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <a
            href="tel:+919825092724"
            className="bg-white text-[#1F2D3C] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#ECEFF1] transition-transform transform hover:scale-105"
          >
            📞 Call Now
          </a>
          <Link
            to="/quote"
            className="bg-[#D71920] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#B71C1C] transition-transform transform hover:scale-105"
          >
            📋 Get a Quote
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
