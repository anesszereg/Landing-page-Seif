import JsonLd from './JsonLd';

export function WebsiteStructuredData() {
  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: 'https://spanishwithseif.com/',
    name: 'Spanish with Seif',
    description: 'Learn Spanish in Algeria with expert instructor Seif',
    potentialAction: {
      '@type': 'SearchAction',
      'target': 'https://spanishwithseif.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  return <JsonLd data={websiteData} />;
}

export function CourseStructuredData() {
  const courseData = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Spanish Language Course',
    description: 'Comprehensive Spanish language course for all levels in Algeria',
    provider: {
      '@type': 'Person',
      name: 'Seif',
      sameAs: 'https://spanishwithseif.com/about'
    },
    hasCourseInstance: [
      {
        '@type': 'CourseInstance',
        courseMode: 'online',
        name: 'Online Spanish Classes',
        description: 'Learn Spanish online with live instruction and practice',
        courseWorkload: 'PT4H30M',
        educationalLevel: 'Beginner to Advanced',
      },
      {
        '@type': 'CourseInstance',
        courseMode: 'onsite',
        name: 'In-Person Spanish Classes in Algeria',
        description: 'Face-to-face Spanish learning with cultural immersion',
        courseWorkload: 'PT6H',
        educationalLevel: 'All levels',
      }
    ]
  };

  return <JsonLd data={courseData} />;
}

export function LocalBusinessStructuredData() {
  const businessData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Spanish with Seif',
    image: 'https://spanishwithseif.com/images/Logo.svg',
    '@id': 'https://spanishwithseif.com',
    url: 'https://spanishwithseif.com',
    telephone: '+213XXXXXXXXX',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Your Street Address',
      addressLocality: 'Your City',
      addressRegion: 'Your Region',
      postalCode: 'Your Postal Code',
      addressCountry: 'DZ'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.7538,
      longitude: 3.0588
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday'
        ],
        opens: '09:00',
        closes: '17:00'
      }
    ],
    sameAs: [
      'https://www.facebook.com/spanishwithseif',
      'https://www.instagram.com/spanishwithseif',
      'https://twitter.com/spanishwithseif'
    ]
  };

  return <JsonLd data={businessData} />;
}

export function FAQStructuredData() {
  const faqData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does it take to learn Spanish?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The time required to learn Spanish varies based on your dedication and prior language experience. Basic conversation skills can be acquired in 3-6 months with regular practice, while reaching fluency may take 1-2 years.'
        }
      },
      {
        '@type': 'Question',
        name: 'What levels of Spanish courses do you offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We offer Spanish courses for all levels from absolute beginner (A1) to advanced (C2), following the Common European Framework of Reference for Languages (CEFR).'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you offer online or in-person classes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We provide both online and in-person Spanish classes in Algeria. Our flexible scheduling allows you to choose the format that works best for your learning style and availability.'
        }
      },
      {
        '@type': 'Question',
        name: 'What teaching methods do you use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our teaching approach combines conversational practice, grammar instruction, cultural immersion, and multimedia resources. We focus on all language skills: speaking, listening, reading, and writing.'
        }
      }
    ]
  };

  return <JsonLd data={faqData} />;
}
