import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const SkillCircle = ({ level, name, description }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 group mb-8 last:mb-0"
        >
            <div className="relative flex-shrink-0 w-20 h-20">
                {/* SVG Progress Circle */}
                <svg className="w-full h-full transform -rotate-90">
                    <circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        className="text-slate-100"
                    />
                    <motion.circle
                        cx="40"
                        cy="40"
                        r="36"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="transparent"
                        strokeDasharray="226.2"
                        initial={{ strokeDashoffset: 226.2 }}
                        whileInView={{ strokeDashoffset: 226.2 - (226.2 * level) / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                        className="text-cyan-500"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-sm font-bold text-slate-700">{level}%</span>
                </div>
            </div>
            <div className="flex-grow">
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-cyan-500 transition-colors uppercase tracking-tight">
                    {name}
                </h4>
                <p className="text-[0.95rem] text-slate-500 leading-snug">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorative Grid/Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header Section: Move to Top Full Width */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <div className="space-y-4 max-w-3xl">
                        <span className="inline-block px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-cyan-600 bg-cyan-50 rounded-full">
                            Technical Expertise
                        </span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                            My <span className="text-cyan-500">Skills.</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-cyan-500 rounded-full"></div>
                        <p className="text-xl text-slate-500 leading-relaxed pt-4">
                            I bridge the gap between complex backend logic and pixel-perfect frontend experiences,
                            leveraging modern tools to build scalable, high-performance applications.
                        </p>
                    </div>
                </motion.div>

                <div className="space-y-24">
                    {/* First Category: Frontend Development (Full Width Grid) */}
                    <div className="relative">
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4"
                        >
                            <span className="w-12 h-[3px] bg-cyan-500"></span>
                            {skillCategories[0].title}
                        </motion.h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                            {skillCategories[0].skills.map((skill, skillIdx) => (
                                <SkillCircle
                                    key={skillIdx}
                                    name={skill.name}
                                    level={skill.level}
                                    description={skill.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Lower Grid: State & Architecture (Left) and Tools & Design (Right) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        {/* State & Architecture */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4"
                            >
                                <span className="w-12 h-[3px] bg-cyan-500"></span>
                                {skillCategories[1].title}
                            </motion.h3>

                            <div className="space-y-6">
                                {skillCategories[1].skills.map((skill, skillIdx) => (
                                    <SkillCircle
                                        key={skillIdx}
                                        name={skill.name}
                                        level={skill.level}
                                        description={skill.description}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Tools & Design */}
                        <div>
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4"
                            >
                                <span className="w-12 h-[3px] bg-cyan-500"></span>
                                {skillCategories[2].title}
                            </motion.h3>

                            <div className="space-y-6">
                                {skillCategories[2].skills.map((skill, skillIdx) => (
                                    <SkillCircle
                                        key={skillIdx}
                                        name={skill.name}
                                        level={skill.level}
                                        description={skill.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
