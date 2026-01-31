import { motion } from 'framer-motion';
import { useState } from 'react';

const LincolnUniversity = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const programs = [
        {
            level: 'PhD Programs',
            icon: '🎓',
            description: 'Pursue Excellence, Achieve Impact',
            fields: ['Medicine', 'Dentistry', 'Business Management', 'Engineering', 'AI & Computing']
        },
        {
            level: "Bachelor's Programs",
            icon: '📚',
            description: 'Ignite Potential, Create Your Future',
            fields: ['Nursing & Applied Science', 'Hospitality & Tourism', 'Accounting & Finance', 'Education', 'Multimedia']
        },
        {
            level: 'Diploma Programs',
            icon: '📖',
            description: 'Gain Skills, Build Your Future',
            fields: ['Pharmacy', 'Social Sciences', 'Arts and Humanities', 'Open Distance Learning (ODL)']
        }
    ];

    const rankings = [
        { rank: 'Top 5%', category: 'Malaysian Universities', icon: '🏆' },
        { rank: '4-Star', category: 'QS Rating', icon: '⭐' },
        { rank: 'Internationally', category: 'Accredited', icon: '🌍' },
        { rank: '15,000+', category: 'Students Worldwide', icon: '👥' }
    ];

    const facilities = [
        { name: 'Modern Campus', icon: '🏛️', description: 'State-of-the-art facilities' },
        { name: 'Research Labs', icon: '🔬', description: 'Advanced research facilities' },
        { name: 'Digital Library', icon: '📚', description: 'Extensive academic resources' },
        { name: 'Student Housing', icon: '🏠', description: 'Comfortable accommodation' },
        { name: 'Sports Complex', icon: '⚽', description: 'World-class sports facilities' },
        { name: 'Medical Center', icon: '🏥', description: '24/7 healthcare support' }
    ];

    const whatsappNumber = '+94712345678'; // Replace with actual number
    const whatsappMessage = encodeURIComponent('Hi! I would like to know more about Lincoln University College programs.');
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="universities" className="py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-4">Lincoln University College</h2>
                        <p className="text-lg text-gray-600">Your Gateway to Higher Education</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-2xl text-primary-red">{program.icon}</span>
                                    <h3 className="text-xl font-semibold">{program.level}</h3>
                                </div>
                                <p className="text-lg text-gray-600 mb-4">{program.description}</p>
                                <ul className="list-disc list-inside text-gray-600">
                                    {program.fields.map((field, fieldIndex) => (
                                        <li key={fieldIndex} className="mb-2">{field}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div><section id="lincoln-university" className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl"
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
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-bold mb-6"
                        >
                            <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                            STUDY DESTINATION
                        </motion.div>
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                Lincoln University College
                            </span>
                        </h2>
                        <p className="text-2xl text-gray-600 mb-4">Petaling Jaya, Malaysia</p>
                        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                            A premier institution offering world-class education with international recognition, modern facilities, and a diverse student community from over 70 countries.
                        </p>
                    </motion.div>

                    {/* Rankings */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                    >
                        {rankings.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
                            >
                                <div className="text-4xl mb-3">{item.icon}</div>
                                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                                    {item.rank}
                                </div>
                                <div className="text-sm text-gray-600 font-medium">{item.category}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {['overview', 'programs', 'facilities'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === tab
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                    }`}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mb-16">
                        {activeTab === 'overview' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
                            >
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full" />
                                    About Lincoln University College
                                </h3>
                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                    <p>
                                        Lincoln University College (LUC) is one of the premier private institutions of higher education approved by the Ministry of Higher Education and accredited by Malaysian Qualifications Agency (MQA, National Accreditation Board).
                                    </p>
                                    <p>
                                        Located in the vibrant city of Petaling Jaya, Malaysia, LUC offers a wide range of programs from diploma to PhD levels across various disciplines including Medicine, Dentistry, Pharmacy, Business, Engineering, and more.
                                    </p>
                                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                                            <h4 className="font-bold text-xl mb-3 text-blue-900">🎯 Our Mission</h4>
                                            <p className="text-gray-700">To provide quality education that empowers students to become competent professionals and responsible global citizens.</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                                            <h4 className="font-bold text-xl mb-3 text-cyan-900">👁️ Our Vision</h4>
                                            <p className="text-gray-700">To be a leading university recognized for academic excellence, innovation, and producing graduates who make a difference.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'programs' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-8"
                            >
                                {programs.map((program, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="text-5xl">{program.icon}</div>
                                            <div>
                                                <h3 className="text-3xl font-bold">{program.level}</h3>
                                                <p className="text-lg italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                                    {program.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {program.fields.map((field, fieldIndex) => (
                                                <span
                                                    key={fieldIndex}
                                                    className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium border border-blue-200 hover:shadow-md transition-all duration-300"
                                                >
                                                    {field}
                                                </span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'facilities' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {facilities.map((facility, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center"
                                    >
                                        <div className="text-5xl mb-4">{facility.icon}</div>
                                        <h4 className="text-xl font-bold mb-2">{facility.name}</h4>
                                        <p className="text-gray-600">{facility.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>

                    {/* WhatsApp CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-center text-white shadow-2xl"
                    >
                        <h3 className="text-4xl font-bold mb-4">Want to Know More?</h3>
                        <p className="text-xl mb-8 opacity-90">
                            Get personalized guidance and answers to all your questions about Lincoln University College
                        </p>
                        <motion.a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Chat with Us on WhatsApp
                        </motion.a>
                    </motion.div>
                </div>
            </section>

        </section>
    );
};

export default LincolnUniversity;
