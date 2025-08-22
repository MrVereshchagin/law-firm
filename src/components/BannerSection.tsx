import React from 'react';
import { Button } from '../components';

interface BannerSectionProps {
  className?: string;
}

const BannerSection: React.FC<BannerSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex justify-stretch items-stretch gap-15 px-18 w-full max-w-[1440px] h-65 ${className}`}
      style={{
        backgroundImage: 'url(./src/assets/banner-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="flex flex-col justify-center items-center gap-10 flex-1">
        <h2 className="font-mulish font-bold text-3xl leading-tight capitalize text-white">
          Have legal questions? Ask our experts!
        </h2>
        <Button variant="primary" className="bg-[#604B33] text-white">
          Ask an expert
        </Button>
      </div>
    </section>
  );
};

export default BannerSection;