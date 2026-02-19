import React, { useEffect } from 'react';
import InnovationLog from '../components/Research/InnovationLog';
import ResearchSection from '../components/Research/ResearchSection';

const ResearchPage: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-research-animation]');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-research-in');
      }, i * 90);
    });
  }, []);

  return (
    <div className="bg-[#FAFAF9] min-h-screen animate-page-in">
      <style>{`
        @keyframes pageIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-page-in {
          animation: pageIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-none mb-8">
            R&D LABS <br/> <span className="text-[#800000]">& RESEARCH</span>
          </h1>
          <p className="text-xl text-neutral-600 font-medium leading-relaxed">
            Exploring the frontiers of engineering through critical thinking, experimental protocols, and iterative research.
          </p>
        </div>
      </div>
      
      <InnovationLog />
      <ResearchSection />
      
      <section className="py-24 bg-white border-t border-neutral-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h4 className="text-[10px] font-black text-[#800000] uppercase tracking-[0.5em] mb-4">Research Methodology</h4>
            <div className="flex flex-wrap justify-center gap-12 mt-12">
              {['ANALYZE', 'HYPOTHESIZE', 'EXECUTE', 'REFINE'].map((item, i) => (
                <div 
                  key={item} 
                  className="max-w-[200px] hover:scale-110 transition-transform duration-300"
                >
                  <p className="text-3xl font-black text-neutral-900 mb-2 italic">{item}</p>
                  <p className="text-xs text-neutral-400 font-medium">
                    {item === 'ANALYZE' && 'Deconstruct systems to their first principles.'}
                    {item === 'HYPOTHESIZE' && 'Formulate potential optimal configurations.'}
                    {item === 'EXECUTE' && 'Rapid prototyping and stress testing.'}
                    {item === 'REFINE' && 'Continuous optimization based on metrics.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
