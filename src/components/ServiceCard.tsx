import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  iconSvgs: string[];
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  iconSvgs,
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 bg-white">
        <div className="flex items-center justify-center w-full h-full relative">
          {iconSvgs.map((iconPath, index) => (
            <img
              key={index}
              src={iconPath}
              alt=""
              className="absolute"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '100%',
              }}
            />
          ))}
        </div>
      </div>
      <h3 className="service-title font-mulish font-bold text-xl text-center text-[#604B33]">
        {title}
      </h3>
      <p className="body-text-small text-center max-w-60 text-black leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;