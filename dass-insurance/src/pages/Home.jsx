import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-[#F9FAFB] text-[#1C2B33]">
      {/* ========== HERO SECTION ========== */}
      <section className="relative bg-gradient-to-r from-[#1F2D3C] to-[#3E3E3E] text-white overflow-hidden">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute w-96 h-96 bg-[#D71920]/30 rounded-full blur-3xl top-10 -left-24"
        />
        <div className="max-w-7xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center z-10 relative">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Trustworthy Insurance Partner
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Comprehensive solutions for health, vehicle, life, and business insurance.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4 flex-wrap"
            >
              <Link
                to="/quote"
                className="bg-[#D71920] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#B71C1C] transition-transform transform hover:scale-105"
              >
                Get a Quote
              </Link>
              <Link
                to="/contact"
                className="bg-white text-[#1F2D3C] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#ECEFF1] transition-transform transform hover:scale-105"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 mt-12 md:mt-0"
          >
            <img
              src="/images/insurance-hero.png"
              alt="Insurance Hero"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES OVERVIEW ========== */}
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
          {[
            {
              title: "Basic Insurance",
              color: "#D71920",
              items: [
                "Health Insurance",
                "Life Insurance",
                "Personal Insurance",
                "Term Life Insurance",
              ],
            },
            {
              title: "Vehicle Insurance",
              color: "#D71920",
              items: [
                "Bike & Car Insurance",
                "Bus Insurance",
                "Commercial Vehicle",
                "Tractor & Goods Carrier",
              ],
            },
            {
              title: "Industrial Insurance",
              color: "#D71920",
              items: [
                "Fire Insurance",
                "Marine Insurance",
                "Worker Compensation",
                "Property Insurance",
              ],
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl text-center"
            >
              <img src="/images/icon-placeholder.png" alt={service.title} className="mx-auto h-20 mb-4" />
              <h3 className="text-xl font-bold mb-3" style={{ color: service.color }}>
                {service.title}
              </h3>
              <ul className="text-[#37474F] space-y-1">
                {service.items.map((item, index) => (
                  <li key={index}>✔ {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ========== WHY CHOOSE US ========== */}
      <section className="bg-[#ECEFF1] py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1C2B33] mb-14"
          >
            Why Choose DASS Insurance?
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { text: "Fast Claim Settlement", icon: "✅" },
              { text: "Wide Range of Policies", icon: "📋" },
              { text: "Trusted by Many", icon: "🤝" },
              { text: "Personalized Service", icon: "💡" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.08 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <p className="font-semibold text-[#37474F]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ABOUT TEASER ========== */}
      <section className="py-20 max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#1C2B33] mb-6"
        >
          About DASS Insurance
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[#37474F] max-w-3xl mx-auto mb-8"
        >
          At DASS Insurance, we help you secure your life, vehicles, and businesses. With years of experience and a customer-first approach, we’ve earned the trust of hundreds of clients.
        </motion.p>
        <Link
          to="/about"
          className="inline-block bg-[#D71920] text-white px-6 py-3 rounded-full shadow hover:bg-[#B71C1C] transition-transform transform hover:scale-105 font-semibold"
        >
          Learn More About Us
        </Link>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="bg-[#F0F4F8] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-[#1C2B33] text-center mb-12"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Rahul S.", "Pooja K.", "Amit V."].map((name, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow"
              >
                <p className="italic text-[#37474F] mb-4">
                  “{["Got my car insurance in minutes. Very helpful team!", "Professional and quick claim settlement!", "They explained everything so clearly. Highly recommend."][i]}”
                </p>
                <p className="font-bold text-[#D71920]">{name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CONTACT CTA ========== */}
      <section className="bg-[#1F2D3C] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Get Insured?
          </motion.h2>
          <p className="text-lg mb-8">Call us now or get your free quote instantly.</p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-4 flex-wrap"
          >
            <a
              href="tel:+919825092724"
              className="bg-white text-[#1F2D3C] font-semibold px-6 py-3 rounded-full shadow hover:bg-[#ECEFF1] transition-transform transform hover:scale-105"
            >
              📞 Call Now
            </a>
            <Link
              to="/quote"
              className="bg-[#D71920] text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-[#B71C1C] transition-transform transform hover:scale-105"
            >
              📋 Get a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}