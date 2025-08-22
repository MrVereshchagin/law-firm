import React from 'react';
import { ServiceCard } from '../components';

interface ServicesSectionProps {
  className?: string;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ className = '' }) => {
  const services = [
    {
      title: 'Banking and Finance',
      description: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer ultrices lacus est. Tempus ultrices placerat tellus morbi.',
      iconSvgs: [
        '/src/assets/banking-icon-1.svg',
        '/src/assets/banking-icon-2.svg',
        '/src/assets/banking-icon-3.svg',
        '/src/assets/banking-icon-4.svg',
        '/src/assets/banking-icon-5.svg',
        '/src/assets/banking-icon-6.svg',
      ],
    },
    {
      title: 'Family Law',
      description: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer ultrices lacus est. Tempus ultrices placerat tellus morbi.',
      iconSvgs: [
        '/src/assets/family-icon-1.svg',
        '/src/assets/family-icon-2.svg',
        '/src/assets/family-icon-3.svg',
        '/src/assets/family-icon-4.svg',
      ],
    },
    {
      title: 'Business Law',
      description: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer ultrices lacus est. Tempus ultrices placerat tellus morbi.',
      iconSvgs: [
        '/src/assets/business-icon-1.svg',
        '/src/assets/business-icon-2.svg',
        '/src/assets/business-icon-3.svg',
        '/src/assets/business-icon-4.svg',
        '/src/assets/business-icon-5.svg',
      ],
    },
    {
      title: 'Real Estate',
      description: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer ultrices lacus est. Tempus ultrices placerat tellus morbi.',
      iconSvgs: [
        '/src/assets/real-estate-icon-1.svg',
        '/src/assets/real-estate-icon-2.svg',
        '/src/assets/real-estate-icon-3.svg',
      ],
    },
    {
      title: 'Civil Law',
      description: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer ultrices lacus est. Tempus ultrices placerat tellus morbi.',
      iconSvgs: [
        '/src/assets/civil-icon-1.svg',
        '/src/assets/civil-icon-2.svg',
        '/src/assets/civil-icon-3.svg',
        '/src/assets/civil-icon-4.svg',
        '/src/assets/civil-icon-5.svg',
        '/src/assets/civil-icon-6.svg',
      ],
    },
    {
      title: 'Corporate Law',
      description: 'Adipiscing nam neque hendrerit nec pellentesque diam a. Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer ultrices lacus est. Tempus ultrices placerat tellus morbi.',
      iconSvgs: [
        '/src/assets/corporate-icon-1.svg',
        '/src/assets/corporate-icon-2.svg',
        '/src/assets/corporate-icon-3.svg',
      ],
    },
  ];

  return (
    <section className={`flex flex-col items-center pt-97.5 w-full max-w-[1440px] ${className}`}>
      <div className="flex flex-col items-center gap-28 pt-15 pb-15 w-[1079px]">
        {/* First Row */}
        <div className="flex justify-between w-full gap-30.5">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              iconSvgs={service.iconSvgs}
            />
          ))}
        </div>

        {/* Second Row */}
        <div className="flex justify-between w-full gap-30.5">
          {services.slice(3, 6).map((service, index) => (
            <ServiceCard
              key={index + 3}
              title={service.title}
              description={service.description}
              iconSvgs={service.iconSvgs}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;