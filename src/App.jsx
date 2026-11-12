import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileBottomBar from './components/MobileBottomBar';
import HeroSection from './sections/HeroSection';
import PresentationSection from './sections/PresentationSection';
import RubrosSection from './sections/RubrosSection';
import HistorySection from './sections/HistorySection';
import DistributionSection from './sections/DistributionSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#F4F4F2] flex flex-col font-['Inter'] selection:bg-[#00E599] selection:text-[#000000]">
      {/* Header Institucional Fijo */}
      <Header />

      {/* Flujo de Secciones */}
      <main className="flex-1">
        {/* 01. Hero Institucional */}
        <HeroSection />

        {/* 02. Presentación de BASE Córdoba con Atributos Integrados */}
        <PresentationSection />

        {/* 03. Rubros Comerciales Oficiales */}
        <RubrosSection />

        {/* 04. Historia y Trayectoria (22 años / +57 años) */}
        <HistorySection />

        {/* 05. Distribución y Entregas (Operación desde Depósito) */}
        <DistributionSection />

        {/* 06. Contacto y Redirección al E-Commerce */}
        <ContactSection />
      </main>

      {/* Footer Institucional */}
      <Footer />

      {/* Barra Inferior Móvil Contextual */}
      <MobileBottomBar />
    </div>
  );
}
