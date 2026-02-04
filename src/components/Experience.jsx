import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, CheckCircle2 } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-12 w-80 h-80 bg-blue-100/40 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 -right-12 w-[30rem] h-[30rem] bg-purple-100/30 rounded-full blur-[120px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block px-4 py-1.5 mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                        Professional Background
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">Work Experience</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                {/* Experience Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group h-full"
                        >
                            <div className="relative h-full bg-white/70 backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-200/20 transition-all duration-500 overflow-hidden flex flex-col">
                                {/* Subtle pattern overlay */}
                                <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                    <Briefcase size={120} />
                                </div>

                                {/* Top section: Badge + Icon */}
                                <div className="flex items-start justify-between mb-8">
                                    <div className={`p-4 rounded-2xl ${index === 0 ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                                        }`}>
                                        <Briefcase className="w-6 h-6" />
                                    </div>
                                    <div className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${index === 0 ? 'bg-blue-100/50 text-blue-700' : 'bg-purple-100/50 text-purple-700'
                                        }`}>
                                        {index === 0 ? 'Current Role' : 'Previous Role'}
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Calendar className="w-4 h-4 text-slate-400" />
                                        <span className="text-sm font-semibold text-slate-500">{exp.period}</span>
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                                        {exp.role}
                                    </h3>
                                    <p className="text-lg font-bold text-blue-600/80 mb-8 flex items-center">
                                        <Award className="w-4 h-4 mr-2" />
                                        {exp.company}
                                    </p>

                                    <ul className="space-y-4">
                                        {exp.points.map((point, pIdx) => (
                                            <li key={pIdx} className="flex items-start gap-4 group/item">
                                                <div className={`mt-1.5 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-transform group-hover/item:scale-110 ${index === 0 ? 'bg-blue-50 text-blue-500' : 'bg-purple-50 text-purple-500'
                                                    }`}>
                                                    <CheckCircle2 className="w-3.5 h-3.5" />
                                                </div>
                                                <p className="text-slate-600 leading-relaxed text-[0.95rem]">
                                                    {point}
                                                </p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Bottom decorative border */}
                                <div className={`absolute bottom-0 left-0 w-full h-1.5 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${index === 0 ? 'bg-gradient-to-r from-blue-500 to-cyan-400' : 'bg-gradient-to-r from-purple-500 to-pink-400'
                                    }`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
