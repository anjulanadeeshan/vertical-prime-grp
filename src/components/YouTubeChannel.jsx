import { motion } from 'framer-motion';
import nilameyiLogo from '../assets/nilamei-manikei.jpeg';

const YouTubeChannel = () => {
    // const channelStats = [
    //     { icon: '👥', number: '10K+', label: 'Subscribers' },
    //     { icon: '🎥', number: '200+', label: 'Videos' },
    //     { icon: '👀', number: '1M+', label: 'Views' },
    //     { icon: '🌍', number: '50+', label: 'Countries' }
    // ];

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
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 text-red-700 px-6 py-3 rounded-full text-sm font-bold mb-6"
                    >
                        <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                        STUDENT COMMUNITY
                    </motion.div>
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
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
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
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

                {/* Featured Videos Section */}


                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-3xl p-12 text-center text-white shadow-2xl"
                >
                    <h3 className="text-4xl font-bold mb-4">Join Our Community!</h3>
                    <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                        Subscribe to get the latest updates, tips, and real experiences from Sri Lankan students in Malaysia
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="https://www.youtube.com/@NilameyiManikeyi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-white text-red-600 px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                            </svg>
                            Subscribe on YouTube
                        </motion.a>
                        <motion.a
                            href="https://www.instagram.com/nilameyimanikeyi"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                            Follow on Instagram
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default YouTubeChannel;
