import React from 'react';

interface TestimonialsSectionProps {
  className?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className = '' }) => {
  return (
    <section className={`flex flex-col items-center gap-5 pt-25 pb-25 w-full max-w-[1440px] bg-white ${className}`}>
      <div className="flex flex-col items-center gap-6 w-[636px]">
        <h2 className="section-title font-mulish font-bold text-4xl leading-tight capitalize text-[#604B33] text-center">
          What our client says
        </h2>
        <p className="body-text-small text-center text-black">
          Our Testimonials
        </p>
      </div>

      <div className="flex justify-between items-center gap-36 px-18 w-full max-w-[1440px]">
        <div className="flex flex-col gap-5 px-27.5 w-[637px]">
          <p className="body-text-large font-inter text-xl leading-relaxed text-black">
            Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.
            Pretium purus feugiat volutpat pellentesque.Potenti porta mauris nec vulputate.
          </p>
          <div className="flex flex-col gap-3">
            <h4 className="card-title font-mulish font-bold text-2xl text-black">
              Kirsten Gutierrez
            </h4>
            <p className="body-text text-[#94744E]">
              Founder K&G Company
            </p>
          </div>
        </div>

        <div className="relative w-10 h-48">
          <div className="absolute top-0 left-5 w-0 h-48 border-l-2 border-[#94744E]"></div>
          <div className="absolute top-10 left-0 flex justify-center items-center gap-2.5 w-10 h-10">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <img src="./src/assets/quotes-icon.svg" alt="Quote" className="w-3.5 h-3" />
            </div>
          </div>
        </div>

        <div
          className="w-76.5 h-62"
          style={{
            backgroundImage: 'url(./src/assets/testimonial-image-7c3807.png)',
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="relative w-full h-full">
            <p className="absolute bottom-8 left-9 font-inter font-semibold text-xl text-[#F8EDD6]">
              Julio Jefferson
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;