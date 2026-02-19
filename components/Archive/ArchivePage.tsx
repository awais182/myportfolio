import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Search, Terminal, RefreshCcw, LayoutGrid, Cpu, Activity } from 'lucide-react';
import ProjectCard from '../Projects/ProjectCard';
import ProjectModal from '../Projects/ProjectModal';

interface Project {
  title: string;
  category: string;
  image: string;
  roles: string[];
  description: string;
  tech: string[];
}

const ArchivePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Systems', 'Data', 'Web', 'AI', 'Infrastructure', 'Design'];

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter = filter === 'All' || p.category.includes(filter);
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

  // --- LEGENDARY ANIMATION VARIANTS ---
  const headerReveal = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const cardContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.3 }
    }
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 40, rotateX: 15, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 } 
    },
    exit: { opacity: 0, scale: 0.8, filter: 'blur(10px)', transition: { duration: 0.3 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="pt-32 pb-32 px-6 lg:px-12 max-w-[1600px] mx-auto min-h-screen selection:bg-[#800000] selection:text-white overflow-hidden"
    >
      {/* 1. BACKGROUND DATA STREAM EFFECT */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#800000_1px,transparent_1px)] [background-size:40px_40px]" />
      </div>

      {/* 2. SYSTEM NAVIGATION HEADER */}
      <header className="relative z-10 mb-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <motion.div variants={headerReveal} className="space-y-6">
            <button 
              onClick={() => navigate('/')}
              className="group flex items-center gap-4 text-[10px] font-black tracking-[0.5em] text-neutral-400 uppercase transition-all hover:text-[#800000]"
            >
              <div className="relative">
                <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="absolute inset-0 bg-[#800000] rounded-full blur-md"
                />
              </div>
              [ RETURN_TO_NEXUS ]
            </button>
            
            <div className="relative">
              <h1 className="text-7xl md:text-9xl font-black text-neutral-900 tracking-tighter leading-[0.75] uppercase">
                Data <br /> <span className="text-[#800000] inline-block relative">
                  Vault
                  <motion.div 
                    initial={{ width: 0 }} 
                    animate={{ width: '100%' }} 
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute -bottom-2 left-0 h-2 bg-neutral-900/5" 
                  />
                </span>
              </h1>
              <div className="absolute -right-12 top-0 hidden xl:block">
                 <motion.div 
                   animate={{ rotate: 360 }} 
                   transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                   className="text-neutral-200"
                 >
                   <Cpu size={120} strokeWidth={0.5} />
                 </motion.div>
              </div>
            </div>
          </motion.div>

          {/* 3. INTERACTIVE CONTROL TERMINAL */}
          <motion.div variants={headerReveal} className="w-full max-w-xl space-y-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#800000] to-orange-600 rounded-2xl blur opacity-10 group-focus-within:opacity-30 transition duration-1000"></div>
              <div className="relative bg-white border border-neutral-100 p-2 rounded-2xl flex items-center shadow-2xl">
                <div className="p-3 bg-neutral-50 rounded-xl text-[#800000]">
                  <Search size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="QUERY BY TAG, STACK, OR UID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 px-4 py-3 outline-none font-mono text-xs font-bold tracking-[0.2em] text-neutral-800 placeholder:text-neutral-300 bg-transparent"
                />
                <div className="hidden sm:flex items-center gap-2 px-4 border-l border-neutral-100 text-[10px] font-mono text-neutral-400">
                  <Activity size={12} className="animate-pulse" />
                  LIVE_INDEX
                </div>
              </div>
            </div>

            {/* CYBERNETIC FILTER BAR */}
            <div className="flex flex-wrap gap-2 p-1 bg-neutral-100/50 rounded-xl backdrop-blur-sm border border-neutral-100">
              {categories.map((cat) => (
                <button 
                  key={cat} 
                  onClick={() => setFilter(cat)}
                  className={`relative px-5 py-2.5 text-[10px] font-black rounded-lg transition-all duration-300 uppercase tracking-widest overflow-hidden ${
                    filter === (cat === 'All' ? 'All' : cat) 
                      ? 'text-white' 
                      : 'text-neutral-400 hover:text-neutral-900'
                  }`}
                >
                  {filter === (cat === 'All' ? 'All' : cat) && (
                    <motion.div 
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-[#800000] z-0 shadow-lg shadow-[#800000]/30"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </header>

      {/* 4. THE MATRIX GRID */}
      <motion.div 
        variants={cardContainer}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <motion.div 
                layout
                key={project.title}
                variants={cardVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ y: -10, rotateY: 5, perspective: 1000 }}
                className="group relative"
              >
                {/* ID Tag overlay */}
                <div className="absolute -top-3 left-6 z-20 bg-black text-white font-mono text-[8px] px-2 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  ID_MOD_00{idx + 1}
                </div>
                
                <ProjectCard project={project} onOpen={setSelectedProject} />
                
                {/* Interactive Corner Accent */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#800000] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="col-span-full py-48 rounded-3xl border-2 border-dashed border-neutral-200 flex flex-col items-center justify-center space-y-6"
            >
              <Terminal size={48} className="text-neutral-200 animate-bounce" />
              <div className="text-center">
                <h3 className="text-neutral-400 font-mono text-xs uppercase tracking-[0.5em] mb-2">Null_Pointer_Exception</h3>
                <p className="text-neutral-300 text-[10px] italic font-mono uppercase tracking-widest">No matching assets found in the current buffer.</p>
              </div>
              <button 
                onClick={() => {setSearchQuery(''); setFilter('All');}}
                className="px-8 py-3 bg-neutral-900 text-white text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#800000] transition-colors rounded-full"
              >
                Flush_Search_Buffer
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* 5. MODAL SYSTEM */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// ... Data remains the same
const ALL_PROJECTS: Project[] = [ /* Your existing projects */ ];

export default ArchivePage;