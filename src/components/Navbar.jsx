import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);

            // Detect active section
            const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
            const current = sections.find(sec => {
                const el = document.getElementById(sec);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${
                scrolled
                    ? 'glass py-3 shadow-2xl shadow-black/50'
                    : 'bg-transparent py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group cursor-pointer"
                    >
                        <span className="font-display text-2xl font-black tracking-tighter gradient-text">
                            KK.
                        </span>
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
                    </motion.a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 group
                                    ${activeSection === link.name.toLowerCase()
                                        ? 'text-indigo-400'
                                        : 'text-slate-400 hover:text-white'
                                    }`}
                            >
                                {activeSection === link.name.toLowerCase() && (
                                    <motion.span
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-indigo-500/10 rounded-lg border border-indigo-500/20"
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA + Socials */}
                    <div className="hidden md:flex items-center gap-3">
                        <motion.a
                            whileHover={{ y: -2, scale: 1.1 }}
                            href="https://github.com/komalsc"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 text-slate-400 hover:text-white transition-colors"
                        >
                            <Github size={18} />
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -2, scale: 1.1 }}
                            href="https://www.linkedin.com/in/komal9/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2 text-slate-400 hover:text-indigo-400 transition-colors"
                        >
                            <Linkedin size={18} />
                        </motion.a>

                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#contact"
                            className="ml-2 px-5 py-2.5 btn-primary text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40"
                        >
                            Let's Talk
                        </motion.a>
                    </div>

                    {/* Mobile Toggle */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl glass-light text-slate-300"
                    >
                        {isOpen ? <X size={22} /> : <Menu size={22} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden glass border-t border-indigo-500/10"
                    >
                        <div className="px-6 pt-4 pb-8 space-y-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-indigo-500/10 rounded-xl font-medium transition-all"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between">
                                <div className="flex gap-3">
                                    <a href="https://github.com/komalsc" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-white">
                                        <Github size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/komal9/" target="_blank" rel="noreferrer" className="p-2 text-slate-400 hover:text-indigo-400">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                                <a href="#contact" onClick={() => setIsOpen(false)} className="px-5 py-2 btn-primary text-white font-semibold text-sm rounded-xl">
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
