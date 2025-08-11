import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function Quote() {
  return (
    <>
      <Helmet>
        <title>Get a Quote - DASS Insurance</title>
        <meta
          name="description"
          content="Request a personalized insurance quote from DASS Insurance. Health, life, vehicle, and industrial plans available."
        />
        <link rel="canonical" href="https://dassinsurance.com/quote" />
      </Helmet>

      <div className="min-h-screen font-[Outfit] bg-[#F5F7FA]">
        {/* ===== HERO SECTION ===== */}
        <section className="relative bg-gradient-to-r from-[#1F2D3C] to-[#3E3E3E] text-white overflow-hidden">
          {/* Animated Glow */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute w-96 h-96 bg-[#D71920]/30 rounded-full blur-3xl top-10 -left-24"
          />
          <div className="max-w-7xl mx-auto px-4 py-20 text-center relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4"
            >
              Get Your Personalized Insurance Quote
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
            >
              Fill out our secure form and our experts will find the perfect plan tailored for you.
            </motion.p>
          </div>
        </section>

        {/* ===== FORM SECTION ===== */}
        <section className="py-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-[#1C2B33] text-center mb-8">
              Request a Quote
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Quote request submitted!");
              }}
              className="grid gap-6"
            >
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="p-3 rounded-xl border border-gray-300 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  required
                  className="p-3 rounded-xl border border-gray-300 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
                />
              </div>

              {/* Phone */}
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                placeholder="Your Phone"
                required
                className="p-3 rounded-xl border border-gray-300 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
              />

              {/* Insurance Type */}
              <motion.select
                whileFocus={{ scale: 1.02 }}
                required
                className="p-3 rounded-xl border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
              >
                <option value="">Select Insurance Type</option>
                <option value="health">Health Insurance</option>
                <option value="life">Life Insurance</option>
                <option value="personal">Personal Insurance</option>
                <option value="term-life">Term Life Insurance</option>
                <option value="bike">Bike Insurance</option>
                <option value="car">Car Insurance</option>
                <option value="bus">Bus Insurance</option>
                <option value="commercial">Commercial Vehicle Insurance</option>
                <option value="fire">Fire Insurance</option>
                <option value="marine">Marine Insurance</option>
                <option value="worker">Worker Compensation</option>
                <option value="property">Property Insurance</option>
              </motion.select>

              {/* Message */}
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Any specific details or questions?"
                rows="4"
                className="p-3 rounded-xl border border-gray-300 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
              />

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-fit mx-auto px-8 py-3 bg-[#D71920] hover:bg-[#a31318] text-white font-semibold rounded-full shadow-lg transition"
              >
                Submit Request
              </motion.button>
            </form>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-xs text-gray-600 mt-6 text-center"
            >
              *Your privacy is important to us. This information will only be used for providing your quote.
            </motion.p>
          </motion.div>
        </section>
      </div>
    </>
  );
}
