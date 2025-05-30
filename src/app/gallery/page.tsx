'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import GalleryGrid from '@/components/GalleryGrid'

const galleryImages = [
  { id: 1, src: '/images/gallery1.png', title: 'Bridal Henna Design', description: 'Intricate bridal henna with traditional patterns' },
  { id: 2, src: '/images/gallery2.png', title: 'Arabic Style Henna', description: 'Bold flowing Arabic henna design' },
  { id: 3, src: '/images/gallery3.png', title: 'Floral Henna Art', description: 'Delicate floral patterns and motifs' },
  { id: 4, src: '/images/gallery4.png', title: 'Modern Henna Design', description: 'Contemporary henna with geometric elements' },
  { id: 5, src: '/images/gallery5.png', title: 'Traditional Mandala', description: 'Beautiful mandala-inspired henna design' },
  { id: 6, src: '/images/gallery6.jpg', title: 'Party Henna Style', description: 'Quick and elegant party henna pattern' },
  { id: 7, src: '/images/gallery7.jpg', title: 'Finger Henna Art', description: 'Detailed finger and hand henna work' },
  { id: 8, src: '/images/gallery8.jpg', title: 'Festive Henna Design', description: 'Celebratory henna for special occasions' },
  { id: 9, src: '/images/gallery9.png', title: 'Minimalist Henna', description: 'Simple yet elegant henna artistry' },
  { id: 10, src: '/images/gallery10.png', title: 'Ornate Henna Pattern', description: 'Complex and detailed ornamental design' },
  { id: 11, src: '/images/gallery11.png', title: 'Cultural Henna Art', description: 'Traditional cultural henna patterns' },
  { id: 12, src: '/images/gallery12.png', title: 'Artistic Expression', description: 'Creative and artistic henna design' },
  { id: 13, src: '/images/gallery13.png', title: 'Elegant Hand Art', description: 'Sophisticated hand henna styling' },
  { id: 14, src: '/images/gallery14.png', title: 'Decorative Henna', description: 'Beautiful decorative henna patterns' },
  { id: 15, src: '/images/gallery15.jpg', title: 'Masterpiece Design', description: 'Stunning henna artistry masterpiece' }
]

export default function GalleryPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="page-transition"
    >
      <PageHeader
        title="Gallery"
        subtitle="Explore our beautiful henna designs and artistry"
        description="Browse through our collection of stunning henna designs showcasing our artistic expertise."
      />
      
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <GalleryGrid items={galleryImages} />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
