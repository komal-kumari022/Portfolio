import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-xl border-b border-white/20 shadow-lg py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-3xl font-black tracking-tighter cursor-pointer"
                    >
                        <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            KK.
                        </span>
                    </motion.div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="relative text-slate-600 font-bold text-sm uppercase tracking-widest group"
                            >
                                <span className="group-hover:text-slate-900 transition-colors duration-300">
                                    {link.name}
                                </span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                            </motion.a>
                        ))}
                    </div>

                    {/* Call to Action & Socials (Desktop) */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex space-x-2 mr-4 border-r border-slate-200 pr-6">
                            <motion.a
                                whileHover={{ y: -3, color: '#2563eb' }}
                                href="https://github.com/komalsc"
                                target="_blank"
                                className="p-2 text-slate-400"
                            >
                                <Github size={20} />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -3, color: '#4f46e5' }}
                                href="https://www.linkedin.com/in/komal9/"
                                target="_blank"
                                className="p-2 text-slate-400"
                            >
                                <Linkedin size={20} />
                            </motion.a>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-xs uppercase tracking-widest rounded-xl shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 transition-all"
                        >
                            Let's Talk
                        </motion.a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl bg-slate-50 text-slate-600"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-2xl overflow-hidden"
                    >
                        <div className="px-6 pt-4 pb-8 space-y-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-4 text-base font-bold text-slate-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-2xl transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-6 mt-6 border-t border-slate-100 flex justify-between items-center">
                                <div className="flex space-x-4">
                                    <Github className="text-slate-400" size={24} />
                                    <Linkedin className="text-slate-400" size={24} />
                                </div>
                                <a
                                    href="#contact"
                                    onClick={() => setIsOpen(false)}
                                    className="px-6 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm"
                                >
                                    Hire Me
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
