import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, ChevronDown, ChevronUp, Award } from 'lucide-react';
import { experiences } from '../data/experience';

const EXP_COLORS = [
    { accent: '#6366f1', glow: 'rgba(99,102,241,0.15)', badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
    { accent: '#8b5cf6', glow: 'rgba(139,92,246,0.15)', badge: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
];

const ExperienceCard = ({ exp, index }) => {
    const [expanded, setExpanded] = useState(index === 0);
    const color = EXP_COLORS[index % EXP_COLORS.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
        >
            {/* Vertical connector line */}
            {index < experiences.length - 1 && (
                <div className="absolute left-8 top-full w-px h-8 mt-1"
                    style={{ background: 'linear-gradient(180deg, rgba(99,102,241,0.3), transparent)' }} />
            )}

            <div
                className="glass-card rounded-3xl border border-slate-800 overflow-hidden transition-all duration-500 hover:border-indigo-500/20 group"
                style={{ boxShadow: expanded ? `0 0 40px ${color.glow}` : 'none' }}
            >
                {/* Top accent line */}
                <div className="h-0.5 w-full" style={{ background: `linear-gradient(90deg, ${color.accent}, transparent)` }} />

                <div className="p-6 md:p-8">
                    {/* Header row */}
                    <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-2xl flex-shrink-0"
                                style={{ background: `${color.accent}15`, border: `1px solid ${color.accent}30` }}>
                                <Briefcase className="w-5 h-5" style={{ color: color.accent }} />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${color.badge}`}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                                        {index === 0 ? 'Current Role' : 'Previous Role'}
                                    </span>
                                </div>
                                <h3 className="font-display text-xl md:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                    {exp.role}
                                </h3>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <Award className="w-3.5 h-3.5 text-slate-500" />
                                    <span className="text-sm font-semibold" style={{ color: color.accent }}>
                                        {exp.company}
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-2">
                            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                                <Calendar className="w-3.5 h-3.5" />
                                <span className="font-code whitespace-nowrap">{exp.period}</span>
                            </div>
                            <button
                                onClick={() => setExpanded(!expanded)}
                                className="p-1.5 glass-light rounded-lg text-slate-400 hover:text-white transition-colors border border-slate-800"
                            >
                                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>
                        </div>
                    </div>

                    {/* Expandable points */}
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: 'easeInOut' }}
                                className="overflow-hidden"
                            >
                                <div className="pt-2 border-t border-slate-800 mt-4">
                                    <ul className="space-y-3 mt-4">
                                        {exp.points.map((point, pIdx) => (
                                            <motion.li
                                                key={pIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: pIdx * 0.1 }}
                                                className="flex items-start gap-3 group/item"
                                            >
                                                <CheckCircle2
                                                    className="w-4 h-4 flex-shrink-0 mt-0.5 transition-transform group-hover/item:scale-110"
                                                    style={{ color: color.accent }}
                                                />
                                                <p className="text-slate-400 text-sm leading-relaxed group-hover/item:text-slate-300 transition-colors">
                                                    {point}
                                                </p>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="py-28 section-darker relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="section-line mb-3">
                        <span className="font-code text-indigo-400/80 text-sm">experience.log</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-white">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-slate-400 mt-4 max-w-xl">
                        My professional journey — building impactful products and growing with every challenge.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="space-y-6">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} exp={exp} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 text-center"
                >
                    <p className="text-slate-500 text-sm mb-4">Want to know more about my professional background?</p>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href="/Komal_Kumari_Resume.pdf"
                        download="Komal_Kumari_Resume.pdf"
                        className="inline-flex items-center gap-2 px-6 py-3 glass-light text-indigo-400 font-semibold text-sm rounded-xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all"
                    >
                        Download Full Resume
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
