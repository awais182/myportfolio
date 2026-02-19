import React from 'react';
import DesignSection from '../components/Design/DesignSection';

const DesignPage: React.FC = () => {
  return (
    <div className="bg-[#FAFAF9] min-h-screen animate-in fade-in duration-500">
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-none mb-8">
            VISUAL <br/> <span className="text-[#800000]">DESIGN</span>
          </h1>
          <p className="text-xl text-neutral-600 font-medium leading-relaxed">
            Where functional engineering meets aesthetic excellence. Crafting identities that command attention.
          </p>
        </div>
      </div>
      
      <DesignSection />
      
      <section className="py-24 bg-[#FAFAF9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h4 className="text-4xl font-black text-neutral-900 mb-8 tracking-tighter">DESIGN PHILOSOPHY</h4>
              <p className="text-neutral-600 leading-relaxed font-medium mb-8">
                Good design is invisible. Great design is felt. I focus on creating visual systems that are not just beautiful, but are rooted in logical structures and accessibility.
              </p>
              <div className="space-y-4">
                {['Grid Systems', 'Color Theory', 'Typography', 'Dynamic Motion'].map((item, i) => (
                  <div key={item} className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                    <div className="w-12 h-[1px] bg-[#800000] group-hover:w-20 transition-all" />
                    <span className="text-xs font-black uppercase tracking-widest text-neutral-900">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-white border border-neutral-200 rounded-3xl hover:scale-105 transition-transform duration-500" />
              <div className="aspect-square bg-[#800000] rounded-3xl hover:scale-105 transition-transform duration-500" />
              <div className="aspect-square bg-neutral-900 rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500" />
              <div className="aspect-square border-4 border-[#800000]/10 rounded-3xl hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DesignPage;
