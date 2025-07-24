import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact DASS Insurance</title>
        <meta
          name="description"
          content="Get in touch with DASS Insurance for inquiries, support, or to start your insurance journey today."
        />
        <link rel="canonical" href="https://dassinsurance.com/contact" />
      </Helmet>
      <div className="min-h-screen bg-[#E0E0E0] font-[Outfit] text-[#1C2B33]">
        {/* ===== HERO SECTION ===== */}
        <section className="bg-gradient-to-b from-[#1F2D3C] to-[#1BA089] text-white py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-6 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg opacity-90 max-w-xl mx-auto">
              Have questions or need assistance? We’re here to help you make
              informed decisions.
            </p>
          </motion.div>
        </section>

        {/* ===== CONTACT DETAILS ===== */}
        <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: "📞",
              title: "Phone",
              detail: "+91 98250 92724",
              link: "tel:+919825092724",
            },
            {
              icon: "✉️",
              title: "Email",
              detail: "info@dassinsurance.com",
              link: "mailto:info@dassinsurance.com",
            },
            {
              icon: "📍",
              title: "Address",
              detail: "DASS Insurance Office, Your City, Your State",
              link: null,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-[#1BA089] hover:underline break-all"
                >
                  {item.detail}
                </a>
              ) : (
                <p className="text-[#455A64]">{item.detail}</p>
              )}
            </motion.div>
          ))}
        </section>

        {/* ===== GOOGLE MAP ===== */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-6"
            >
              Find Us Here
            </motion.h2>
            <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
              <iframe
                title="DASS Insurance Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.6371696952365!2d73.13152907492764!3d22.331770200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc904686c292d%3A0x176b75c40ee26539!2sDass%20Insurance!5e1!3m2!1sen!2sin!4v1753276352833!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* ===== CONTACT FORM ===== */}
        <section className="pb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto px-4 bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-center mb-6">
              Send Us a Message
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submitted!");
              }}
              className="grid gap-6"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="Your Name"
                  required
                  className="p-3 rounded-xl border border-gray-300 placeholder:text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="Your Email"
                  required
                  className="p-3 rounded-xl border border-gray-300 placeholder:text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
                />
              </div>

              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="tel"
                placeholder="Your Phone"
                className="p-3 rounded-xl border border-gray-300 placeholder:text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
              />

              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                placeholder="Your Message"
                rows="4"
                className="p-3 rounded-xl border border-gray-300 placeholder:text-[#37474F] focus:outline-none focus:ring-2 focus:ring-[#1BA089]"
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="w-fit mx-auto px-8 py-3 bg-[#1BA089] hover:bg-[#006064] text-white font-semibold rounded-full shadow-lg transition"
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </section>
      </div>
    </>
  );
}
