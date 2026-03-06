import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Code2, Users, Zap, Heart, Lightbulb } from 'lucide-react';

const CountUp = ({ value, suffix = '' }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    return (
        <span ref={ref} className="font-display text-4xl font-black gradient-text">
            {inView ? value : '0'}{suffix}
        </span>
    );
};

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '2', suffix: '+', icon: <Award className="w-5 h-5 text-indigo-400" />, color: 'indigo' },
        { label: 'Projects Done', value: '10', suffix: '+', icon: <Code2 className="w-5 h-5 text-violet-400" />, color: 'violet' },
        { label: 'Happy Clients', value: '5', suffix: '+', icon: <Users className="w-5 h-5 text-cyan-400" />, color: 'cyan' },
    ];

    const traits = [
        { icon: <Zap size={18} />, label: 'Performance First', desc: 'Optimizing every render and load time' },
        { icon: <Heart size={18} />, label: 'User-Centric', desc: 'Designing for real people, real needs' },
        { icon: <Lightbulb size={18} />, label: 'Creative Thinker', desc: 'Turning complexity into clarity' },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <section id="about" className="py-28 section-darker relative overflow-hidden">
            {/* Background detail */}
            <div className="absolute inset-0 dot-pattern opacity-30" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="section-line mb-3">
                        <span className="font-code text-indigo-400/80 text-sm">about_me.js</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-white">
                        Who I <span className="gradient-text">Am</span>
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Text */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-6 leading-snug">
                                Passionate Frontend Developer &{' '}
                                <span className="gradient-text">UI Engineer</span>
                            </h3>
                        </motion.div>

                        <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed mb-5">
                            I'm a Frontend Developer with <span className="text-indigo-400 font-semibold">2+ years</span> of experience 
                            specialized in building scalable, responsive web applications using the React.js ecosystem. 
                            My journey in tech is driven by a passion for creating clean, performant, and 
                            user-centric interfaces.
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-slate-400 text-lg leading-relaxed mb-8">
                            Based at CFirst, I focus on turning complex Figma designs into pixel-perfect reality, 
                            ensuring every interaction feels smooth and intuitive. I believe that good design 
                            is not just <em className="text-white">how it looks</em>, but how it works for the end-user.
                        </motion.p>

                        {/* Traits */}
                        <motion.div variants={itemVariants} className="space-y-3 mb-10">
                            {traits.map((trait, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ x: 4 }}
                                    className="flex items-center gap-4 p-4 glass-card rounded-xl border border-slate-800 hover:border-indigo-500/30 transition-all cursor-default"
                                >
                                    <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                                        {trait.icon}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm">{trait.label}</p>
                                        <p className="text-slate-500 text-xs">{trait.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Stats */}
                        <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05, y: -4 }}
                                    className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-indigo-500/20 transition-all text-center hover-lift"
                                >
                                    <div className="flex justify-center mb-2">{stat.icon}</div>
                                    <CountUp value={stat.value} suffix={stat.suffix} />
                                    <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider font-semibold">{stat.label}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right: Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative"
                    >
                        {/* Main image */}
                        <div className="relative z-10">
                            <div className="relative rounded-3xl overflow-hidden gradient-border group">
                                <img
                                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                                    alt="Developer working"
                                    className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
                                    style={{ filter: 'brightness(0.6) saturate(0.8)' }}
                                />
                                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(139,92,246,0.15))' }} />

                                {/* Overlay content */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <p className="font-code text-sm text-indigo-300">// Building the future, one component at a time</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                            className="absolute -top-8 -right-8 w-24 h-24 rounded-full border border-dashed border-indigo-500/20 opacity-60"
                        />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-violet-500/10 rounded-full blur-2xl" />

                        {/* Corner badge */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                            className="absolute -top-4 -left-4 glass-card rounded-2xl px-4 py-3 border border-indigo-500/20 shadow-xl"
                        >
                            <p className="font-code text-xs text-cyan-400">const name = "Komal"</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
