import React, { useEffect } from 'react';
import EngineeringHero from '../components/Software/components/EngineeringHero';
import TechStack from '../components/Software/components/TechStack';
import SoftwareSection from '../components/Software/SoftwareSection';

const EngineeringPage: React.FC = () => {
  useEffect(() => {
    // Trigger animation elements
    const elements = document.querySelectorAll('[data-engineering-animation]');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-engineering-in');
      }, i * 100);
    });
  }, []);

  return (
    <div className="bg-[#FAFAF9] min-h-screen animate-page-in">
      <style>{`
        @keyframes pageIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pageOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-20px);
          }
        }
        @keyframes engineeringIn {
          from {
            opacity: 0;
            transform: translateX(-30px) rotateY(15deg);
          }
          to {
            opacity: 1;
            transform: translateX(0) rotateY(0);
          }
        }
        @keyframes codeFlowIn {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes wireframeGlow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(128, 0, 0, 0);
          }
          50% {
            box-shadow: 0 0 40px rgba(128, 0, 0, 0.2);
          }
        }
        .animate-page-in {
          animation: pageIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-engineering-in {
          animation: engineeringIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        [data-engineering-animation] {
          animation: wireframeGlow 3s infinite;
        }
      `}</style>

      <EngineeringHero />
      <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        <div data-engineering-animation>
          <TechStack />
        </div>
        <SoftwareSection />
      </div>
    </div>
  );
};

export default EngineeringPage;
