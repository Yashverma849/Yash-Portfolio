import React from 'react';

const RESUME_URL = '/assets/Yash_Verma_Resume.pdf';

const ResumeShowcase: React.FC = () => {
  return (
    <div className="w-full">
      <div className="w-full aspect-[3/4] sm:aspect-[4/5] max-h-[min(70vh,560px)] border rounded-lg overflow-hidden shadow-lg relative">
        <iframe
          src={RESUME_URL}
          title="Resume PDF"
          width="100%"
          height="100%"
          className="w-full h-full"
        />
        <a
          href={RESUME_URL}
          download
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-2xl font-bold hover:opacity-0 transition-opacity cursor-pointer"
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default ResumeShowcase;
