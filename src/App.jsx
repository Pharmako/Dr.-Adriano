import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Demands from './components/Demands';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <main>
        <Hero />
        <About />
        <Specialties />
        <Demands />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
