/**
 * Lincoln University Section Component
 * Refactored with TypeScript, centralized data, and improved animations
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UNIVERSITY_INFO, PROGRAMS, RANKINGS, FACILITIES } from '@/data/programs';
import { getWhatsAppLink } from '@/constants/contact';
import { fadeInUp, fadeIn, scaleIn, ANIMATION_DURATION, STAGGER_DELAY } from '@/constants/animations';
import type { TabType } from '@/types';

const LincolnUniversity: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('overview');

    const tabs: { id: TabType; label: string }[] = [
        { id: 'overview', label: 'Overview' },
        { id: 'programs', label: 'Programs' },
        { id: 'facilities', label: 'Facilities' },
    ];

    return (
        <section
            id="universities"
            className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden"
            aria-labelledby="university-heading"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                    className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: ANIMATION_DURATION.normal }}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={scaleIn}
                        transition={{ duration: ANIMATION_DURATION.normal }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 text-blue-700 px-6 py-3 rounded-full text-sm font-bold mb-6"
                    >
                        <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                        STUDY DESTINATION
                    </motion.div>

                    <h2 id="university-heading" className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                            {UNIVERSITY_INFO.name}
                        </span>
                    </h2>

                    <p className="text-2xl text-gray-600 mb-4">{UNIVERSITY_INFO.location}</p>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        {UNIVERSITY_INFO.description}
                    </p>
                </motion.div>

                {/* Rankings */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: ANIMATION_DURATION.normal, delay: 0.2 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
                >
                    {RANKINGS.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={scaleIn}
                            transition={{ delay: index * STAGGER_DELAY.short }}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 text-center hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="text-4xl mb-3" aria-hidden="true">{item.icon}</div>
                            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
                                {item.rank}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">{item.category}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tab Navigation */}
                <div
                    className="flex flex-wrap justify-center gap-4 mb-12"
                    role="tablist"
                    aria-label="University information tabs"
                >
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            role="tab"
                            aria-selected={activeTab === tab.id}
                            aria-controls={`${tab.id}-panel`}
                            className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-xl scale-105'
                                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content with AnimatePresence */}
                <div className="mb-16">
                    <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                id="overview-panel"
                                role="tabpanel"
                                aria-labelledby="overview-tab"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={fadeIn}
                                transition={{ duration: ANIMATION_DURATION.fast }}
                                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100"
                            >
                                <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-blue-600 to-cyan-600 rounded-full" aria-hidden="true" />
                                    About {UNIVERSITY_INFO.name}
                                </h3>
                                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                                    {UNIVERSITY_INFO.about.map((paragraph, index) => (
                                        <p key={index}>{paragraph}</p>
                                    ))}
                                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                                        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                                            <h4 className="font-bold text-xl mb-3 text-blue-900">
                                                <span aria-hidden="true">🎯</span> Our Mission
                                            </h4>
                                            <p className="text-gray-700">{UNIVERSITY_INFO.mission}</p>
                                        </div>
                                        <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border border-cyan-100">
                                            <h4 className="font-bold text-xl mb-3 text-cyan-900">
                                                <span aria-hidden="true">👁️</span> Our Vision
                                            </h4>
                                            <p className="text-gray-700">{UNIVERSITY_INFO.vision}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'programs' && (
                            <motion.div
                                key="programs"
                                id="programs-panel"
                                role="tabpanel"
                                aria-labelledby="programs-tab"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={fadeIn}
                                transition={{ duration: ANIMATION_DURATION.fast }}
                                className="space-y-8"
                            >
                                {PROGRAMS.map((program, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * STAGGER_DELAY.short, duration: ANIMATION_DURATION.fast }}
                                        className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 hover:shadow-3xl transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className="text-5xl" aria-hidden="true">{program.icon}</div>
                                            <div>
                                                <h3 className="text-3xl font-bold">{program.level}</h3>
                                                <p className="text-lg italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                                                    {program.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3" role="list">
                                            {program.fields.map((field, fieldIndex) => (
                                                <span
                                                    key={fieldIndex}
                                                    role="listitem"
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
                                key="facilities"
                                id="facilities-panel"
                                role="tabpanel"
                                aria-labelledby="facilities-tab"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={fadeIn}
                                transition={{ duration: ANIMATION_DURATION.fast }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {FACILITIES.map((facility, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * STAGGER_DELAY.short, duration: ANIMATION_DURATION.fast }}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 text-center"
                                    >
                                        <div className="text-5xl mb-4" aria-hidden="true">{facility.icon}</div>
                                        <h4 className="text-xl font-bold mb-2">{facility.name}</h4>
                                        <p className="text-gray-600">{facility.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* WhatsApp CTA */}
                {/* <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: ANIMATION_DURATION.normal }}
                    className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 text-center text-white shadow-2xl"
                >
                    <h3 className="text-4xl font-bold mb-4">Want to Know More?</h3>
                    <p className="text-xl mb-8 opacity-90">
                        Get personalized guidance and answers to all your questions about {UNIVERSITY_INFO.name}
                    </p>
                    <motion.a
                        href={getWhatsAppLink('lincoln')}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-3 bg-white text-green-600 px-10 py-5 rounded-full text-xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300"
                        aria-label="Chat with us on WhatsApp about Lincoln University College"
                    >
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        Chat with Us on WhatsApp
                    </motion.a>
                </motion.div> */}
            </div>
        </section>
    );
};

export default LincolnUniversity;
