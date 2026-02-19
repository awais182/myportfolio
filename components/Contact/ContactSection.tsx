import React from 'react';
import FunnyCodeOverlay from '../Common/FunnyCodeOverlay';
import { Globe, ArrowUpRight, Github, Linkedin, Instagram, Facebook, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [time, setTime] = React.useState('');
  React.useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FAFAF9] relative overflow-hidden">
      <FunnyCodeOverlay />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#800000]/5 -skew-x-12 transform translate-x-20" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 md:gap-20">
          <div>
            <h2 className="text-[10px] sm:text-xs font-bold text-[#800000] tracking-[0.2em] uppercase mb-2 sm:mb-4">Connect Hub</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 mb-4 sm:mb-6 md:mb-8 leading-tight">
              LET'S START A <br /> <span className="text-[#800000]">NEW PROTOCOL</span>
            </h3>
            <p className="text-neutral-600 mb-8 sm:mb-12 text-sm sm:text-base md:text-lg leading-relaxed max-w-md">
              Whether you have a critical infrastructure challenge, a disruptive app idea, or need high-end architectural research, the Raza Nexus is open. 
            </p>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 group cursor-pointer">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white border border-[#800000]/10 rounded-lg sm:rounded-2xl flex items-center justify-center text-[#800000] shadow-sm group-hover:bg-[#800000] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 sm:w-6 h-5 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <p className="text-[8px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mb-0.5 sm:mb-1">Secure Channel</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-neutral-900">
                    <a href="mailto:awsiirajpoot9@gmail.com" className="hover:underline">awsiirajpoot9@gmail.com</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 group cursor-pointer">
                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-white border border-[#800000]/10 rounded-lg sm:rounded-2xl flex items-center justify-center text-[#800000] shadow-sm group-hover:bg-[#800000] group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 sm:w-6 h-5 sm:h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[8px] sm:text-xs font-bold text-neutral-400 uppercase tracking-widest mb-0.5 sm:mb-1">Base Location</p>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-neutral-900">Global Remote | Systems Core</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 sm:mt-12 md:mt-16 flex gap-3 sm:gap-4 md:gap-6 flex-wrap">
              { [
                { label: 'GitHub', href: 'https://github.com/awais182', icon: <Github size={14} /> },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/awais-raza-aa50b3310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', icon: <Linkedin size={14} /> },
                { label: 'Instagram', href: 'https://www.instagram.com/awsii_rajpoot_official', icon: <Instagram size={14} /> },
                { label: 'Facebook', href: 'https://www.facebook.com/share/1Dbnu5d1Uc/', icon: <Facebook size={14} /> },
                { label: 'Email', href: 'mailto:awsiirajpoot9@gmail.com', icon: <Mail size={14} /> }
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[8px] sm:text-[9px] md:text-[10px] font-black tracking-[0.2em] text-[#800000] hover:text-neutral-900 transition-colors uppercase py-2 border-b-2 border-transparent hover:border-[#800000]">
                  <span className="text-[#800000]">{item.icon}</span>
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] shadow-2xl border border-neutral-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#800000]/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
            <form className="space-y-4 sm:space-y-5 md:space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                <div className="group">
                  <label className="block text-[8px] sm:text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 sm:mb-2 group-focus-within:text-[#800000] transition-colors">Subject Name</label>
                  <input 
                    type="text" 
                    placeholder="Awais's Future Client" 
                    className="w-full bg-[#FAFAF9] border border-neutral-100 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 focus:ring-2 focus:ring-[#800000] transition-all outline-none font-medium group-hover:border-[#800000]/30 hover:shadow-md text-sm" 
                  />
                </div>
                <div className="group">
                  <label className="block text-[8px] sm:text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 sm:mb-2 group-focus-within:text-[#800000] transition-colors">Reply Packet IP</label>
                  <input 
                    type="email" 
                    placeholder="your@endpoint.com" 
                    className="w-full bg-[#FAFAF9] border border-neutral-100 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 focus:ring-2 focus:ring-[#800000] transition-all outline-none font-medium group-hover:border-[#800000]/30 hover:shadow-md text-sm" 
                  />
                </div>
              </div>
              <div className="group">
                <label htmlFor="target-modality" className="block text-[8px] sm:text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 sm:mb-2 group-focus-within:text-[#800000] transition-colors">Target Modality</label>
                <select id="target-modality" className="w-full bg-[#FAFAF9] border border-neutral-100 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 focus:ring-2 focus:ring-[#800000] transition-all outline-none appearance-none font-medium text-neutral-600 group-hover:border-[#800000]/30 hover:shadow-md text-sm">
                  <option>Software Systems Development</option>
                  <option>Networking & Infrastructure</option>
                  <option>Data Intelligence & Annotation</option>
                  <option>Critical Research & R&D</option>
                  <option>Graphic Design & Aesthetics</option>
                </select>
              </div>
              <div className="group">
                <label className="block text-[8px] sm:text-[9px] md:text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-1.5 sm:mb-2 group-focus-within:text-[#800000] transition-colors">Transmission Load</label>
                <textarea 
                  rows={4} 
                  placeholder="Brief your mission objectives..." 
                  className="w-full bg-[#FAFAF9] border border-neutral-100 rounded-lg sm:rounded-xl px-3 sm:px-4 md:px-5 py-2.5 sm:py-3 md:py-4 focus:ring-2 focus:ring-[#800000] transition-all outline-none resize-none font-medium group-hover:border-[#800000]/30 hover:shadow-md text-sm"
                />
              </div>
              <button className="w-full maroon-gradient text-white font-black py-3 sm:py-4 md:py-5 rounded-lg sm:rounded-xl md:rounded-2xl shadow-xl hover:shadow-[#800000]/40 transition-all transform hover:scale-105 active:scale-95 uppercase tracking-[0.2em] text-[10px] sm:text-xs md:text-sm relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  INITIALIZE HANDSHAKE
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <div className="flex items-center gap-8 text-[10px] font-black text-neutral-500 uppercase tracking-[0.2em]">
        <div className="flex items-center gap-2">
          <Globe size={14} className="text-neutral-700" />
          <span>STAMP: {time} PKT</span>
        </div>

        <div className="flex items-center gap-6">
          <a href="mailto:awsiirajpoot9@gmail.com" className="text-[10px] text-neutral-400 hover:text-white transition-colors">awsiirajpoot9@gmail.com</a>
          <p className="text-base sm:text-lg md:text-xl font-bold text-neutral-900">
            <a href="tel:+923061247986" className="hover:underline">+92 306 1247986</a>
            <span className="mx-2">•</span>
            <a href="https://wa.me/923061247986" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a>
          </p>
        </div>

        <button onClick={scrollToTop} className="hover:text-[#800000] transition-colors flex items-center gap-2 group">
          REBOOT_TO_TOP <ArrowUpRight size={14} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

export default ContactSection;
