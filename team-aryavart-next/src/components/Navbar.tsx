'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Team', path: '/team' },
        { name: 'Events', path: '/events' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    // Hide Navbar on dashboard pages
    if (pathname?.startsWith('/dashboard')) {
        return null;
    }

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/aryavart_logo.jpg"
                        alt="Team Aryavart"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain rounded-full"
                    />
                    <span className="text-2xl font-bold tracking-widest uppercase">
                        <span className="text-[var(--color-primary)]">ARYAVART</span>
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            onClick={async () => {
                                if (link.name === 'Home') {
                                    await handleLogout();
                                }
                            }}
                            className={`font-medium transition-colors hover:text-[var(--color-primary)] relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] after:transition-all hover:after:w-full ${pathname === link.path
                                ? 'text-[var(--color-primary)] after:w-full'
                                : 'text-gray-700'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/join"
                        className="px-6 py-2 rounded-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    >
                        Join Us
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-[var(--color-primary)] transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    onClick={async () => {
                                        if (link.name === 'Home') {
                                            await handleLogout();
                                        }
                                    }}
                                    className={`text-lg font-medium transition-colors hover:text-[var(--color-primary)] ${pathname === link.path
                                        ? 'text-[var(--color-primary)]'
                                        : 'text-gray-700'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/join"
                                className="w-full text-center px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-white font-semibold shadow-md active:scale-95 transition-all"
                            >
                                Join Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
