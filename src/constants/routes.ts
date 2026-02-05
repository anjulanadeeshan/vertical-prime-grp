/**
 * Application Routes
 */

export const ROUTES = {
    home: '/',
    rendid: '/rendid',
    wec: '/wec',
} as const;

/**
 * Section IDs for smooth scrolling
 */
export const SECTIONS = {
    home: 'home',
    brands: 'brands',
    universities: 'universities',
    youtubeChannel: 'youtube-channel',
    contact: 'contact',
} as const;

/**
 * Navigation Items
 */
export const NAV_ITEMS = [
    { name: 'Home', href: `/#${SECTIONS.home}` },
    { name: 'Our brands', href: `/#${SECTIONS.brands}` },
    { name: 'Universities', href: `/#${SECTIONS.universities}` },
    { name: 'Student Life', href: `/#${SECTIONS.youtubeChannel}` },
    { name: 'Contact', href: `/#${SECTIONS.contact}` },
] as const;
