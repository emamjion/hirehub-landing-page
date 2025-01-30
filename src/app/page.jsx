import Hero from "./components/Hero Section/Hero";
import HowItWorks from "./components/How-It-Works/HowItWorks";
import Features from "./components/Key-Features Section/Features";
import PricingSection from "./components/Pricing/Pricing";
import WhyChooseHireHub from "./components/WhyChooseUs/WhyChosseHireHub";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <WhyChooseHireHub />
      <PricingSection />
    </>
  );
};

export default Homepage;
