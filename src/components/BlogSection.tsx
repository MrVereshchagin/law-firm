import React from 'react';
import { BlogCard } from '../components';

interface BlogSectionProps {
  className?: string;
}

const BlogSection: React.FC<BlogSectionProps> = ({ className = '' }) => {
  const blogPosts = [
    {
      title: 'Legal Consultation and Advice',
      date: 'November 9,2023',
      image: './src/assets/blog1.png',
      readMoreLink: '#',
    },
    {
      title: 'Law and Justice',
      date: 'November 9,2023',
      image: './src/assets/blog2.png',
      readMoreLink: '#',
    },
    {
      title: 'Crime, civil law, justice and rights',
      date: 'November 9,2023',
      image: './src/assets/blog3-2d6a98.png',
      readMoreLink: '#',
    },
  ];

  return (
    <section className={`flex flex-col items-center gap-10 pt-15 pb-15 bg-[#FAF9F4] ${className}`}>
      <div className="flex flex-col items-center gap-6 w-[636px]">
        <h2 className="section-title font-mulish font-bold text-4xl leading-tight capitalize text-[#604B33] text-center">
          our blog
        </h2>
        <p className="body-text-large text-center text-black">
          Adipiscing nam neque hendrerit nec pellentesque diamarius quisque odio
        </p>
      </div>
      <div className="flex justify-stretch items-stretch gap-6 px-18 w-full max-w-[1440px]">
        {blogPosts.map((post, index) => (
          <BlogCard
            key={index}
            title={post.title}
            date={post.date}
            image={post.image}
            readMoreLink={post.readMoreLink}
            className="flex-1"
          />
        ))}
      </div>
    </section>
  );
};

export default BlogSection;