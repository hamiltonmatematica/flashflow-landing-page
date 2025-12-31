
import React from 'react';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { WhatIsSection } from './components/WhatIsSection';
import { FeaturesGrid } from './components/FeaturesGrid';
import { WhoIsItFor } from './components/WhoIsItFor';
import { Testimonials } from './components/Testimonials';
import { CreatorSection } from './components/CreatorSection';
import { SpreadsheetGallery } from './components/SpreadsheetGallery';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#1a0a2e] via-[#16001e] to-[#050505]">
      {/* Background ambient glow - stronger purple for hero section */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-700/30 blur-[150px] rounded-full"></div>
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-purple-900/25 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900/15 blur-[120px] rounded-full"></div>
      </div>

      <main className="relative z-10">
        <Hero />
        <ProblemSection />
        <WhatIsSection />
        <FeaturesGrid />
        <WhoIsItFor />
        <Testimonials />
        <SpreadsheetGallery />
        <CreatorSection />
        <Pricing />
        <Footer />
      </main>
    </div>
  );
};

export default App;
