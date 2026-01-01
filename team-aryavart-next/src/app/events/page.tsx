'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';

export default function Events() {
    const upcomingEvents = [
        {
            title: 'TechXclave 2026',
            date: 'March 15, 2026',
            location: 'Open Auditorium',
            time: '10:00 AM - 6:00 PM',
            desc: 'Our flagship annual technical fest featuring hackathons, robotics, and coding challenges.',
            category: 'Flagship',
        },
        {
            title: 'Grafest 2026',
            date: 'April 05, 2026',
            location: 'Deemed Ground',
            time: '5:00 PM - 10:00 PM',
            desc: 'An Event where you enjoy, dance and more things.',
            category: 'Fun',
        },
    ];

    const pastEvents = [
        {
            title: 'Grafest 2025',
            date: 'October 15, 2025',
            desc: 'An Event where you enjoy, dance and more things.',
        },
        {
            title: 'Tech-o-Tainment',
            date: 'September 14, 2025',
            desc: 'Our flagship annual technical fest featuring coding challenges..',
        },
        {
            title: 'Novus',
            date: 'September 13, 2025',
            desc: 'Line follower welcome to our new batch of freshers.',
        },
    ];

    return (
        <div className="pb-20 bg-gray-50">
            <section className="bg-[var(--color-secondary)] text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Events & Activities
                    </motion.h1>
                    <p className="text-xl text-gray-300">Join us in our journey of learning and celebration.</p>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="container mx-auto px-6 py-16">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-10 bg-[var(--color-primary)] rounded-full"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Upcoming Events</h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {upcomingEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-[var(--color-primary)] transition-all group"
                        >
                            <span className="inline-block px-4 py-1 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-semibold mb-4">
                                {event.category}
                            </span>
                            <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[var(--color-primary)] transition-colors">
                                {event.title}
                            </h3>
                            <div className="space-y-2 mb-6 text-gray-600">
                                <div className="flex items-center gap-2">
                                    <Calendar size={18} className="text-[var(--color-primary)]" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={18} className="text-[var(--color-primary)]" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin size={18} className="text-[var(--color-primary)]" />
                                    <span>{event.location}</span>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-6">{event.desc}</p>
                            <button className="w-full py-3 rounded-xl border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all">
                                Register Now
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Past Events */}
            <section className="container mx-auto px-6 py-10">
                <div className="flex items-center gap-4 mb-12">
                    <div className="w-2 h-10 bg-gray-400 rounded-full"></div>
                    <h2 className="text-3xl font-bold text-gray-800">Past Highlights</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {pastEvents.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-md"
                        >
                            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{event.title}</h3>
                            <p className="text-gray-600 text-sm">{event.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
