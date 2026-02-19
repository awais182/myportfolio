
import React from 'react';

const AwaisHero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-block px-4 py-2 rounded-full border border-[#800000]/30 bg-white/50 backdrop-blur-md mb-8">
            <p className="text-[10px] font-black tracking-[0.4em] text-[#800000] uppercase">System Architect & R&D Specialist</p>
          </div>
          <h1 className="text-7xl md:text-[6rem] font-black text-neutral-900 leading-[0.85] tracking-tighter mb-8">
            ENGINEERING <br/> <span className="text-[#800000] italic">THE NEXT</span> <br/> FRONTIER.
          </h1>
          <p className="text-xl text-neutral-600 max-w-lg mb-12 font-medium leading-relaxed">
            I am <span className="text-[#800000] font-bold">Awais Raza</span>. I build resilient software, secure networks, and intelligent data systems that define the modern digital landscape.
          </p>
          <div className="flex gap-4">
            <button className="px-10 py-5 maroon-gradient text-white text-xs font-black tracking-widest rounded-full shadow-2xl hover:scale-105 transition-all uppercase">
              Enter The Nexus
            </button>
            <button className="px-10 py-5 border-2 border-neutral-200 text-neutral-900 text-xs font-black tracking-widest rounded-full hover:bg-neutral-100 transition-all uppercase">
              Curriculum Vitae
            </button>
          </div>
        </div>
        
        <div className="hidden lg:block relative">
          <div className="relative z-10 rounded-[4rem] overflow-hidden grayscale border-8 border-white shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 aspect-[4/5]">
            <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop" alt="Awais Raza" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#800000]/40 to-transparent" />
          </div>
          <div className="absolute -top-10 -right-10 w-40 h-40 maroon-gradient rounded-full blur-[80px] opacity-20" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 maroon-gradient rounded-full blur-[80px] opacity-20" />
        </div>
      </div>
    </div>
  );
};

export default AwaisHero;
