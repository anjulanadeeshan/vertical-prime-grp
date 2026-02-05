/**
 * Central Contact Information
 * UPDATE THESE VALUES BEFORE PRODUCTION DEPLOYMENT
 */

export const CONTACT_INFO = {
    // Primary Contact
    phone: {
        display: '+94 72 416 2649', // UPDATE THIS
        raw: '94724162649',
        whatsapp: '94724162649', // UPDATE THIS
    },

    email: {
        primary: 'Verticalprimegroup@gmail.com', // UPDATE THIS
    },

    address: {
        city: 'Colombo',
        country: 'Sri Lanka',
        full: 'Colombo, Sri Lanka', // UPDATE WITH FULL ADDRESS
    },

    // Social Media
    social: {
        facebook: 'https://web.facebook.com/people/Vertical-Prime-Group/61587054791281/', // UPDATE THIS
        instagram: 'https://www.instagram.com/verticalprimegroup',
        youtube: 'https://www.youtube.com/@NilameyiManikeyi',
    },
} as const;

/**
 * WhatsApp Message Templates
 */
export const WHATSAPP_MESSAGES = {
    general: 'Hi! I would like to know more about Vertical Prime Group services.',
    lincoln: 'Hi! I would like to know more about Lincoln University College programs.',
    rendid: 'Hi! I would like to know more about Rendid educational services.',
    wec: 'Hi! I would like to know more about Wisdom Education Center programs.',
} as const;

/**
 * Generate WhatsApp Link
 */
export const getWhatsAppLink = (message: keyof typeof WHATSAPP_MESSAGES = 'general'): string => {
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGES[message]);
    return `https://wa.me/${CONTACT_INFO.phone.whatsapp}?text=${encodedMessage}`;
};
