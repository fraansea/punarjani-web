import React from 'react';

interface NavigationProps {
  className?: string;
}

export const Navigation: React.FC<NavigationProps> = ({ className = "" }) => {
  return (
    <nav className={`bg-white border flex items-stretch gap-[40px_86px] overflow-hidden text-xl text-black font-medium whitespace-nowrap flex-wrap mt-3 px-16 py-[17px] rounded-[50px] border-white border-solid max-md:max-w-full max-md:px-5 ${className}`}>
      <a href="#home" className="hover:text-gray-600 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-lime-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">home</a>
      <a href="#services" className="hover:text-gray-600 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-lime-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">services</a>
      <a href="#about" className="hover:text-gray-600 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-lime-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">about</a>
      <a href="#contact" className="hover:text-gray-600 transition-colors relative after:content-[''] after:block after:h-0.5 after:bg-lime-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300">contact</a>
    </nav>
  );
};
