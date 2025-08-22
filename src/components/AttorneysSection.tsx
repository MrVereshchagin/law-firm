import React from 'react';
import { AttorneyCard } from '../components';

interface AttorneysSectionProps {
  className?: string;
}

const AttorneysSection: React.FC<AttorneysSectionProps> = ({ className = '' }) => {
  const attorneys = [
    {
      name: 'Jackson Bauer',
      position: 'Finance Lawyer',
      image: './src/assets/attorney1.png',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        telegram: '#',
      },
    },
    {
      name: 'Stephanie Reilly',
      position: 'Criminal Defence Lawyer',
      image: './src/assets/attorney2.png',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        telegram: '#',
      },
    },
    {
      name: 'Matthew Webb',
      position: 'Tax Lawyer',
      image: './src/assets/attorney3.png',
      socialLinks: {
        facebook: '#',
        twitter: '#',
        instagram: '#',
        telegram: '#',
      },
    },
  ];

  return (
    <section className={`flex flex-col items-center gap-10 pt-15 pb-15 px-18 w-full max-w-[1440px] ${className}`}>
      <div className="flex flex-col items-center gap-6 w-[636px]">
        <h2 className="section-title font-mulish font-bold text-4xl leading-tight capitalize text-[#604B33] text-center">
          Our attorneys
        </h2>
        <p className="body-text-small text-center text-black">
          Varius quisque odio mauris lectus consequat sedretium purus feugiat volutpat pell
        </p>
      </div>
      <div className="flex gap-6">
        {attorneys.map((attorney, index) => (
          <AttorneyCard
            key={index}
            name={attorney.name}
            position={attorney.position}
            image={attorney.image}
            socialLinks={attorney.socialLinks}
          />
        ))}
      </div>
    </section>
  );
};

export default AttorneysSection;