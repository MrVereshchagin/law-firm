import React from 'react';

interface AttorneyCardProps {
  name: string;
  position: string;
  image: string;
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    telegram?: string;
  };
  className?: string;
}

const AttorneyCard: React.FC<AttorneyCardProps> = ({
  name,
  position,
  image,
  socialLinks = {},
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center gap-3.5 ${className}`}>
      <div className="w-[416px] h-[416px] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <h3 className="card-title font-mulish font-bold text-2xl text-center text-black">
            {name}
          </h3>
          <p className="body-text text-center text-[#94744E]">
            {position}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socialLinks.facebook && (
            <a
              href={socialLinks.facebook}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./src/assets/facebook-icon.svg" alt="Facebook" className="w-3 h-3" />
            </a>
          )}
          {socialLinks.twitter && (
            <a
              href={socialLinks.twitter}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./src/assets/x-icon.svg" alt="X" className="w-3 h-3" />
            </a>
          )}
          {socialLinks.instagram && (
            <a
              href={socialLinks.instagram}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./src/assets/instagram-icon.svg" alt="Instagram" className="w-4 h-4" />
            </a>
          )}
          {socialLinks.telegram && (
            <a
              href={socialLinks.telegram}
              className="w-6 h-6 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./src/assets/telegram-icon.svg" alt="Telegram" className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default AttorneyCard;