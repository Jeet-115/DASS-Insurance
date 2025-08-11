// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";

export default function App() {
  return (
    <>
      <Helmet>
        {/* ✅ Global Structured Data */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DASS Insurance",
              "url": "https://dass-insurance.vercel.app",
              "logo": "https://dass-insurance.vercel.app/logonbg.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 98250 92724",
                "email": "info@dassinsurance.com",
                "contactType": "Customer Service"
              }
            }
          `}
        </script>
      </Helmet>

      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/quote" element={<Quote />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}
