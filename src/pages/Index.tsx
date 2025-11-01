import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CompanyIntroSection from "@/components/CompanyIntroSection";
import SuppliesServicesSection from "@/components/SuppliesServicesSection";
import KeyObjectivesSection from "@/components/KeyObjectivesSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <CompanyIntroSection />
    <SuppliesServicesSection />
    <KeyObjectivesSection />
    <Footer />
  </div>
);

export default Index;
