import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntakeCountdown = () => {
  // Calculate days until March 1, 2026
  const targetDate = new Date('2026-03-01');
  const today = new Date();
  const diffTime = targetDate - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-primary-red text-white py-3 px-4 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-2 text-sm sm:text-base">
        <span className="font-semibold">🎓 Next Intake: March 2026</span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-2">
          <span className="animate-pulse">⏰</span>
          <span className="font-bold">{diffDays} days remaining</span>
          <span>- Applications Closing Soon!</span>
        </span>
      </div>
    </motion.div>
  );
};

const WhatsAppWidget = () => {
  return (
    <motion.a
      href="https://wa.me/94712345678?text=Hello!%20I%20want%20to%20know%20more%20about%20studying%20at%20Lincoln%20University%20College"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-colors duration-300 group"
    >
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
      <div className="absolute -top-2 -right-2 bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold animate-bounce">
        !
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with an Advisor
      </div>
    </motion.a>
  );
};

const DocumentChecklist = () => {
  const [checklist, setChecklist] = useState([
    { id: 1, item: 'O/L or A/L Results', checked: false },
    { id: 2, item: 'Passport (valid for 18 months)', checked: false },
    { id: 3, item: 'Birth Certificate', checked: false },
    { id: 4, item: 'Passport-sized Photos (2 copies)', checked: false },
    { id: 5, item: 'Academic Transcripts', checked: false },
  ]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleItem = (id) => {
    setChecklist(checklist.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    ));
  };

  const completedCount = checklist.filter(item => item.checked).length;
  const totalCount = checklist.length;
  const progress = (completedCount / totalCount) * 100;

  return (
    <section id="consultation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-4">
            Document <span className="text-gradient">Checklist</span>
          </h2>
          <p className="text-center text-gray-600 mb-8">
            Make sure you have these documents ready for your application
          </p>

          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-semibold text-gray-700">Progress</span>
                <span className="text-sm font-semibold text-primary-red">{completedCount}/{totalCount}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-primary-red to-red-600 h-3 rounded-full"
                ></motion.div>
              </div>
            </div>

            {/* Checklist Items */}
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  onClick={() => toggleItem(item.id)}
                  className="flex items-center gap-4 p-4 rounded-lg border-2 border-gray-200 hover:border-primary-red transition-all duration-300 cursor-pointer group"
                >
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${
                    item.checked ? 'bg-primary-red border-primary-red' : 'border-gray-300 group-hover:border-primary-red'
                  }`}>
                    {item.checked && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-gray-700 font-medium ${item.checked ? 'line-through text-gray-400' : ''}`}>
                    {item.item}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8"
            >
              <a
                href="#contact"
                className="block w-full bg-primary-red text-white text-center px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {completedCount === totalCount ? 'Submit Application' : 'Book Free Consultation'}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { IntakeCountdown, WhatsAppWidget, DocumentChecklist };
