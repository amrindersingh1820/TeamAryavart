'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Users, Zap } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <Users size={32} />,
      title: 'Leadership',
      desc: 'Developing future leaders through mentorship and real-world projects.',
    },
    {
      icon: <Zap size={32} />,
      title: 'Innovation',
      desc: 'Fostering a culture of creativity and technological advancement.',
    },
    {
      icon: <Calendar size={32} />,
      title: 'Events',
      desc: 'Organizing impactful workshops, hackathons, and social drives.',
    },
  ];

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow overflow-hidden">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-[#0F172A] to-[var(--color-secondary)] text-white overflow-hidden">
          {/* Background Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--color-primary)] opacity-20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--color-accent)] opacity-10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2"></div>
          </div>

          <div className="container mx-auto px-6 z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[var(--color-primary)] font-semibold tracking-wider uppercase mb-4">Welcome to Team Aryavart</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Building Leaders, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
                  Shaping the Future
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                A student-driven community dedicating to excellence in technology, culture, and social impact.
              </p>

              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link
                  href="/join"
                  className="px-8 py-4 rounded-full bg-[var(--color-primary)] text-white font-bold text-lg hover:bg-[#3a2b20] transition-all shadow-lg hover:shadow-[#3a2b20]/30 flex items-center justify-center gap-2"
                >
                  Join Us <ArrowRight size={20} />
                </Link>
                <Link
                  href="/events"
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all"
                >
                  Explore Events
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">Why Join Us?</h2>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="p-8 rounded-2xl bg-white border border-gray-100 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-2 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-6 text-3xl group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-gray-800">What People Say</h2>
              <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  text: "Joining Team Aryavart was the best decision of my college life. It gave me the confidence to lead.",
                  author: "Rohan Das",
                  role: "Alumni, Batch 2023"
                },
                {
                  text: "The technical workshops are top-notch. I learned more here than in my classrooms.",
                  author: "Meera Iyer",
                  role: "3rd Year Student"
                },
                {
                  text: "A perfect blend of culture and technology. The events are always energetic and well-managed.",
                  author: "Kabir Singh",
                  role: "Tech Lead, Google"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative"
                >
                  <div className="absolute top-6 left-6 text-6xl text-[var(--color-primary)]/20 font-serif leading-none">"</div>
                  <p className="text-gray-600 mb-6 italic relative z-10">{testimonial.text}</p>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <span className="text-sm text-[var(--color-secondary)] font-medium">{testimonial.role}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action Bar */}
        <section className="py-16 bg-[var(--color-secondary)] relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Ready to make an impact?</h2>
              <p className="text-gray-300">Join Team Aryavart and be part of the change.</p>
            </div>
            <Link
              href="/contact"
              className="px-8 py-3 rounded-full bg-white text-[var(--color-secondary)] font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
