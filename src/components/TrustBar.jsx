import { motion } from 'framer-motion';

const TrustBar = () => {
  const recognitions = [
    {
      name: 'UGC Sri Lanka',
      description: 'Recognized',
      icon: '🎓',
    },
    {
      name: '5-Star SETARA',
      description: 'Ministry of Higher Education, Malaysia',
      icon: '⭐',
    },
    {
      name: 'ACU Member',
      description: 'Association of Commonwealth Universities',
      icon: '🏛️',
    },
    {
      name: 'WHO Listed',
      description: 'World Health Organization',
      icon: '🏥',
    },
  ];

  return (
    <section className="bg-white py-12 border-y border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wide mb-2">
            Trusted & Recognized
          </h3>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {recognitions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
