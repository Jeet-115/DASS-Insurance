import { motion } from "framer-motion";

const stats = [
  { label: "Years of Experience", value: "15+" },
  { label: "Happy Clients", value: "5,000+" },
  { label: "Policies Issued", value: "10,000+" },
  { label: "Claim Settlement Rate", value: "98%" },
];

export default function TrustExperience() {
  return (
    <section className="bg-[#F0F4F8] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Why People Trust Us
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-3xl font-bold text-[#D71920]">{stat.value}</p>
              <p className="text-[#37474F]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
