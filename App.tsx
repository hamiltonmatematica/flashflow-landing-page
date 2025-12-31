
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
import { IconsSection } from './components/IconsSection';
import { GuaranteeSection } from './components/GuaranteeSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      {/* Background ambient glow - intense purple for LP LEANDRO design */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {/* Strong purple glow top left */}
        <div className="absolute top-[-20%] left-[-15%] w-[70%] h-[70%] bg-[#7C3AED]/35 blur-[200px] rounded-full"></div>
        {/* Medium purple glow top right */}
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#6b1a7c]/30 blur-[180px] rounded-full"></div>
        {/* Purple accent in the middle */}
        <div className="absolute top-[20%] left-[30%] w-[50%] h-[50%] bg-[#7c1891]/20 blur-[160px] rounded-full"></div>
        {/* Darker purple bottom */}
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#5a0a6f]/15 blur-[140px] rounded-full"></div>
      </div>

      <main className="relative z-10">
        <Hero />
        <ProblemSection />
        <WhatIsSection />
        <FeaturesGrid />
        <WhoIsItFor />
        <SpreadsheetGallery />
        <Testimonials />
        <CreatorSection />
        <Pricing />
        {/* <IconsSection /> */}
        <GuaranteeSection />
        <Footer />
      </main>

      {/* Floating sticky CTA */}
      <FloatingCTA />
    </div>
  );
};

export default App;
