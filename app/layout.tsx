import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// If you want to use the Inter font, add this to your globals.css or include a <link> in the <head> section.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lovitchè – AI Astrology for Love & Compatibility",
    template: "%s | Lovitchè",
  },
  description:
    "Lovitchè is an AI-powered astrology dating app that aligns stars to connect souls. Discover love compatibility, zodiac matching, and relationship insights.",
  keywords: [
    "AI astrology",
    "astrology dating app",
    "love compatibility",
    "zodiac match",
    "horoscope for couples",
    "relationship astrology",
  ],
  applicationName: "Lovitchè",
  authors: [{ name: "Lovitchè Team" }],
  metadataBase: new URL("https://lovitche.com"), // change to your domain

  openGraph: {
    title: "Lovitchè – Aligning Stars, Connecting Souls",
    description:
      "An AI-based astrology app for dating couples. Find love compatibility using zodiac signs, birth charts, and AI insights.",
    url: "https://lovitche.com",
    siteName: "Lovitchè",
    images: ["/og.png"],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Lovitchè – AI Astrology Dating App",
    description:
      "Find your perfect match with AI-powered astrology and zodiac compatibility.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}