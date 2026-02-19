import React from 'react';
// Ensure FunnyCodeOverlay is imported correctly or commented out if not yet created
import FunnyCodeOverlay from '../Common/FunnyCodeOverlay';

const NetworkingSection: React.FC = () => {
  return (
    <section id="systems" className="py-16 sm:py-24 md:py-32 bg-neutral-900 text-white relative overflow-hidden">
      <FunnyCodeOverlay />
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(#800000 1px, transparent 1px)', 
            backgroundSize: '40px 40px'
          }} 
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 md:gap-20 items-center">
          
          {/* VISUALIZATION - Left Column */}
          <div className="order-2 lg:order-1 relative h-[320px] sm:h-[450px] md:h-[550px] flex items-center justify-center">
            {/* Infrastructure Visualization Container */}
            <div className="relative w-full h-full flex items-center justify-center scale-90 sm:scale-100">
              
              {/* Spinning Rings - Using CSS Animation Keyframes */}
              <div className="absolute w-56 h-56 sm:w-72 sm:h-72 border-2 border-[#800000]/20 rounded-full animate-[spin_12s_linear_infinite]" />
              <div className="absolute w-44 h-44 sm:w-56 sm:h-56 border-2 border-[#800000]/40 rounded-full animate-[spin_8s_linear_infinite_reverse]" />
              
              {/* Core Node */}
              <div className="absolute w-28 h-28 sm:w-36 sm:h-36 border-2 border-[#800000] rounded-full flex items-center justify-center bg-neutral-900/80 backdrop-blur-sm">
                <div className="w-4 h-4 bg-[#800000] rounded-full animate-ping" />
              </div>
              
              {/* Satellite Nodes - Positioned using responsive translation */}
              {[0, 60, 120, 180, 240, 300].map(deg => (
                <div 
                  key={deg}
                  className="absolute w-10 h-10 sm:w-14 sm:h-14 bg-neutral-800 border border-white/10 rounded-xl flex items-center justify-center shadow-2xl z-20"
                  style={{ 
                    transform: `rotate(${deg}deg) translate(clamp(110px, 15vw, 180px)) rotate(-${deg}deg)` 
                  }}
                >
                   <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#800000] rounded-full shadow-[0_0_10px_#800000]" />
                </div>
              ))}

              {/* Decorative Data Paths */}
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#800000]/20 to-transparent rotate-45" />
              <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-[#800000]/20 to-transparent -rotate-45" />
            </div>
          </div>
          
          {/* TEXT CONTENT - Right Column */}
          <div className="order-1 lg:order-2">
            <div className="mb-8 md:mb-12">
              <h2 className="text-[10px] sm:text-xs font-black text-[#800000] tracking-[0.5em] uppercase mb-4 block">
                [ Transport Layer ]
              </h2>
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[0.9] uppercase">
                SYSTEMS & <br/> 
                <span className="text-[#800000] italic transform -skew-x-6 inline-block">NETWORKING</span>
              </h3>
              <p className="text-base sm:text-lg text-white/60 mb-8 leading-relaxed font-medium border-l-2 border-[#800000] pl-6">
                Architecting secure, low-latency backbones for mission-critical applications. My expertise spans software-defined networking, firewall orchestration, and deep packet inspection.
              </p>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {[
                { label: "Throughput", val: "1.2 Tbps" },
                { label: "Latency", val: "<0.4ms" },
                { label: "Uptime", val: "99.999%" },
                { label: "Security", val: "Zero-Trust" }
              ].map((stat, i) => (
                <div 
                  key={stat.label} 
                  className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#800000]/10 transition-all group hover:-translate-y-1 hover:border-[#800000]/30 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/2 transition-all duration-500" />
                  <div className="relative z-10">
                    <p className="text-[9px] sm:text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-1 group-hover:text-[#800000] transition-colors">
                      {stat.label}
                    </p>
                    <p className="text-xl sm:text-2xl font-black text-white group-hover:scale-105 transition-transform origin-left">
                      {stat.val}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Terminal Command Output */}
            <div className="mt-10 p-4 bg-black/40 rounded-lg border border-white/5 font-mono text-[10px] sm:text-xs text-neutral-500 flex items-center gap-3">
               <span className="text-[#800000] font-bold">root@awais_sys:</span> 
               <span className="animate-pulse"># show run-config --active-nodes</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NetworkingSection;