
import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F5F5F5]">
      {/* Parallax Background Slant */}
      <div 
        className="absolute top-0 right-0 w-1/2 h-full bg-[#0D4E99]/5 -skew-x-12 transform translate-x-1/4 hidden lg:block transition-transform duration-100 ease-out"
        style={{ transform: `translate(${25 + scrollY * 0.05}%, ${scrollY * 0.1}px) skewX(-12deg)` }}
      ></div>

      {/* Parallax Watermark Text */}
      <div 
        className="absolute left-[-2%] top-1/4 text-[18rem] font-black text-[#0D4E99]/5 select-none pointer-events-none hidden xl:block"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      >
        AI
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 max-w-3xl">
            <div className="inline-block px-3 py-1 bg-[#0D4E99]/10 text-[#0D4E99] text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in-up">
              Individualsoftware & KI
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#222222] leading-[1.1] mb-8 animate-fade-in-up">
              KI-Lösungen, die <span className="text-[#0D4E99]">wirklich</span> zu Ihrem Unternehmen passen.
            </h1>
            <p className="text-xl md:text-2xl text-[#666666] mb-10 leading-relaxed animate-fade-in-up animate-delay-200 opacity-0">
              Wir entwickeln KI dort, wo Standardlösungen aufhören. Entdecken Sie intelligente Software, die sich nahtaus an Ihre Prozesse anpasst – nicht umgekehrt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200 opacity-0">
              <a href="#contact" className="bg-[#0D4E99] text-white px-8 py-4 text-lg font-bold flex items-center justify-center gap-2 hover:bg-[#0C3E7A] transition-all shadow-lg animate-subtle-pulse">
                Lösungen entdecken
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 relative hidden lg:block animate-fade-in-up animate-delay-200 opacity-0">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white group cursor-pointer">
              {/* Image with zoom effect - Updated to high-precision tech visual */}
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" 
                alt="High Precision AI Interface" 
                className="w-full h-auto grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
              />
              {/* Tint Overlay on Hover */}
              <div className="absolute inset-0 bg-[#0D4E99]/0 group-hover:bg-[#0D4E99]/25 transition-all duration-700 pointer-events-none"></div>
              
              {/* Small Label on Image */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/95 backdrop-blur px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#0D4E99] opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl">
                Bespoke Intelligence
              </div>
            </div>
            {/* Floating element behind image */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#0D4E99] -z-10 rounded-full blur-[100px] opacity-20 animate-pulse"></div>
          </div>
        </div>
      </div>
      
      {/* Floating Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-0.5 h-12 bg-gray-300"></div>
      </div>
    </section>
  );
};

export default Hero;
