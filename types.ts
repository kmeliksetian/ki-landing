
// Import React to resolve the 'React' namespace error on line 5
import React from 'react';

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ProcessStep {
  title: string;
  description: string;
}
