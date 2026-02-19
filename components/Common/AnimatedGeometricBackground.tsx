import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedGeometricBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // Mechanical Rotation and Movement linked to scroll
  const rotateAssembly = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const slideValue = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.15, 0.3, 0.3, 0.15]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#FAFAF9]">
      
      {/* 1. PRIMARY ARCHITECTURAL GRID */}
      <div 
        className="absolute inset-0 opacity-[0.08]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #800000 1.5px, transparent 1.5px),
            linear-gradient(to bottom, #800000 1.5px, transparent 1.5px)
          `,
          backgroundSize: '100px 100px',
        }} 
      />
      
      {/* 2. SECONDARY PRECISION GRID */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{
          backgroundImage: `
            linear-gradient(to right, #800000 1px, transparent 1px),
            linear-gradient(to bottom, #800000 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px',
        }} 
      />

      {/* 3. ROTATING TECHNICAL ASSEMBLY (Top Left) */}
      <motion.div 
        style={{ rotate: rotateAssembly, x: slideValue }}
        className="absolute -top-32 -left-32 w-[600px] h-[600px] flex items-center justify-center"
      >
        <div className="absolute inset-0 border-[1.5px] border-[#800000]/10 rounded-full" />
        <div className="absolute inset-10 border-[1px] border-dashed border-[#800000]/20 rounded-full animate-[spin_40s_linear_infinite]" />
        <div className="absolute inset-24 border-[1px] border-[#800000]/5 rounded-full" />
        <div className="w-1 h-20 bg-[#800000]/20 absolute top-0" />
      </motion.div>

      {/* 4. VERTICAL MEASUREMENT GAUGE (Left Side) */}
      <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-[#800000]/10 to-transparent">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ width: 0 }}
            animate={{ width: i % 2 === 0 ? 15 : 8 }}
            className="h-[1px] bg-[#800000]/40 my-32 translate-x-[-50%]"
          />
        ))}
      </div>

      {/* 5. DYNAMIC SCANLINE (Horizontal Pulse) */}
      <motion.div 
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-[15vh] bg-gradient-to-b from-transparent via-[#800000]/[0.03] to-transparent z-10"
      />

      {/* 6. CORNER TERMINAL BRACKETS (HUD Feel) */}
      <div className="absolute top-10 left-10 w-16 h-16 border-t-2 border-l-2 border-[#800000]/30" />
      <div className="absolute top-10 right-10 w-16 h-16 border-t-2 border-r-2 border-[#800000]/30" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-b-2 border-l-2 border-[#800000]/30" />
      <div className="absolute bottom-10 right-10 w-16 h-16 border-b-2 border-r-2 border-[#800000]/30" />

      {/* 7. FLOATING SCHEMATIC (Bottom Right) */}
      <motion.div 
        style={{ opacity: opacityValue }}
        className="absolute bottom-[10%] right-[10%]"
      >
        <svg width="240" height="240" viewBox="0 0 100 100" className="stroke-[#800000] stroke-[0.5] fill-none">
          <circle cx="50" cy="50" r="45" strokeDasharray="4 2" />
          <path d="M50 5 L50 95 M5 50 L95 50" strokeOpacity="0.2" />
          <motion.path 
            d="M20 20 L80 80 M80 20 L20 80" 
            animate={{ pathLength: [0, 1, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </svg>
      </motion.div>

      {/* 8. CENTER SOFT VIGNETTE */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,250,249,0.5)_100%)]" />
    </div>
  );
};

export default AnimatedGeometricBackground;