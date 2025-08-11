import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    "Got my car insurance in minutes. Very helpful team!",
    "Professional and quick claim settlement!",
    "They explained everything so clearly. Highly recommend.",
  ];
  const names = ["Rahul S.", "Pooja K.", "Amit V."];

  return (
    <section className="bg-[#F0F4F8] py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          What Our Clients Say
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {names.map((name, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
            >
              <p className="italic text-[#37474F] mb-4">“{testimonials[i]}”</p>
              <p className="font-bold text-[#D71920]">{name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
