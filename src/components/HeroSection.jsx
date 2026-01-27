import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const HeroSection = () => {
  const stats = [
    { number: '500+', label: 'Students Placed', icon: '🎓' },
    { number: '100%', label: 'Success Rate', icon: '✨' },
    { number: '3', label: 'Agencies', icon: '🏢' },
    { number: '24/7', label: 'Support', icon: '💬' },
  ];

  const features = [
    {
      icon: '🏆',
      title: 'Government Approved',
      description: 'Officially recognized educational agency',
    },
    {
      icon: '🌏',
      title: 'Global Recognition',
      description: 'Trusted partner for Malaysian education',
    },
    {
      icon: '💼',
      title: 'Multi-Industry',
      description: 'Diverse business group expertise',
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-red-50 min-h-screen flex items-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-red-200 via-rose-300 to-pink-200 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.3, 0.15],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-full blur-3xl"
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-10 w-20 h-20 border-4 border-red-200 rounded-lg opacity-20"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-10 w-16 h-16 border-4 border-blue-200 rounded-full opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 text-red-700 px-6 py-3 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm"
            >
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3 bg-red-600 rounded-full shadow-lg"
              />
              VERTICAL PRIME GROUP
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                Your Trusted Partner for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-rose-600 relative">
                  Global Education
                  <motion.span
                    animate={{ scaleX: [0, 1] }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-200 to-rose-200 -z-10 rounded-full"
                  />
                </span>
              </h1>
            </motion.div>

            {/* Sub-heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4"
            >
              <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
                A <span className="font-bold text-gray-900">multi-company business group</span> managing and developing ventures across diverse industries. Through strategic leadership and a unified vision, we support sustainable growth, operational excellence, and long-term success.
              </p>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                <p className="text-lg text-gray-700 mb-3">
                  <strong className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                    Our Educational Division:
                  </strong>
                </p>
                <p className="text-gray-600">
                  Government-approved educational agencies connecting Sri Lankan students with world-class education at Lincoln University College, Malaysia.
                </p>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#agencies"
                className="group relative bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-center overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Our Agencies
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-rose-600 to-red-600"
                  initial={{ x: '100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </a>
              <a
                href="#lincoln-university"
                className="group bg-white text-red-600 border-2 border-red-600 px-8 py-4 rounded-xl font-bold hover:bg-red-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                <span className="flex items-center justify-center gap-2">
                  View Programs
                  <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
              </a>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-rose-600">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Logo & Features */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative space-y-6"
          >
            {/* Main Logo Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl group bg-gradient-to-br from-red-600 to-rose-700"
            >
              <div className="relative p-16">
                <motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  src={logo}
                  alt="Vertical Prime Group"
                  className="w-full h-auto object-contain drop-shadow-2xl"
                />

                {/* Floating Info Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-rose-600 rounded-xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      VPG
                    </div>
                    <div>
                      <p className="text-xl font-bold text-gray-900">Vertical Prime Group</p>
                      <p className="text-sm text-gray-600">Excellence Across Industries</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-20 h-20 border-4 border-white/30 rounded-tr-3xl" />
              <div className="absolute bottom-4 left-4 w-20 h-20 border-4 border-white/30 rounded-bl-3xl" />
            </motion.div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="text-3xl mb-2">{feature.icon}</div>
                  <div className="text-sm font-bold text-gray-900 mb-1">{feature.title}</div>
                  <div className="text-xs text-gray-600">{feature.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
