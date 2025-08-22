import React from 'react';
import { Header, Button } from '../components';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex flex-col items-center gap-30 pt-5 pb-30 px-18 h-[680px] ${className}`}
      style={{
        backgroundImage: 'url(./src/assets/hero-bg-5a112f.png)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Header */}
      <Header />

      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center gap-5 max-w-[882px]">
        <h1 className="hero-title font-mulish font-bold text-4xl leading-tight uppercase text-center text-white">
          Legal solutions for business and individual needs
        </h1>
        <p className="body-text text-center text-white max-w-[574px]">
          Pretium purus feugiat volutpat pellenteotenti porta mauris nec vulputate.
          Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer
          ultrices lacus est. Tempus ultrices placerat tellus morbi.
        </p>
        <div className="flex gap-4">
          <Button variant="primary" className="bg-[#604B33] text-white px-8 py-4">
            Make enquiry
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;