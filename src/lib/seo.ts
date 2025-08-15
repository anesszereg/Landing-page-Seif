import type { Metadata } from 'next';

// Define OpenGraph valid types to match Next.js constraints
type OpenGraphType = 
  | "article" 
  | "website" 
  | "book" 
  | "profile" 
  | "music.song" 
  | "music.album" 
  | "music.playlist" 
  | "music.radio_station" 
  | "video.movie" 
  | "video.episode" 
  | "video.tv_show" 
  | "video.other";

type PageSeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
  locale?: string;
  type?: OpenGraphType;
  noindex?: boolean;
};

export function generatePageMetadata({
  title = '',
  description = '',
  keywords = '',
  image = '/images/og-image.webp',
  canonical = '',
  locale = 'en_US',
  type = 'website',
  noindex = false,
}: PageSeoProps): Metadata {
  // Set page title with site name
  const pageTitle = title 
    ? `${title} | Spanish with Seif` 
    : 'Spanish with Seif | Learn Spanish in Algeria';
  
  // Set page description
  const pageDescription = description || 'Master Spanish language with expert instructor Seif in Algeria. Personalized courses, conversation practice, and cultural immersion.';
  
  // Set canonical URL
  const pageCanonical = canonical || 'https://spanishwithseif.com';
  
  // Build metadata object
  return {
    title: pageTitle,
    description: pageDescription,
    keywords: keywords,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageCanonical,
      siteName: 'Spanish with Seif',
      locale: locale,
      type: type,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: pageCanonical,
    },
  };
}
