import { Hero } from './components/sections/Hero';
import { WhatIsOpenClaw } from './components/sections/WhatIsOpenClaw';
import { AboutUs } from './components/sections/AboutUs';
import { WorkshopContent } from './components/sections/WorkshopContent';
import { ForWhom } from './components/sections/ForWhom';
import { Pricing } from './components/sections/Pricing';
import { SocialProof } from './components/sections/SocialProof';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <WhatIsOpenClaw />
      <AboutUs />
      <WorkshopContent />
      <ForWhom />
      <Pricing />
      <SocialProof />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
