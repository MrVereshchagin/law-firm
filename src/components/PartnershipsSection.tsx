import React from 'react';

interface PartnershipsSectionProps {
  className?: string;
}

const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`flex justify-between items-center gap-36 pt-21.5 pb-21.5 px-21.5 w-full max-w-[1440px] bg-white ${className}`}>
      {/* Text Content */}
      <div className="flex flex-col gap-5 w-[526px]">
        <h2 className="section-title font-mulish font-bold text-4xl leading-tight capitalize text-[#604B33] w-full">
          Trusted legal partnerships
        </h2>
        <p className="body-text-large font-inter text-xl leading-relaxed text-black max-w-[505px]">
          Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.
          Pretium purus feugiat volutpat pellentesque.
          <br /><br />
          Potenti porta mauris nec vulputate.
        </p>
        <div className="w-60 h-11">
          <img
            src="./src/assets/partnerships-image.png"
            alt="Partnership signature"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Image Section */}
      <div
        className="flex items-end p-6 w-[440px] h-80"
        style={{
          backgroundImage: 'url(./src/assets/partnerships-bg-7e6cc0.png)',
          backgroundSize: '100% 100%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <p className="font-mulish font-semibold text-base text-[#FAF9F4]">
          Julio Jefferson
        </p>
      </div>
    </section>
  );
};

export default PartnershipsSection;