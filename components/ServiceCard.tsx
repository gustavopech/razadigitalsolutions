'use client';

import { useState } from 'react';

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: React.ReactNode;
  // link?: string;
};

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <a
      // href={link}
      className="group perspective max-w-xl w-full mx-auto h-80 sm:h-72 cursor-pointer"
      onClick={(e) => {
        if (window.innerWidth < 768) {
          e.preventDefault(); // Prevent link on mobile flip
          setFlipped((prev) => !prev);
        }
      }}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
          flipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'
        }`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-white border border-black backface-hidden p-4">
          {icon && <div className="w-8 h-8 mb-2">{icon}</div>}
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 bg-white border border-black text-center p-4 rotate-y-180 backface-hidden flex flex-col justify-center">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="mt-2 text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </a>
  );
}
