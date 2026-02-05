/**
 * Lincoln University Section Component - Modern Redesign
 * Features video background, split-screen layout, and enhanced animations
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { UNIVERSITY_INFO, PROGRAMS, RANKINGS, FACILITIES } from '@/data/programs';
import { getWhatsAppLink } from '@/constants/contact';
import { fadeInUp, fadeIn, ANIMATION_DURATION, STAGGER_DELAY } from '@/constants/animations';
import type { TabType } from '@/types';
import universityVideo from '@/assets/Cinematic_University_Promo_Video.mp4';
import lincolnLogo from '@/assets/IMG_9739(2).PNG';
import transitionImage from '@/assets/Cinematic_transition_starting_2k_202602051057.jpeg';
import campusImage from '@/assets/lincon-uni.png';

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
            className="relative bg-white overflow-hidden"
            aria-labelledby="university-heading"
        >
            {/* Hero Video Section */}
            <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <div className="absolute inset-0">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src={universityVideo} type="video/mp4" />
                    </video>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="text-white"
                        >
                            {/* Logo */}
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="mb-8"
                            >
                                <img
                                    src={lincolnLogo}
                                    alt="Lincoln University"
                                    className="h-24 w-auto"
                                />
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
                            >
                                Where{' '}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                                    Excellence
                                </span>
                                <br />
                                Meets Opportunity
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="text-lg sm:text-xl lg:text-2xl mb-6 sm:mb-8 text-gray-200 leading-relaxed"
                            >
                                Join 15,000+ international students at Malaysia&apos;s premier university.
                                Experience world-class education with globally recognized programs.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="flex flex-wrap gap-4"
                            >
                                <a
                                    href="#programs-section"
                                    className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-red-500/50"
                                >
                                    Explore Programs
                                </a>
                                <a
                                    href="#contact"
                                    className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300"
                                >
                                    Apply Now
                                </a>
                            </motion.div>

                            {/* Quick Stats */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="grid grid-cols-3 gap-3 sm:gap-6 mt-6 sm:mt-8 lg:mt-12"
                            >
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500">15,000+</div>
                                    <div className="text-xs sm:text-sm text-gray-300 mt-1">Students</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500">60+</div>
                                    <div className="text-xs sm:text-sm text-gray-300 mt-1">Countries</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-500">100+</div>
                                    <div className="text-xs sm:text-sm text-gray-300 mt-1">Programs</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Right: Ranking Stats Grid - Hidden on mobile, shown on lg+ */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="hidden lg:grid grid-cols-2 gap-4 lg:gap-6 max-w-lg mx-auto"
                        >
                            {RANKINGS.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="group relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-xl hover:shadow-red-500/20 transition-all duration-300 hover:border-white/40"
                                >
                                    {/* Gradient Glow on Hover */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/10 group-hover:to-orange-500/10 rounded-2xl transition-all duration-300" />

                                    {/* Content */}
                                    <div className="relative z-10 text-center">
                                        <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                                            {item.icon}
                                        </div>
                                        <div className="text-xl font-bold text-white mb-2 leading-tight">
                                            {item.rank}
                                        </div>
                                        <div className="text-xs text-gray-200 font-semibold uppercase tracking-wide">
                                            {item.category}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>


                </div>
            </div>

            {/* Ranking Stats - Mobile Only (outside hero) */}
            <div className="lg:hidden bg-gradient-to-br from-gray-900 to-gray-800 py-12 -mt-1">
                <div className="container mx-auto px-4 sm:px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-2 gap-4 max-w-lg mx-auto"
                    >
                        {RANKINGS.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white/10 backdrop-blur-xl rounded-xl p-4 border border-white/20 shadow-xl"
                            >
                                <div className="text-center">
                                    <div className="text-3xl mb-2" aria-hidden="true">
                                        {item.icon}
                                    </div>
                                    <div className="text-base font-bold text-white mb-1 leading-tight">
                                        {item.rank}
                                    </div>
                                    <div className="text-[10px] text-gray-200 font-semibold uppercase tracking-wide">
                                        {item.category}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>


            {/* Programs Section */}
            <div id="programs-section" className="pt-32 lg:pt-40 pb-20 bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header */}
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                            Discover Your{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                                Perfect Program
                            </span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Choose from over 100 programs across various disciplines
                        </p>
                    </motion.div>

                    {/* Tab Navigation */}
                    <div
                        className="flex flex-wrap justify-center gap-4 mb-16"
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
                                className={`px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === tab.id
                                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white shadow-2xl shadow-red-500/30 scale-105'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 shadow-md hover:scale-102'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <AnimatePresence mode="wait">
                        {activeTab === 'overview' && (
                            <motion.div
                                key="overview"
                                id="overview-panel"
                                role="tabpanel"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={fadeIn}
                                transition={{ duration: ANIMATION_DURATION.fast }}
                            >
                                {/* Split Screen Layout */}
                                <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                                    {/* Left: Image */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <img
                                            src={transitionImage}
                                            alt="Lincoln University Campus Life"
                                            className="rounded-3xl shadow-2xl w-full"
                                        />
                                    </motion.div>

                                    {/* Right: Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                                            About{' '}
                                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">
                                                {UNIVERSITY_INFO.name}
                                            </span>
                                        </h3>
                                        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                                            {UNIVERSITY_INFO.about.map((paragraph, index) => (
                                                <p key={index}>{paragraph}</p>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Mission & Vision Cards */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.4 }}
                                        className="relative bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100 overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full -mr-16 -mt-16" />
                                        <div className="text-5xl mb-4">🎯</div>
                                        <h4 className="font-bold text-2xl mb-4 text-red-900">Our Mission</h4>
                                        <p className="text-gray-700 leading-relaxed">{UNIVERSITY_INFO.mission}</p>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 }}
                                        className="relative bg-gradient-to-br from-orange-50 to-red-50 rounded-3xl p-8 border border-orange-100 overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full -mr-16 -mt-16" />
                                        <div className="text-5xl mb-4">👁️</div>
                                        <h4 className="font-bold text-2xl mb-4 text-orange-900">Our Vision</h4>
                                        <p className="text-gray-700 leading-relaxed">{UNIVERSITY_INFO.vision}</p>
                                    </motion.div>
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'programs' && (
                            <motion.div
                                key="programs"
                                id="programs-panel"
                                role="tabpanel"
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={fadeIn}
                                transition={{ duration: ANIMATION_DURATION.fast }}
                                className="space-y-6"
                            >
                                {PROGRAMS.map((program, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * STAGGER_DELAY.short }}
                                        whileHover={{ scale: 1.02 }}
                                        className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300"
                                    >
                                        <div className="flex items-start gap-6 mb-6">
                                            <div className="text-6xl group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                                                {program.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-3xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                                                    {program.level}
                                                </h3>
                                                <p className="text-lg text-gray-600 italic">
                                                    {program.description}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex flex-wrap gap-3">
                                            {program.fields.map((field, fieldIndex) => (
                                                <span
                                                    key={fieldIndex}
                                                    className="bg-gradient-to-r from-red-50 to-orange-50 text-red-700 px-5 py-2.5 rounded-full text-sm font-semibold border border-red-200 hover:shadow-md hover:scale-105 transition-all duration-300 cursor-default"
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
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                variants={fadeIn}
                                transition={{ duration: ANIMATION_DURATION.fast }}
                                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {FACILITIES.map((facility, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * STAGGER_DELAY.short }}
                                        whileHover={{ y: -10 }}
                                        className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:border-red-300 hover:shadow-2xl transition-all duration-300 text-center"
                                    >
                                        <div className="text-6xl mb-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
                                            {facility.icon}
                                        </div>
                                        <h4 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                                            {facility.name}
                                        </h4>
                                        <p className="text-gray-600 leading-relaxed">{facility.description}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* CTA Section */}
            <div className="relative py-24 overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src={campusImage}
                        alt=""
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-red-900/95 to-orange-900/90" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <motion.div
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                        variants={fadeInUp}
                        className="text-center text-white max-w-4xl mx-auto"
                    >
                        <h3 className="text-4xl lg:text-5xl font-bold mb-6">
                            Ready to Start Your Journey?
                        </h3>
                        <p className="text-xl lg:text-2xl mb-10 text-gray-100">
                            Join thousands of successful students who chose Lincoln University.
                            Your future begins here.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <motion.a
                                href="#contact"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-white text-red-600 px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-white/30 transition-all duration-300"
                            >
                                Apply Now
                            </motion.a>
                            <motion.a
                                href={getWhatsAppLink('lincoln')}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-green-600 text-white px-10 py-5 rounded-full text-xl font-bold shadow-2xl hover:shadow-green-500/30 transition-all duration-300"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                                Chat on WhatsApp
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LincolnUniversity;
