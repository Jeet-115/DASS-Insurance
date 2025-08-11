import { motion } from "framer-motion";

const items = [
  {
    title: "Our Mission",
    text: "To provide reliable and affordable insurance solutions that empower our clients to live without worries.",
    icon: "🎯",
  },
  {
    title: "Our Vision",
    text: "To be the most trusted insurance partner, known for our integrity, innovation, and customer care.",
    icon: "🌟",
  },
  {
    title: "Our Values",
    text: "Integrity, trust, and a customer-first approach guide everything we do at DASS Insurance.",
    icon: "🤝",
  },
];

export default function MissionValues() {
  return (
    <section className="bg-[#ECEFF1] py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white p-8 rounded-xl shadow hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-[#37474F]">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
