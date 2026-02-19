import React, { useEffect } from 'react';
import SystemsHero from '../components/Networking/components/SystemsHero';
import NetworkMap from '../components/Networking/components/NetworkMap';
import NetworkingSection from '../components/Networking/NetworkingSection';

const SystemsPage: React.FC = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-systems-animation]');
    elements.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('animate-systems-in');
      }, i * 120);
    });
  }, []);

  return (
    <div className="bg-neutral-900 min-h-screen text-white animate-page-in-dark">
      <style>{`
        @keyframes systemsIn {
          from {
            opacity: 0;
            transform: scale(0.95) rotateZ(-5deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }
        @keyframes networkPulse {
          0%, 100% {
            opacity: 0.5;
            filter: drop-shadow(0 0 10px rgba(128, 0, 0, 0.3));
          }
          50% {
            opacity: 1;
            filter: drop-shadow(0 0 25px rgba(128, 0, 0, 0.6));
          }
        }
        @keyframes pageInDark {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-page-in-dark {
          animation: pageInDark 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-systems-in {
          animation: systemsIn 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        [data-systems-animation] {
          animation: networkPulse 4s ease-in-out infinite;
        }
      `}</style>

      <SystemsHero />
      <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        <div data-systems-animation>
          <NetworkMap />
        </div>
        <NetworkingSection />
      </div>
    </div>
  );
};

export default SystemsPage;
