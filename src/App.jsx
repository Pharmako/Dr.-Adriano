import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PracticeAreas from './components/PracticeAreas';
import Philosophy from './components/Philosophy';
import TrustAndProof from './components/TrustAndProof';
import ConversionFooter from './components/ConversionFooter';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navbar />
      <main>
        <Hero />
        <PracticeAreas />
        <Philosophy />
        <TrustAndProof />
      </main>
      <ConversionFooter />
      <FloatingWhatsApp />
    </div>
  );
}
