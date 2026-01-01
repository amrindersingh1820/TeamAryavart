'use client';

import { motion } from 'framer-motion';
import { Target, Lightbulb, Heart, Award } from 'lucide-react';

export default function About() {
    return (
        <div className="pb-20">
            {/* Header */}
            <section className="bg-[var(--color-secondary)] text-white py-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--color-primary)] opacity-10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-6"
                    >
                        About Us
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Discover the story, mission, and values that drive Team Aryavart.
                    </p>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[var(--color-primary)]"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center text-[var(--color-primary)]">
                                <Lightbulb size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To be a premier student body that cultivates leadership, technological excellence, and social responsibility,
                            creating a legacy of changemakers who shape a better tomorrow.
                        </p>
                    </motion.div>

                    {/* Mission */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 rounded-2xl shadow-lg border-l-4 border-[var(--color-secondary)]"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)]/10 flex items-center justify-center text-[var(--color-secondary)]">
                                <Target size={24} />
                            </div>
                            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            To provide a platform for students to explore their potential through innovation, collaborative projects,
                            and community service, fostering an environment of growth and inclusivity.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Core Values</h2>
                        <div className="w-20 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Innovation", icon: <Lightbulb />, color: "text-yellow-500" },
                            { title: "Integrity", icon: <Award />, color: "text-blue-500" },
                            { title: "Teamwork", icon: <Heart />, color: "text-red-500" },
                            { title: "Excellence", icon: <Target />, color: "text-green-500" }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-6 rounded-xl shadow-md text-center hover:-translate-y-1 transition-transform"
                            >
                                <div className={`w-16 h-16 mx-auto rounded-full bg-gray-50 flex items-center justify-center mb-4 ${value.color}`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{value.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Story */}
            <section className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">The Story of Team Aryavart</h2>
                    <div className="prose prose-lg text-gray-600 mx-auto">
                        <p className="mb-6">
                            Founded in 2024 by a group of passionate students, Team Aryavart started as a small technical discussion group.
                            The name "Aryavart" pays homage to the ancient land of wisdom and progress, reflecting our commitment to
                            blending traditional values of respect and hard work with modern innovation.
                        </p>
                        <p>
                            Over the time, we have grown into one of the most active clubs on campus, organizing over 50+ events
                            ranging from workshops to hackathons. Our alumni are now working at top tech giants
                            and leading social enterprises globally.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
