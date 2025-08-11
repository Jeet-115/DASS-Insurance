import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "⚡",
      title: "Quick & Hassle-Free Claims",
      desc: "We ensure swift and transparent claim processing to give you peace of mind when you need it most.",
    },
    {
      icon: "📚",
      title: "Comprehensive Policy Options",
      desc: "From motor and health to industrial coverage, we offer a wide range of policies tailored to your exact needs.",
    },
    {
      icon: "🌟",
      title: "Trusted by Thousands",
      desc: "Our clients trust us for reliability, ethics, and dedicated service — we value relationships over transactions.",
    },
    {
      icon: "👨‍💼",
      title: "Expert Guidance & Support",
      desc: "Get one-on-one support from an experienced advisor who explains everything clearly and helps you choose wisely.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-[#F5F7FA] py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-14 text-[#1B365D]"
        >
          Why Choose <span className="text-[#363025]">DASS Insurance</span>?
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 text-left">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#be0d0d]"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 8 }}
                className="text-4xl mb-3"
              >
                {item.icon}
              </motion.div>
              <h3 className="font-bold text-[#1B365D] text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
