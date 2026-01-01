'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Instagram, Linkedin, Twitter, Mail, MapPin, ExternalLink, Heart } from 'lucide-react';

const Footer = () => {
    const pathname = usePathname();
    const currentYear = new Date().getFullYear();

    if (pathname?.startsWith('/dashboard')) {
        return null;
    }

    return (
        <footer className="bg-[var(--color-secondary)] text-white pt-16 pb-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Info */}
                    <div className="md:col-span-1">
                        <Link href="/" className="text-2xl font-bold tracking-tight mb-4 block">
                            <span className="text-[var(--color-primary)]">Team</span>
                            <span className="text-white">Aryavart</span>
                        </Link>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Building Leaders, Shaping the Future. A student-driven club focused on innovation, technology, and social impact.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Linkedin size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-primary)] transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 border-b-2 border-[var(--color-primary)] inline-block pb-1">Quick Links</h3>
                        <ul className="space-y-3 text-gray-300">
                            <li><Link href="/about" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><ExternalLink size={14} /> About Us</Link></li>
                            <li><Link href="/team" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><ExternalLink size={14} /> Our Team</Link></li>
                            <li><Link href="/events" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><ExternalLink size={14} /> Events</Link></li>
                            <li><Link href="/gallery" className="hover:text-[var(--color-primary)] transition-colors flex items-center gap-2"><ExternalLink size={14} /> Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="md:col-span-2">
                        <h3 className="text-lg font-semibold mb-6 border-b-2 border-[var(--color-primary)] inline-block pb-1">Contact Us</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-[var(--color-primary)] shrink-0 mt-1" size={20} />
                                <span>
                                    Team Aryavart Club Room,<br />
                                    Central Block, University Campus,<br />
                                    Dehradun, India - 248007
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-[var(--color-primary)] shrink-0" size={20} />
                                <a href="mailto:contact@teamaryavart.com" className="hover:text-white transition-colors">contact@teamaryavart.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {currentYear} Team Aryavart. All rights reserved.</p>
                    <p className="mt-2 md:mt-0 flex items-center gap-1">
                        Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Team Aryavart Tech Wing
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
