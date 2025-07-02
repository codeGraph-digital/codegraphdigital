"use client";

import React from 'react';

const TechCorpLogo = () => (
  <svg width="100" height="24" viewBox="0 0 100 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
    <path d="M10 4 L10 20 M4 12 L16 12" stroke="currentColor" strokeWidth="2"/>
    <text x="22" y="17" fontFamily="monospace" fontSize="16" fill="currentColor">TechCorp</text>
  </svg>
);

const GrowthGurusLogo = () => (
    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
    <path d="M4 4 L12 12 L4 20" stroke="currentColor" strokeWidth="2"/>
    <path d="M14 4 L22 12 L14 20" stroke="currentColor" strokeWidth="2"/>
    <text x="30" y="17" fontFamily="monospace" fontSize="16" fill="currentColor">GrowthGurus</text>
  </svg>
);

const DigitalWaveLogo = () => (
    <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-foreground">
    <path d="M4 18 C 10 6, 20 6, 26 18" stroke="currentColor" strokeWidth="2" fill="none"/>
    <text x="32" y="17" fontFamily="monospace" fontSize="16" fill="currentColor">DigitalWave</text>
  </svg>
);

const logos: { [key: string]: React.FC } = {
  "TechCorp": TechCorpLogo,
  "Growth Gurus": GrowthGurusLogo,
  "Digital Wave": DigitalWaveLogo,
};

export const CompanyLogo = ({ name }: { name: string }) => {
  const LogoComponent = logos[name];
  if (!LogoComponent) {
    return <span className="font-mono text-xs text-muted-foreground">{name}</span>;
  }
  return <LogoComponent />;
};