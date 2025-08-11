// src/components/services/ServiceTemplate.jsx
import { motion } from "framer-motion";

export default function ServiceTemplate() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const sections = [
    {
      title: "Basic Insurance",
      bg: "bg-white",
      items: [
        {
          title: "Health Insurance",
          desc: "Comprehensive coverage for medical expenses including hospital stays, treatments, and emergencies.",
        },
        {
          title: "Life Insurance",
          desc: "Secure your family's future with policies that offer peace of mind and long-term benefits.",
        },
        {
          title: "Personal Insurance",
          desc: "Coverage tailored for individuals—protecting your belongings, lifestyle, and liability.",
        },
        {
          title: "Term Life Insurance",
          desc: "High-value protection at affordable premiums for a defined term.",
        },
      ],
    },
    {
      title: "Motor Insurance",
      bg: "bg-[#F7F9FB]",
      items: [
        {
          title: "Financial Protection Against Damage",
          desc: "Covers repairs or replacement if your vehicle is damaged in an accident, natural calamity, or fire.",
        },
        {
          title: "Third-Party Liability Coverage",
          desc: "Pays for injury or property damage you cause to others—mandatory in many countries.",
        },
        {
          title: "Protection Against Theft",
          desc: "Compensation based on insured declared value (IDV) if your vehicle is stolen.",
        },
        {
          title: "Personal Accident Cover",
          desc: "Coverage for driver/owner and optionally passengers in case of injury or death.",
        },
        {
          title: "Add-On Covers (Optional)",
          desc: "Zero Depreciation, Roadside Assistance, Engine Protection, Return to Invoice, and more.",
        },
        {
          title: "Cashless Repairs",
          desc: "Repairs at network garages without paying upfront.",
        },
        {
          title: "Legal Compliance",
          desc: "Meets mandatory motor insurance requirements to avoid fines.",
        },
      ],
      extraContent: {
        table: [
          {
            type: "Third-Party Only",
            covers: "Only damage to others (people/property)",
          },
          {
            type: "Comprehensive",
            covers: "Own vehicle + third-party + theft",
          },
          {
            type: "Standalone Own Damage",
            covers: "Only damage to your vehicle",
          },
        ],
      },
    },
    {
      title: "Industrial Insurance",
      bg: "bg-white",
      items: [
        {
          title: "Fire Insurance",
          desc: "Covers loss or damage caused by fire to buildings, contents, and stock.",
        },
        {
          title: "Marine Insurance",
          desc: "Protects goods in transit via sea, road, or air against damage, theft, and delays.",
        },
        {
          title: "Worker Compensation",
          desc: "Mandatory coverage for your employees’ health and injury compensation.",
        },
        {
          title: "Property Insurance",
          desc: "Safeguard business properties against fire, burglary, or natural disasters.",
        },
      ],
    },
  ];

  return (
    <>
      {sections.map((section, idx) => (
        <section key={idx} className={`${section.bg} py-16`}>
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-10 text-[#1C2B33]"
            >
              {section.title}
            </motion.h2>

            {/* Benefit Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {section.items.map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition text-center"
                >
                  <h3 className="text-lg font-semibold text-[#D71920] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Optional Table Below Cards */}
            {section.extraContent && section.extraContent.table && (
              <div className="mt-10 overflow-x-auto">
                <table className="min-w-full border border-gray-200 rounded-lg shadow-md">
                  <thead className="bg-[#D71920] text-white">
                    <tr>
                      <th className="px-4 py-2 text-left">Type</th>
                      <th className="px-4 py-2 text-left">Covers</th>
                    </tr>
                  </thead>
                  <tbody>
                    {section.extraContent.table.map((row, idx) => (
                      <tr key={idx} className="border-b hover:bg-gray-50">
                        <td className="px-4 py-2 font-semibold">{row.type}</td>
                        <td className="px-4 py-2">{row.covers}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
