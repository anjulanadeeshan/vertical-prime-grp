/**
 * University Programs and Information Data
 */

import type { ProgramLevel, UniversityRanking, Facility } from '@/types';

export const UNIVERSITY_INFO = {
    name: 'Lincoln University College',
    location: 'Petaling Jaya, Malaysia',
    description: 'A premier institution offering world-class education with international recognition, modern facilities, and a diverse student community from over 70 countries.',
    mission: 'To provide quality education that empowers students to become competent professionals and responsible global citizens.',
    vision: 'To be a leading university recognized for academic excellence, innovation, and producing graduates who make a difference.',
    about: [
        'Lincoln University College (LUC) is one of the premier private institutions of higher education approved by the Ministry of Higher Education and accredited by Malaysian Qualifications Agency (MQA, National Accreditation Board).',
        'Located in the vibrant city of Petaling Jaya, Malaysia, LUC offers a wide range of programs from diploma to PhD levels across various disciplines including Medicine, Dentistry, Pharmacy, Business, Engineering, and more.',
    ],
} as const;

export const PROGRAMS: ProgramLevel[] = [
    {
        level: 'PhD Programs',
        icon: '🎓',
        description: 'Pursue Excellence, Achieve Impact',
        fields: ['Medicine', 'Dentistry', 'Business Management', 'Engineering', 'AI & Computing'],
    },
    {
        level: "Bachelor's Programs",
        icon: '📚',
        description: 'Ignite Potential, Create Your Future',
        fields: ['Nursing & Applied Science', 'Hospitality & Tourism', 'Accounting & Finance', 'Education', 'Multimedia'],
    },
    {
        level: 'Diploma Programs',
        icon: '📖',
        description: 'Gain Skills, Build Your Future',
        fields: ['Pharmacy', 'Social Sciences', 'Arts and Humanities', 'Open Distance Learning (ODL)'],
    },
];

export const RANKINGS: UniversityRanking[] = [
    { rank: 'Top 5%', category: 'Malaysian Universities', icon: '🏆' },
    { rank: '4-Star', category: 'QS Rating', icon: '⭐' },
    { rank: 'Internationally', category: 'Accredited', icon: '🌍' },
    { rank: '15,000+', category: 'Students Worldwide', icon: '👥' },
];

export const FACILITIES: Facility[] = [
    { name: 'Modern Campus', icon: '🏛️', description: 'State-of-the-art facilities' },
    { name: 'Research Labs', icon: '🔬', description: 'Advanced research facilities' },
    { name: 'Digital Library', icon: '📚', description: 'Extensive academic resources' },
    { name: 'Student Housing', icon: '🏠', description: 'Comfortable accommodation' },
    { name: 'Sports Complex', icon: '⚽', description: 'World-class sports facilities' },
    { name: 'Medical Center', icon: '🏥', description: '24/7 healthcare support' },
];
