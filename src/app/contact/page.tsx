'use client'

import { motion } from 'framer-motion'
import PageHeader from '@/components/PageHeader'
import ContactInfo from '@/components/ContactInfo'

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="page-transition"
    >
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch to book your henna appointment"
        description="Ready to create beautiful henna art for your special occasion? Contact us today to discuss your needs and schedule your appointment."
      />
      
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <ContactInfo />
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}
