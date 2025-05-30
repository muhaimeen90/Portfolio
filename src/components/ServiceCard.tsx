'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Service {
  id: string;
  name: string;
  description: string;
  features: string[];
  duration: string;
  startingPrice: number;
  image: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="card p-8 group hover:shadow-2xl transition-all duration-300"
    >
      {/* Service Image */}
      <div className="mb-6 relative">
        <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={service.image}
            alt={service.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Overlay with service name */}
          <div className="absolute inset-0 bg-gradient-to-t from-henna-dark/60 via-transparent to-transparent flex items-end">
            <div className="p-4 w-full">
              <h3 className="text-2xl font-serif font-bold text-white mb-1">
                {service.name}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Service Description */}
      <div className="mb-6">
        <p className="text-henna-text leading-relaxed mb-6 text-center">
          {service.description}
        </p>
      </div>

      {/* Features */}
      <div className="mb-6">
        <h4 className="font-semibold text-henna-dark mb-3">What&apos;s Included:</h4>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <div className="w-2 h-2 bg-henna-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
              <span className="text-henna-text text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Duration and Price */}
      <div className="border-t border-henna-light pt-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-sm text-henna-text/70">Duration</span>
            <p className="font-medium text-henna-dark">{service.duration}</p>
          </div>
          <div className="text-right">
            <span className="text-sm text-henna-text/70">Starting from</span>
            <p className="text-2xl font-bold text-henna-accent">
              ${service.startingPrice}
            </p>
          </div>
        </div>
        
        <Link href="/contact" className="btn-primary w-full group-hover:bg-henna-dark transition-colors duration-300 block text-center">
          Book This Service
        </Link>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border border-henna-accent/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-6 h-6 border border-henna-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
}
