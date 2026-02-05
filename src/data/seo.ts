/**
 * SEO Metadata for Different Pages
 */

import type { SEOMetadata, StructuredData } from '@/types';

export const SEO_DATA: Record<string, SEOMetadata> = {
    home: {
        title: 'Vertical Prime Group - Study at Lincoln University College, Malaysia',
        description: 'Your Trusted Gateway for Sri Lankan Students to Study at Lincoln University College, Malaysia. Government-Approved Educational Agency offering expert guidance for MBBS, MBA, Engineering, and more.',
        keywords: [
            'Lincoln University College',
            'Study in Malaysia',
            'Sri Lankan students abroad',
            'Educational agency Sri Lanka',
            'MBBS Malaysia',
            'MBA Malaysia',
            'Engineering Malaysia',
            'Vertical Prime Group',
        ],
        ogType: 'website',
        twitterCard: 'summary_large_image',
    },
    rendid: {
        title: 'Rendid - Your Gateway to Global Education | Vertical Prime Group',
        description: 'Rendid provides expert guidance and academic planning to help Sri Lankan students achieve their educational goals abroad. Government-approved and trusted educational agency.',
        keywords: ['Rendid', 'Education consultancy', 'Study abroad', 'Sri Lanka'],
        ogType: 'website',
    },
    wec: {
        title: 'Wisdom Education Center - Where Knowledge Meets Wisdom',
        description: 'Trusted education consulting providing admissions support and personalized guidance for academic success. Part of Vertical Prime Group.',
        keywords: ['Wisdom Education Center', 'WEC', 'Education consulting', 'Career guidance'],
        ogType: 'website',
    },
};

/**
 * Structured Data for Educational Organization
 */
export const ORGANIZATION_SCHEMA: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Vertical Prime Group',
    description: 'Multi-company business group managing educational agencies connecting Sri Lankan students with world-class education opportunities.',
    url: 'https://verticalprime.lk', // UPDATE THIS
    logo: 'https://verticalprime.lk/logo.png', // UPDATE THIS
    contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+94-71-234-5678', // UPDATE THIS
        contactType: 'Customer Service',
        areaServed: 'LK',
        availableLanguage: ['en', 'si', 'ta'],
    },
    sameAs: [
        'https://facebook.com/verticalprime', // UPDATE THIS
        'https://www.instagram.com/nilameyimanikeyi',
        'https://www.youtube.com/@NilameyiManikeyi',
    ],
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Colombo',
        addressCountry: 'LK',
    },
};

/**
 * Structured Data for Lincoln University College
 */
export const UNIVERSITY_SCHEMA: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollegeOrUniversity',
    name: 'Lincoln University College',
    description: 'Premier private institution of higher education in Malaysia, approved by the Ministry of Higher Education and accredited by Malaysian Qualifications Agency.',
    url: 'https://lincoln.edu.my', // UPDATE THIS
    address: {
        '@type': 'PostalAddress',
        addressLocality: 'Petaling Jaya',
        addressRegion: 'Selangor',
        addressCountry: 'MY',
    },
};
