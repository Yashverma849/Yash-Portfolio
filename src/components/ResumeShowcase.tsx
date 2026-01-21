import React from 'react';

const RESUME_URL = '/assets/Yash_Verma_Resume.pdf'; // Place your resume.pdf in public/assets/

const ResumeShowcase: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-full max-w-2xl h-[500px] border rounded-lg overflow-hidden mb-6 shadow-lg relative">
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
