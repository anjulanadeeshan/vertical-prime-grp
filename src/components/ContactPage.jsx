import { motion } from 'framer-motion';
import { useState } from 'react';
import thinkingBg from '../assets/businessman-thinking-isolated-white-background.jpg';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        program: '',
        message: ''
    });

    const programs = [
        'PhD Programs',
        "Bachelor's Degree",
        'Diploma Programs',
        'MBBS (Medicine)',
        'Dentistry',
        'Pharmacy',
        'Nursing & Applied Science',
        'Business & Management',
        'Engineering',
        'AI Computing & Multimedia',
        'Hospitality & Tourism',
        'Accounting & Finance',
        'Education',
        'Other'
    ];

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleWhatsAppSubmit = (e) => {
        e.preventDefault();

        // Construct WhatsApp message
        const message = `*New Student Inquiry*\n\n` +
            `*Name:* ${formData.name}\n` +
            `*Email:* ${formData.email}\n` +
            `*Phone:* ${formData.phone}\n` +
            `*Program Interest:* ${formData.program}\n` +
            `*Message:* ${formData.message || 'N/A'}`;

        // WhatsApp number (replace with actual number)
        const whatsappNumber = '94712345678';
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappURL, '_blank');

        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            program: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="relative pt-20 pb-32 bg-gradient-to-br from-gray-50 via-white to-red-50 z-20">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-red-200 to-rose-300 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Start Your{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                            Educational Journey
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Fill out the form below and we'll get back to you via WhatsApp with all the information you need
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="h-full"
                    >
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 h-full">
                            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-gradient-to-b from-red-600 to-pink-600 rounded-full" />
                                Application Form
                            </h3>

                            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                                {/* Name Field */}
                                <div>
                                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                                        placeholder="Enter your full name"
                                    />
                                </div>

                                {/* Email Field */}
                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                {/* Phone Field */}
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300"
                                        placeholder="+94 71 234 5678"
                                    />
                                </div>

                                {/* Program Selection */}
                                <div>
                                    <label htmlFor="program" className="block text-sm font-bold text-gray-700 mb-2">
                                        Program of Interest *
                                    </label>
                                    <select
                                        id="program"
                                        name="program"
                                        value={formData.program}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300 bg-white"
                                    >
                                        <option value="">Select a program</option>
                                        {programs.map((program, index) => (
                                            <option key={index} value={program}>
                                                {program}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Message Field */}
                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                                        Additional Message (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-red-500 focus:ring-2 focus:ring-red-200 outline-none transition-all duration-300 resize-none"
                                        placeholder="Tell us more about your educational goals..."
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Send via WhatsApp
                                </motion.button>

                                <p className="text-sm text-gray-500 text-center">
                                    By submitting this form, you'll be redirected to WhatsApp to complete your inquiry
                                </p>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Information & Features */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8"
                    >

                        {/* Why Choose Us */}
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl min-h-[400px] flex flex-col justify-center p-8 text-white h-full">
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 z-0"
                                style={{
                                    backgroundImage: `url(${thinkingBg})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 0.5
                                }}
                            />
                            {/* Solid high-contrast overlay for text readability */}
                            <div className="absolute inset-0 bg-black/60 z-10" />

                            <div className="relative z-20">
                                <h3 className="text-3xl font-bold mb-8">Why Choose Us?</h3>
                                <div className="space-y-6">
                                    {[
                                        "Government-approved educational agency",
                                        "100% success rate in student placements",
                                        "24/7 student support and guidance",
                                        "Direct partnership with Lincoln University",
                                        "Complete visa and documentation assistance"
                                    ].map((point, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-4"
                                        >
                                            <div className="mt-1 bg-red-600 rounded-full p-1.5 flex-shrink-0 shadow-lg">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <p className="font-bold text-xl leading-snug">{point}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
