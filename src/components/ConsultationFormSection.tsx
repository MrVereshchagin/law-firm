import React from 'react';

interface ConsultationFormSectionProps {
  className?: string;
}

const ConsultationFormSection: React.FC<ConsultationFormSectionProps> = ({ className = '' }) => {
  return (
    <section
      className={`flex justify-center items-center gap-33.5 pt-30 pb-30 px-45.5 w-full max-w-[1440px] ${className}`}
      style={{
        backgroundImage: 'url(./src/assets/consultation-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        backgroundBlendMode: 'overlay',
      }}
    >
      {/* Left Side - Logo and Text */}
      <div className="flex flex-col items-center gap-10 pt-30 pb-30">
        <div className="flex flex-col items-center gap-1">
          <span className="font-inter font-bold text-xl text-white">Lawyer</span>
          <div className="w-18.5 h-18.5 bg-white flex items-center justify-center relative">
            <img src="./src/assets/justice-scale-icon.svg" alt="Justice Scale" className="absolute w-15 h-17" />
            <div className="absolute w-10 h-10 top-3 left-4.5">
              <img src="./src/assets/justice-scale-1.svg" alt="" className="absolute w-10 h-7" />
              <img src="./src/assets/justice-scale-2.svg" alt="" className="absolute w-10 h-1 top-9" />
              <img src="./src/assets/justice-scale-3.svg" alt="" className="absolute w-4 h-1 top-7 left-3" />
            </div>
          </div>
        </div>
        <h2 className="section-title font-mulish font-bold text-4xl leading-tight text-center text-white max-w-[416px]">
          Request a free consultation
        </h2>
        <p className="body-text font-inter text-base leading-relaxed text-center text-white max-w-[416px]">
          Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.
          Pretium purus feugiat volutpat pellentesque.Potenti porta mauris nec vulputate.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-col gap-6 p-10 w-[526px] bg-[#F9F8F5]">
        {/* First Row */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="form-label font-inter font-semibold text-base text-black">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="form-input p-3.5 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="form-label font-inter font-semibold text-base text-black">Phone</label>
            <input
              type="tel"
              placeholder="Your Phone"
              className="form-input p-3.5 bg-white"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="flex gap-6">
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="form-label font-inter font-semibold text-base text-black">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="form-input p-3.5 bg-white"
            />
          </div>
          <div className="flex flex-col gap-1.5 flex-1">
            <label className="form-label font-inter font-semibold text-base text-black">Service</label>
            <div className="relative">
              <select className="form-input p-3.5 bg-white appearance-none w-full">
                <option>Civil Law</option>
                <option>Family Law</option>
                <option>Business Law</option>
                <option>Real Estate</option>
                <option>Banking and Finance</option>
                <option>Corporate Law</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4">
                <img src="./src/assets/select-arrow.svg" alt="" className="w-3.5 h-2" />
              </div>
            </div>
          </div>
        </div>

        {/* Subject Field */}
        <div className="flex flex-col gap-1.5">
          <label className="form-label font-inter font-semibold text-base text-black">Subject</label>
          <input
            type="text"
            placeholder="Subject"
            className="form-input p-3.5 bg-white"
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col gap-1.5 h-55">
          <label className="form-label font-inter font-semibold text-base text-black">Message</label>
          <textarea
            placeholder="Message"
            className="form-input p-3.5 bg-white flex-1 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="btn btn-primary bg-[#604B33] text-white w-full py-4">
          Request consultation
        </button>
      </div>
    </section>
  );
};

export default ConsultationFormSection;