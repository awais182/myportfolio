import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

interface Project {
  title: string;
  category: string;
  image: string;
  roles: string[];
  description: string;
  tech: string[];
}

interface ProjectShowcaseProps {
  onShowArchive?: () => void;
}

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ onShowArchive }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = [
    'All',
    'Systems & Networking',
    'Data Analysis',
    'Web & Mobile',
    'AI & Annotation',
    'Critical Infrastructure',
    'Graphic Design'
  ];

  const projects: Project[] = [
    {
      title: "Global Mesh Network",
      category: "Systems & Networking",
      image: "https://picsum.photos/seed/network/800/600",
      roles: ["Lead Architect", "Backend Dev"],
      description: "A decentralized mesh network designed for ultra-resilient communication in remote areas.",
      tech: ["Go", "Cisco SDN", "Docker", "Protobuf", "Rust"]
    },
    {
      title: "BioData Insight Engine",
      category: "Data Analysis",
      image: "https://picsum.photos/seed/data/800/600",
      roles: ["Data Analyst", "Annotation Lead"],
      description: "A high-performance analytics platform for biological datasets.",
      tech: ["Python", "TensorFlow", "D3.js", "PostgreSQL", "React"]
    },
    {
      title: "Omni-App Ecosystem",
      category: "Web & Mobile",
      image: "https://picsum.photos/seed/app/800/600",
      roles: ["FullStack Dev", "UI Designer"],
      description: "A comprehensive ecosystem of web and mobile applications for enterprise resource planning.",
      tech: ["React Native", "TypeScript", "Node.js", "GraphQL", "Redux"]
    },
    {
      title: "Neural Vision Annotation",
      category: "AI & Annotation",
      image: "https://picsum.photos/seed/vision/800/600",
      roles: ["Annotation Engineer", "R&D"],
      description: "A proprietary tool for high-precision image annotation in autonomous vehicle training.",
      tech: ["OpenCV", "Python", "Qt", "SQLite", "Electron"]
    },
    {
      title: "Secure Core Systems",
      category: "Critical Infrastructure",
      image: "https://picsum.photos/seed/security/800/600",
      roles: ["Systems Engineer", "Security Lead"],
      description: "Hardening core infrastructure against sophisticated cyber threats.",
      tech: ["Kubernetes", "HashiCorp Vault", "eBPF", "Terraform", "Nginx"]
    },
    {
      title: "Aesthetic Brand System",
      category: "Graphic Design",
      image: "https://picsum.photos/seed/brand/800/600",
      roles: ["Graphic Designer"],
      description: "A complete visual identity overhaul for a tech startup.",
      tech: ["Figma", "Adobe Illustrator", "After Effects", "Tailwind CSS"]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 sm:py-40 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50/50 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end justify-between mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-[10px] font-black text-[#800000] tracking-[0.6em] uppercase mb-6 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-[#800000]" />
              Portfolio_Core
            </h2>
            <h3 className="text-5xl sm:text-6xl lg:text-8xl font-black text-neutral-900 tracking-tighter leading-[0.85]">
              SELECTED <br/> <span className="text-[#800000] italic">DEPLOYMENTS</span>
            </h3>
            <p className="mt-8 text-neutral-500 font-medium text-lg max-w-md leading-relaxed">
              Filtering through high-impact solutions across specialized engineering domains.
            </p>
          </motion.div>
          
          {/* Pro Filter Bar */}
          <div className="flex flex-wrap gap-2 sm:gap-3 items-center lg:justify-end max-w-2xl">
            {categories.map((cat) => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`relative px-6 py-3 text-[9px] font-black rounded-full transition-all tracking-[0.2em] whitespace-nowrap overflow-hidden ${
                  filter === cat ? 'text-white' : 'text-neutral-400 hover:text-neutral-900'
                }`}
              >
                <span className="relative z-10">{cat.toUpperCase()}</span>
                {filter === cat && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#800000] shadow-lg shadow-[#800000]/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid with Layout Transitions */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 min-h-[400px]"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                key={project.title} 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard 
                  project={project} 
                  onOpen={setSelectedProject} 
                />
              </motion.div>
            ))}
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-40 text-center"
            >
              <p className="text-neutral-300 font-black tracking-[0.5em] uppercase italic text-sm">
                System_Status: No_Results_Found
              </p>
            </motion.div>
          )}
        </motion.div>
        
        {/* Archive Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center"
        >
          <button 
            onClick={onShowArchive}
            className="group relative inline-flex items-center gap-6 text-[10px] font-black text-neutral-900 transition-all duration-500 tracking-[0.4em] uppercase"
          >
            <span className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:border-[#800000] group-hover:bg-[#800000] group-hover:text-white transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-3.5 7.5M21 12H3" />
              </svg>
            </span>
            VIEW_FULL_PROJECT_ARCHIVE
          </button>
        </motion.div>
      </div>

      {/* Detail Modal Integration */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectShowcase;