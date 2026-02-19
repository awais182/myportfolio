
import React from 'react';

const AnnotationPreview: React.FC = () => {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { title: "Object Detection", desc: "Precise bounding boxes for computer vision model training.", icon: "🎯" },
        { title: "NLP Sentiment", desc: "Fine-grained linguistic tagging for transformer models.", icon: "💬" },
        { title: "Audio Diarization", desc: "Multi-speaker identification and temporal labeling.", icon: "🎙️" }
      ].map((item, i) => (
        <div 
          key={i} 
          className="p-10 bg-white rounded-[2.5rem] border border-neutral-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden hover:-translate-y-2 hover:border-[#800000]/20"
          style={{ animation: `slideUpFade ${0.6 + i * 0.1}s ease-out backwards` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#800000]/0 to-[#800000]/0 group-hover:from-[#800000]/5 group-hover:to-[#800000]/2 transition-all duration-500" />
          <div className="relative z-10">
            <div className="text-4xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 inline-block">{item.icon}</div>
            <h4 className="text-xl font-black text-neutral-900 mb-4 group-hover:text-[#800000] transition-colors">{item.title}</h4>
            <p className="text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-600 transition-colors">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnotationPreview;
