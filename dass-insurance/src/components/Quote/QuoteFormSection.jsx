// src/components/quote/QuoteFormSection.jsx
import { motion } from "framer-motion";

export default function QuoteFormSection() {
  return (
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
  );
}
