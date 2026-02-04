import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ project }) => {
    return (
        <motion.div
            layout
            className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
        >
            {/* Project Image */}
            <div className="relative h-64 overflow-hidden">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 p-4">
                    <div className="flex gap-4">
                        <motion.a
                            href={project.github}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-all"
                        >
                            <Github size={20} />
                        </motion.a>
                        <motion.a
                            href={project.link}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-blue-600 transition-all"
                        >
                            <ExternalLink size={20} />
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Project Content */}
            <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tag, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold uppercase tracking-wider rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm line-clamp-3">
                    {project.description}
                </p>

                <div className="flex items-center gap-4 text-sm font-bold pt-4 border-t border-slate-50">
                    <a href={project.link} className="flex items-center text-blue-600 hover:gap-2 transition-all">
                        Live Demo <ExternalLink size={14} className="ml-1" />
                    </a>
                    <a href={project.github} className="flex items-center text-slate-500 hover:text-slate-900 transition-all">
                        GitHub <Github size={14} className="ml-1" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
