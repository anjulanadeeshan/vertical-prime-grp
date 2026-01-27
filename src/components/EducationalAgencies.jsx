import { motion } from 'framer-motion';
import rendidLogo from '../assets/rendid.PNG';
import wecLogo from '../assets/wec.jpeg';

const EducationalAgencies = () => {
    const agencies = [
        {
            id: 'rendid',
            name: 'Rendid',
            logo: rendidLogo,
            tagline: 'Your Gateway to Global Education',
            description: 'Rendid is an educational agency under Vertical Prime Group, focused on supporting students through expert guidance, academic planning, and access to educational opportunities. The company is committed to helping learners achieve their goals through clarity, trust, and professional service.',
            badges: [
                'Government-Approved & Trusted Educational Agency',
                'Officially Authorized Education Service Provider',
                'Recognized, Reliable, and Student-Focused',
                'Trusted by Students & Parents Nationwide',
                'A Verified Agency Under Vertical Prime Group'
            ],
            color: 'red',
            gradient: 'from-red-600 to-rose-600'
        },
        {
            id: 'wec',
            name: 'Wisdom Education Center',
            logo: wecLogo,
            tagline: 'Where Knowledge Meets Wisdom',
            description: 'Wisdom Education Center is a trusted educational agency dedicated to guiding students toward the right academic and career pathways. We provide reliable education consulting, admissions support, and personalized guidance to help students make confident decisions about their future. Our mission is to empower students with knowledge, clarity, and opportunities for long-term success.',
            badges: [
                'Trusted Education Consulting',
                'Admissions Support & Guidance',
                'Career Pathway Planning',
                'Student-Centric Approach',
                'Empowering Future Leaders'
            ],
            color: 'blue',
            gradient: 'from-blue-600 to-cyan-600'
        }
    ];

    const scrollToUniversity = () => {
        const universitySection = document.getElementById('lincoln-university');
        if (universitySection) {
            universitySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="agencies" className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
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
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-blue-50 border border-red-200 text-red-700 px-6 py-3 rounded-full text-sm font-bold mb-6"
                    >
                        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                        OUR EDUCATIONAL AGENCIES
                    </motion.div>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Your Trusted Partners in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                            Education
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Vertical Prime Group operates multiple educational agencies committed to guiding students toward academic excellence and global opportunities.
                    </p>
                </motion.div>

                {/* Agencies Grid */}
                <div className="space-y-24">
                    {agencies.map((agency, index) => (
                        <motion.div
                            key={agency.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Logo & Visual */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}
                            >
                                <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                                    {/* Decorative corner */}
                                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${agency.gradient} opacity-10 rounded-bl-full`} />
                                    <div className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${agency.gradient} opacity-10 rounded-tr-full`} />

                                    {/* Logo */}
                                    <div className="relative z-10 flex items-center justify-center mb-8">
                                        <img
                                            src={agency.logo}
                                            alt={agency.name}
                                            className="max-w-full h-auto max-h-64 object-contain"
                                        />
                                    </div>

                                    {/* Apply Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={scrollToUniversity}
                                        className={`w-full bg-gradient-to-r ${agency.gradient} text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group`}
                                    >
                                        Apply Now
                                        <svg
                                            className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </motion.button>
                                </div>

                                {/* Floating badge */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                    className={`absolute -top-6 -right-6 bg-gradient-to-r ${agency.gradient} text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm`}
                                >
                                    ✓ Verified Agency
                                </motion.div>
                            </motion.div>

                            {/* Content */}
                            <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div>
                                    <h3 className="text-4xl font-bold mb-3">{agency.name}</h3>
                                    <p className={`text-xl italic text-transparent bg-clip-text bg-gradient-to-r ${agency.gradient} font-semibold`}>
                                        {agency.tagline}
                                    </p>
                                </div>

                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {agency.description}
                                </p>

                                {/* Trust Badges */}
                                <div className="space-y-3">
                                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                        <span className={`w-1 h-6 bg-gradient-to-b ${agency.gradient} rounded-full`} />
                                        Why Choose Us:
                                    </h4>
                                    <div className="space-y-2">
                                        {agency.badges.map((badge, badgeIndex) => (
                                            <motion.div
                                                key={badgeIndex}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: badgeIndex * 0.1 }}
                                                className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                                            >
                                                <svg className={`w-6 h-6 text-${agency.color}-600 flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                                <span className="text-gray-700 font-medium">{badge}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EducationalAgencies;
