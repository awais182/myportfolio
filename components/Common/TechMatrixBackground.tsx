import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const InfiniteNexusBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 60;

    class Particle {
      x: number; y: number; vx: number; vy: number;
      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
      }
      update() {
        this.x += this.vx; this.y += this.vy;
        if (this.x < 0 || this.x > canvas!.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas!.height) this.vy *= -1;
      }
    }

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = 'rgba(128, 0, 0, 0.1)';
      ctx.fillStyle = 'rgba(128, 0, 0, 0.2)';

      particles.forEach((p, i) => {
        p.update();
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.lineWidth = 1 - dist / 150;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      requestAnimationFrame(animate);
    };

    init(); animate();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-[#FAFAF9] overflow-hidden">
      {/* 1. Interactive Canvas Constellation */}
      <canvas ref={canvasRef} className="absolute inset-0 opacity-40" />

      {/* 2. Box-Free Floating HUD Brackets */}
      <motion.div 
        style={{ rotate }}
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] border-l-[1px] border-t-[1px] border-[#800000]/10 rounded-[100px]"
      />
      
      {/* 3. Floating Technical Rulers (No Enclosure) */}
      <div className="absolute left-10 top-1/4 h-1/2 w-px bg-gradient-to-b from-transparent via-[#800000]/20 to-transparent">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-4 h-[1px] bg-[#800000]/30 my-10" />
        ))}
      </div>

      {/* 4. Prominent Data Stream (Blur only, no box) */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-[#800000]/5 shadow-[0_0_40px_rgba(128,0,0,0.1)]" />
    </div>
  );
};

export default InfiniteNexusBackground;