import { motion } from 'framer-motion';

const UniversityRankings = () => {
  const rankings = [
    {
      type: 'QS University Rankings',
      background: 'bg-gradient-to-br from-yellow-400 via-orange-400 to-orange-500',
      textBg: 'bg-gradient-to-br from-orange-50 to-orange-100',
      logo: (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-500 px-4 py-3">
              <span className="text-white text-4xl font-bold">QS</span>
            </div>
            <div>
              <div className="font-bold text-2xl text-gray-900">WORLD</div>
              <div className="font-bold text-2xl text-gray-900">UNIVERSITY</div>
              <div className="font-bold text-2xl text-gray-900">RANKINGS</div>
            </div>
          </div>
        </div>
      ),
      details: [
        { rank: '#638', description: 'World University Rankings | 2026', color: 'text-primary-red' },
        { rank: '#196', description: 'in Asia | 2026', color: 'text-primary-red' },
        { rank: '#47', description: 'in South-Eastern Asia | 2025', color: 'text-primary-red' },
      ],
      description: 'As of the QS University Rankings, Lincoln University College (LUC), Malaysia, is ranked #638 in World University, #196 in Asia and holds the #47 position in South-Eastern Asia.',
      buttonColor: 'bg-orange-500 hover:bg-orange-600',
    },
    {
      type: 'Times Higher Education Impact Rankings',
      background: 'bg-gradient-to-br from-pink-200 to-red-300',
      textBg: 'bg-gradient-to-br from-red-50 to-red-100',
      logo: (
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="mb-6">
            <svg viewBox="0 0 200 200" className="w-48 h-48">
              {/* Colorful hexagon layers */}
              <polygon points="100,20 180,60 180,140 100,180 20,140 20,60" fill="#4CAF50" opacity="0.3" />
              <polygon points="100,35 165,65 165,135 100,165 35,135 35,65" fill="#E91E63" opacity="0.3" />
              <polygon points="100,50 150,75 150,125 100,150 50,125 50,75" fill="#E31E24" opacity="0.3" />
              <polygon points="100,65 135,85 135,115 100,135 65,115 65,85" fill="#1976D2" opacity="0.3" />
              <polygon points="100,80 120,92 120,108 100,120 80,108 80,92" fill="#FFC107" opacity="0.3" />
              <polygon points="100,95 105,98 105,102 100,105 95,102 95,98" fill="#00BCD4" opacity="0.3" />
            </svg>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-black p-3 rounded-lg">
              <svg viewBox="0 0 100 100" className="w-12 h-12">
                <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="#FFC107" strokeWidth="3" />
                <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="none" stroke="#E91E63" strokeWidth="3" />
                <polygon points="50,30 70,40 70,60 50,70 30,60 30,40" fill="none" stroke="#00BCD4" strokeWidth="3" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-lg">Times Higher Education</div>
              <div className="font-bold text-xl">Impact Rankings</div>
            </div>
          </div>
        </div>
      ),
      details: [
        { rank: '401-600', description: 'Overall Ranking', color: 'text-gray-900' },
      ],
      mainTitle: 'Lincoln University College Overall Ranking 401-600 in Times Higher Education Impact Rankings 2025',
      description: 'Lincoln University College, Malaysia, has achieved a position within the 401-600 band in the Times Higher Education Impact Rankings 2025, which assess universities\' contributions to the United Nations Sustainable Development Goals (SDGs).',
      buttonColor: 'bg-primary-red hover:bg-red-700',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            World-Class <span className="text-gradient">Recognition</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lincoln University College is globally recognized for academic excellence
          </p>
        </motion.div>

        <div className="space-y-8">
          {rankings.map((ranking, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`rounded-3xl shadow-2xl overflow-hidden ${ranking.background}`}
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left - Logo/Visual */}
                <div className="p-12 flex items-center justify-center">
                  {ranking.logo}
                </div>

                {/* Right - Content */}
                <div className={`p-12 ${ranking.textBg}`}>
                  {ranking.mainTitle ? (
                    <h3 className="text-3xl font-bold mb-6 leading-tight">
                      {ranking.mainTitle.split('401-600').map((part, i) => (
                        <span key={i}>
                          {part}
                          {i === 0 && <span className="text-primary-red">401-600</span>}
                        </span>
                      ))}
                    </h3>
                  ) : (
                    <>
                      <h3 className="text-4xl font-bold mb-6">
                        The {ranking.type}
                      </h3>
                      <div className="space-y-3 mb-6">
                        {ranking.details.map((detail, idx) => (
                          <div key={idx} className="flex items-baseline gap-2">
                            <span className={`text-3xl font-bold ${detail.color}`}>
                              {detail.rank}
                            </span>
                            <span className="text-lg text-gray-700">
                              {detail.description}
                            </span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div className={`p-6 rounded-xl mb-6 ${ranking.mainTitle ? 'bg-primary-red text-white' : 'bg-white'}`}>
                    <p className={`leading-relaxed ${ranking.mainTitle ? 'text-white' : 'text-gray-700'}`}>
                      {ranking.description}
                    </p>
                  </div>

                  <a
                    href="#programs"
                    className={`inline-block ${ranking.buttonColor} text-white px-8 py-4 rounded-full text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg`}
                  >
                    Get more details
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UniversityRankings;
