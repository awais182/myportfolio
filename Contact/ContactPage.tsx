import React from 'react';
import { motion } from 'framer-motion';
import ContactSection from './ContactSection';

const ContactPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative min-h-screen w-full bg-transparent overflow-x-hidden"
    >
      {/* 1. HERO SECTION */}
      <section className="relative pt-[15vh] pb-[5vh] px-4 sm:px-8 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
        <div className="w-full">
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-4 md:mb-8">
            <span className="w-6 md:w-12 h-px bg-[#800000]"></span>
            <span className="text-[9px] md:text-[11px] font-black tracking-[0.3em] text-[#800000] uppercase whitespace-nowrap">
              System_Online // Protocol_V3
            </span>
          </motion.div>

          {/* Fluid Heading: Scales perfectly on ALL screens */}
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(2.8rem,12vw,9rem)] font-black text-neutral-900 leading-[0.85] uppercase mb-6 md:mb-10"
          >
            ESTABLISH <br/> 
            <span className="text-[#800000] italic">CONNECTIVITY_</span>
          </motion.h1>
          
          {/* Fluid Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-[clamp(1rem,2vw,1.5rem)] text-neutral-600 font-medium leading-relaxed max-w-[90%] md:max-w-2xl"
          >
            Initiate high-impact deployment. Reach out via the secure channels below. 
            Systems are standing by for transmission.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT SECTION (The Form/Details) */}
      <motion.div variants={itemVariants} className="w-full">
        <ContactSection />
      </motion.div>

      {/* 3. SOCIAL MATRIX: Responsive Grid */}
      <section className="w-full py-12 md:py-24 border-t border-neutral-100 bg-white/30 backdrop-blur-xl">
        <div className="max-w-[1800px] mx-auto px-4 md:px-12">
          {/* Grid: 2 cols on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { name: 'LINKEDIN', link: '#' },
              { name: 'GITHUB', link: '#' },
              { name: 'TERMINAL', link: '#' },
              { name: 'DRIBBBLE', link: '#' }
            ].map((social) => (
              <motion.a 
                key={social.name}
                href={social.link}
                whileHover={{ y: -5 }}
                className="group relative flex flex-col items-center justify-center p-6 border border-transparent hover:border-neutral-100 transition-all"
              >
                <p className="text-[10px] md:text-xs font-black text-neutral-400 group-hover:text-[#800000] transition-colors tracking-[0.3em] mb-4">
                  {social.name}
                </p>

                {/* Animated Line */}
                <div className="w-full h-px bg-neutral-100 relative overflow-hidden">
                  <motion.div 
                    className="absolute inset-0 bg-[#800000]"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '0%' }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  />
                </div>
                
                {/* Coordinates: Hidden on very small screens */}
                <span className="hidden lg:block mt-4 font-mono text-[8px] text-neutral-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  0x{social.name.charCodeAt(0).toString(16)}FFE_UPLINK
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Responsive Footer Spacer */}
      <div className="h-[10vh] w-full" />
    </motion.div>
  );
};

export default ContactPage;