import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://landing-page-seif.vercel.app/'),
  title: "Spanish with Seif | Learn Spanish in Algeria",
  description: "Master Spanish language with expert instructor Seif in Algeria. Personalized courses, conversation practice, and cultural immersion.",
  keywords: "learn Spanish, Spanish classes Algeria, Spanish with Seif, Spanish language course, Spanish lessons Algeria",
  authors: [{ name: "Seif" }],
  creator: "Spanish with Seif",
  publisher: "Spanish with Seif",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://landing-page-seif.vercel.app/',
    languages: {
      'en': 'https://landing-page-seif.vercel.app/en',
      'fr': 'https://landing-page-seif.vercel.app/fr',
      'ar': 'https://landing-page-seif.vercel.app/ar',
      'es': 'https://landing-page-seif.vercel.app/es',
    },
  },
  openGraph: {
    title: "Spanish with Seif | Learn Spanish in Algeria",
    description: "Master Spanish language with expert instructor Seif in Algeria. Personalized courses for all levels.",
    url: "https://landing-page-seif.vercel.app/",
    siteName: "Spanish with Seif",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Spanish with Seif - Learn Spanish in Algeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spanish with Seif | Learn Spanish in Algeria",
    description: "Master Spanish language with expert instructor Seif in Algeria",
    images: ["/images/twitter-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
  icons: {
    icon: '/assets/images/favIcon.png',
    shortcut: '/assets/images/favIcon.png',
    apple: '/assets/images/favIcon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        url: '/assets/images/favIcon.png',
      },
    ],
  },
};

import { TranslationProvider } from "../context/TranslationContext";

import { WebsiteStructuredData } from "../components/StructuredData";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <WebsiteStructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <TranslationProvider>
          <Navbar />
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
