import { motion } from "framer-motion";

export const PageLoader = () => {
  // Animation settings for the name parts
  const textVariant = {
    initial: { y: 0 },
    exit: (custom: number) => ({
      y: custom,
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }
    })
  };

  return (
    <>
      {/* 1. TOP SHUTTER */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed top-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-[99999] origin-top border-b border-[#800000]/20"
      />

      {/* 2. BOTTOM SHUTTER */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        className="fixed bottom-0 left-0 w-full h-1/2 bg-[#0a0a0a] z-[99999] origin-bottom border-t border-[#800000]/20"
      />
      
      {/* 3. AWAIS RAZA REVEAL SYSTEM */}
      <div className="fixed inset-0 flex items-center justify-center z-[100000] pointer-events-none overflow-hidden">
        <div className="relative flex flex-col items-center">
          
          {/* Top Half of Name */}
          <div className="overflow-hidden h-[45px] sm:h-[60px]">
            <motion.h1 
              variants={textVariant}
              initial="initial"
              exit={{ y: 0, opacity: 1 }}
              animate={{ opacity: 0 }}
              custom={0}
              className="text-[#FAFAF9] font-black text-5xl sm:text-7xl tracking-[0.2em] uppercase italic"
            >
              AWAIS
            </motion.h1>
            <motion.h1 
              initial={{ y: 100 }}
              exit={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[#800000] font-black text-5xl sm:text-7xl tracking-[0.2em] uppercase italic"
            >
              AWAIS
            </motion.h1>
          </div>

          {/* Center Divider Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            exit={{ scaleX: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-32 h-px bg-[#800000] my-2"
          />

          {/* Bottom Half of Name */}
          <div className="overflow-hidden h-[45px] sm:h-[60px]">
             <motion.h1 
              initial={{ y: -100 }}
              exit={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-neutral-400 font-light text-5xl sm:text-7xl tracking-[0.2em] uppercase"
            >
              RAZA
            </motion.h1>
          </div>

          {/* Status Subtext */}
          <motion.p
            initial={{ opacity: 0 }}
            exit={{ opacity: 0.5 }}
            transition={{ delay: 0.6 }}
            className="mt-4 font-mono text-[8px] tracking-[0.5em] text-[#800000] uppercase"
          >
            Deploying_Portfolio_v3.0
          </motion.p>
        </div>
      </div>
    </>
  );
};