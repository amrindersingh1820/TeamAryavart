'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
    const images = [



        { src: '/images/gallery/event1.jpg', span: 'col-span-1 md:col-span-2' },
        { src: '/images/gallery/event2.jpg', span: 'col-span-1' },
        { src: '/images/gallery/event3.jpg', span: 'col-span-1' },
        { src: '/images/gallery/event4.jpg', span: 'col-span-1 md:col-span-2' },
        { src: '/images/gallery/event5.jpg', span: 'col-span-1 md:col-span-3' },
        { src: '/images/gallery/event6.jpeg', span: 'col-span-1' },
        { src: '/images/gallery/event7.jpg', span: 'col-span-1' },
        { src: '/images/gallery/event8.jpg', span: 'col-span-1' },
    ];

    return (
        <div className="pb-20">
            <section className="bg-[var(--color-secondary)] text-white py-20 text-center">
                <div className="container mx-auto px-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-bold mb-4"
                    >
                        Gallery
                    </motion.h1>
                    <p className="text-xl text-gray-300">Capturing moments of innovation and joy.</p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative overflow-hidden rounded-xl h-64 md:h-80 group ${img.span}`}
                        >
                            <Image
                                src={img.src}
                                alt="Gallery"
                                width={800}
                                height={600}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-bold tracking-widest uppercase border-2 border-white px-4 py-2 rounded-lg">View</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
}
