import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
