/**
 * Brand Type Definitions
 */

export interface Brand {
    id: string;
    name: string;
    logo: string;
    tagline: string;
    description: string;
    link: string;
    badges?: string[];
    color?: string;
    gradient?: string;
}

export interface TrustBadge {
    icon: string;
    text: string;
}
