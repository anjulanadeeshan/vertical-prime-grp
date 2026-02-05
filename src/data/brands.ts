/**
 * Brand Information Data
 */

import type { Brand } from '@/types';

import rendidLogo from '@/assets/rendid.PNG';
import wecLogo from '@/assets/wec.jpeg';
import nilameiLogo from '@/assets/nilamei-manikei.jpeg';

export const BRANDS: Brand[] = [
    {
        id: 'rendid',
        name: 'Rendid',
        logo: rendidLogo,
        tagline: 'Your Gateway to Global Education',
        description: 'Rendid provides expert guidance and academic planning to help students achieve their goals through professional service and trusted educational opportunities.',
        link: '/rendid',
        badges: [
            'Government-Approved & Trusted Educational Agency',
            'Officially Authorized Education Service Provider',
            'Recognized, Reliable, and Student-Focused',
            'Trusted by Students & Parents Nationwide',
        ],
        color: 'red',
        gradient: 'from-red-600 to-rose-600',
    },
    {
        id: 'wec',
        name: 'Wisdom Education Center',
        logo: wecLogo,
        tagline: 'Where Knowledge Meets Wisdom',
        description: 'Trusted education consulting providing admissions support and personalized guidance for academic success.',
        link: '/wec',
        badges: [
            'Reliable Education Consulting',
            'Admissions Support',
            'Personalized Guidance',
            'Career Pathway Planning',
        ],
        color: 'blue',
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        id: 'nilameyi',
        name: 'Nilamei Manikei',
        logo: nilameiLogo,
        tagline: 'Our Journey, Your Guide to Malaysia',
        description: 'Welcome to Nilameyi Manikeyi! We\'re a Sri Lankan student couple sharing our life, travels, and study journey in Malaysia. Subscribe for practical tips and an authentic look at the joys and challenges of living abroad!',
        link: '/#nilameyi-channel',
        color: 'red',
        gradient: 'from-red-600 to-pink-600',
    },
];

export const BRAND_STATS = {
    studentsPlaced: '500+',
    successRate: '100%',
    agencies: '3',
    support: '24/7',
} as const;
