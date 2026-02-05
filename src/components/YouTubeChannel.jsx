import { motion } from 'framer-motion';
import { useState } from 'react';
import nilameyiLogo from '../assets/nilamei-manikei.jpeg';

const YouTubeChannel = () => {
    const [showAllTestimonials, setShowAllTestimonials] = useState(false);

    const featuredVideos = [
        {
            id: 'hwgdZFPkot0',
            title: 'Why Choose Malaysia After A/Ls? 🇲🇾 | Low Cost Higher Education | A/L පස්සේ මොකද කරන්නෙ? | Guide 2025',
            url: 'https://www.youtube.com/watch?v=hwgdZFPkot0'
        },
        {
            id: 'OcRNIo0gjJA',
            title: 'Malaysia Dependent Visa 2025 | Full Sinhala Guide | Spouse Visa, Kids Visa, Work Rights | සරලව කියමු',
            url: 'https://www.youtube.com/watch?v=OcRNIo0gjJA'
        },
        {
            id: 'O4mUhlLfp6k',
            title: 'Foreign Ministry Appointment Sri Lanka 2025 | No Waiting | Document Attestation | Sinhala Help 🔥🇱🇰',
            url: 'https://www.youtube.com/watch?v=O4mUhlLfp6k'
        },
        {
            id: 'E3wMYw3Xzr8',
            title: 'How to Apply Malaysia eVisa 2025 | Single Entry Visa for Students | Study Visa Online Sinhala Guide📲',
            url: 'https://www.youtube.com/watch?v=E3wMYw3Xzr8'
        },
        {
            id: 'uNzhCAauhxk',
            title: 'කොහොමද Malaysia Student Visa Apply කරන්නෙ? 🤔 | How to Apply Student Visa in Malaysia 2025 🇲🇾',
            url: 'https://www.youtube.com/watch?v=uNzhCAauhxk'
        },
        {
            id: '6nXIfcVgXSc',
            title: 'Student Visa වලින් Malaysia JOB කරන්න පුළුවන්ද? 🤔🤔 Truth About Working While Studying 2025 🇲🇾',
            url: 'https://www.youtube.com/watch?v=6nXIfcVgXSc'
        }
    ];

    return (
        <section id="youtube-channel" className="relative py-24 bg-gradient-to-br from-red-50 via-white to-pink-50 overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-200 to-pink-300 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-full blur-3xl"
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
                        Follow Our{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600">
                            Student Journey
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Get real insights from Sri Lankan students living and studying in Malaysia
                    </p>
                </motion.div>

                {/* Channel Info Section */}


                {/* Featured Videos Section */}



                {/* Student Testimonials Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-3xl font-bold mb-4 text-center">
                        What Our Students Say
                    </h3>
                    <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
                        Real experiences from Sri Lankan students who trusted Vertical Prime Group for their educational journey
                    </p>

                    {/* Testimonials Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Testimonial 1 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                "Rendid made my dream of studying medicine in Malaysia a reality. The entire process was smooth and the team was incredibly supportive throughout my visa application."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                    SK
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Saman Kumara</p>
                                    <p className="text-sm text-gray-600">MBBS Student, LUC</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial 2 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                "Wisdom Education Center guided me every step of the way. From choosing the right program to settling in Malaysia, they were always there to help. Highly recommended!"
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                                    NP
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Nimal Perera</p>
                                    <p className="text-sm text-gray-600">MBA Student, LUC</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Testimonial 3 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-gray-700 mb-4 italic">
                                "The Nilameyi Manikeyi YouTube channel was a lifesaver! Their videos helped me prepare all my documents correctly. Now I'm studying in Malaysia thanks to their guidance."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                                    TF
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">Tharushi Fernando</p>
                                    <p className="text-sm text-gray-600">Engineering Student, LUC</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Additional Testimonials - Conditionally Rendered */}
                        {showAllTestimonials && (
                            <>
                                {/* Testimonial 4 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.1 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4 italic">
                                        "Professional service from start to finish. Vertical Prime Group's team handled everything efficiently. I'm now pursuing my Bachelor's degree worry-free!"
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold">
                                            AR
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Amila Rajapaksha</p>
                                            <p className="text-sm text-gray-600">Business Student, LUC</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Testimonial 5 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.2 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4 italic">
                                        "Best decision I made was choosing Rendid for my education abroad. They are government-approved and truly trustworthy. My parents were also very satisfied with their service."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                                            DS
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Dilshan Silva</p>
                                            <p className="text-sm text-gray-600">Pharmacy Student, LUC</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Testimonial 6 */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ delay: 0.3 }}
                                    className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="flex items-center gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-gray-700 mb-4 italic">
                                        "Excellent support throughout the admission process. The team at Wisdom Education Center answered all my questions patiently and helped me secure my place at Lincoln University."
                                    </p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                            KW
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900">Kavindi Wickramasinghe</p>
                                            <p className="text-sm text-gray-600">Nursing Student, LUC</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        )}
                    </div>

                    {/* Show More/Less Button */}
                    <div className="text-center mt-8">
                        <motion.button
                            onClick={() => setShowAllTestimonials(!showAllTestimonials)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            {showAllTestimonials ? (
                                <>
                                    Show Less
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                </>
                            ) : (
                                <>
                                    Show More Testimonials
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </>
                            )}
                        </motion.button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div id="nilameyi-channel" className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100 mt-20">
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
                            {/* Channel Logo */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-red-500 flex-shrink-0"
                            >
                                <img
                                    src={nilameyiLogo}
                                    alt="Nilameyi Manikeyi"
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>

                            {/* Channel Info */}
                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-4xl font-bold mb-2">Nilameyi Manikeyi</h3>
                                <p className="text-2xl text-gray-600 mb-4">නිලමෙයි මැණිකෙයි</p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    <strong>Welcome to Nilameyi Manikeyi!</strong> We are a Sri Lankan married couple living in Malaysia as international students. On this channel, we share our daily life experiences, study abroad journey, Malaysian culture, travel adventures, and tips for Sri Lankan students living overseas.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <h3 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
                                Featured Videos
                            </h3>

                            {/* Video Grid - Responsive */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                                {featuredVideos.map((video, index) => (
                                    <motion.div
                                        key={video.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                    >
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
                                            {/* YouTube Embed */}
                                            <div className="relative aspect-video bg-gray-900">
                                                <iframe
                                                    src={`https://www.youtube.com/embed/${video.id}`}
                                                    title={video.title}
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    className="absolute inset-0 w-full h-full"
                                                />
                                            </div>

                                            {/* Video Title */}
                                            <div className="p-4">
                                                <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                                                    {video.title}
                                                </h4>
                                                <a
                                                    href={video.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-2 mt-3 text-red-600 hover:text-red-700 font-medium text-sm group/link"
                                                >
                                                    Watch on YouTube
                                                    <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default YouTubeChannel;
