import React from 'react';
import { motion } from 'framer-motion';
import FunnyCodeOverlay from '../Common/FunnyCodeOverlay';

const SoftwareSection: React.FC = () => {
  const services = [
    { title: "Full-Stack Development", icon: "🌐", desc: "Crafting end-to-end solutions with React, Go, and high-performance SQL/NoSQL databases." },
    { title: "Mobile Ecosystems", icon: "📱", desc: "Native and Cross-platform development ensuring consistent UX across iOS and Android." },
    { title: "Backend Systems", icon: "⚙️", desc: "Microservices architecture focused on horizontal scalability and sub-millisecond latency." }
  ];

  // We define the code string outside to avoid JSX parsing errors with curly braces
  const codeSnippet = `// Raza_Nexus_Build_Pipeline
async function constructSolution(requirements) {
  const blueprint = await architect(requirements);
  const core = new BackendCore({ scalability: 'infinite' });
  const ui = new DesignSystem({ aesthetic: 'maroon_minimal' });
  
  return assemble({ blueprint, core, ui });
}

deploy(constructSolution('high-impact-project'));`;

  return (
    <section id="software" className="py-20 sm:py-32 bg-white relative overflow-hidden">
      <FunnyCodeOverlay />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <h2 className="text-[10px] font-black text-[#800000] tracking-[0.5em] uppercase mb-6 flex justify-center items-center gap-4">
            <span className="w-8 h-[1px] bg-[#800000]" />
            Engine_Layer
            <span className="w-8 h-[1px] bg-[#800000]" />
          </h2>
          <h3 className="text-4xl sm:text-6xl md:text-8xl font-black text-neutral-900 tracking-tighter leading-none">
            SOFTWARE <span className="text-[#800000] italic">& APPS</span>
          </h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="p-10 md:p-12 bg-neutral-50 rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-2xl hover:border-[#800000]/20 transition-all group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/0 to-[#800000]/0 group-hover:from-[#800000]/5 group-hover:to-[#800000]/1 transition-all duration-500" />
              <div className="relative z-10">
                <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-300 inline-block grayscale group-hover:grayscale-0">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-neutral-900 mb-4 tracking-tighter uppercase group-hover:text-[#800000] transition-colors">
                  {item.title}
                </h4>
                <p className="text-neutral-500 font-medium leading-relaxed group-hover:text-neutral-600 transition-colors">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 sm:mt-32 bg-neutral-900 rounded-[2rem] md:rounded-[3rem] p-6 sm:p-12 border border-white/5 shadow-2xl relative overflow-hidden group"
        >
          <div className="flex gap-2 mb-8 border-b border-white/5 pb-6">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 font-mono text-[10px] text-white/20 uppercase tracking-widest">Construct_Solution.js</span>
          </div>

          {/* Fixed Terminal Content */}
          <pre className="font-mono text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed overflow-x-auto scrollbar-hide">
            <code className="block whitespace-pre">
              {codeSnippet}
            </code>
          </pre>
          
          <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-[#800000]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[#800000]/20 transition-all duration-700" />
        </motion.div>
      </div>
    </section>
  );
};

export default SoftwareSection;