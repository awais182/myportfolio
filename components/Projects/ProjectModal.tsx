import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  title: string;
  category: string;
  image: string;
  roles: string[];
  description: string;
  tech: string[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 sm:p-6 md:p-12">
        
        {/* Backdrop - High-fidelity Glass */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-white/60 backdrop-blur-xl"
        />
        
        {/* Modal Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative bg-white w-full max-w-6xl max-h-[90vh] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] border border-neutral-100 flex flex-col lg:flex-row"
        >
          
          {/* Close Button - Tactical Design */}
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-[#800000] transition-colors shadow-2xl"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Visual Side - 45% Width */}
          <div className="w-full lg:w-[45%] h-64 lg:h-auto relative bg-neutral-50 overflow-hidden group">
            <motion.img 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/10 via-transparent to-neutral-900/40" />
            
            {/* Status HUD */}
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 right-8"
            >
              <div className="p-5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl">
                <p className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em] mb-1">Status_Check</p>
                <div className="text-white font-bold flex items-center gap-2 text-xs">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_#4ade80]" />
                  ACTIVE_DEPLOYMENT
                </div>
              </div>
            </motion.div>
          </div>

          {/* Content Side - 55% Width */}
          <div className="w-full lg:w-[55%] p-8 md:p-16 overflow-y-auto bg-white custom-scrollbar">
            <div className="max-w-2xl">
              
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-[10px] font-black text-[#800000] uppercase tracking-[0.5em] mb-4 inline-block"
              >
                {project.category}
              </motion.span>
              
              <motion.h3 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-6xl font-black text-neutral-900 mb-8 tracking-tighter leading-[0.9]"
              >
                {project.title}
              </motion.h3>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-12"
              >
                {/* Description Section */}
                <section>
                  <h4 className="text-[10px] font-black text-neutral-300 uppercase tracking-widest mb-4 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-neutral-100" />
                    Project_Brief
                  </h4>
                  <p className="text-neutral-600 leading-relaxed font-medium text-lg italic">
                    {project.description}
                  </p>
                </section>

                <div className="grid sm:grid-cols-2 gap-12">
                  {/* Roles */}
                  <section>
                    <h4 className="text-[10px] font-black text-neutral-300 uppercase tracking-widest mb-5">Roles_</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.roles.map(role => (
                        <span key={role} className="text-[10px] font-bold text-neutral-700 bg-neutral-50 px-3 py-1.5 rounded-lg border border-neutral-100">
                          {role}
                        </span>
                      ))}
                    </div>
                  </section>

                  {/* Tech */}
                  <section>
                    <h4 className="text-[10px] font-black text-neutral-300 uppercase tracking-widest mb-5">Engine_</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(t => (
                        <div key={t} className="flex items-center gap-2 text-[10px] font-black text-[#800000] bg-[#800000]/5 px-3 py-1.5 rounded-lg border border-[#800000]/10">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#800000]/30" />
                          {t}
                        </div>
                      ))}
                    </div>
                  </section>
                </div>

                {/* Actions */}
                <div className="pt-8 flex flex-col sm:flex-row gap-4">
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-neutral-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-[#800000] transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3"
                  >
                    View_Live_
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </motion.button>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02, y: -2, borderColor: "#800000" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-white border-2 border-neutral-100 text-neutral-900 font-black py-5 rounded-2xl hover:bg-neutral-50 transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-3"
                  >
                    Source_Code_
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                    </svg>
                  </motion.button>
                </div>

              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;