import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';

interface NavItem {
    name: string;
    href: string;
}

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle hash scrolling after navigation
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const navItems: NavItem[] = [
        { name: 'Home', href: '/#home' },
        { name: 'Our brands', href: '/#brands' },
        { name: 'Universities', href: '/#universities' },
        { name: 'Student Life', href: '/#youtube-channel' },
        { name: 'Contact', href: '/#contact' },
    ];

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href.startsWith('/#')) {
            const id = href.replace('/#', '');
            if (location.pathname === '/') {
                e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
                setIsMobileMenuOpen(false);
            }
        }
    };

    return (
        <header className="relative px-4 pt-4">
            <div className={`max-w-7xl mx-auto transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-xl rounded-full'
                : 'bg-white/95 backdrop-blur-md shadow-lg rounded-full'
                }`}>
                <div className="px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link to="/" className="flex items-center gap-3">
                            <img
                                src={logo}
                                alt="Vertical Prime Group"
                                className="h-12 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-gray-700 hover:text-red-600 font-medium transition-colors duration-300 text-sm"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                to="/#contact"
                                onClick={(e) => handleNavClick(e, '/#contact')}
                                className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all duration-300 text-sm shadow-md hover:shadow-lg"
                            >
                                Apply Now
                            </Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-gray-700 hover:text-red-600"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>


            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="md:hidden mt-2 bg-white rounded-3xl shadow-xl mx-5"
                >
                    <nav className="px-6 py-4 flex flex-col gap-2">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                onClick={(e) => {
                                    handleNavClick(e, item.href);
                                    setIsMobileMenuOpen(false);
                                }}
                                className="text-gray-700 hover:text-red-600 font-medium py-2 transition-colors duration-300"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/#contact"
                            onClick={(e) => {
                                handleNavClick(e, '/#contact');
                                setIsMobileMenuOpen(false);
                            }}
                            className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-red-700 transition-all duration-300 mt-2 shadow-md"
                        >
                            Apply Now
                        </Link>
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Header;
