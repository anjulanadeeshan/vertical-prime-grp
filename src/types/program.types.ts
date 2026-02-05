/**
 * University Program Type Definitions
 */

export interface ProgramLevel {
    level: string;
    icon: string;
    description: string;
    fields: string[];
}

export interface UniversityRanking {
    rank: string;
    category: string;
    icon: string;
}

export interface Facility {
    name: string;
    icon: string;
    description: string;
}

export type TabType = 'overview' | 'programs' | 'facilities';
