import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

export default function Footer() {
    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
        { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
        { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
        { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
        { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' },
    ];

    return (
        <footer className="bg-gray-50 dark:bg-gradient-to-t from-gray-900 to-gray-800 py-12 border-t border-gray-200 dark:border-gray-700/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center text-center">
                    {/* Logo/Brand */}
                    <div className="text-2xl md:text-3xl font-bold mb-6">
                        <a href="#" className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent hover:from-teal-600 hover:to-blue-600 transition-all duration-300">
                            Expand<span className="text-teal-500 dark:text-teal-400">.</span>
                        </a>
                    </div>

                    {/* Social Links */}
                    <ul className="flex flex-wrap justify-center gap-6 mb-8">
                        {socialLinks.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    aria-label={link.label}
                                    className="group flex items-center justify-center w-10 h-10 bg-gray-200 dark:bg-gray-700/50 rounded-full text-gray-600 dark:text-gray-400 hover:bg-teal-500/20 hover:text-teal-600 dark:hover:text-teal-300 transition-all duration-300"
                                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Copyright */}
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                        All rights reserved © {new Date().getFullYear()} | Crafted by{' '}
                        <span className="text-teal-600 dark:text-teal-400 font-medium hover:text-teal-700 dark:hover:text-teal-300 transition-colors duration-300">
              Pathum Rathnayaka
            </span>
                    </p>
                </div>
            </div>
        </footer>
    );
}