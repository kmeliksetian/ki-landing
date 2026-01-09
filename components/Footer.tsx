
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white">
      {/* Call to Action Section - Target for #contact */}
      <div id="contact" className="bg-[#0D4E99] py-24 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Bereit für den nächsten Schritt?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam besprechen, wie individuelle KI-Software Ihre Prozesse revolutionieren kann.
          </p>
          <button className="bg-white text-[#0D4E99] px-10 py-5 text-xl font-bold uppercase tracking-widest hover:bg-[#0C3E7A] hover:text-white transition-all shadow-xl">
            Projekt Besprechen
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              {/* Official Wichmann Logo Recreation */}
              <div className="flex items-center gap-3">
                <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#0D4E99]">
                   <path d="M10 20H90L50 85L10 20Z" fill="currentColor" />
                   <path d="M50 40L30 70H70L50 40Z" fill="white" />
                </svg>
                <div className="flex flex-col leading-none">
                  <span className="text-xl font-bold tracking-tighter text-[#222222]">
                    WICHMANN
                  </span>
                  <span className="text-[0.55rem] font-medium tracking-[0.3em] uppercase text-[#666666]">
                    IT-SERVICES
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[#666666] max-w-sm mb-8">
              Spezialist für individuelle intelligente Softwarelösungen. Wir begleiten Unternehmen von der ersten Vision bis zum produktiven System.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#F5F5F5] text-[#222222] hover:bg-[#0D4E99] hover:text-white transition-all"><Linkedin size={20} /></a>
              <a href="https://www.wichmann.com" className="p-2 bg-[#F5F5F5] text-[#222222] hover:bg-[#0D4E99] hover:text-white transition-all"><Globe size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-[#222222]">Kontakt</h5>
            <ul className="space-y-4 text-[#666666]">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#0D4E99]" />
                ki@wichmann.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#0D4E99]" />
                +49 (0) 5403 7943-0
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#0D4E99] mt-1" />
                D-49170 Hagen a.T.W.
              </li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-[#222222]">Rechtliches</h5>
            <ul className="space-y-4 text-[#666666]">
              <li><a href="#" className="hover:text-[#0D4E99] transition-colors">Impressum</a></li>
              <li><a href="#" className="hover:text-[#0D4E99] transition-colors">Datenschutz</a></li>
              <li><a href="#" className="hover:text-[#0D4E99] transition-colors">AGB</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Wichmann Brandschutzsysteme GmbH & Co. KG. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
