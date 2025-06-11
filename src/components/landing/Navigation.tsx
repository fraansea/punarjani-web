import React from 'react';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  return (
    <nav className={`bg-white border flex items-stretch gap-[40px_86px] overflow-hidden text-xl text-black font-medium whitespace-nowrap flex-wrap mt-3 px-16 py-[17px] rounded-[50px] border-white border-solid max-md:max-w-full max-md:px-5 ${className}`}>
      <a href="#home" className="hover:text-gray-600 transition-colors">home</a>
      <a href="#services" className="hover:text-gray-600 transition-colors">services</a>
      <a href="#about" className="hover:text-gray-600 transition-colors">about</a>
      <a href="#contact" className="hover:text-gray-600 transition-colors">contact</a>
    </nav>
  );
};
