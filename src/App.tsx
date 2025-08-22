import React from 'react';
import {
  HeroSection,
  PartnershipsSection,
  ServicesSection,
  BannerSection,
  AttorneysSection,
  ExcellenceSection,
  TestimonialsSection,
  ConsultationFormSection,
  BlogSection,
  Footer
} from './components';

function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F4]">
      <HeroSection />
      <PartnershipsSection />
      <ServicesSection />
      <BannerSection />
      <AttorneysSection />
      <ExcellenceSection />
      <TestimonialsSection />
      <ConsultationFormSection />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;
