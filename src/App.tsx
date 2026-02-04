import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { OpenClawOneLiner } from './components/sections/OpenClawOneLiner';
import { WhatIsOpenClaw } from './components/sections/WhatIsOpenClaw';
import { AboutUs } from './components/sections/AboutUs';
import { WorkshopContent } from './components/sections/WorkshopContent';
import { ForWhom } from './components/sections/ForWhom';
import { Pricing } from './components/sections/Pricing';
import { SocialProof } from './components/sections/SocialProof';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { AGB } from './pages/AGB';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <OpenClawOneLiner />
      <WhatIsOpenClaw />
      <AboutUs />
      <WorkshopContent />
      <ForWhom />
      <Pricing />
      <SocialProof />
      <FAQ />
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
