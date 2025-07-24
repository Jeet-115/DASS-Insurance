import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 font-outfit">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10"
      >
        {/* ========== Column 1: Logo + About ========== */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logonbg.png" alt="DASS Insurance" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white tracking-wide">DASS Insurance</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering peace of mind. We offer trusted insurance solutions for life, vehicles, and businesses—ensuring you're always protected.
          </p>
        </div>

        {/* ========== Column 2: Quick Links ========== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About", "Services", "Contact"].map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05, x: 5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* ========== Column 3: Contact Info ========== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>📞 <a href="tel:+919825092724" className="hover:text-blue-400">+91 98250 92724</a></li>
            <li>✉️ <a href="mailto:info@dassinsurance.com" className="hover:text-blue-400">info@dassinsurance.com</a></li>
            <li>📍 301, Trust Complex, Ring Road, Surat, Gujarat, India</li>
          </ul>
        </div>
      </motion.div>

      {/* ========== Bottom Bar ========== */}
      <motion.div
        className="border-t border-slate-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between text-sm text-slate-400">
          <p>© {new Date().getFullYear()} DASS Insurance. All rights reserved.</p>
          <p>
            Built by{" "}
            <a
              href="https://jeetmistry.vercel.app"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jeet Mistry
            </a>
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
