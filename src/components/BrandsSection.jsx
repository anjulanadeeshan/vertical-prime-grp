import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import vpgLogo from '../assets/IMG_9292.PNG';
import rendidLogo from '../assets/rendid.PNG';
import wecLogo from '../assets/wec.jpeg';
import nilameiLogo from '../assets/nilamei-manikei.jpeg';

const BrandsSection = () => {
    const brands = [
        {
            logo: rendidLogo,
            name: 'Rendid',
            tagline: 'Your Gateway to Global Education',
            description: 'Rendid provides expert guidance and academic planning to help students achieve their goals through professional service and trusted educational opportunities.',
            link: '/rendid',
        },
        {
            logo: wecLogo,
            name: 'Wisdom Education Center',
            tagline: 'Where Knowledge Meets Wisdom',
            description: 'Trusted education consulting providing admissions support and personalized guidance for academic success.',
            link: '/wec',
        },
        {
            logo: nilameiLogo,
            name: 'Nilamei Manikei',
            tagline: 'Excellence in Education',
            description: 'Dedicated to empowering students with knowledge and opportunities for long-term success.',
            link: '/nilamei-manikei',
        },
    ];

    return (
        <section className="relative bg-white py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Title Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
                        Your Trusted Partners in{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-600">
                            Education
                        </span>
                    </h2>
                </motion.div>

                {/* VPG Logo and Description */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-6xl mx-auto mb-16"
                >
                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center md:text-justify"
                    >
                        Vertical Prime Group is a multi-company business group that manages and develops ventures across diverse industries, including a specialized vertical of educational agencies dedicated to guiding students toward academic excellence and global opportunities. Through strategic leadership and a unified vision, the Group supports its various companies in achieving sustainable growth, operational excellence, and long-term success.
                    </motion.p>
                </motion.div>

                {/* Our Brands Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2">
                        Our Brands
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-rose-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Brands Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                            whileHover={{ y: -10 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Brand Logo */}
                            <div className="mb-6 flex items-center justify-center h-32">
                                <img
                                    src={brand.logo}
                                    alt={brand.name}
                                    className="max-w-full max-h-full object-contain"
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
                            <p className="text-gray-600 text-sm leading-relaxed text-center">
                                {brand.description}
                            </p>

                            {/* Learn More Link */}
                            <div className="mt-6 text-center">
                                <Link
                                    to={brand.link}
                                    className="inline-flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
                                >
                                    Learn More
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
