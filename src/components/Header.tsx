import React from 'react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`flex justify-between items-center gap-2.5 w-full max-w-[1296px] ${className}`}>
      {/* Logo */}
      <div className="flex items-center gap-1">
        <div className="w-9 h-9 bg-white flex items-center justify-center relative">
          <img src="./src/assets/justice-scale-icon.svg" alt="Justice Scale" className="absolute w-7 h-8" />
          <div className="absolute w-5 h-5 top-1.5 left-2">
            <img src="./src/assets/justice-scale-1.svg" alt="" className="absolute w-5 h-3" />
            <img src="./src/assets/justice-scale-2.svg" alt="" className="absolute w-5 h-1 top-4" />
            <img src="./src/assets/justice-scale-3.svg" alt="" className="absolute w-2 h-0.5 top-3.5 left-1.5" />
          </div>
        </div>
        <span className="logo-text font-inter font-semibold text-base text-white">Law Firm</span>
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center gap-10">
        <a href="#home" className="nav-link nav-link active font-mulish font-black text-base text-[#604B33] hover:text-[#604B33]">
          Home
        </a>
        <a href="#services" className="nav-link font-mulish font-bold text-base text-white hover:text-[#604B33]">
          Services
        </a>
        <a href="#about" className="nav-link font-mulish font-bold text-base text-white hover:text-[#604B33]">
          About us
        </a>
        <a href="#contact" className="nav-link font-mulish font-bold text-base text-white hover:text-[#604B33]">
          Contact us
        </a>
      </nav>

      {/* Phone */}
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 bg-white flex items-center justify-center">
          <img src="./src/assets/phone-icon.svg" alt="Phone" className="w-4 h-4" />
        </div>
        <span className="logo-text font-inter font-semibold text-base text-white">
          (257) 388-6895
        </span>
      </div>
    </header>
  );
};

export default Header;