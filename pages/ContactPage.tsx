import React from 'react';
import ContactSection from '../components/Contact/ContactSection';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[#FAFAF9] min-h-screen animate-in fade-in duration-500">
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-none mb-8">
            ESTABLISH <br/> <span className="text-[#800000]">CONNECTIVITY</span>
          </h1>
          <p className="text-xl text-neutral-600 font-medium leading-relaxed">
            Ready to initiate a high-impact deployment? Reach out via the secure channels below.
          </p>
        </div>
      </div>
      
      <ContactSection />
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {['LINKEDIN', 'GITHUB', 'TERMINAL', 'DRIBBBLE'].map((social, i) => (
              <a 
                key={social} 
                href="#" 
                className="group"
              >
                <p className="text-xs font-black text-neutral-400 group-hover:text-[#800000] transition-colors tracking-[0.3em]">{social}</p>
                <div className="h-[2px] w-0 group-hover:w-full bg-[#800000] transition-all duration-500 mx-auto mt-2" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
