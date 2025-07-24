import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="bg-slate-50 font-outfit">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About DASS Insurance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Your trusted partner for all types of insurance.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-slate-800 mb-6"
        >
          Our Story
        </motion.h2>
        <motion.p
          className="text-slate-600 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          DASS Insurance was started with a simple mission: to make insurance simple, accessible, and trustworthy for everyone.
        </motion.p>
        <motion.p
          className="text-slate-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          We provide a wide range of services — from health and life insurance to vehicle and industrial coverage — so you can protect what matters most. Every policy is handled personally with care and attention.
        </motion.p>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src="/logonbg.png"
            alt="Founder"
            className="w-48 h-48 mx-auto md:mx-0 rounded-full shadow-xl object-cover"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Meet the Founder</h3>
            <p className="text-slate-600 mb-2">
              Hi, I’m <strong>Jeet Mistry</strong>, and I personally manage DASS Insurance. With years of experience and a passion for helping people, I guide each client to choose the best policy.
            </p>
            <p className="text-slate-600">
              When you work with us, you’re not just a policy number — you’re family.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Icons */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["Health & Life Insurance", "Vehicle Insurance (Car, Bike, Bus)", "Industrial & Fire Insurance"].map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
            >
              <p className="text-blue-700 font-semibold">{service}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Fast Claim Settlement", "Personal Assistance", "Wide Range of Policies", "Trusted Local Service"].map((point, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
              >
                <p className="text-slate-600">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready to Secure Your Future?
        </motion.h2>
        <motion.p
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Contact us today or get a free quote instantly.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-white text-blue-700 px-6 py-3 rounded-full shadow-md font-semibold hover:scale-105 transition"
          >
            Contact Us
          </Link>
          <Link
            to="/quote"
            className="bg-blue-100 text-blue-900 px-6 py-3 rounded-full shadow-md font-semibold hover:scale-105 transition"
          >
            Get a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
