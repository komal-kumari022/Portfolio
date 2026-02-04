import React from 'react';
import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-slate-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                            Komal Kumari
                        </h2>
                        <p className="text-slate-500 max-w-xs">
                            Building modern web experiences with React and passion.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                            <Github size={24} />
                        </a>
                        <a href="#" className="text-slate-400 hover:text-blue-600 transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="mailto:komal.kumari@example.com" className="text-slate-400 hover:text-blue-600 transition-colors">
                            <Mail size={24} />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {currentYear} Komal Kumari. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-sm flex items-center">
                        Made with <Heart size={14} className="mx-1 text-red-500 fill-red-500" /> in React
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
