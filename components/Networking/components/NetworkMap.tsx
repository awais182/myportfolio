import React from 'react';

const NetworkMap: React.FC = () => {
  return (
    <div className="relative aspect-video lg:aspect-[21/9] bg-[#050505] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden border border-white/5 shadow-[0_0_50px_rgba(128,0,0,0.15)] flex items-center justify-center group">
      
      {/* 1. GRID OVERLAY: Technical Blueprint Style */}
      <div 
        className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000" 
        style={{ 
          backgroundImage: 'radial-gradient(#800000 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }} 
      />

      {/* 2. SCANNING CROSSHAIR: HUD Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal Line */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#800000]/40 to-transparent" />
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[#800000]/40 to-transparent" />
        
        {/* Scanning Sweep Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#800000]/5 to-transparent h-1/2 w-full animate-[scan_4s_linear_infinite]" />
      </div>

      {/* 3. CENTRAL NODE: The "Nexus Core" */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* Outermost Pulsing Ring */}
          <div className="absolute inset-0 rounded-full border border-[#800000]/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
          
          {/* Middle Rotating Ring */}
          <div className="absolute w-24 h-24 rounded-full border-2 border-dashed border-[#800000]/50 animate-[spin_10s_linear_infinite]" />
          
          {/* Inner Core */}
          <div className="w-16 h-16 rounded-full border-2 border-[#800000] flex items-center justify-center shadow-[0_0_20px_rgba(128,0,0,0.5)] bg-black">
            <div className="w-3 h-3 bg-[#800000] rounded-full animate-pulse shadow-[0_0_15px_#800000]" />
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-mono text-[10px] text-[#800000] uppercase tracking-[0.6em] animate-pulse">
            Establishing_Uplink...
          </p>
          <p className="font-mono text-[8px] text-neutral-500 uppercase tracking-[0.3em] mt-2">
            Secure_Nexus_V3.0
          </p>
        </div>
      </div>

      {/* 4. CORNER TELEMETRY: Small technical details */}
      <div className="absolute top-8 left-8 font-mono text-[8px] text-neutral-600 uppercase tracking-widest leading-relaxed">
        <p>Signal: 98.4%</p>
        <p>Latency: 12ms</p>
      </div>

      <div className="absolute top-8 right-8 font-mono text-[8px] text-[#800000] uppercase tracking-widest flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#800000] animate-pulse" />
        Live_Feed
      </div>

      <div className="absolute bottom-8 left-8 font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
        <p>Node_ID: 80-00-00-NX</p>
        <p>© 2026 Awais Raza</p>
      </div>

      {/* Final Glass Shine */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
    </div>
  );
};

export default NetworkMap;