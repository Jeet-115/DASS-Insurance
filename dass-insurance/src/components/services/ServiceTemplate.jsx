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
      extraContent: {
        listTitle: "Types of Health Insurance We Offer",
        list: ["Individual", "Floater"],
      },
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
        listTitle: "We Cover the Following Vehicle Categories",
        list: [
          "2 Wheeler",
          "Private Car",
          "GC CV LT 2.5 GVW",
          "GC CV 2.5 - 7.5 GVW",
          "GC CV 7.5 - 12 GVW",
          "GC CV 12 - 20 GVW",
          "GC CV 20 - 40 GVW",
          "GC CV 40+ GVW",
          "PC CV LT 6",
          "PC CV MT 6",
          "Miscellaneous",
        ],
      },
    },
    {
      title: "Industrial Insurance",
      bg: "bg-white",
      items: [
        {
          title: "Fire Insurance",
          desc: "Protects against losses from fire to buildings, contents, and stock.",
        },
        {
          title: "Marine Insurance",
          desc: "Covers goods in transit via sea, road, or air.",
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
      extraContent: {
        listTitle: "Types of Industrial Insurance We Offer",
        list: ["Fire", "Marine", "Liability", "Engineering"],
      },
    },
    {
      title: "Home Insurance",
      bg: "bg-[#F7F9FB]",
      items: [
        {
          title: "Protection Against Natural Disasters",
          desc: "Covers damages caused by floods, earthquakes, storms, and other calamities.",
        },
        {
          title: "Fire & Theft Coverage",
          desc: "Secures your home and valuables from fire damage or burglary losses.",
        },
        {
          title: "Coverage for Contents",
          desc: "Protects furniture, appliances, electronics, and other possessions inside your home.",
        },
        {
          title: "Alternative Accommodation",
          desc: "Pays for temporary housing if your home becomes uninhabitable due to covered damage.",
        },
      ],
      extraContent: {
        listTitle: "We Cover the Following Home Types",
        list: [
          "Independent Houses",
          "Apartments / Flats",
          "Rented Homes",
          "Vacation Homes",
        ],
      },
    },
    {
      title: "Mutual Funds & Life Insurance",
      bg: "bg-white",
      items: [
        {
          title: "Wealth Creation through Mutual Funds",
          desc: "Invest in diversified portfolios for long-term growth with professional fund management.",
        },
        {
          title: "Life Cover for Your Family’s Security",
          desc: "Protect your loved ones with a lump-sum payout in case of unforeseen events.",
        },
        {
          title: "Flexible Investment Options",
          desc: "Choose from equity, debt, hybrid funds, and term or whole life plans.",
        },
        {
          title: "Tax Benefits",
          desc: "Save on taxes with eligible investment plans under prevailing tax laws.",
        },
      ],
      extraContent: {
        listTitle: "Plans We Offer",
        list: [
          "Term Life Insurance",
          "Whole Life Insurance",
          "Equity Mutual Funds",
          "Debt Mutual Funds",
          "Hybrid Mutual Funds",
          "ULIPs (Unit Linked Insurance Plans)",
        ],
      },
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

            {section.extraContent && section.extraContent.list && (
              <div className="mt-8">
                <h3 className="text-lg font-bold text-[#1C2B33] mb-3">
                  {section.extraContent.listTitle}
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
                  {section.extraContent.list.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white p-3 rounded-lg shadow-sm border border-gray-200"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
