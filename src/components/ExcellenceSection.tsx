import React from 'react';
import { Button } from '../components';

interface ExcellenceSectionProps {
  className?: string;
}

const ExcellenceSection: React.FC<ExcellenceSectionProps> = ({ className = '' }) => {
  return (
    <section className={`flex gap-6 pt-15 pb-15 px-45.5 ${className}`}>
      <div className="w-[526px] h-[526px]">
        <img
          src="./src/assets/excellence-image-762f90.png"
          alt="Legal Excellence"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-10 w-[526px] h-[526px]">
        <h2 className="section-title font-mulish font-bold text-4xl leading-tight text-center text-[#604B33] max-w-[416px]">
          Legal Excellence, Personalized Care
        </h2>
        <p className="body-text font-inter text-base leading-relaxed text-center text-black max-w-[416px]">
          Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.
          Pretium purus feugiat volutpat pellentesque.Potenti porta mauris nec vulputate.
        </p>
        <Button variant="primary" className="bg-[#604B33] text-white">
          Learn more
        </Button>
      </div>
    </section>
  );
};

export default ExcellenceSection;