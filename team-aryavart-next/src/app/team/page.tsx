'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';
import Image from 'next/image';

export default function Team() {
    const teamMembers = [
        {
            name: 'Priyanshu Gupta',
            role: 'Founder and President',
            image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
        },
        {
            name: 'Saksham Dobhal',
            role: 'Vice President',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        },
        {
            name: 'Ujjwal Bhatt',
            role: 'Co-founder',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        },
        {
            name: 'Aastha Ramola',
            role: 'Chief Secretary',
            image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
        },
        // Using sample images for repeated entries to avoid key conflicts or ensure unique keys in map if data was real
        // For migration purpose, keeping list as is but ensuring no duplicate keys in map
        {
            name: 'Aishwarya Joshi',
            role: 'Student Coordinator',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
        },
        {
            name: 'Deepali Chauhan',
            role: 'Treasure',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Sidhant Bisht',
            role: 'Advisor',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Saloni Kharkwal',
            role: 'Advisor',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Akash Ransal',
            role: 'Advisor',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Ajay Panwar',
            role: 'Manager',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Chirag Bhatt',
            role: 'Manager',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Vivek Semwal',
            role: 'Media Head',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Gurkirat Singh Bawa',
            role: 'Content Head',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Ananya Chauhan',
            role: 'Technical Head',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
        {
            name: 'Aditya Narayan',
            role: 'Cultural Head',
            image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
        },
    ];

    return (
        <div className="pb-20">
            <section className="bg-[var(--color-primary)] text-white py-20 text-center relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Meet the Team
                    </motion.h1>
                    <p className="text-xl text-white/90">The passionate minds behind Team Aryavart.</p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={400}
                                    height={400}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                    <div className="flex gap-4">
                                        <a href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Linkedin size={24} /></a>
                                        <a href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Twitter size={24} /></a>
                                        <a href="#" className="text-white hover:text-[var(--color-primary)] transition-colors"><Github size={24} /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-[var(--color-primary)] font-medium">{member.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
