import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';

// Layout & Common
import Navbar from './components/Layout/Navbar';
import AnimatedGeometricBackground from './components/Common/AnimatedGeometricBackground';
import Footer from './components/Layout/Footer';
import ScrollToTop from './components/Common/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import EngineeringPage from './pages/EngineeringPage';
import SystemsPage from './pages/SystemsPage';
import DataPage from './pages/DataPage';
import DesignPage from './pages/DesignPage';
import ResearchPage from './pages/ResearchPage';
import ContactPage from './pages/ContactPage';
import ArchivePage from './pages/ArchivePage';

// 1. PROFESSIONAL GLITCH TRANSITION WRAPPER
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10, filter: 'blur(10px)' }}
      animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, x: 10, filter: 'blur(10px)' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

// 2. MAGNETIC INTELLIGENT CURSOR
const CustomCursor = () => {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  const [isHovering, setIsHovering] = useState(false);
  const [flavorText, setFlavorText] = useState("");
  const jokes = ["Compiling...", "No Bugs Found*", "Coffee++", "SEO Optimized", "Z-Index: 9999"];

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      // Capture links, buttons, and custom interactive classes
      const hovering = !!target.closest('button, a, .interactive, input, textarea');
      
      if (hovering && !isHovering) {
        setFlavorText(jokes[Math.floor(Math.random() * jokes.length)]);
      }
      setIsHovering(hovering);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [isHovering, mouseX, mouseY, jokes]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[99999] hidden md:block">
      <motion.div
        className="absolute w-6 h-6 border-2 border-[#800000] rounded-full flex items-center justify-center"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
        animate={{ 
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(128, 0, 0, 0.05)" : "rgba(128, 0, 0, 0)",
          borderColor: isHovering ? "rgba(128, 0, 0, 1)" : "rgba(128, 0, 0, 0.5)"
        }}
      />
      <AnimatePresence>
        {isHovering && (
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "40px" }}
            className="absolute text-[9px] font-mono text-[#800000] font-black uppercase tracking-[0.2em] whitespace-nowrap"
          >
            {flavorText}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

// 3. SYSTEM BOOT-UP OVERLAY
const BootSequence = ({ onComplete }: { onComplete: () => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
      className="fixed inset-0 bg-[#0a0a0a] z-[100000] flex flex-col items-center justify-center font-mono"
    >
      <div className="relative">
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-[#800000] text-[10px] tracking-[0.8em] mb-8 uppercase font-black"
        >
          Initializing_Nexus_v3.0
        </motion.div>
        
        <div className="w-64 h-[1px] bg-neutral-900 relative">
          <motion.div 
            onAnimationComplete={onComplete}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute inset-y-0 left-0 bg-[#800000] shadow-[0_0_15px_#800000]"
          />
        </div>
      </div>
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/engineering" element={<PageWrapper><EngineeringPage /></PageWrapper>} />
        <Route path="/systems" element={<PageWrapper><SystemsPage /></PageWrapper>} />
        <Route path="/data" element={<PageWrapper><DataPage /></PageWrapper>} />
        <Route path="/design" element={<PageWrapper><DesignPage /></PageWrapper>} />
        <Route path="/research" element={<PageWrapper><ResearchPage /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><ContactPage /></PageWrapper>} />
        <Route path="/archive" element={<PageWrapper><ArchivePage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  const [isBooting, setIsBooting] = useState(true);

  return (
    <Router>
      <AnimatePresence>
        {isBooting && <BootSequence onComplete={() => setIsBooting(false)} />}
      </AnimatePresence>

      <div className="min-h-screen bg-white selection:bg-[#800000] selection:text-white relative overflow-x-hidden">
        {/* Only show CustomCursor if not booting */}
        {!isBooting && <CustomCursor />}
        
        <AnimatedGeometricBackground />
        <Navbar />
        <ScrollToTop />
        
        <main className="relative z-10">
          <AnimatedRoutes />
        </main>

        <Footer />

        <style>{`
          ::-webkit-scrollbar { width: 4px; }
          ::-webkit-scrollbar-track { background: #ffffff; }
          ::-webkit-scrollbar-thumb { background: #800000; border-radius: 0px; }
          
          html { scroll-behavior: smooth; cursor: default; }
          
          /* Ensures the custom cursor doesn't conflict with native cursors */
          @media (min-width: 768px) {
            a, button, .interactive { cursor: none !important; }
          }
        `}</style>
      </div>
    </Router>
  );
}

export default App;