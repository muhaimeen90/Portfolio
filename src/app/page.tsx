'use client'

import { motion } from 'framer-motion'
import Hero from '@/components/Hero'
import About from '@/components/About'
import FeaturedGallery from '@/components/FeaturedGallery'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="page-transition"
    >
      <Hero />
      <About />
      <FeaturedGallery />
    </motion.div>
  )
}
