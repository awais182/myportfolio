
import React from 'react';
import DataHero from './components/DataHero';
import AnnotationPreview from './components/AnnotationPreview';
import DataSection from './DataSection';

const DataPage: React.FC = () => {
  return (
    <div className="bg-[#FAFAF9] min-h-screen">
      <DataHero />
      <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
        <AnnotationPreview />
        <DataSection />
      </div>
    </div>
  );
};

export default DataPage;
