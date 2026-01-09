
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Official Wichmann Logo Recreation */}
          <div className="flex items-center gap-3">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={isScrolled ? "text-[#0D4E99]" : "text-[#0D4E99]"}>
               <path d="M10 20H90L50 85L10 20Z" fill="currentColor" />
               <path d="M50 40L30 70H70L50 40Z" fill="white" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-[#0D4E99]' : 'text-[#0D4E99]'}`}>
                WICHMANN
              </span>
              <span className={`text-[0.65rem] font-medium tracking-[0.3em] uppercase ${isScrolled ? 'text-[#666666]' : 'text-[#666666]'}`}>
                IT-SERVICES
              </span>
            </div>
          </div>
        </div>

        {/* Navigation removed as requested, only logo remains */}
      </div>
    </header>
  );
};

export default Header;
