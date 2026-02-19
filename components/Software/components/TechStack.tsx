import React from 'react';

const TechStack: React.FC = () => {
  const stack = [
    { category: "Frontend", items: ["React", "Next.js", "TypeScript", "TailwindCSS"] },
    { category: "Backend", items: ["Node.js", "Go", "Python", "GraphQL"] },
    { category: "Database", items: ["PostgreSQL", "Redis", "MongoDB", "Supabase"] },
    { category: "DevOps", items: ["Docker", "Kubernetes", "AWS", "CI/CD"] }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {stack.map((group, groupIdx) => (
          <div 
            key={group.category} 
            className="p-6 md:p-8 bg-white rounded-3xl border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group relative overflow-hidden hover:border-[#800000]/20"
            // Using a simple fade-in-up animation style that works out of the box
            style={{ 
              animation: `fadeInUp 0.6s ease-out ${groupIdx * 0.1}s both` 
            }}
          >
            {/* Hover Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/0 to-[#800000]/0 group-hover:from-[#800000]/5 group-hover:to-[#800000]/1 transition-all duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <p className="text-[10px] font-black text-[#800000] uppercase tracking-[0.3em] mb-6 group-hover:translate-x-1 transition-transform">
                {group.category}
              </p>
              
              <div className="space-y-3">
                {group.items.map((item, idx) => (
                  <div 
                    key={item} 
                    className="flex items-center justify-between group/item hover:translate-x-2 transition-transform duration-200"
                  >
                    <span className="text-sm font-bold text-neutral-800 group-hover/item:text-[#800000] transition-colors">
                      {item}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200 group-hover/item:bg-[#800000] transition-all duration-300 group-hover/item:scale-125" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Required CSS for the animations used in the style tag */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default TechStack;