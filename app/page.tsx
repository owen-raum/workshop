import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { WorkshopContent } from '@/components/sections/WorkshopContent';
import { ForWhom } from '@/components/sections/ForWhom';
import { AboutUsSocialProof } from '@/components/sections/AboutUsSocialProof';
import { DeepDiveProof } from '@/components/sections/DeepDiveProof';
import { SocialProof } from '@/components/sections/SocialProof';
import { WhatIsOpenClaw } from '@/components/sections/WhatIsOpenClaw';
import { MeetOwen } from '@/components/sections/MeetOwen';
import { Pricing } from '@/components/sections/Pricing';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/sections/Footer';
import { StickyCTABar } from '@/components/sections/StickyCTABar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F1EFEB]">
      <Header />
      <Hero />
      <WorkshopContent />
      <ForWhom />
      <AboutUsSocialProof />
      <DeepDiveProof />
      <SocialProof />
      <WhatIsOpenClaw />
      <MeetOwen />
      <Pricing />
      <FAQ />
      <Footer />
      <StickyCTABar />
    </main>
  );
}
