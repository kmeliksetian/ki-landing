
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Process from './components/Process';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        
        {/* Intro Section - Redesigned for Visual Interest */}
        <section id="about" className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-[#0D4E99]/5 rounded-xl transition-all group-hover:bg-[#0D4E99]/10"></div>
                  {/* Image Updated to represent structured, serious technical environment */}
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop" 
                    alt="Precision Engineering and IT Systems" 
                    className="relative z-10 rounded-lg shadow-xl grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute -bottom-10 -right-10 bg-[#0D4E99] p-8 text-white hidden md:block z-20 shadow-2xl">
                    <span className="text-4xl font-bold block mb-1">100%</span>
                    <span className="text-sm uppercase tracking-widest font-semibold opacity-80">Individuelle Software</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <h2 className="text-[#0D4E99] font-bold tracking-widest uppercase mb-6 text-sm">Problemanalyse</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-[#222222] mb-8 leading-tight">
                  Standard-KI stößt an Grenzen.
                </h3>
                <div className="space-y-6 text-lg text-[#666666] leading-relaxed">
                  <p>
                    Viele Unternehmen nutzen bereits KI-basierte Anwendungen, um einzelne Aufgaben effizient zu unterstützen. In der Praxis zeigen sich jedoch schnell Einschränkungen, sobald Prozesse komplex, unternehmensspezifisch oder abteilungsübergreifend organisiert sind.
                  </p>
                  <div className="p-6 bg-[#F5F5F5] border-l-4 border-[#0D4E99] italic shadow-inner">
                    "Neben der Einführung bewährter KI-Standardlösungen liegt unser Schwerpunkt auf der Entwicklung individueller intelligenter Software."
                  </div>
                  <p>
                    Wir adressieren gezielt konkrete betriebliche Herausforderungen – statt Prozesse an starre Systeme anzupassen. So schaffen wir echte Wettbewerbsvorteile durch technologische Souveränität.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ValueProp />
        <Process />

      </main>
      <Footer />
    </div>
  );
};

export default App;
