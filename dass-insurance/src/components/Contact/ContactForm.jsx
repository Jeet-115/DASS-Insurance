import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 text-black"
    >
      <h2 className="text-3xl font-bold text-center mb-6">Send Us a Message</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submitted!");
        }}
        className="grid gap-6"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <motion.input whileFocus={{ scale: 1.02 }} type="text" placeholder="Your Name" required
            className="p-3 rounded-xl bg-white/20 placeholder:text-black/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
          />
          <motion.input whileFocus={{ scale: 1.02 }} type="email" placeholder="Your Email" required
            className="p-3 rounded-xl bg-white/20 placeholder:text-black/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
          />
        </div>

        <motion.input whileFocus={{ scale: 1.02 }} type="tel" placeholder="Your Phone"
          className="p-3 rounded-xl bg-white/20 placeholder:text-black/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
        />

        <motion.textarea whileFocus={{ scale: 1.02 }} placeholder="Your Message" rows="4"
          className="p-3 rounded-xl bg-white/20 placeholder:text-black/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
        />

        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} type="submit"
          className="w-fit mx-auto px-8 py-3 bg-[#D71920] hover:bg-[#A31418] text-white font-semibold rounded-full shadow-lg transition"
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
}
