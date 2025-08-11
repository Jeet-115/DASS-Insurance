// src/pages/Quote.jsx
import { Helmet } from "react-helmet-async";
import QuoteHeroSection from "../components/Quote/QuoteHeroSection";
import QuoteFormSection from "../components/Quote/QuoteFormSection";

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
        <QuoteHeroSection />
        <QuoteFormSection />
      </div>
    </>
  );
}
