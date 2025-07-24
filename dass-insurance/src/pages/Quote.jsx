import { motion } from "framer-motion";

export default function Quote() {
  return (
    <div className="min-h-screen bg-[#E0E0E0] font-[Outfit]">
      {/* ===== HERO SECTION ===== */}
      <section className="bg-[linear-gradient(to_bottom,#1F2D3C_0%,#1BA089_100%)] text-white py-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Your Personalized Insurance Quote
          </h1>
          <p className="text-lg opacity-90">
            Fill out the secure form below and our team will get back to you with the best options.
          </p>
        </motion.div>
      </section>

      {/* ===== FORM SECTION ===== */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-xl"
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
                className="p-3 rounded-xl border border-[#B0BEC5] placeholder:text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
              />
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                placeholder="Your Email"
                required
                className="p-3 rounded-xl border border-[#B0BEC5] placeholder:text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
              />
            </div>

            {/* Phone */}
            <motion.input
              whileFocus={{ scale: 1.02 }}
              type="tel"
              placeholder="Your Phone"
              required
              className="p-3 rounded-xl border border-[#B0BEC5] placeholder:text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
            />

            {/* Insurance Type */}
            <motion.select
              whileFocus={{ scale: 1.02 }}
              required
              className="p-3 rounded-xl border border-[#B0BEC5] text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
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
              className="p-3 rounded-xl border border-[#B0BEC5] placeholder:text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
            />

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-fit mx-auto px-8 py-3 bg-[#1BA089] hover:bg-[#006064] text-white font-semibold rounded-full shadow-lg transition"
            >
              Submit Request
            </motion.button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs text-[#37474F] mt-6 text-center"
          >
            *Your privacy is important to us. This information will only be used for providing your quote.
          </motion.p>
        </motion.div>
      </section>
    </div>
  );
}
