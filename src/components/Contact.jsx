import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        let newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            setIsSubmitting(true);
            setTimeout(() => {
                setIsSubmitting(false);
                setSubmitted(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setSubmitted(false), 5000);
            }, 1500);
        } else {
            setErrors(validationErrors);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: null });
        }
    };

    const contactInfo = [
        {
            icon: <Mail size={18} />,
            label: 'Email',
            value: 'komalchauhan00022@gmail.com',
            href: 'mailto:komalchauhan00022@gmail.com',
            color: '#6366f1',
        },
        {
            icon: <Linkedin size={18} />,
            label: 'LinkedIn',
            value: 'linkedin.com/in/komal9/',
            href: 'https://www.linkedin.com/in/komal9/',
            color: '#8b5cf6',
        },
        {
            icon: <Github size={18} />,
            label: 'GitHub',
            value: 'github.com/komalsc',
            href: 'https://github.com/komalsc',
            color: '#06b6d4',
        },
    ];

    const inputClass = (field) =>
        `w-full px-5 py-4 glass-card text-white placeholder-slate-600 rounded-2xl border transition-all outline-none font-medium text-sm
        ${errors[field]
            ? 'border-red-500/50 focus:border-red-500'
            : 'border-slate-800 focus:border-indigo-500/50 focus:shadow-[0_0_0_3px_rgba(99,102,241,0.1)]'
        }`;

    return (
        <section id="contact" className="py-28 section-darker relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 dot-pattern opacity-20" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

            {/* Glow */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] opacity-5 pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />

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
                        <span className="font-code text-indigo-400/80 text-sm">contact.form.jsx</span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl font-black text-white">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-slate-400 mt-3 max-w-xl text-lg">
                        Have a project or opportunity in mind? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Left: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {/* Contact cards */}
                        {contactInfo.map((info, i) => (
                            <motion.a
                                key={i}
                                href={info.href}
                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                rel="noreferrer"
                                whileHover={{ x: 6, scale: 1.02 }}
                                className="flex items-center gap-4 p-5 glass-card rounded-2xl border border-slate-800 hover:border-indigo-500/20 transition-all group"
                            >
                                <div className="p-3 rounded-xl flex-shrink-0 transition-all group-hover:scale-110"
                                    style={{ background: `${info.color}15`, color: info.color }}>
                                    {info.icon}
                                </div>
                                <div className="min-w-0">
                                    <p className="text-slate-500 text-xs uppercase tracking-widest font-bold mb-0.5">{info.label}</p>
                                    <p className="text-white text-sm font-medium truncate group-hover:text-indigo-300 transition-colors">
                                        {info.value}
                                    </p>
                                </div>
                                <ArrowRight size={14} className="text-slate-700 group-hover:text-indigo-400 ml-auto flex-shrink-0 group-hover:translate-x-1 transition-all" />
                            </motion.a>
                        ))}

                        {/* Availability card */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="mt-6 p-6 rounded-2xl relative overflow-hidden"
                            style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(139,92,246,0.15))', border: '1px solid rgba(99,102,241,0.25)' }}
                        >
                            {/* Glow */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-20 blur-2xl"
                                style={{ background: 'radial-gradient(circle, #6366f1, transparent)' }} />
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-green-400 text-xs font-bold uppercase tracking-wider">Available for work</span>
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">Let's build something amazing!</h4>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    Open to freelance projects and full-time opportunities.
                                </p>
                                <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                                    <MapPin size={14} />
                                    <span>Remote / India</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 border border-slate-800 space-y-5">
                            <h3 className="font-display text-xl font-bold text-white mb-6">Send me a message</h3>

                            <div className="grid md:grid-cols-2 gap-5">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-400 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Jane Smith"
                                        className={inputClass('name')}
                                    />
                                    {errors.name && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-400 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="jane@example.com"
                                        className={inputClass('email')}
                                    />
                                    {errors.email && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Project collaboration"
                                    className={inputClass('subject')}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-slate-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Hi Komal, I'd love to discuss..."
                                    className={`${inputClass('message')} resize-none`}
                                />
                                {errors.message && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message}</p>}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02, y: -1 }}
                                whileTap={{ scale: 0.97 }}
                                type="submit"
                                disabled={isSubmitting || submitted}
                                className={`w-full py-4 font-semibold rounded-2xl flex items-center justify-center gap-2 text-sm transition-all shadow-lg
                                    ${submitted
                                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                                        : 'btn-primary text-white shadow-indigo-500/25 hover:shadow-indigo-500/40'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : submitted ? (
                                    <>
                                        <CheckCircle2 size={18} />
                                        Message Sent Successfully!
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
