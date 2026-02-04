import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
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
            // Simulate API call
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

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get In Touch</h2>
                    <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full mb-8"></div>
                    <p className="max-w-2xl mx-auto text-slate-600">
                        Have a project in mind or want to say hello? Feel free to reach out.
                        I'm always open to discussing new opportunities.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-1 space-y-8"
                    >
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                            <h3 className="text-xl font-bold text-slate-900 mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                <a href="mailto:komalchauhan00022@gmail.com" className="flex items-center group">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mr-4">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">Email Me</p>
                                        <p className="text-slate-700 font-medium">komalchauhan00022@gmail.com</p>
                                    </div>
                                </a>

                                <a href="https://www.linkedin.com/in/komal9/" target="_blank" rel="noreferrer" className="flex items-center group">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mr-4">
                                        <Linkedin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">LinkedIn</p>
                                        <p className="text-slate-700 font-medium">linkedin.com/in/komal9/</p>
                                    </div>
                                </a>

                                <a href="https://github.com/komalsc" target="_blank" rel="noreferrer" className="flex items-center group">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all mr-4">
                                        <Github size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase font-bold tracking-widest">GitHub</p>
                                        <p className="text-slate-700 font-medium">github.com/komalsc</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="bg-blue-600 p-8 rounded-3xl text-white">
                            <h4 className="text-lg font-bold mb-4">Let's build something amazing!</h4>
                            <p className="text-blue-100 text-sm leading-relaxed mb-6">
                                I'm currently available for freelance work and full-time opportunities.
                            </p>
                            <div className="flex items-center text-sm font-semibold">
                                <MapPin size={16} className="mr-2" /> Remote / India
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-2"
                    >
                        <form onSubmit={handleSubmit} className="bg-white p-4 md:p-8 rounded-3xl space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Komal Kumari"
                                        className={`w-full px-6 py-4 bg-slate-50 border ${errors.name ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 ml-2">{errors.name}</p>}
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="komal@example.com"
                                        className={`w-full px-6 py-4 bg-slate-50 border ${errors.email ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                                    />
                                    {errors.email && <p className="text-red-500 text-xs mt-1 ml-2">{errors.email}</p>}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Inquiry about Project"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="5"
                                    placeholder="Hi Komal, I'd like to talk about..."
                                    className={`w-full px-6 py-4 bg-slate-50 border ${errors.message ? 'border-red-400' : 'border-slate-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none`}
                                ></textarea>
                                {errors.message && <p className="text-red-500 text-xs mt-1 ml-2">{errors.message}</p>}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={isSubmitting}
                                className={`w-full py-5 ${submitted ? 'bg-green-500' : 'bg-blue-600'} text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40 transition-all flex items-center justify-center gap-2`}
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                ) : submitted ? (
                                    "Message Sent Successfully!"
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
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
