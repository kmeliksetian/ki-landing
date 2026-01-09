
import React from 'react';
import { Target, Layers, TrendingUp, ShieldCheck } from 'lucide-react';
import { ValueProp, ProcessStep } from './types';

export const COLORS = {
  primary: '#0D4E99', // New Brand Blue
  secondary: '#1E6FD9', // New Brand Accent Blue
  textMain: '#222222', // Main Text
  textSecondary: '#666666', // Secondary Text
  accent: '#F5F5F5', // Light Background
};

export const VALUE_PROPS: ValueProp[] = [
  {
    title: 'Passgenaue KI',
    description: 'Keine Kompromisse durch Standardsoftware. Wir entwickeln Lösungen, die exakt Ihre Prozesse abbilden.',
    icon: <Target className="w-8 h-8 text-[#0D4E99]" />
  },
  {
    title: 'Nahtlose Integration',
    description: 'Einfache Einbindung in bestehende IT- und Prozesslandschaften für reibungslose Abläufe.',
    icon: <Layers className="w-8 h-8 text-[#0D4E99]" />
  },
  {
    title: 'Skalierbarkeit',
    description: 'Lösungen, die mit Ihren wachsenden Anforderungen und Datenmengen mitwachsen.',
    icon: <TrendingUp className="w-8 h-8 text-[#0D4E99]" />
  },
  {
    title: 'Nachhaltigkeit',
    description: 'Wirtschaftlich, transparent und zukunftssicher umgesetzt für langfristigen Erfolg.',
    icon: <ShieldCheck className="w-8 h-8 text-[#0D4E99]" />
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: 'Konzeption',
    description: 'Aus Ihrer ersten Idee entwickeln wir ein fundiertes fachliches Konzept.'
  },
  {
    title: 'Entwicklung',
    description: 'Schritt für Schritt überführen wir die Theorie in eine produktive, praxistaugliche Lösung.'
  },
  {
    title: 'Umsetzung',
    description: 'Ein spezialisiertes Team aus Software- und KI-Experten realisiert Ihr System.'
  },
  {
    title: 'Integration',
    description: 'Ihr neues KI-System wird nahtlos in Ihre bestehenden Betriebsabläufe integriert.'
  }
];
