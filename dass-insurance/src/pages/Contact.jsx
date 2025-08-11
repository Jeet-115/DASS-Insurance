import { Helmet } from "react-helmet-async";
import ContactHero from "../components/Contact/ContactHero";
import ContactDetails from "../components/Contact/ContactDetails";
import GoogleMap from "../components/Contact/GoogleMap";
import ContactForm from "../components/Contact/ContactForm";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact DASS Insurance</title>
        <meta name="description" content="Get in touch with DASS Insurance for inquiries, support, or to start your insurance journey today." />
        <link rel="canonical" href="https://dassinsurance.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-[#E0E0E0] font-[Outfit] text-[#1C2B33]">
        <ContactHero />
        <ContactDetails />

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
              <GoogleMap />
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
