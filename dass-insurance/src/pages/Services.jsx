import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <div className="bg-white text-gray-800">
      {/* ===== HERO ===== */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Insurance Services
          </motion.h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Explore a wide range of customized insurance plans built to protect your health, assets, and future.
          </p>
        </div>
      </section>

      {/* ===== INTRO ===== */}
      <section className="py-12 max-w-5xl mx-auto px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600"
        >
          DASS Insurance provides reliable and comprehensive insurance plans to protect your lifestyle, your business, and your future.
        </motion.p>
      </section>

      {/* ===== BASIC INSURANCE ===== */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Basic Insurance
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Health Insurance",
              desc:
                "Comprehensive coverage for medical expenses including hospital stays, treatments, and emergencies.",
            },
            {
              title: "Life Insurance",
              desc:
                "Secure your family's future with policies that offer peace of mind and long-term benefits.",
            },
            {
              title: "Personal Insurance",
              desc:
                "Coverage tailored for individuals—protecting your belongings, lifestyle, and liability.",
            },
            {
              title: "Term Life Insurance",
              desc:
                "High-value protection at affordable premiums for a defined term.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow hover:shadow-xl transition text-center"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== VEHICLE INSURANCE ===== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-10"
          >
            Vehicle Insurance
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Bike Insurance",
                desc:
                  "Covers damage, theft, and third-party liability for your two-wheeler.",
              },
              {
                title: "Car Insurance",
                desc:
                  "Protection plans for both private and commercial cars with optional add-ons.",
              },
              {
                title: "Bus Insurance",
                desc:
                  "Policies for private and commercial buses with driver and passenger cover.",
              },
              {
                title: "Commercial Vehicles",
                desc:
                  "Insurance for taxis, trucks, goods carriers, tractors and more.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white border border-blue-100 rounded-2xl p-6 shadow hover:shadow-xl transition text-center"
              >
                <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDUSTRIAL INSURANCE ===== */}
      <section className="py-16 max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Industrial Insurance
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Fire Insurance",
              desc:
                "Covers loss or damage caused by fire to buildings, contents, and stock.",
            },
            {
              title: "Marine Insurance",
              desc:
                "Protects goods in transit via sea, road, or air against damage, theft, and delays.",
            },
            {
              title: "Worker Compensation",
              desc:
                "Mandatory coverage for your employees’ health and injury compensation.",
            },
            {
              title: "Property Insurance",
              desc:
                "Safeguard business properties against fire, burglary, or natural disasters.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white border border-blue-100 rounded-2xl p-6 shadow hover:shadow-xl transition text-center"
            >
              <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4"
        >
          Need Assistance Choosing?
        </motion.h2>
        <p className="mb-8 text-lg">
          Not sure which policy is right for you? We're happy to guide you personally.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-blue-800 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/quote"
            className="bg-blue-100 text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:scale-105 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
