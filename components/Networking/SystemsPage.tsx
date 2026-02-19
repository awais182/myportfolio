import React from 'react';
import SystemsHero from './components/SystemsHero';
import NetworkMap from './components/NetworkMap';
import NetworkingSection from './NetworkingSection';
import NetworkingBackground from '../Common/NetworkingBackground'; // Adjust path as needed

const SystemsPage: React.FC = () => {
  return (
    <div className="bg-[#050505] min-h-screen text-white relative overflow-hidden">
      
      {/* GLOBAL BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 opacity-40">
        <NetworkingBackground />
      </div>

      {/* CONTENT LAYER */}
      <div className="relative z-10">
        <SystemsHero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 pb-32">
          
          {/* Visual Data Representation */}
          <section className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#800000]/20 to-transparent rounded-[3.5rem] blur opacity-25 group-hover:opacity-50 transition duration-1000" />
            <NetworkMap />
          </section>

          {/* Technical Deep Dive */}
          <NetworkingSection />
          
        </div>
      </div>

      {/* SUBTLE FOOTER GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#800000]/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default SystemsPage;