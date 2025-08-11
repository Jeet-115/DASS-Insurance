import { motion } from "framer-motion";

const details = [
  { icon: "📞", title: "Phone", detail: "+91 98250 92724", link: "tel:+919825092724" },
  { icon: "✉️", title: "Email", detail: "info@dassinsurance.com", link: "mailto:info@dassinsurance.com" },
  { icon: "📍", title: "Address", detail: "DASS Insurance Office, Your City, Your State", link: null }
];

export default function ContactDetails() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
      {details.map((item, i) => (
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
            <a href={item.link} className="text-[#861c1c] hover:underline break-all">
              {item.detail}
            </a>
          ) : (
            <p className="opacity-80">{item.detail}</p>
          )}
        </motion.div>
      ))}
    </section>
  );
}
