
import React, { useState, useEffect, useRef } from 'react';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        // Calculate relative position of section in viewport
        setOffset(rect.top);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-24 bg-[#222222] text-white overflow-hidden relative">
      {/* Refined Parallax Background Text */}
      <div 
        className="absolute left-0 top-1/2 -translate-y-1/2 text-[10rem] md:text-[12rem] lg:text-[14rem] font-black text-white/[0.03] select-none pointer-events-none whitespace-nowrap uppercase tracking-tighter"
        style={{ transform: `translate3d(${offset * 0.15}px, -50%, 0)` }}
      >
        Strategie • Entwicklung • Erfolg
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-20">
          <h2 className="text-[#1E6FD9] font-bold tracking-widest uppercase mb-4 text-sm">Unsere Arbeitsweise</h2>
          <h3 className="text-4xl md:text-5xl font-extrabold leading-tight mb-8">
            So entsteht Ihre individuelle KI-Lösung
          </h3>
          <p className="text-xl text-gray-400">
            Unsere Systeme entstehen in enger Zusammenarbeit. Transparenz, Verständlichkeit und ein klarer Mehrwert stehen dabei jederzeit im Mittelpunkt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 relative">
          {/* Connecting Line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-px bg-gray-700 -translate-x-1/2"></div>
          
          {PROCESS_STEPS.map((step, idx) => {
            const isLeftSide = idx % 2 === 0;
            return (
              <div 
                key={idx} 
                className={`relative flex flex-col group ${isLeftSide ? 'md:items-end md:text-right md:pr-16' : 'md:items-start md:text-left md:pl-16'}`}
              >
                {/* Central Junction Marker (Dot on the line) */}
                <div className={`hidden md:block absolute top-8 w-4 h-4 rounded-full border-4 border-[#222222] bg-gray-700 group-hover:bg-[#0D4E99] group-hover:scale-125 transition-all duration-300 z-20 ${isLeftSide ? '-right-2' : '-left-2'}`}></div>

                <div className="mb-4 text-[#0D4E99] font-black text-6xl opacity-20 group-hover:opacity-100 transition-all duration-500 transform group-hover:-translate-y-2">
                  0{idx + 1}
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-[#1E6FD9] transition-colors">{step.title}</h4>
                <p className="text-gray-400 text-lg leading-relaxed max-w-sm">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 p-10 bg-[#2D2D2D]/80 backdrop-blur-sm border-l-4 border-[#0D4E99] relative z-20 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h4 className="text-2xl font-bold mb-4">Nachhaltig. Erweiterbar. Zukunftssicher.</h4>
              <p className="text-gray-400 text-lg">
                Dank ihrer individuellen und modularen Architektur wachsen unsere Systeme mit den Anforderungen Ihres Unternehmens mit. Sie lassen sich jederzeit unkompliziert um neue Funktionen ergänzen.
              </p>
            </div>
            <div className="flex justify-end">
              <div className="text-center p-6 border border-gray-700 w-full hover:border-[#0D4E99] transition-colors duration-500">
                <p className="text-[#1E6FD9] font-bold text-lg mb-2 italic">Unser Anspruch:</p>
                <p className="text-xl font-bold">Lösungen, die heute funktionieren und morgen noch passen.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
