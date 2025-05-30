'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import ServiceCard from '@/components/ServiceCard'

const services = [
  {
    id: 'bridal',
    name: 'Bridal Henna',
    description: 'Intricate and elaborate henna designs for your special day. Our bridal packages include full hands and feet with traditional and modern patterns.',
    features: ['Full hands and feet coverage', 'Intricate bridal patterns', 'Long-lasting design', 'Bridal consultation included', 'Touch-up service', 'Premium henna quality'],
    image: '/images/bridalHenna.png'
  },
  {
    id: 'party',
    name: 'Party Henna',
    description: 'Perfect for celebrations, festivals, and gatherings. Quick and beautiful designs that suit any occasion.',
    features: ['Quick application', 'Beautiful festive patterns', 'Group bookings available', 'Festival designs', 'Multiple people service'],
    image: '/images/partyHenna.jpg'
  },
  {
    id: 'arabic',
    name: 'Arabic Henna',
    description: 'Bold and beautiful Arabic-style henna with flowing patterns and modern touches.',
    features: ['Bold flowing patterns', 'Modern Arabic designs', 'Quick drying time', 'Elegant sophisticated look', 'Hand and arm coverage'],
    image: '/images/arabicHenna.jpg'
  },
  {
    id: 'kids',
    name: 'Kids Henna',
    description: 'Fun and safe henna designs for children. Simple patterns that kids will love.',
    features: ['Safe for children', 'Fun cartoon patterns', 'Quick application', 'Child-friendly designs', 'Simple and cute'],
    image: '/images/kidHenna.png'
  }
]

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="page-transition"
    >
      <PageHeader
        title="Our Services"
        subtitle="Professional henna artistry for every occasion"
        description="Discover our range of beautiful henna services, from intricate bridal designs to fun party patterns. Each service is crafted with care using only natural, high-quality henna."
      />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, staggerChildren: 0.1 }}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

    </motion.div>
  )
}
