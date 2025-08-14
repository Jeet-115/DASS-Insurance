// src/components/services/ServiceTemplate.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function ServiceTemplate() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  const [isMobile, setIsMobile] = useState(false);
  // Which dropdown is open: { section: number|null, item: number|null }
  const [openDropdown, setOpenDropdown] = useState({
    section: null,
    item: null,
  });
  // Desktop: whether the current open dropdown is "pinned" by click
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-item")) {
        setOpenDropdown({ section: null, item: null });
        setPinned(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // (Your sections data unchanged, shortened here for brevity)
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
        list: [{ title: "Individual" }, { title: "Floater" }],
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
          { title: "2 Wheeler" },
          {
            title: (
              <span className="flex items-center justify-between w-full">
                Private Car <RiArrowDropDownLine />
              </span>
            ),
            subItems: ["0 - 1000 CC", "1000 - 1500 CC", "1500+ CC"],
          },
          {
            title: (
              <span className="flex items-center justify-between w-full">
                GC CV <RiArrowDropDownLine />
              </span>
            ),
            subItems: [
              "0 - 2.5 GVW",
              "2.5 - 3.5 GVW",
              "3.5 - 7.5 GVW",
              "7.5 - 12 GVW",
              "12 - 40 GVW",
              "40+ GVW",
            ],
          },
          {
            title: (
              <span className="flex items-center justify-between w-full">
                PC CV <RiArrowDropDownLine />
              </span>
            ),
            subItems: ["PC CV < 6", "PC CV > 6"],
          },

          { title: "Miscellaneous" },
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
        list: [
          { title: "Fire" },
          { title: "Marine" },
          { title: "Liability" },
          { title: "Engineering" },
        ],
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
        // Strings are OK; renderer below supports strings or {title, subItems}
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
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex} className={`${section.bg} py-16`}>
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

            {/* List with dropdowns (supports strings or {title, subItems}) */}
            {section.extraContent && section.extraContent.list && (
              <AnimatePresence>
                <motion.div className="mt-8">
                  <h3 className="text-lg font-bold text-[#1C2B33] mb-3">
                    {section.extraContent.listTitle}
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-gray-700">
                    {section.extraContent.list.map((rawItem, idx) => {
                      const isObj = typeof rawItem === "object";
                      const title = isObj ? rawItem.title : rawItem;
                      const subItems =
                        isObj && rawItem.subItems ? rawItem.subItems : null;
                      const isOpen =
                        openDropdown.section === sectionIndex &&
                        openDropdown.item === idx;

                      return (
                        <li
                          key={idx}
                          className="dropdown-item relative bg-white p-3 rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (subItems) {
                              // Toggle for BOTH desktop and mobile
                              if (isOpen && pinned) {
                                // Unpin/close if already pinned
                                setOpenDropdown({ section: null, item: null });
                                setPinned(false);
                              } else {
                                setOpenDropdown({
                                  section: sectionIndex,
                                  item: idx,
                                });
                                // Pin on desktop click, not on mobile
                                setPinned(!isMobile);
                              }
                            }
                          }}
                          onMouseEnter={() => {
                            if (!isMobile && subItems && !pinned) {
                              setOpenDropdown({
                                section: sectionIndex,
                                item: idx,
                              });
                            }
                          }}
                          onMouseLeave={() => {
                            if (!isMobile && subItems && !pinned) {
                              setOpenDropdown({ section: null, item: null });
                            }
                          }}
                        >
                          <span className="font-medium">{title}</span>

                          {/* Desktop dropdown */}
                          {!isMobile && subItems && (
                            <ul
                              className={`absolute left-0 top-full mt-2 w-56 bg-white shadow-lg border border-gray-200 rounded-lg transition-all duration-300 overflow-hidden ${
                                isOpen
                                  ? "max-h-96 opacity-100"
                                  : "max-h-0 opacity-0"
                              }`}
                            >
                              {subItems.map((sub, subIdx) => (
                                <li
                                  key={subIdx}
                                  className="px-4 py-2 hover:bg-gray-100 text-sm"
                                >
                                  {sub}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Mobile dropdown */}
                          {isMobile && subItems && (
                            <AnimatePresence>
                              {isOpen && (
                                <motion.ul
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                  }}
                                  className="mt-3 space-y-2 border-t border-gray-200 pt-2 overflow-hidden"
                                >
                                  {subItems.map((sub, subIdx) => (
                                    <motion.li
                                      key={subIdx}
                                      initial={{ opacity: 0, y: 5 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: subIdx * 0.05 }}
                                      className="px-2 py-1 bg-gray-50 rounded hover:bg-gray-100 text-sm"
                                    >
                                      {sub}
                                    </motion.li>
                                  ))}
                                </motion.ul>
                              )}
                            </AnimatePresence>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </section>
      ))}
    </>
  );
}
