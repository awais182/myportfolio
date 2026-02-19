import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Home/Hero';
import SoftwareSection from '../components/Software/SoftwareSection';
import NetworkingSection from '../components/Networking/NetworkingSection';
import DataSection from '../components/Data/DataSection';
import DesignSection from '../components/Design/DesignSection';
import InnovationLog from '../components/Research/InnovationLog';
import ProjectShowcase from '../components/Projects/ProjectShowcase';
import ContactSection from '../components/Contact/ContactSection';
import ExpertiseGrid from '../components/Expertise/ExpertiseGrid';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="animate-in fade-in duration-1000">
      <Hero />
      <div className="space-y-0">
        <ExpertiseGrid />
        <SoftwareSection />
        <NetworkingSection />
        <DataSection />
        <DesignSection />
        <InnovationLog />
      </div>
      <ProjectShowcase onShowArchive={() => navigate('/archive')} />
      
      {/* High-End Technical Ticker */}
      <div className="bg-[#800000] py-10 overflow-hidden whitespace-nowrap border-y border-white/10 relative z-20">
        <div className="inline-flex items-center animate-marquee">
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-12">
              <span className="text-white font-black text-5xl uppercase tracking-[0.4em] opacity-80">AWAIS RAZA</span>
              <span className="w-3 h-3 rounded-full bg-white opacity-40" />
              <span className="text-white font-black text-5xl uppercase tracking-[0.4em] opacity-80">SOFTWARE ARCHITECT</span>
              <span className="w-3 h-3 rounded-full bg-white opacity-40" />
              <span className="text-white font-black text-5xl uppercase tracking-[0.4em] opacity-80">NETWORK SECURITY</span>
              <span className="w-3 h-3 rounded-full bg-white opacity-40" />
              <span className="text-white font-black text-5xl uppercase tracking-[0.4em] opacity-80">DATA INTELLIGENCE</span>
              <span className="w-3 h-3 rounded-full bg-white opacity-40" />
              <span className="text-white font-black text-5xl uppercase tracking-[0.4em] opacity-80">GRAPHIC SYSTEMS</span>
              <span className="w-3 h-3 rounded-full bg-white opacity-40" />
              <span className="text-white font-black text-5xl uppercase tracking-[0.4em] opacity-80">R&D LABS</span>
            </div>
          ))}
        </div>
      </div>
      <ContactSection />
    </div>
  );
};

export default HomePage;
