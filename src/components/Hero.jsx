import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1],
            },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
            {/* Dynamic Background Mesh */}
            <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-blue-400/10 rounded-full mix-blend-multiply filter blur-[120px] animate-blob"></div>
                <div className="absolute top-[20%] -right-[10%] w-[40%] h-[60%] bg-purple-400/10 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-[20%] left-[10%] w-[60%] h-[50%] bg-indigo-400/10 rounded-full mix-blend-multiply filter blur-[120px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-left"
                    >
                        <motion.div variants={itemVariants} className="inline-block mb-6">
                            <span className="px-5 py-2 rounded-full border border-blue-100 bg-blue-50/50 text-blue-600 font-bold text-xs uppercase tracking-[0.2em] shadow-sm backdrop-blur-sm">
                                Available for Opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]"
                        >
                            Hi, I'm <br />
                            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                Komal Kumari
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="max-w-xl text-lg md:text-xl text-slate-600 mb-12 leading-relaxed font-medium"
                        >
                            Frontend Developer with 2+ years of experience building scalable, responsive web applications using React.js. Passionate about clean UI, performance, and user-centric design.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-start gap-6"
                        >
                            <a
                                href="#projects"
                                className="relative inline-flex items-center px-10 py-5 font-bold text-white rounded-2xl overflow-hidden group shadow-[0_20px_40px_rgba(37,99,235,0.25)] hover:shadow-[0_25px_50px_rgba(37,99,235,0.4)] transition-all duration-300"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                <span className="relative z-10 flex items-center">
                                    View My Projects
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                                </span>
                            </a>

                            <a
                                href="/resume.pdf"
                                download
                                className="inline-flex items-center px-10 py-5 bg-white text-slate-900 font-bold rounded-2xl border border-slate-200 hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_rgba(79,70,229,0.1)]"
                            >
                                Get Resume
                                <Download className="ml-2 w-5 h-5" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Image/Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative z-10 p-4">
                            <div className="relative rounded-[2rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.1)] group">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                                    alt="Developer Illustration"
                                    className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 opacity-60 group-hover:opacity-30 transition-opacity duration-700"></div>
                            </div>

                            {/* Decorative Floating Cards */}
                            <motion.div
                                animate={{ y: [0, -20, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 p-6 bg-white rounded-2xl shadow-2xl border border-slate-50 z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                        <span className="font-bold text-xl">R</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">Tech Focus</p>
                                        <p className="text-slate-800 font-bold">React.js Expert</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 20, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute -bottom-10 -left-10 p-6 bg-white rounded-2xl shadow-2xl border border-slate-50 z-20"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                        <span className="font-bold text-xl">2+</span>
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 font-bold uppercase">Exp</p>
                                        <p className="text-slate-800 font-bold">Years of Dev</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Background blur shape for image */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full filter blur-[80px] -z-10 animate-pulse"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
