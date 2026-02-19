import React from 'react';
import { motion } from 'framer-motion';
import { Icons } from '../../constants';

const ExpertiseGrid: React.FC = () => {
  const expertises = [
    {
      title: "Software Engineering",
      desc: "Architecting scalable cloud-native applications using React, Node.js, and TypeScript. Expert in distributed systems.",
      icon: <Icons.Code />,
      tags: ["FullStack", "Mobile", "APIs"]
    },
    {
      title: "Systems & Networking",
      desc: "Designing high-availability network infrastructures, SDN, and low-latency packet processing systems.",
      icon: <Icons.Network />,
      tags: ["CISCO", "SDN", "Load Balancing"]
    },
    {
      title: "Data Intelligence",
      desc: "Transforming raw data into strategic insights through advanced analytics and machine learning models.",
      icon: <Icons.Data />,
      tags: ["Python", "D3.js", "BigData"]
    },
    {
      title: "R&D Innovation",
      desc: "Pushing boundaries in critical thinking and research to solve non-trivial engineering challenges.",
      icon: <Icons.Code />,
      tags: ["R&D", "Prototyping", "Design Thinking"]
    }
  ];

  return (
    <section id="expertise" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-xs font-bold text-[#800000] tracking-[0.2em] uppercase mb-4">Core Competencies</h2>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 lg:gap-0">
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 max-w-2xl leading-tight">
              A MULTIDISCIPLINARY <br /> <span className="text-[#800000]">ENGINEERING MINDSET</span>
            </h3>
            <p className="hidden lg:block text-neutral-500 max-w-sm text-sm">
              Applying rigorous systems thinking across software, hardware, and data domains to build cohesive ecosystems.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {expertises.map((item, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-[#FAFAF9] border border-neutral-100 hover:border-[#800000]/20 hover:bg-white transition-all hover:shadow-xl hover:-translate-y-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/0 to-[#800000]/0 group-hover:from-[#800000]/5 group-hover:to-[#800000]/2 transition-all duration-500" />
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#800000] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-neutral-900 group-hover:text-[#800000] transition-colors">{item.title}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed mb-6 group-hover:text-neutral-600 transition-colors">
                  {item.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-bold uppercase tracking-wider text-[#800000] px-2 py-1 bg-[#800000]/5 rounded hover:bg-[#800000]/10 transition-colors duration-300 inline-block"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseGrid;