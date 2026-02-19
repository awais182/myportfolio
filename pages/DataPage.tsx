import React from 'react';
import DataHero from '../components/Data/components/DataHero';
import AnnotationPreview from '../components/Data/components/AnnotationPreview';
import DataSection from '../components/Data/DataSection';

const DataPage: React.FC = () => {
  return (
    <div className="bg-[#FAFAF9] min-h-screen animate-in fade-in duration-500">
      <DataHero />
      <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        <div>
          <AnnotationPreview />
        </div>
        <DataSection />
      </div>
    </div>
  );
};

export default DataPage;
