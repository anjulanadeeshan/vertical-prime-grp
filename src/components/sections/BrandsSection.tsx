/**
 * Brands Section Component
 * Refactored with TypeScript, centralized data, and typo fixes
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BRANDS } from '@/data/brands';
import { fadeInUp, scaleIn, hoverLift, ANIMATION_DURATION, STAGGER_DELAY } from '@/constants/animations';
import LazyImage from '@/components/common/LazyImage';

const BrandsSection: React.FC = () => {
    return (
        <section
            id="brands"
            className="relative bg-white py-20"
            aria-labelledby="brands-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: ANIMATION_DURATION.normal }}
                    className="text-center mb-16"
                >
                    <h2 id="brands-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Your Trusted Partners in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                            Education
                        </span>
                    </h2>
                </motion.div>

                {/* VPG Description */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ duration: ANIMATION_DURATION.slow }}
                    className="text-center max-w-6xl mx-auto mb-16"
                >
                    <motion.p
                        variants={fadeInUp}
                        transition={{ delay: 0.4, duration: ANIMATION_DURATION.normal }}
                        className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center"
                    >
                        Vertical Prime Group is a multi-company business group that manages and develops ventures across diverse industries, including a specialized vertical of educational agencies dedicated to guiding students toward academic excellence and global opportunities. Through strategic leadership and a unified vision, the Group supports its various companies in achieving sustainable growth, operational excellence, and long-term success.
                    </motion.p>
                </motion.div>

                {/* Our Brands Title */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    transition={{ delay: 0.6, duration: ANIMATION_DURATION.normal }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                        Our Brands
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full" aria-hidden="true" />
                </motion.div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {BRANDS.map((brand, index) => (
                        <motion.div
                            key={brand.id}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={scaleIn}
                            transition={{ delay: 0.8 + index * STAGGER_DELAY.medium, duration: ANIMATION_DURATION.normal }}
                            whileHover={hoverLift}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Brand Logo */}
                            <div className="mb-6 flex items-center justify-center h-32">
                                <LazyImage
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="max-w-full max-h-full object-contain"
                                    loading="lazy"
                                />
                            </div>

                            {/* Brand Name */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
                                {brand.name}
                            </h3>

                            {/* Tagline */}
                            <p className="text-sm text-red-600 font-semibold mb-4 text-center italic">
                                {brand.tagline}
                            </p>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-relaxed text-center flex-grow">
                                {brand.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="mt-6 text-center">
                                <Link
                                    to={brand.link}
                                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded-lg px-2 py-1"
                                    aria-label={`Learn more about ${brand.name}`}
                                >
                                    Learn More
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        aria-hidden="true"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandsSection;
