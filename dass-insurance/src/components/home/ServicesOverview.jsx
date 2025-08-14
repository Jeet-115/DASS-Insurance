import { motion } from "framer-motion";

export default function ServicesOverview() {
  const services = [
    {
      title: "Motor Insurance",
      icon: "./car-insurance.png", // 🔁 Replace with correct icon path
      items: [
        "2 Wheeler",
        "Private Car",
        "Goods Carrier CV (LT 2.5 - 40+ GVW)",
        "Passenger CV (LT & MT 6)",
        "Miscellaneous",
      ],
    },
    {
      title: "Health Insurance",
      icon: "./health-insurance.png", // 🔁 Replace with correct icon path
      items: ["Individual Health Insurance", "Floater Health Insurance"],
    },
    {
      title: "Industrial Insurance",
      icon: "./industrial-insurance.png", // 🔁 Replace with correct icon path
      items: [
        "Fire Insurance",
        "Marine Insurance",
        "Liability Insurance",
        "Engineering Insurance",
      ],
    },
    {
      title: "Life Insurance",
      icon: "./life-insurance.png", // 🔁 Replace with correct icon path
      items: [
        "Term Life Insurance",
        "Whole Life Insurance",
        "ULIPs (Unit Linked Insurance Plans)",
      ],
    },
    {
      title: "Mutual Funds",
      icon: "./mutual-funds.png", // 🔁 Replace with correct icon path
      items: [
        "Equity Mutual Funds",
        "Debt Mutual Funds",
        "Hybrid Mutual Funds",
      ],
    },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center text-[#1C2B33] mb-16"
      >
        Explore Our Services
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-white border-t-4 border-[#D71920] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <img
              src={service.icon}
              alt={`${service.title} Icon`}
              className="mx-auto h-20 mb-4"
            />
            <h3 className="text-xl font-bold mb-3 text-[#D71920]">
              {service.title}
            </h3>
            <ul className="text-[#37474F] space-y-1">
              {service.items.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="text-[#D71920]">✔</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
