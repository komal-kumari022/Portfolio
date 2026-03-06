import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp, Code2 } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    const socials = [
        { icon: <Github size={18} />, href: 'https://github.com/komalsc', label: 'GitHub' },
        { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/komal9/', label: 'LinkedIn' },
        { icon: <Mail size={18} />, href: 'mailto:komalchauhan00022@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="relative overflow-hidden" style={{ background: '#080810' }}>
            {/* Top gradient line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

            {/* Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-5 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse, #6366f1, transparent)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <motion.h2
                            whileHover={{ scale: 1.02 }}
                            className="font-display text-3xl font-black gradient-text mb-3 cursor-default"
                        >
                            KK.
                        </motion.h2>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                            Frontend Developer crafting performant, beautiful web experiences with React and modern tooling.
                        </p>
                        <div className="flex gap-2 mt-5">
                            {socials.map((s, i) => (
                                <motion.a
                                    key={i}
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    href={s.href}
                                    aria-label={s.label}
                                    target={s.href.startsWith('http') ? '_blank' : undefined}
                                    rel="noreferrer"
                                    className="p-2.5 glass-card rounded-xl text-slate-400 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/30 transition-all"
                                >
                                    {s.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-code text-xs text-slate-500 uppercase tracking-widest mb-4">Navigate</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-slate-400 hover:text-indigo-400 text-sm transition-colors flex items-center gap-2 group"
                                    >
                                        <span className="w-4 h-px bg-slate-700 group-hover:bg-indigo-500 group-hover:w-6 transition-all" />
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stack */}
                    <div>
                        <h4 className="font-code text-xs text-slate-500 uppercase tracking-widest mb-4">Built With</h4>
                        <div className="flex flex-wrap gap-2">
                            {['React.js', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'JavaScript'].map((tech) => (
                                <span key={tech} className="px-3 py-1 font-code text-xs text-slate-500 glass-card rounded-full border border-slate-800">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Scroll to top */}
                        <motion.button
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="mt-6 flex items-center gap-2 text-xs text-slate-500 hover:text-indigo-400 transition-colors font-semibold group"
                        >
                            <div className="p-2 glass-card rounded-lg border border-slate-800 group-hover:border-indigo-500/30 transition-all">
                                <ArrowUp size={14} />
                            </div>
                            Back to top
                        </motion.button>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-slate-600 text-xs font-code">
                        © {currentYear} Komal Kumari. All rights reserved.
                    </p>
                    <p className="text-slate-600 text-xs flex items-center gap-1.5">
                        <Code2 size={12} className="text-indigo-500" />
                        <span>Built with</span>
                        <Heart size={10} className="text-red-500 fill-red-500" />
                        <span>in React</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
