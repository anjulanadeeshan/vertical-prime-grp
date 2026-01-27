import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'PhD',
      heading: 'Embark on Your',
      highlight: 'PhD',
      rest: 'Journey Today at Lincoln University College',
      tagline: 'Pursue Excellence, Achieve Impact.',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop',
      gradient: 'from-red-500 via-red-600 to-rose-700',
    },
    {
      title: "Bachelor's",
      heading: 'Embark on Your',
      highlight: "Bachelor's",
      rest: 'Journey Today at Lincoln University College',
      tagline: 'Ignite Potential, Create Your Future.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop',
      gradient: 'from-red-500 via-red-600 to-rose-700',
    },
    {
      title: 'Diploma',
      heading: 'Embark on Your',
      highlight: 'Diploma',
      rest: 'Journey Today at Lincoln University College',
      tagline: 'Gain Skills, Build Your Future.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
      gradient: 'from-red-500 via-red-600 to-rose-700',
    },
  ];

  const fieldsOfStudy = [
    'Medicine',
    'Dentistry',
    'Pharmacy and Traditional Complementary Medicine',
    'Nursing & Applied Science',
    'Business & Management',
    'Hospitality & Tourism',
    'Education',
    'Accounting & Finance',
    'Social Sciences, Arts and Humanities',
    'AI Computing & Multimedia',
    'Engineering and Built Environment',
    'Open Distance Learning (ODL)',
    'Research Base Post Graduate Studies',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-red-200 to-red-400 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 -right-32 w-96 h-96 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -bottom-32 left-1/3 w-96 h-96 bg-gradient-to-br from-red-100 to-red-300 rounded-full blur-3xl"
        />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full relative z-10"
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left - Image with Modern Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative order-2 lg:order-1"
              >
                {/* Decorative wavy lines - top left */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-12 -left-12 w-48 h-48 opacity-40 z-0"
                >
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    {[...Array(12)].map((_, i) => (
                      <motion.path
                        key={i}
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 2, delay: i * 0.1 }}
                        d={`M 0,${20 + i * 8} Q 50,${10 + i * 8} 100,${20 + i * 8} T 200,${20 + i * 8}`}
                        stroke="#E31E24"
                        strokeWidth="2"
                        fill="none"
                      />
                    ))}
                  </svg>
                </motion.div>

                {/* Decorative plus signs */}
                <div className="absolute top-16 right-8 space-y-2 opacity-30">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex gap-3"
                      animate={{ rotate: [0, 90, 0] }}
                      transition={{ duration: 8, delay: i * 0.2, repeat: Infinity }}
                    >
                      {[...Array(3)].map((_, j) => (
                        <span key={j} className="text-gray-400 text-lg font-light">+</span>
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Animated red dots */}
                <motion.div
                  className="absolute top-12 right-4"
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="w-4 h-4 bg-primary-red rounded-full shadow-lg" />
                  <div className="w-6 h-6 bg-primary-red rounded-full mt-6 ml-8 shadow-lg" />
                </motion.div>

                {/* Main image with modern circular design */}
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0.9, rotate: -5 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-full overflow-hidden w-[450px] h-[450px] mx-auto shadow-2xl"
                    style={{
                      clipPath: 'circle(50% at 50% 50%)',
                    }}
                  >
                    <img
                      src={slides[currentSlide].image}
                      alt={slides[currentSlide].title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
                  </motion.div>

                  {/* Large red circle accent with gradient */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className={`absolute bottom-8 -right-8 w-56 h-56 bg-gradient-to-br ${slides[currentSlide].gradient} rounded-full -z-10 shadow-2xl`}
                  />

                  {/* Dotted pattern overlay */}
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="grid grid-cols-4 gap-2">
                      {[...Array(16)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-gray-400 rounded-full"
                          animate={{ scale: [1, 1.5, 1] }}
                          transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Content */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="order-1 lg:order-2 space-y-8"
              >
                {/* Main Heading */}
                <div>
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-4"
                  >
                    {slides[currentSlide].heading}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-600">
                      {slides[currentSlide].highlight}
                    </span>
                    <br />
                    <span className="text-4xl sm:text-5xl lg:text-5xl">
                      {slides[currentSlide].rest}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl sm:text-2xl italic text-gray-600 font-serif"
                  >
                    {slides[currentSlide].tagline}
                  </motion.p>
                </div>

                {/* Fields of Study - Modern Card Design */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/50"
                >
                  <h3 className="font-bold text-gray-900 mb-4 text-lg flex items-center gap-2">
                    <span className="w-1 h-6 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
                    Fields of Study:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {fieldsOfStudy.map((field, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.05 }}
                        className="inline-block bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 hover:border-red-300 hover:shadow-md transition-all duration-300"
                      >
                        {field}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <a
                    href="#consultation"
                    className="group inline-flex items-center gap-3 bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    Register Today!
                    <svg
                      className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Modern Design */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300 z-20 shadow-xl hover:scale-110"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-red-600 hover:to-red-500 hover:text-white transition-all duration-300 z-20 shadow-xl hover:scale-110"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator - Modern Design */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-500 ${index === currentSlide
                ? 'bg-gradient-to-r from-red-600 to-red-500 w-12 shadow-lg'
                : 'bg-gray-300 w-3 hover:bg-gray-400'
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
