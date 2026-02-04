import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code, Users } from 'lucide-react';

const About = () => {
    const stats = [
        { label: 'Years Experience', value: '2+', icon: <Award className="w-6 h-6 text-blue-600" /> },
        { label: 'Projects Completed', value: '10+', icon: <Code className="w-6 h-6 text-indigo-600" /> },
        { label: 'Happy Clients', value: '5+', icon: <Users className="w-6 h-6 text-purple-600" /> },
    ];

    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-slate-800 mb-6">
                            Passionate Frontend Developer & UI Engineer
                        </h3>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            I am a Frontend Developer with 2+ years of experience specialized in building scalable,
                            responsive web applications using the React.js ecosystem. My journey in tech is driven
                            by a passion for creating clean, performant, and user-centric interfaces.
                        </p>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                            Based at CFirst, I focus on turning complex Figma designs into pixel-perfect reality,
                            ensuring every interaction feels smooth and intuitive. I believe that good design
                            is not just how it looks, but how it works for the end-user.
                        </p>

                        <div className="grid grid-cols-3 gap-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors">
                                    <div className="flex justify-center mb-2">{stat.icon}</div>
                                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                    <div className="text-xs text-slate-500 uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
                                alt="Developer working"
                                className="w-full h-auto"
                            />
                        </div>
                        {/* Decorative background shape */}
                        <div className="absolute -top-6 -right-6 w-full h-full bg-blue-100 rounded-2xl -z-10 rotate-6"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
