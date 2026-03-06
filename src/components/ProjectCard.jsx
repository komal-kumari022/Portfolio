import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ project, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className="group glass-card rounded-3xl border border-slate-800 hover:border-indigo-500/30 overflow-hidden transition-all duration-500 hover-lift"
        >
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    animate={{ scale: hovered ? 1.08 : 1 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    style={{ filter: 'brightness(0.6) saturate(0.7)' }}
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />

                {/* Hover actions */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-4 right-4 flex gap-2"
                >
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 glass text-white hover:text-indigo-400 rounded-xl transition-colors border border-slate-700"
                        onClick={e => e.stopPropagation()}
                    >
                        <Github size={16} />
                    </a>
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2.5 glass text-white hover:text-cyan-400 rounded-xl transition-colors border border-slate-700"
                        onClick={e => e.stopPropagation()}
                    >
                        <ExternalLink size={16} />
                    </a>
                </motion.div>

                {/* Tech tags on image bottom */}
                <div className="absolute bottom-3 left-4 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tag) => (
                        <span key={tag} className="px-2 py-0.5 font-code text-[10px] text-indigo-300 bg-indigo-500/20 border border-indigo-500/20 rounded-full backdrop-blur-sm">
                            {tag}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="px-2 py-0.5 font-code text-[10px] text-slate-400 glass rounded-full border border-slate-700">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-lg font-bold text-white group-hover:text-indigo-300 transition-colors leading-tight">
                        {project.title}
                    </h3>
                    <div className="p-1.5 text-slate-600 group-hover:text-indigo-500 transition-colors flex-shrink-0">
                        <Code2 size={16} />
                    </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-5">
                    {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                    <a
                        href={project.link}
                        className="flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group/link"
                    >
                        Live Demo
                        <ExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                    <span className="text-slate-700">•</span>
                    <a
                        href={project.github}
                        className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-white transition-colors group/gh"
                    >
                        <Github size={12} />
                        Source Code
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
