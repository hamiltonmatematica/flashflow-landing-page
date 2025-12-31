
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
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#4a0e4e] via-[#2d1339] to-[#0a0318]">
      {/* Background ambient glow - much stronger purple/magenta for hero section */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Strong purple glow top left */}
        <div className="absolute top-[-20%] left-[-15%] w-[70%] h-[70%] bg-[#7c1891]/40 blur-[180px] rounded-full"></div>
        {/* Medium purple glow top right */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#5a0a6f]/35 blur-[160px] rounded-full"></div>
        {/* Purple accent in the middle */}
        <div className="absolute top-[20%] left-[30%] w-[50%] h-[50%] bg-[#8b1ca8]/25 blur-[140px] rounded-full"></div>
        {/* Darker purple bottom */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-950/20 blur-[120px] rounded-full"></div>
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
