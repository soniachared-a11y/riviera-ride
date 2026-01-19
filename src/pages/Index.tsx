import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesIntroSection from '@/components/ServicesIntroSection';
import ServicesCarouselSection from '@/components/ServicesCarouselSection';
import ProcessSection from '@/components/ProcessSection';
import VehicleSection from '@/components/VehicleSection';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ServicesIntroSection />
      <ServicesCarouselSection />
      <ProcessSection />
      <VehicleSection />
      <AboutSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
