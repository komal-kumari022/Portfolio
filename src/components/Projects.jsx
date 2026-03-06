import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const FILTERS = ['All', 'React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'];

const Projects = () => {
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.tech.includes(activeFilter));

    return (
        <section id="projects" className="py-28 section-dark relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 grid-pattern opacity-20" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

            {/* Glow orb */}
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] opacity-5 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #06b6d4, transparent)' }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <div className="section-line mb-3">
                        <span className="font-code text-cyan-400/80 text-sm">projects.showcase</span>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h2 className="font-display text-4xl md:text-5xl font-black text-white">
                                Featured <span className="gradient-text">Projects</span>
                            </h2>
                            <p className="text-slate-400 mt-3 max-w-xl">
                                A curated selection of my most impactful work — from B2B dashboards to interactive UI systems.
                            </p>
                        </div>

                        {/* Filter pills */}
                        <div className="flex flex-wrap gap-2">
                            {FILTERS.map((filter) => (
                                <motion.button
                                    key={filter}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-1.5 font-code text-xs rounded-full border transition-all ${
                                        activeFilter === filter
                                            ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                                            : 'glass-light text-slate-400 border-slate-700 hover:border-slate-500 hover:text-slate-200'
                                    }`}
                                >
                                    {filter}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filtered.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </motion.div>

                {filtered.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20 text-slate-500"
                    >
                        No projects match this filter.
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Projects;
