import React from 'react';

interface BlogCardProps {
  title: string;
  date: string;
  image: string;
  readMoreLink?: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  date,
  image,
  readMoreLink = '#',
  className = '',
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="h-70 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 py-2">
        <div className="flex flex-col gap-3">
          <span className="body-text-small text-black opacity-80">
            {date}
          </span>
          <h3 className="service-title font-mulish font-bold text-xl text-[#604B33]">
            {title}
          </h3>
        </div>
        <a
          href={readMoreLink}
          className="flex items-center gap-2 text-black hover:text-[#604B33] transition-colors"
        >
          <span className="body-text-small font-inter font-semibold text-xs uppercase">
            Read more
          </span>
          <div className="flex items-center">
            <img src="./src/assets/arrow-right.svg" alt="" className="w-3 h-px" />
            <img src="./src/assets/arrow-right-2.svg" alt="" className="w-1.5 h-3" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;