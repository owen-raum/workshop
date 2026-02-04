import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "OpenClaw Deep Dive – Live-Webinar mit Andy Steinberger",
  description: "Lerne in 90 Minuten, wie du mit OpenClaw deinen eigenen AI-Agenten baust. Live am 15. Februar 2026.",
  keywords: ["OpenClaw", "AI Agent", "Workshop", "Andy Steinberger", "KI", "Automatisierung"],
  authors: [{ name: "Andy Steinberger" }],
  openGraph: {
    title: "OpenClaw Deep Dive – Live-Webinar",
    description: "Lerne in 90 Minuten, wie du mit OpenClaw deinen eigenen AI-Agenten baust.",
    type: "website",
    locale: "de_DE",
    url: "https://agents.andy.cy",
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Deep Dive – Live-Webinar",
    description: "Lerne in 90 Minuten, wie du mit OpenClaw deinen eigenen AI-Agenten baust.",
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
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
