
import React from 'react';

const DataHero: React.FC = () => {
  return (
    <section className="pt-20 sm:pt-32 md:pt-40 pb-16 sm:pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#800000]/5 border border-[#800000]/10 mb-6 sm:mb-8">
          <span className="w-2 h-2 rounded-full bg-[#800000] animate-pulse" />
          <span className="text-[8px] sm:text-[10px] font-black text-[#800000] uppercase tracking-widest">Domain: Intelligence & NLP</span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.9] mb-6 sm:mb-8">
          DATA <br /> <span className="text-[#800000] italic">INTELLIGENCE</span>
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
          Turning raw signals into actionable wisdom. Specializing in high-fidelity annotation and statistical analysis for AI systems.
        </p>
      </div>
    </section>
  );
};

export default DataHero;
