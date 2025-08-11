import { motion } from "framer-motion";

export default function CompanyStory() {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          className="bg-gradient-to-br from-[#D71920] to-[#F44336] rounded-xl h-64 w-full shadow-xl flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-white text-3xl font-bold text-center px-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Trust. Simplicity. Service.
          </motion.h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4 text-[#1C2B33]">Our Story</h2>
          <p className="text-[#37474F] mb-4">
            DASS Insurance was founded with a mission to simplify insurance
            and make it accessible for everyone. Over the years, we’ve grown
            into a trusted name, offering tailored solutions to safeguard
            what matters most.
          </p>
          <p className="text-[#37474F]">
            Our approach is rooted in transparency, long-term trust, and a
            deep commitment to every client we serve.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
