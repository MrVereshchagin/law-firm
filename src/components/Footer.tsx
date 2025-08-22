import React from 'react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <footer
      className={`flex flex-col items-center gap-16 pt-15 pb-5 px-18 w-full ${className}`}
      style={{
        backgroundImage: 'url(./src/assets/footer-bg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="flex w-full max-w-[1296px] gap-33">
        {/* Left Column - Logo and Description */}
        <div className="flex flex-col gap-6 w-[305px]">
          <div className="flex items-center gap-1">
            <div className="w-9 h-9 bg-white flex items-center justify-center relative">
              <img src="./src/assets/justice-scale-icon.svg" alt="Justice Scale" className="absolute w-7 h-8" />
              <div className="absolute w-5 h-5 top-1.5 left-2.5">
                <img src="./src/assets/justice-scale-1.svg" alt="" className="absolute w-5 h-3" />
                <img src="./src/assets/justice-scale-2.svg" alt="" className="absolute w-5 h-1 top-4" />
                <img src="./src/assets/justice-scale-3.svg" alt="" className="absolute w-2 h-0.5 top-3.5 left-1.5" />
              </div>
            </div>
            <span className="logo-text font-inter font-semibold text-base text-white">Law Firm</span>
          </div>
          <p className="footer-text text-white">
            Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed.
          </p>
          <div className="flex items-center gap-3">
            <a href="#" className="w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="./src/assets/facebook-icon.svg" alt="Facebook" className="w-2.5 h-2.5" />
            </a>
            <a href="#" className="w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="./src/assets/x-icon.svg" alt="X" className="w-2.5 h-2.5" />
            </a>
            <a href="#" className="w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="./src/assets/instagram-icon.svg" alt="Instagram" className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-5 h-5 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors">
              <img src="./src/assets/telegram-icon.svg" alt="Telegram" className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>

        {/* Right Columns */}
        <div className="flex gap-33 w-[743px]">
          {/* Practice Areas */}
          <div className="flex flex-col gap-8">
            <h3 className="footer-title font-mulish font-semibold text-xl text-white">Practice Areas</h3>
            <div className="flex flex-col gap-6">
              <a href="#" className="footer-link footer-text">Banking and Finance</a>
              <a href="#" className="footer-link footer-text">Business Law</a>
              <a href="#" className="footer-link footer-text">Real Estate</a>
              <a href="#" className="footer-link footer-text">Family Law</a>
            </div>
          </div>

          {/* Find Us */}
          <div className="flex flex-col gap-8">
            <h3 className="footer-title font-mulish font-semibold text-xl text-white">Find Us</h3>
            <div className="flex flex-col gap-6">
              <p className="footer-text">
                43 W. Wellington Road Fairhope<br />
                AL 36532
              </p>
              <a href="tel:+12573886895" className="footer-link footer-text">(257) 388-6895</a>
              <a href="mailto:temmink@outlook.com" className="footer-link footer-text">temmink@outlook.com</a>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-8">
            <h3 className="footer-title font-mulish font-semibold text-xl text-white">Links</h3>
            <div className="flex flex-col gap-6">
              <a href="#home" className="footer-link footer-text">Home</a>
              <a href="#services" className="footer-link footer-text">Services</a>
              <a href="#about" className="footer-link footer-text">About Us</a>
              <a href="#contact" className="footer-link footer-text">Contact Us</a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <p className="footer-text text-center text-white opacity-50">
        ©Copyright Law Firm 2023. Design by Figma.guru
      </p>
    </footer>
  );
};

export default Footer;