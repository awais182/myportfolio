import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const devHumor = [
  { code: "sudo", msg: "make me a sandwich" },
  { code: "git", msg: "commit -m 'fixed stuff (I lied)'" },
  { code: "while(true)", msg: "{ brain.refresh(); coffee++; }" },
  { code: "undefined", msg: "is not a function (it's a lifestyle)" },
  { code: "rm -rf", msg: "/brain/anxiety" },
  { code: "//", msg: "Standardizing the bugs as features" },
  { code: "docker", msg: "run --name 'hope' -d depression" },
  { code: "npm", msg: "install motivation --save-dev" },
  { code: "chmod 777", msg: "logic_error.sh" },
  { code: "try", msg: "{ sleep(); } catch (Deadline e) { cry(); }" },
  { code: "const", msg: "EGO = Number.MAX_SAFE_INTEGER;" },
  { code: "<h1>", msg: "Hello Dark Mode My Old Friend </h1>" },
  { code: "stack", msg: "overflow(sanity);" },
  { code: "if", msg: "(bug) { call.it('feature'); }" },
  { code: "console.log", msg: "('Why is this still running?');" },
  { code: "Refused", msg: "to display 'Work' in a frame." },
  { code: "git", msg: "push --force # Living dangerously" }
];

const FunnyCodeOverlay: React.FC = () => {
  const [elements, setElements] = useState<any[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      data: devHumor[Math.floor(Math.random() * devHumor.length)],
      top: `${Math.random() * 95}%`,
      left: `${Math.random() * 85}%`,
      duration: 20 + Math.random() * 30,
      opacity: 0.02 + Math.random() * 0.05 // Variable faintness
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ y: 0, opacity: 0 }}
          animate={{ 
            y: [-20, 20, -20],
            opacity: [el.opacity, el.opacity * 2, el.opacity],
          }}
          transition={{ 
            duration: el.duration, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute font-mono text-[10px] sm:text-xs whitespace-nowrap flex gap-2"
          style={{
            top: el.top,
            left: el.left,
          }}
        >
          {/* Syntax Highlighted Parts */}
          <span className="text-[#800000] font-bold opacity-80">{el.data.code}</span>
          <span className="text-neutral-500 italic">{el.data.msg}</span>
        </motion.div>
      ))}

      {/* Subtle Scanline moving across the background */}
      <motion.div 
        animate={{ y: ['-100%', '200%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-x-0 h-px bg-[#800000]/10 shadow-[0_0_10px_#800000]"
      />

      <style>{`
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
};

export default FunnyCodeOverlay;