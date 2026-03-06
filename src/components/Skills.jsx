import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skillCategories } from '../data/skills';

const CATEGORY_ICONS = ['⚡', '🧠', '🛠️'];
const CATEGORY_COLORS = [
    { accent: '#6366f1', track: 'rgba(99,102,241,0.1)' },
    { accent: '#8b5cf6', track: 'rgba(139,92,246,0.1)' },
    { accent: '#06b6d4', track: 'rgba(6,182,212,0.1)' },
];

const SkillBar = ({ name, level, description, color, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group"
        >
            <div className="flex items-center justify-between mb-2">
                <span className="text-white font-semibold text-sm group-hover:text-indigo-400 transition-colors">
                    {name}
                </span>
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="font-code text-xs font-bold"
                    style={{ color: color.accent }}
                >
                    {level}%
                </motion.span>
            </div>
            {description && (
                <p className="text-slate-500 text-xs mb-3 leading-relaxed">{description}</p>
            )}
            {/* Progress bar */}
            <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: color.track }}>
                <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1], delay: 0.2 + index * 0.08 }}
                    className="absolute top-0 left-0 h-full rounded-full"
                    style={{ background: `linear-gradient(90deg, ${color.accent}80, ${color.accent})` }}
                >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full shadow-lg"
                        style={{ background: color.accent, boxShadow: `0 0 8px ${color.accent}` }} />
                </motion.div>
            </div>
        </motion.div>
    );
};

const SkillCategory = ({ category, color, icon, catIndex }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: catIndex * 0.15 }}
            className="glass-card rounded-3xl p-8 border border-slate-800 hover:border-indigo-500/20 transition-all hover-lift group"
        >
            {/* Category header */}
            <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl"
                    style={{ background: `${color.accent}15`, border: `1px solid ${color.accent}30` }}>
                    {icon}
                </div>
                <div>
                    <div className="font-code text-xs mb-1" style={{ color: `${color.accent}80` }}>
                        category_{catIndex + 1}
                    </div>
                    <h3 className="font-display text-lg font-bold text-white">{category.title}</h3>
                </div>
            </div>

            {/* Skill bars */}
            <div className="space-y-5">
                {category.skills.map((skill, i) => (
                    <SkillBar
                        key={i}
                        name={skill.name}
                        level={skill.level}
                        description={skill.description}
                        color={color}
                        index={i}
                    />
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const techTags = ['React.js', 'TypeScript', 'JavaScript', 'Redux', 'Tailwind CSS', 'HTML5', 'CSS3', 'REST APIs', 'Git', 'Figma', 'Axios', 'Chrome DevTools'];

    return (
        <section id="skills" className="py-28 section-dark relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

            {/* Glow orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] opacity-5 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #8b5cf6, transparent)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="section-line mb-3">
                        <span className="font-code text-violet-400/80 text-sm">skills.config.js</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-6xl font-black text-white mb-4">
                        My <span className="gradient-text">Arsenal</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-xl">
                        Technologies and tools I wield to bring ideas to life.
                    </p>

                    {/* Tag cloud */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-wrap gap-2 mt-6"
                    >
                        {techTags.map((tag, i) => (
                            <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="px-3 py-1.5 font-code text-xs text-slate-400 glass-light rounded-full border border-slate-700 hover:border-indigo-500/40 hover:text-indigo-400 transition-all cursor-default"
                            >
                                {tag}
                            </motion.span>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Category cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((cat, i) => (
                        <SkillCategory
                            key={i}
                            category={cat}
                            color={CATEGORY_COLORS[i] || CATEGORY_COLORS[0]}
                            icon={CATEGORY_ICONS[i] || '✦'}
                            catIndex={i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
