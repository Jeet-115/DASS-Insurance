// src/pages/Services.jsx
import { Helmet } from "react-helmet-async";
import HeroSection from "../components/services/HeroSection";
import InfoSection from "../components/services/InfoSection";
import ServiceTemplate from "../components/services/ServiceTemplate";
import CTASection from "../components/services/CTASection";

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Insurance Services - DASS Insurance</title>
        <meta
          name="description"
          content="Explore all services from DASS Insurance including health, life, vehicle, and industrial insurance with detailed explanations."
        />
        <link rel="canonical" href="https://dassinsurance.com/services" />
      </Helmet>

      <div className="bg-white text-gray-800">
        <HeroSection />
        <InfoSection />
        <ServiceTemplate />
        <CTASection />
      </div>
    </>
  );
}
