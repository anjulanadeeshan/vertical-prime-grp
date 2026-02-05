/**
 * Brands Section Component
 * Refactored with TypeScript, centralized data, and typo fixes
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BRANDS } from '@/data/brands';
import { hoverLift, ANIMATION_DURATION, STAGGER_DELAY } from '@/constants/animations';
import LazyImage from '@/components/common/LazyImage';
import vpgLogo from '@/assets/IMG_9292.PNG';

const BrandsSection: React.FC = () => {
    return (
        <section
            id="brands"
            className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20"
            aria-labelledby="brands-heading"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mb-4"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                        Our Brands
                    </h2>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scaleX: 0 }}
                    whileInView={{ opacity: 1, scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="w-24 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto rounded-full mb-6 sm:mb-10"
                />
                {/* Vertical Prime Group - Parent Company Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-10 sm:mb-12"
                >
                    {/* VPG Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="flex justify-center mb-6"
                    >
                        <img
                            src={vpgLogo}
                            alt="Vertical Prime Group"
                            className="h-24 sm:h-32 lg:h-40 w-auto object-contain mx-auto"
                        />
                    </motion.div>

                    {/* VPG Tagline */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-600 mb-6 uppercase tracking-wide"
                    >
                        Where Vision Becomes Reality
                    </motion.p>

                    {/* VPG Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto"
                    >
                        Vertical Prime Group is a multi-company business group that manages and develops ventures across diverse industries, including a specialized vertical of educational agencies dedicated to guiding students toward academic excellence and global opportunities. Through strategic leadership and a unified vision, the Group supports its various companies in achieving sustainable growth, operational excellence, and long-term success.
                    </motion.p>
                </motion.div>

                {/* Divider */}


                {/* Our Brands Title */}


                {/* Brands Grid - 3 Subsidiary Companies */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
                    {BRANDS.map((brand, index) => (
                        <motion.div
                            key={brand.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 1.2 + index * STAGGER_DELAY.medium, duration: ANIMATION_DURATION.normal }}
                            whileHover={hoverLift}
                            className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 flex flex-col h-full items-center"
                        >
                            {/* Brand Logo */}
                            <div className="mb-6 flex items-center justify-center h-32">
                                <LazyImage
                                    src={brand.logo}
                                    alt={`${brand.name} logo`}
                                    className="max-w-full max-h-full object-contain mx-auto"
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
