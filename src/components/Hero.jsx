import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Code2, Sparkles } from 'lucide-react';

// Particle background
const Particles = () => {
    const particles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map(p => (
                <motion.div
                    key={p.id}
                    className="absolute rounded-full bg-indigo-400/20"
                    style={{
                        left: `${p.x}%`,
                        top: `${p.y}%`,
                        width: p.size,
                        height: p.size,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.8, 0],
                        scale: [1, 1.5, 0.5],
                    }}
                    transition={{
                        duration: p.duration,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}
        </div>
    );
};

// Typing animation hook
const useTypingEffect = (words, speed = 100, pause = 2000) => {
    const [text, setText] = useState('');
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setText(currentWord.slice(0, text.length + 1));
                if (text.length === currentWord.length) {
                    setTimeout(() => setIsDeleting(true), pause);
                }
            } else {
                setText(currentWord.slice(0, text.length - 1));
                if (text.length === 0) {
                    setIsDeleting(false);
                    setWordIndex((prev) => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? speed / 2 : speed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words, speed, pause]);

    return text;
};

const Hero = () => {
    const roles = ['Frontend Developer', 'React Specialist', 'UI Engineer', 'Creative Coder'];
    const typedText = useTypingEffect(roles, 80, 2500);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.3 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-dark">
            {/* Animated background grid */}
            <div className="absolute inset-0 grid-pattern opacity-50" />

            {/* Particles */}
            <Particles />

            {/* Large glowing orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.15, 0.3, 0.15],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute -top-1/4 -left-1/4 w-[70%] h-[70%] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.25, 0.1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute -bottom-1/4 -right-1/4 w-[60%] h-[60%] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.08, 0.2, 0.08],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] rounded-full"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
                />
            </div>

            {/* Orbital rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <div className="absolute w-[600px] h-[600px] orbital-ring opacity-20" />
                <div className="absolute w-[800px] h-[800px] orbital-ring-reverse opacity-10" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        {/* Badge */}
                        <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-8">
                            <span className="relative inline-flex items-center gap-2 px-4 py-2 glass-light rounded-full text-xs font-semibold text-indigo-400 border border-indigo-500/20">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                                </span>
                                Available for Opportunities
                            </span>
                        </motion.div>

                        {/* Code label */}
                        <motion.div variants={itemVariants} className="font-code text-indigo-400/60 text-sm mb-4 flex items-center gap-2">
                            <Code2 size={14} />
                            <span>hello_world.jsx</span>
                        </motion.div>

                        {/* Main heading */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-display text-5xl md:text-7xl font-black text-white mb-4 tracking-tight leading-[1.05]"
                        >
                            Hi, I'm{' '}
                            <br />
                            <span className="gradient-text text-glow">
                                Komal Kumari
                            </span>
                        </motion.h1>

                        {/* Typing Role */}
                        <motion.div variants={itemVariants} className="mb-8 h-12 flex items-center">
                            <span className="text-xl md:text-2xl text-slate-300 font-medium">
                                {typedText}
                                <span className="animate-typing ml-0.5">|</span>
                            </span>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="max-w-xl text-lg text-slate-400 mb-10 leading-relaxed"
                        >
                            Frontend Developer with <span className="text-indigo-400 font-semibold">2+ years</span> of experience 
                            building scalable, responsive web applications using React.js. Passionate about 
                            clean UI, performance, and user-centric design.
                        </motion.p>

                        {/* Tech stack quick list */}
                        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
                            {['React.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Figma'].map((tech) => (
                                <span key={tech} className="px-3 py-1 font-code text-xs text-cyan-400/80 bg-cyan-400/5 border border-cyan-400/10 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-start gap-4"
                        >
                            <motion.a
                                href="#projects"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative inline-flex items-center gap-2 px-8 py-4 btn-primary text-white font-semibold rounded-2xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-shadow group"
                            >
                                <Sparkles size={16} />
                                View My Work
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </motion.a>

                            <motion.a
                                href="/Komal_Kumari_Resume.pdf"
                                download="Komal_Kumari_Resume.pdf"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-2 px-8 py-4 glass-light text-white font-semibold rounded-2xl border border-slate-700 hover:border-indigo-500/50 transition-all group"
                            >
                                Get Resume
                                <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                            </motion.a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div variants={itemVariants} className="flex items-center gap-4 mt-10">
                            <span className="text-slate-600 text-xs uppercase tracking-widest font-semibold">Connect</span>
                            <div className="flex gap-3">
                                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://github.com/komalsc" target="_blank" rel="noreferrer" className="p-2.5 glass-light rounded-xl text-slate-400 hover:text-white border border-slate-800 hover:border-indigo-500/30 transition-all">
                                    <Github size={18} />
                                </motion.a>
                                <motion.a whileHover={{ scale: 1.1, y: -2 }} href="https://www.linkedin.com/in/komal9/" target="_blank" rel="noreferrer" className="p-2.5 glass-light rounded-xl text-slate-400 hover:text-indigo-400 border border-slate-800 hover:border-indigo-500/30 transition-all">
                                    <Linkedin size={18} />
                                </motion.a>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right - Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
                        className="relative hidden lg:flex items-center justify-center"
                    >
                        {/* Center blob shape */}
                        <div className="relative w-[420px] h-[420px]">
                            {/* Rotating gradient border */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="absolute inset-0 rounded-full"
                                style={{
                                    background: 'conic-gradient(from 0deg, #6366f1, #8b5cf6, #06b6d4, #6366f1)',
                                    padding: '2px',
                                }}
                            >
                                <div className="w-full h-full rounded-full bg-[#0a0a0f]" />
                            </motion.div>

                            {/* Image container */}
                            <div className="absolute inset-3 rounded-full overflow-hidden">
                                <img
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
                                    alt="Developer"
                                    className="w-full h-full object-cover"
                                    style={{ filter: 'hue-rotate(200deg) saturate(0.7) brightness(0.8)' }}
                                />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.2))' }} />
                            </div>

                            {/* Floating cards */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                                className="absolute -top-6 -right-8 glass-card px-4 py-3 rounded-2xl border border-indigo-500/20 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-indigo-500/20 rounded-xl flex items-center justify-center text-indigo-400">
                                        <Code2 size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">React Expert</p>
                                        <p className="text-white font-bold text-sm">Frontend Dev</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                                className="absolute -bottom-6 -left-8 glass-card px-4 py-3 rounded-2xl border border-violet-500/20 shadow-xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-violet-500/20 rounded-xl flex items-center justify-center text-violet-400 font-black text-sm">
                                        2+
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Experience</p>
                                        <p className="text-white font-bold text-sm">Years of Dev</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ x: [0, -10, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                                className="absolute top-1/2 -right-16 -translate-y-1/2 glass-card px-3 py-2 rounded-xl border border-cyan-500/20"
                            >
                                <p className="font-code text-xs text-cyan-400">10+ Projects</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                >
                    <span className="text-slate-600 text-xs uppercase tracking-widest font-semibold">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-5 h-8 glass-light rounded-full flex items-start justify-center pt-1.5 border border-slate-700"
                    >
                        <div className="w-1 h-2 bg-indigo-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
