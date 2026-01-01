'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pb-20">
            <section className="bg-[var(--color-secondary)] text-white py-20 text-center relative">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Contact Us
                    </motion.h1>
                    <p className="text-xl text-gray-300">Have questions? We'd love to hear from you.</p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Team Aryavart Club Room,<br />
                                        Central Block, University Campus,<br />
                                        Dehradun, India - 248007
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                                    <p className="text-gray-600">contact@teamaryavart.com</p>
                                    <p className="text-gray-600">events@teamaryavart.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)] shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                                    <p className="text-gray-600">+91 9XXXX XXXXX</p>
                                    <p className="text-gray-600">+91 1XXXX XXXXX</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h2>
                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Your Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Your Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-600">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-[var(--color-primary)]/20 outline-none transition-all"></textarea>
                            </div>
                            <button type="submit" className="w-full py-3 rounded-xl bg-[var(--color-secondary)] text-white font-bold hover:bg-[var(--color-primary)] transition-all flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
