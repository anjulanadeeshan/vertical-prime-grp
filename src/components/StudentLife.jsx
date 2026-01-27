import { motion } from 'framer-motion';

const StudentLife = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Life in Malaysia: <span className="text-gradient">A Sri Lankan Perspective</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the vibrant student life through the eyes of Sri Lankan students living in Malaysia
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Video/Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop"
              alt="Sri Lankan students in Malaysia"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">නීලමෙයි මැණිකෙයි</h3>
                <p className="text-sm opacity-90">Follow our journey in Malaysia</p>
              </div>
            </div>
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-primary-red text-white w-20 h-20 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-2xl">
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              </button>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-red/10 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">🏠</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Comfortable Living</h4>
                  <p className="text-gray-600">
                    Affordable accommodation options near campus with easy access to Sri Lankan grocery stores and restaurants
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-red/10 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">🍛</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Taste of Home</h4>
                  <p className="text-gray-600">
                    Find authentic Sri Lankan cuisine and a strong Lankan community to make you feel at home
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-red/10 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">✈️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Travel & Explore</h4>
                  <p className="text-gray-600">
                    Weekend getaways to stunning destinations across Malaysia and Southeast Asia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary-red/10 p-3 rounded-lg flex-shrink-0">
                  <span className="text-2xl">👥</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Sri Lankan Community</h4>
                  <p className="text-gray-600">
                    Join a vibrant network of Sri Lankan students and professionals throughout Malaysia
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Student Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          {[
            {
              name: 'Kasun Perera',
              course: 'MBBS Student',
              quote: 'Vertical Prime made my dream of becoming a doctor possible. The support was incredible!',
              rating: 5,
            },
            {
              name: 'Dilini Jayawardena',
              course: 'MBA Graduate',
              quote: 'Best decision I ever made. The education quality is world-class and very affordable.',
              rating: 5,
            },
            {
              name: 'Ashan De Silva',
              course: 'Software Engineering',
              quote: 'Life in Malaysia is amazing! Great education, great experiences, and a supportive community.',
              rating: 5,
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="bg-gray-50 p-6 rounded-xl shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-red text-white rounded-full flex items-center justify-center font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-gray-600">{testimonial.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StudentLife;
