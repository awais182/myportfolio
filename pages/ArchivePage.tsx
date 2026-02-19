import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectCard from '../components/Projects/ProjectCard';
import ProjectModal from '../components/Projects/ProjectModal';

interface Project {
  title: string;
  category: string;
  image: string;
  roles: string[];
  description: string;
  tech: string[];
}

const ALL_PROJECTS: Project[] = [
  {
    title: "Global Mesh Network",
    category: "Systems & Networking",
    image: "https://picsum.photos/seed/network/800/600",
    roles: ["Lead Architect", "Backend Dev"],
    description: "A decentralized mesh network designed for ultra-resilient communication in remote areas. This project involved developing custom routing protocols to ensure minimal packet loss and maximum throughput in hostile environments.",
    tech: ["Go", "Cisco SDN", "Docker", "Protobuf", "Rust"]
  },
  {
    title: "BioData Insight Engine",
    category: "Data Analysis",
    image: "https://picsum.photos/seed/data/800/600",
    roles: ["Data Analyst", "Annotation Lead"],
    description: "A high-performance analytics platform for biological datasets. It utilizes machine learning to identify patterns in genetic sequences and provides real-time visualization of complex biological interactions.",
    tech: ["Python", "TensorFlow", "D3.js", "PostgreSQL", "React"]
  },
  {
    title: "Omni-App Ecosystem",
    category: "Web & Mobile",
    image: "https://picsum.photos/seed/app/800/600",
    roles: ["FullStack Dev", "UI Designer"],
    description: "A comprehensive ecosystem of web and mobile applications for enterprise resource planning. Features a custom-built component library and a shared state management system for seamless cross-platform synchronization.",
    tech: ["React Native", "TypeScript", "Node.js", "GraphQL", "Redux"]
  },
  {
    title: "Neural Vision Annotation",
    category: "AI & Annotation",
    image: "https://picsum.photos/seed/vision/800/600",
    roles: ["Annotation Engineer", "R&D"],
    description: "A proprietary tool for high-precision image annotation in autonomous vehicle training. Optimized for speed and accuracy, reducing labeling time by 40% while increasing data quality.",
    tech: ["OpenCV", "Python", "Qt", "SQLite", "Electron"]
  },
  {
    title: "Secure Core Systems",
    category: "Critical Infrastructure",
    image: "https://picsum.photos/seed/security/800/600",
    roles: ["Systems Engineer", "Security Lead"],
    description: "Hardening core infrastructure against sophisticated cyber threats. Implemented zero-trust architecture and real-time threat detection systems for a global financial client.",
    tech: ["Kubernetes", "HashiCorp Vault", "eBPF", "Terraform", "Nginx"]
  },
  {
    title: "Aesthetic Brand System",
    category: "Graphic Design",
    image: "https://picsum.photos/seed/brand/800/600",
    roles: ["Graphic Designer"],
    description: "A complete visual identity overhaul for a tech startup. Developed a flexible design system, including typography, iconography, and color palettes that represent innovation and stability.",
    tech: ["Figma", "Adobe Illustrator", "After Effects", "Tailwind CSS"]
  },
  {
    title: "Cloud Edge Router",
    category: "Systems & Networking",
    image: "https://picsum.photos/seed/router/800/600",
    roles: ["Network Architect"],
    description: "High-throughput edge routing logic for distributed cloud nodes, optimized for minimal jitter.",
    tech: ["C++", "DPDK", "Linux Kernel"]
  },
  {
    title: "Financial Pulse Dashboard",
    category: "Web & Mobile",
    image: "https://picsum.photos/seed/finance/800/600",
    roles: ["Lead Developer"],
    description: "Real-time stock tracking and predictive analysis dashboard with interactive charting.",
    tech: ["Next.js", "Tailwind", "Supabase", "Recharts"]
  },
  {
    title: "EcoLabeling Assistant",
    category: "AI & Annotation",
    image: "https://picsum.photos/seed/eco/800/600",
    roles: ["Annotation Lead"],
    description: "Tooling for satellite imagery annotation used in global deforestation tracking.",
    tech: ["React", "Python", "Leaflet"]
  }
];

const ArchivePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    'All',
    'Systems & Networking',
    'Data Analysis',
    'Web & Mobile',
    'AI & Annotation',
    'Critical Infrastructure',
    'Graphic Design'
  ];

  const filteredProjects = useMemo(() => {
    return ALL_PROJECTS.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           p.tech.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesFilter = filter === 'All' || p.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <button 
            onClick={() => navigate('/')}
            className="group flex items-center gap-3 text-[10px] font-black tracking-[0.3em] text-[#800000] uppercase mb-6 hover:-translate-x-2 transition-transform"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Nexus
          </button>
          <h1 className="text-5xl md:text-7xl font-black text-neutral-900 tracking-tighter leading-none">
            PROJECT <br/> <span className="text-[#800000]">ARCHIVE</span>
          </h1>
        </div>

        <div className="flex flex-col gap-4 w-full max-w-md">
          <div className="relative">
            <input 
              type="text" 
              placeholder="SEARCH BY TECHNOLOGY OR NAME..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border-2 border-neutral-100 px-6 py-4 rounded-2xl outline-none focus:border-[#800000]/20 transition-all font-mono text-xs font-bold uppercase tracking-widest shadow-sm hover:shadow-lg hover:border-[#800000]/30"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 text-neutral-300">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button 
                key={cat} 
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[9px] font-black rounded-lg border transition-all tracking-widest hover:scale-105 hover:shadow-md ${
                  filter === cat 
                    ? 'bg-[#800000] text-white border-[#800000] shadow-md' 
                    : 'bg-white border-neutral-100 text-neutral-400 hover:border-[#800000]/20 hover:text-[#800000]'
                }`}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, i) => (
            <div 
              key={project.title} 
              className="animate-in fade-in slide-in-from-bottom-4 duration-500"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <ProjectCard project={project} onOpen={setSelectedProject} />
            </div>
          ))
        ) : (
          <div className="col-span-full py-40 text-center">
             <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6 hover:transform hover:scale-110 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8 text-neutral-300 animate-bounce">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
               </svg>
             </div>
             <p className="text-neutral-400 font-black tracking-widest uppercase italic">The nexus returned no matching deployment modules.</p>
             <button 
              onClick={() => {setSearchQuery(''); setFilter('All');}}
              className="mt-6 text-[#800000] font-bold text-xs uppercase tracking-widest border-b border-[#800000] pb-1 hover:text-neutral-900 hover:border-neutral-900 transition-colors"
             >
               RESET_QUERY_STACK
             </button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default ArchivePage;
