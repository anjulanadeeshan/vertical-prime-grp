/**
 * SEO and Meta Tag Type Definitions
 */

export interface SEOMetadata {
    title: string;
    description: string;
    keywords?: string[];
    ogImage?: string;
    ogType?: string;
    twitterCard?: 'summary' | 'summary_large_image';
    canonicalUrl?: string;
}

export interface StructuredData {
    '@context': string;
    '@type': string;
    [key: string]: any;
}
