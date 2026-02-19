
import React from 'react';

const DataHero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#800000]/5 border border-[#800000]/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#800000] animate-pulse" />
          <span className="text-[10px] font-black text-[#800000] uppercase tracking-widest">Domain: Intelligence & NLP</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.9] mb-8">
          DATA <br/> <span className="text-[#800000] italic">INTELLIGENCE</span>
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl font-medium leading-relaxed">
          Turning raw signals into actionable wisdom. Specializing in high-fidelity annotation and statistical analysis for AI systems.
        </p>
      </div>
    </section>
  );
};

export default DataHero;
