/**
 * Hero Carousel Component
 * Refactored with TypeScript, reduced animations, and improved accessibility
 * 
 * PERFORMANCE NOTE: This component is code-split and lazy-loaded
 */

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BRAND_STATS } from '@/data/brands';
import heroImage1 from '@/assets/A_closeup_inspirational_2k_202602050014.jpeg';
import heroImage2 from '@/assets/A_vibrant_candid_2k_202602050018.jpeg';
import heroImage3 from '@/assets/hero.jpeg';
import Header from '../Header';
import { fadeIn, ANIMATION_DURATION } from '@/constants/animations';
import { SECTIONS } from '@/constants/routes';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    cta: {
        primary: { text: string; href: string };
        secondary: { text: string; href: string };
    };
    gradient: string;
}

const SLIDES: Slide[] = [
    {
        id: 1,
        title: 'Vertical Prime Group',
        subtitle: 'Your Gateway to Global Education',
        description: 'Empowering Sri Lankan students to achieve their dreams through trusted educational partnerships and expert guidance.',
        cta: {
            primary: { text: 'Explore Our Agencies', href: `#${SECTIONS.brands}` },
            secondary: { text: 'View Programs', href: `#${SECTIONS.universities}` },
        },
        gradient: 'from-red-600 via-rose-600 to-pink-600',
    },
    {
        id: 2,
        title: 'Experience Malaysia',
        subtitle: 'Live, Learn & Explore',
        description: 'Immerse yourself in Malaysian culture while pursuing world-class education. Join thousands of international students experiencing the vibrant life of Kuala Lumpur.',
        cta: {
            primary: { text: 'Explore Programs', href: `#${SECTIONS.universities}` },
            secondary: { text: 'Contact Us', href: `#${SECTIONS.contact}` },
        },
        gradient: 'from-blue-600 via-cyan-600 to-teal-600',
    },
    {
        id: 3,
        title: 'Expert Guidance, Proven Results',
        subtitle: '100% Success Rate',
        description: 'Our dedicated team has successfully placed 500+ students in their dream universities with comprehensive support.',
        cta: {
            primary: { text: 'Our Brands', href: `#${SECTIONS.brands}` },
            secondary: { text: 'Student Stories', href: `#${SECTIONS.youtubeChannel}` },
        },
        gradient: 'from-purple-600 via-pink-600 to-red-600',
    },
];

// Hero background images that rotate with slides
const HERO_IMAGES = [heroImage3, heroImage2, heroImage1]; // Alternating pattern

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds

const HeroCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const goToSlide = useCallback((index: number) => {
        setCurrentSlide(index);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(nextSlide, AUTO_PLAY_INTERVAL);
        return () => clearInterval(interval);
    }, [isPaused, nextSlide]);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextSlide, prevSlide]);

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('#')) {
            e.preventDefault();
            const id = href.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section
            className="relative h-[100dvh] sm:h-screen flex items-center justify-center overflow-hidden px-2 pb-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            aria-label="Hero carousel"
        >
            {/* Header inside hero section */}
            <div className="absolute top-0 left-0 right-0 z-50">
                <Header />
            </div>

            <div className="absolute inset-3 rounded-3xl overflow-hidden" aria-hidden="true">
                {/* Hero Background Image Slideshow */}
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentSlide}
                        src={HERO_IMAGES[currentSlide]}
                        alt=""
                        className="w-full h-full object-cover"
                        loading="eager"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.8, ease: 'easeInOut' }}
                    />
                </AnimatePresence>
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70" />
                {/* Additional subtle pattern overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_50%)]" />
            </div>




            {/* Slides */}
            <div className="relative z-10 w-full">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        variants={fadeIn}
                        transition={{ duration: ANIMATION_DURATION.normal }}
                        className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20"
                    >
                        <div className="max-w-5xl mx-auto text-center">
                            {/* Slide Content */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: ANIMATION_DURATION.normal }}
                            >
                                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6">
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${SLIDES[currentSlide].gradient}`}>
                                        {SLIDES[currentSlide].title}
                                    </span>
                                </h1>

                                <p className="text-xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 sm:mb-6">
                                    {SLIDES[currentSlide].subtitle}
                                </p>

                                <p className="text-base sm:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed line-clamp-3 sm:line-clamp-none">
                                    {SLIDES[currentSlide].description}
                                </p>

                                {/* CTAs */}
                                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                    <a
                                        href={SLIDES[currentSlide].cta.primary.href}
                                        onClick={(e) => handleScrollToSection(e, SLIDES[currentSlide].cta.primary.href)}
                                        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-red-600 to-rose-600 text-white rounded-full font-bold text-base sm:text-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        {SLIDES[currentSlide].cta.primary.text}
                                        <span className="ml-2 inline-block group-hover:translate-x-1 transition-transform" aria-hidden="true">→</span>
                                    </a>

                                    <a
                                        href={SLIDES[currentSlide].cta.secondary.href}
                                        onClick={(e) => handleScrollToSection(e, SLIDES[currentSlide].cta.secondary.href)}
                                        className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                                    >
                                        {SLIDES[currentSlide].cta.secondary.text}
                                    </a>
                                </div>
                            </motion.div>

                            {/* Stats - Only show on first slide */}
                            {currentSlide === 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: ANIMATION_DURATION.normal }}
                                    className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-16"
                                >
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
                                        <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{BRAND_STATS.studentsPlaced}</div>
                                        <div className="text-[10px] sm:text-sm text-gray-300 uppercase tracking-wider">Students Placed</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
                                        <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{BRAND_STATS.successRate}</div>
                                        <div className="text-[10px] sm:text-sm text-gray-300 uppercase tracking-wider">Success Rate</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
                                        <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{BRAND_STATS.agencies}</div>
                                        <div className="text-[10px] sm:text-sm text-gray-300 uppercase tracking-wider">Agencies</div>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-6 border border-white/20">
                                        <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{BRAND_STATS.support}</div>
                                        <div className="text-[10px] sm:text-sm text-gray-300 uppercase tracking-wider">Support</div>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    aria-label="Previous slide"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Slide Indicators */}
                <div className="flex gap-2" role="tablist" aria-label="Slide navigation">
                    {SLIDES.map((slide, index) => (
                        <button
                            key={slide.id}
                            onClick={() => goToSlide(index)}
                            role="tab"
                            aria-selected={currentSlide === index}
                            aria-label={`Go to slide ${index + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 ${currentSlide === index
                                ? 'w-8 bg-white'
                                : 'w-2 bg-white/50 hover:bg-white/75'
                                }`}
                        />
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    aria-label="Next slide"
                    className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50"
                >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Pause/Play Indicator */}
            <div className="absolute top-8 right-8 z-20">
                <div className={`text-white/50 text-sm ${isPaused ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                    Paused
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;
