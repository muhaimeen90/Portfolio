'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function FeaturedGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const featuredImages = [
    {
      id: 1,
      src: '/images/bridalHenna.png',
      category: 'bridal',
      title: 'Bridal Masterpiece',
      description: 'Intricate traditional design for a beautiful bride'
    },
    {
      id: 2,
      src: '/images/arabicHenna.jpg',
      category: 'arabic',
      title: 'Arabic Elegance',
      description: 'Bold and beautiful Arabic-style patterns'
    },
    {
      id: 3,
      src: '/images/partyHenna.jpg',
      category: 'party',
      title: 'Party Perfect',
      description: 'Fun and festive designs for celebrations'
    },
    {
      id: 4,
      src: '/images/kidHenna.png',
      category: 'kids',
      title: 'Kids Special',
      description: 'Simple and cute designs for little ones'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-henna-dark mb-6">
            Featured Gallery
          </h2>
          <p className="text-xl text-henna-text max-w-2xl mx-auto">
            Explore our most beautiful and popular henna designs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg bg-white">
                <div className="aspect-square relative">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                
                {/* Overlay with title and description */}
                <div className="absolute inset-0 bg-gradient-to-t from-henna-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="text-white p-4 w-full">
                    <h3 className="text-lg font-semibold mb-1">
                      {image.title}
                    </h3>
                    <p className="text-sm text-white/90">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <Link href="/gallery" className="btn-primary inline-block">
            View Full Gallery
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
