import { motion } from 'framer-motion';

const FeaturedPrograms = () => {
  const programs = [
    {
      faculty: 'Medicine & Health',
      courses: ['MBBS', 'Nursing', 'Pharmacy'],
      icon: '🏥',
      gradient: 'from-red-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop',
    },
    {
      faculty: 'Business & Mgmt',
      courses: ['MBA', 'BBA', 'Accounting'],
      icon: '💼',
      gradient: 'from-green-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
    },
    {
      faculty: 'Engineering & Tech',
      courses: ['Computer Science', 'Software Engineering', 'Civil Engineering'],
      icon: '⚙️',
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
    },
    {
      faculty: 'Hospitality & Tourism',
      courses: ['Hotel Management', 'Tourism', 'Culinary Arts'],
      icon: '🏨',
      gradient: 'from-purple-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop',
    },
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Popular <span className="text-gradient">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover courses that meet the demands of the modern world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image}
                  alt={program.faculty}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${program.gradient} opacity-60`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl">{program.icon}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.faculty}</h3>
                <ul className="space-y-2">
                  {program.courses.map((course, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-primary-red mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {course}
                    </li>
                  ))}
                </ul>
                <button className="mt-6 w-full bg-primary-red text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="#all-programs"
            className="inline-flex items-center gap-2 text-primary-red font-semibold hover:gap-4 transition-all duration-300"
          >
            View All Programs
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
