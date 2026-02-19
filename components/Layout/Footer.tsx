import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Facebook, Mail, ArrowUpRight, Cpu, Globe, Terminal } from 'lucide-react';

const Footer: React.FC = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="bg-[#050505] text-white py-16 sm:py-24 relative z-30 border-t border-white/5 overflow-hidden"
    >
      {/* 1. TOP SCANLINE ACCENT */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#800000]/40 to-transparent" />
      
      {/* 2. AMBIENT ATMOSPHERE */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#800000]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
          
          {/* BRAND ENGINE */}
          <motion.div variants={itemVariants} className="lg:col-span-5 space-y-8">
            <Link to="/" onClick={scrollToTop} className="inline-flex items-center gap-5 group">
              <div className="relative">
                <div className="absolute -inset-3 bg-[#800000]/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="w-14 h-14 bg-gradient-to-br from-[#800000] to-[#4a0000] rounded-xl flex items-center justify-center text-white font-black text-2xl relative z-10 shadow-2xl border border-white/10 group-hover:border-[#800000]/50 transition-all duration-500">
                  AR
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tighter uppercase leading-none">
                  AWAIS <span className="text-[#800000] italic transform -skew-x-6 inline-block">RAZA</span>
                </h2>
                <div className="flex items-center gap-2 mt-2">
                  <span className="flex h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                  <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-500 font-black">Link_Status: Active</p>
                </div>
              </div>
            </Link>
            
            <p className="text-neutral-500 text-sm max-w-sm leading-relaxed font-medium">
              Architecting the high-performance backbones of the digital age. 
              Engineering complexity into resilient, elegant infrastructure.
            </p>

            <div className="flex gap-4">
              {[
                { icon: <Github size={18} />, href: "https://github.com/awais182" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/awais-raza-aa50b3310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
                { icon: <Instagram size={18} />, href: "https://www.instagram.com/awsii_rajpoot_official" },
                { icon: <Facebook size={18} />, href: "https://www.facebook.com/share/1Dbnu5d1Uc/" },
                { icon: <Mail size={18} />, href: "mailto:awsiirajpoot9@gmail.com" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-white/5 bg-white/[0.02] flex items-center justify-center hover:bg-[#800000] hover:border-[#800000] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <span className="text-neutral-400 group-hover:text-white transition-colors">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* NAVIGATION MATRIX */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-10">
            <FooterColumn 
              title="Systems" 
              links={[
                { label: "Infrastructure", to: "/systems" },
                { label: "Security", to: "/security" },
                { label: "Data Pipeline", to: "/data" }
              ]} 
            />
            <FooterColumn 
              title="Development" 
              links={[
                { label: "Software Eng", to: "/engineering" },
                { label: "R&D Labs", to: "/labs" },
                { label: "Open Source", to: "/git" }
              ]} 
            />
            <FooterColumn 
              title="Terminal" 
              links={[
                { label: "Uptime", to: "/status" },
                { label: "Documentation", to: "/docs" },
                { label: "PGP Key", to: "/key" }
              ]} 
            />
          </div>
        </div>

        {/* SYSTEM FOOTER BAR */}
        <motion.div 
          variants={itemVariants}
          className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
               <Cpu size={14} className="text-[#800000]" />
               <span className="text-[10px] font-mono text-neutral-400 tracking-widest">OS_VERSION: 2.0.6-STABLE</span>
            </div>
            <p className="text-[10px] font-mono text-neutral-600 tracking-tighter">
              &copy; {new Date().getFullYear()} AWAIS_RAZA // ALL_RIGHTS_RESERVED
            </p>
          </div>

          <div className="flex items-center gap-8 text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em]">
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-neutral-700" />
              <span>STAMP: {time} PKT</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="mailto:awsiirajpoot9@gmail.com" className="text-[10px] text-neutral-400 hover:text-white transition-colors">awsiirajpoot9@gmail.com</a>
              <a href="tel:+923061247986" className="text-[10px] text-neutral-400 hover:text-white transition-colors">+92 306 1247986</a>
              <a href="https://wa.me/923061247986" target="_blank" rel="noopener noreferrer" className="text-[10px] text-neutral-400 hover:text-white transition-colors">WhatsApp</a>
            </div>

            <button onClick={scrollToTop} className="hover:text-[#800000] transition-colors flex items-center gap-2 group">
              REBOOT_TO_TOP <ArrowUpRight size={14} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

const FooterColumn = ({ title, links }: { title: string, links: { label: string, to: string }[] }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-2">
      <Terminal size={12} className="text-[#800000]" />
      <h3 className="text-[10px] font-black text-white uppercase tracking-[0.4em]">{title}</h3>
    </div>
    <ul className="space-y-4">
      {links.map((link, idx) => (
        <li key={idx}>
          <Link 
            to={link.to} 
            className="text-neutral-500 hover:text-white text-sm font-medium transition-all duration-300 flex items-center gap-3 group"
          >
            <span className="w-0 h-[1px] bg-[#800000] group-hover:w-3 transition-all duration-300" />
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;