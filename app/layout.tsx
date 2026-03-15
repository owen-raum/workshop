import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BackToTop } from "@/components/ui/BackToTop";
import { Databuddy } from "@databuddy/sdk/react";
import { Analytics } from "./analytics";
import { MetaPixel } from "@/components/meta-pixel";
import { CookieBanner } from "@/components/CookieBanner";
import { Suspense } from "react";

const inter = localFont({
  src: './fonts/Inter-Variable.woff2',
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = localFont({
  src: './fonts/SpaceGrotesk-Variable.woff2',
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Danke – OpenClaw Deep Dive",
  description: "Die Deep Dives pausieren. Weiter geht's bei The Circle.",
  keywords: ["OpenClaw", "AI Agent", "Deep Dive", "Andy Steinberger", "The Circle"],
  authors: [{ name: "Andy Steinberger" }],
  openGraph: {
    title: "Danke – OpenClaw Deep Dive",
    description: "Die Deep Dives pausieren. Weiter geht's bei The Circle.",
    type: "website",
    locale: "de_DE",
    url: "https://agents.andy.cy",
    images: [
      {
        url: "https://agents.andy.cy/owen-demo.jpg",
        width: 1200,
        height: 630,
        alt: "Owen der AI-Agent am Mac Mini",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Danke – OpenClaw Deep Dive",
    description: "Die Deep Dives pausieren. Weiter geht's bei The Circle.",
    images: ["https://agents.andy.cy/owen-demo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Databuddy
          clientId={process.env.NEXT_PUBLIC_DATABUDDY_CLIENT_ID!}
          trackHashChanges
          trackAttributes
        />
        <MetaPixel />
        {children}
        <ScrollReveal />
        <BackToTop />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <CookieBanner />
      </body>
    </html>
  );
}
