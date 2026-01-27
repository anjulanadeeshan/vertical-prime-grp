import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - About Vertical Prime */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              About <span className="text-gradient">Vertical Prime Group</span>
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              We are a multi-company group dedicated to operational excellence. Our education wing, the{' '}
              <span className="font-semibold text-primary-red">Wisdom Education Center</span>, guides students
              toward the right academic pathways with personalized admissions support.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary-red/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Verified Agency</h4>
                  <p className="text-gray-600">Government-approved educational consultancy</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-red/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Personalized Support</h4>
                  <p className="text-gray-600">One-on-one guidance throughout your journey</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-red/10 p-3 rounded-lg">
                  <svg className="w-6 h-6 text-primary-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Reliable Document Handling</h4>
                  <p className="text-gray-600">Complete assistance with visa and documentation</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Why LUC */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-xl"
          >
            <h3 className="text-3xl font-bold mb-6">
              Why Study at <span className="text-primary-red">Lincoln University?</span>
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-red text-white p-2 rounded-lg text-2xl">💰</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Affordable Excellence</h4>
                  <p className="text-gray-600">Globally recognized degrees at a fraction of Western costs</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-red text-white p-2 rounded-lg text-2xl">📅</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Multiple Intakes</h4>
                  <p className="text-gray-600">Flexible starting months: January, March, July, and November</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-red text-white p-2 rounded-lg text-2xl">📍</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Prime Location</h4>
                  <p className="text-gray-600">Study in Petaling Jaya, a vibrant hub near Kuala Lumpur</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary-red text-white p-2 rounded-lg text-2xl">🎓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Proven Track Record</h4>
                  <p className="text-gray-600">Over 100,000+ graduates worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
