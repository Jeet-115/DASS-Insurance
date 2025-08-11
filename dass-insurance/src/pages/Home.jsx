import { Helmet } from "react-helmet-async";
import HeroSection from "../components/home/HeroSection";
import ServicesOverview from "../components/home/ServicesOverview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import AboutTeaser from "../components/home/AboutTeaser";
import Testimonials from "../components/home/Testimonials";
import ContactCTA from "../components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>DASS Insurance - Protect What Matters Most</title>
        <meta
          name="description"
          content="DASS Insurance offers trusted insurance services including health, life, vehicle, and industrial coverage with personalized support."
        />
        <meta
          name="keywords"
          content="Insurance, Health Insurance, Life Insurance, Vehicle Insurance, Industrial Insurance"
        />
        <link rel="canonical" href="https://dass-insurance.vercel.app/" />
      </Helmet>

      <div className="bg-[#F9FAFB] text-[#1C2B33]">
        <HeroSection />
        <ServicesOverview />
        <WhyChooseUs />
        <AboutTeaser />
        {/* <Testimonials /> */}
        <ContactCTA />
      </div>
    </>
  );
}
