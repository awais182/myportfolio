import React, { useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  image: string;
  roles: string[];
  description: string;
  tech: string[];
}

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpen }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Mouse tracking for the follow-light
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth out the light movement
  const lightX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const lightY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpen(project)}
      className="group relative rounded-[2.5rem] overflow-hidden aspect-[4/3] bg-white border border-neutral-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer"
    >
      {/* Follow-Light Effect (Revealed on Hover) */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: useTransform(
            [lightX, lightY],
            ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(128, 0, 0, 0.08), transparent 80%)`
          ),
        }}
      />

      {/* Main Image - Stays clean until hover */}
      <motion.img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
      />
      
      {/* Soft White Overlay (reveals image detail on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent opacity-90 group-hover:opacity-60 transition-opacity duration-500" />
      
      {/* Content Container */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
        
        {/* Category Label */}
        <motion.span 
          animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }}
          className="text-[9px] font-black text-[#800000] mb-3 inline-block uppercase tracking-[0.4em]"
        >
          {project.category}
        </motion.span>
        
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <h4 className="text-2xl font-black text-neutral-900 mb-4 tracking-tighter uppercase">
            {project.title}
          </h4>
          
          <div className="flex flex-col gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <div className="flex flex-wrap gap-2">
              {project.roles.map((role) => (
                <span 
                  key={role} 
                  className="text-[8px] font-bold text-neutral-500 border border-neutral-200 px-2 py-1 rounded-full uppercase tracking-widest bg-white/50 backdrop-blur-sm"
                >
                  {role}
                </span>
              ))}
            </div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-2 text-[10px] font-black tracking-[0.3em] text-[#800000] uppercase mt-2"
            >
              EXPLORE_PROJECT_
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3 h-3">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modern Corner Accent (White Theme) */}
      <div className="absolute top-8 left-8">
        <div className="w-1 h-1 bg-[#800000] rounded-full group-hover:scale-[8] group-hover:opacity-10 transition-all duration-700 ease-out" />
      </div>

      {/* Invisible Interactive Layer */}
      <div className="absolute inset-0 border-[1px] border-neutral-200/50 rounded-[2.5rem] pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;