
import React from 'react';
import { VALUE_PROPS } from '../constants';

const ValueProp: React.FC = () => {
  return (
    <section id="values" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-end mb-16">
          <div className="flex-1">
            <h2 className="text-[#0D4E99] font-bold tracking-widest uppercase mb-4 text-sm">Ihr Mehrwert auf einen Blick</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#222222] leading-tight">
              Präzision statt Kompromisse.
            </h3>
          </div>
          <div className="flex-1 text-[#666666] text-lg">
            Viele Unternehmen nutzen bereits KI-basierte Anwendungen, stoßen jedoch schnell an Grenzen, sobald Prozesse komplex oder unternehmensspezifisch werden. Genau hier setzen wir an.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="p-8 border-b-4 border-gray-100 hover:border-[#0D4E99] transition-all bg-[#F5F5F5] hover:bg-white hover:shadow-2xl group">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {prop.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-[#222222]">{prop.title}</h4>
              <p className="text-[#666666] leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
