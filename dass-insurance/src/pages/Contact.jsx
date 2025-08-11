import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
        {/* ===== HERO SECTION (Matching About Page) ===== */}
        <section className="relative bg-gradient-to-r from-[#1F2D3C] to-[#3E3E3E] text-white overflow-hidden">
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
              Contact DASS Insurance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto"
            >
              Have questions or need assistance? We’re here to help you make
              informed decisions and find the right insurance solutions.
            </motion.p>
          </div>
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
              className="bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:shadow-xl transition text-black"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
              {item.link ? (
                <a
                  href={item.link}
                  className="text-[#861c1c] hover:underline break-all"
                >
                  {item.detail}
                </a>
              ) : (
                <p className="opacity-80">{item.detail}</p>
              )}
            </motion.div>
          ))}
        </section>

        {/* ===== GOOGLE MAP & CONTACT FORM SIDE-BY-SIDE ===== */}
        <section className="lg:pb-16">
          <div className="max-w-6xl mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-center mb-6 text-[#1F2D3C]"
            >
              Get in Touch
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-300">
                <iframe
                  title="DASS Insurance Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.6371696952365!2d73.13152907492764!3d22.331770200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc904686c292d%3A0x176b75c40ee26539!2sDass%20Insurance!5e1!3m2!1sen!2sin!4v1753276352833!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl p-8 text-black"
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
                      className="p-3 rounded-xl bg-white/20 placeholder:text-black/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
                    />
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      type="email"
                      placeholder="Your Email"
                      required
                      className="p-3 rounded-xl bg-white/20 placeholder:text-black/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
                    />
                  </div>

                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="tel"
                    placeholder="Your Phone"
                    className="p-3 rounded-xl bg-white/20 placeholder:text-black/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
                  />

                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    placeholder="Your Message"
                    rows="4"
                    className="p-3 rounded-xl bg-white/20 placeholder:text-black/80 border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#D71920]"
                  />

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    className="w-fit mx-auto px-8 py-3 bg-[#D71920] hover:bg-[#A31418] text-white font-semibold rounded-full shadow-lg transition"
                  >
                    Submit
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
