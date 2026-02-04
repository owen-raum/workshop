import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/sections/Header';
import { Hero } from './components/sections/Hero';
import { WhatIsOpenClaw } from './components/sections/WhatIsOpenClaw';
import { AboutUsSocialProof } from './components/sections/AboutUsSocialProof';
import { WorkshopContent } from './components/sections/WorkshopContent';
import { ForWhom } from './components/sections/ForWhom';
import { Pricing } from './components/sections/Pricing';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { StickyCTABar } from './components/sections/StickyCTABar';
import { Impressum } from './pages/Impressum';
import { Datenschutz } from './pages/Datenschutz';
import { AGB } from './pages/AGB';

function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <WorkshopContent />
      <ForWhom />
      <AboutUsSocialProof />
      <WhatIsOpenClaw />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTABar />
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
