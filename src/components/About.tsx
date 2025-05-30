'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-henna-dark mb-8">
            About Henna by Azmira
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left"
            >
              <p className="text-lg text-henna-text mb-6 leading-relaxed">
                With over 10 years of experience in the art of henna, Azmira brings passion, 
                precision, and artistry to every design. Specializing in traditional and 
                contemporary patterns, we create unique experiences for weddings, festivals, 
                and special celebrations.
              </p>
              
              <p className="text-lg text-henna-text mb-8 leading-relaxed">
                Our commitment to using only natural, high-quality henna ensures safe, 
                beautiful, and long-lasting designs that honor the ancient tradition while 
                embracing modern aesthetics.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-henna-accent rounded-full mr-4"></div>
                  <span className="text-henna-text font-medium">100% Natural Henna</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-henna-accent rounded-full mr-4"></div>
                  <span className="text-henna-text font-medium">Expert Artistry</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-henna-accent rounded-full mr-4"></div>
                  <span className="text-henna-text font-medium">Custom Designs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-henna-accent rounded-full mr-4"></div>
                  <span className="text-henna-text font-medium">Flexible Booking</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <div className="aspect-square bg-gradient-henna-secondary rounded-lg flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 border-4 border-henna-dark rounded-full flex items-center justify-center">
                      <span className="text-3xl font-serif text-henna-dark">AH</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-henna-dark mb-2">
                      Azmira
                    </h3>
                    <p className="text-henna-text">Henna Artist</p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 border-4 border-henna-accent rounded-full opacity-60"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 border-4 border-henna-primary rounded-full opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
