/**
 * Central Contact Information
 * UPDATE THESE VALUES BEFORE PRODUCTION DEPLOYMENT
 */

export const CONTACT_INFO = {
    // Primary Contact
    phone: {
        display: '+94 71 234 5678', // UPDATE THIS
        raw: '94712345678',
        whatsapp: '94712345678', // UPDATE THIS
    },

    email: {
        primary: 'info@verticalprime.lk', // UPDATE THIS
        support: 'support@verticalprime.lk', // UPDATE THIS
    },

    address: {
        city: 'Colombo',
        country: 'Sri Lanka',
        full: 'Colombo, Sri Lanka', // UPDATE WITH FULL ADDRESS
    },

    // Social Media
    social: {
        facebook: 'https://facebook.com/verticalprime', // UPDATE THIS
        instagram: 'https://www.instagram.com/nilameyimanikeyi',
        youtube: 'https://www.youtube.com/@NilameyiManikeyi',
        linkedin: 'https://linkedin.com/company/verticalprime', // UPDATE THIS
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
