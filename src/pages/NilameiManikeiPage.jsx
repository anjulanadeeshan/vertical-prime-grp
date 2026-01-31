import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import nilameiLogo from '../assets/nilamei-manikei.jpeg';

const NilameiManikeiPage = () => {
    const navigate = useNavigate();

    const badges = [
        'Excellence in Education',
        'Student-Focused Approach',
        'Comprehensive Academic Support',
        'Trusted by Students & Parents',
        'Part of Vertical Prime Group'
    ];

    const scrollToUniversity = () => {
        navigate('/#lincoln-university');
        setTimeout(() => {
            const universitySection = document.getElementById('lincoln-university');
            if (universitySection) {
                universitySection.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
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
                        className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full blur-3xl"
                    />
                </div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                    {/* Back Button */}
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        onClick={() => navigate('/')}
                        className="mb-8 flex items-center gap-2 text-gray-600 hover:text-purple-600 transition-colors font-semibold"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Home
                    </motion.button>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Logo & Visual */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className="relative bg-white rounded-3xl p-12 shadow-2xl border border-gray-100">
                                {/* Decorative corners */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-600 to-pink-600 opacity-10 rounded-bl-full" />
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-600 to-pink-600 opacity-10 rounded-tr-full" />

                                {/* Logo */}
                                <div className="relative z-10 flex items-center justify-center mb-8">
                                    <img
                                        src={nilameiLogo}
                                        alt="Nilamei Manikei"
                                        className="max-w-full h-auto max-h-64 object-contain rounded-2xl"
                                    />
                                </div>

                                {/* Apply Button */}
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={scrollToUniversity}
                                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 group"
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
                                className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl shadow-xl font-bold text-sm"
                            >
                                ✓ Verified Agency
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            <div>
                                <h1 className="text-5xl font-bold mb-3">Nilamei Manikei</h1>
                                <p className="text-2xl italic text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 font-semibold">
                                    Excellence in Education
                                </p>
                            </div>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Nilamei Manikei is dedicated to empowering students with knowledge and opportunities for long-term success. We provide comprehensive educational support and guidance to help students achieve their academic goals and build successful careers.
                            </p>

                            {/* Trust Badges */}
                            <div className="space-y-3">
                                <h4 className="font-bold text-gray-900 flex items-center gap-2">
                                    <span className="w-1 h-6 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
                                    Why Choose Us:
                                </h4>
                                <div className="space-y-2">
                                    {badges.map((badge, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                                        >
                                            <svg className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-gray-700 font-medium">{badge}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default NilameiManikeiPage;
