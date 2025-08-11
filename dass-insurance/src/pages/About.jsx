import { Helmet } from "react-helmet-async";
import HeroSection from "../components/About/HeroSection";
import CompanyStory from "../components/About/CompanyStory";
import MissionValues from "../components/About/MissionValues";
import TrustExperience from "../components/About/TrustExperience";
import CTASection from "../components/About/CTASection";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us - DASS Insurance</title>
        <meta
          name="description"
          content="Learn about DASS Insurance's mission, vision, and values. We provide trusted insurance services with a customer-first approach."
        />
        <link rel="canonical" href="https://dass-insurance.vercel.app/about" />
      </Helmet>

      <div className="bg-[#F9FAFB] text-[#1C2B33]">
        <HeroSection />
        <CompanyStory />
        <MissionValues />
        <TrustExperience />
        <CTASection />
      </div>
    </>
  );
}
