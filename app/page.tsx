import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { WorkshopContent } from '@/components/sections/WorkshopContent';
import { ForWhom } from '@/components/sections/ForWhom';
import { AboutUsSocialProof } from '@/components/sections/AboutUsSocialProof';
import { SocialProof } from '@/components/sections/SocialProof';
import { WhatIsOpenClaw } from '@/components/sections/WhatIsOpenClaw';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { StickyCTABar } from '@/components/sections/StickyCTABar';
import { PrismBeam } from '@/components/ui/PrismBeam';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">
      <Header />
      <Hero />
      <PrismBeam />
      <WorkshopContent />
      <PrismBeam />
      <ForWhom />
      <PrismBeam />
      <AboutUsSocialProof />
      <PrismBeam />
      <SocialProof />
      <PrismBeam />
      <WhatIsOpenClaw />
      <PrismBeam />
      <Pricing />
      <PrismBeam />
      <FAQ />
      <PrismBeam />
      <Footer />
      <StickyCTABar />
    </main>
  );
}
