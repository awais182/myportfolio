import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const navLinks = [
    { name: 'Engineering', path: '/engineering', id: '01' },
    { name: 'Systems', path: '/systems', id: '02' },
    { name: 'Data', path: '/data', id: '03' },
    { name: 'Design', path: '/design', id: '04' },
    { name: 'R&D', path: '/research', id: '05' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl border-b border-neutral-100 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* LOGO */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative z-[110]"
          >
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-neutral-900 rounded-lg flex items-center justify-center text-white font-black text-base shadow-xl border border-white/10 group-hover:bg-[#800000] transition-colors">
                AR
              </div>
              <div className="hidden xs:flex flex-col">
                <span className="text-sm font-black tracking-tighter text-black uppercase leading-none">
                  AWAIS <span className="text-[#800000] italic">RAZA</span>
                </span>
                <span className="text-[7px] font-bold text-neutral-400 tracking-[0.4em] uppercase mt-0.5">
                  Nexus_System
                </span>
              </div>
            </Link>
          </motion.div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative text-[9px] font-black uppercase tracking-[0.3em] transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-[#800000]' : 'text-black hover:text-[#800000]'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-[1.5px] bg-[#800000]"
                  initial={false}
                  animate={{ width: location.pathname === link.path ? '100%' : '0%' }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}

            <motion.button
              onClick={() => navigate('/contact')}
              whileHover={{ scale: 1.05, backgroundColor: "#800000", color: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-neutral-900 text-white px-6 py-2 rounded-full text-[9px] font-black tracking-widest transition-all shadow-lg"
            >
              CONNECT_
            </motion.button>
          </div>

          {/* MAROON HAMBURGER */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[110] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          >
            <motion.span 
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0, backgroundColor: isOpen ? "#fff" : "#800000" }}
              className="w-6 h-0.5 block rounded-full"
            />
            <motion.span 
              animate={{ opacity: isOpen ? 0 : 1, x: isOpen ? 10 : 0 }}
              className="w-4 h-0.5 bg-[#800000] block rounded-full self-end"
            />
            <motion.span 
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0, backgroundColor: isOpen ? "#fff" : "#800000" }}
              className="w-6 h-0.5 block rounded-full"
            />
          </button>
        </div>
      </nav>

      {/* PRO MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at 90% 5%)' }}
            animate={{ clipPath: 'circle(150% at 90% 5%)' }}
            exit={{ clipPath: 'circle(0% at 90% 5%)' }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[90] md:hidden bg-[#800000] flex flex-col justify-center px-10"
          >
            {/* Architectural Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />

            <div className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                >
                  <Link
                    to={link.path}
                    className="group flex items-baseline gap-4"
                  >
                    <span className="text-white/40 font-mono text-xs italic">
                      {link.id}
                    </span>
                    <span className={`text-5xl font-black uppercase tracking-tighter transition-all ${
                      location.pathname === link.path ? 'text-white' : 'text-neutral-900 hover:text-white'
                    }`}>
                      {link.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-10 pt-10 border-t border-white/20"
              >
                <p className="text-white/60 text-[8px] font-mono tracking-[0.3em] uppercase mb-4">Ready for launch?</p>
                <Link 
                  to="/contact" 
                  className="inline-block bg-white text-[#800000] px-8 py-4 rounded-full text-xs font-black tracking-widest uppercase hover:bg-neutral-900 hover:text-white transition-all shadow-2xl"
                >
                  Start_Project_
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;