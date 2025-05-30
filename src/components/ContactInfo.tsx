'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const contactDetails = [
    {
      icon: '📞',
      title: 'Phone',
      info: '+39 3885885029',
      description: 'Call us for assistance'
    },
    {
      icon: '✉️',
      title: 'Email',
      info: 'aazaraah@gmail.com',
      description: 'E-mail us for booking'
    },
    {
      icon: '📍',
      title: 'Location',
      info: 'Parma and Nearby Areas',
      description: 'We travel to your location'
    },
    
  ];

  const faqs = [
    {
      question: 'How far in advance should I book?',
      answer: 'We recommend booking at least 2-3 weeks in advance, especially for weddings and special events. However, we do our best to accommodate last-minute requests.'
    },
    {
      question: 'How long does henna last?',
      answer: 'Henna typically lasts 1-3 weeks depending on skin type, aftercare, and the area of application. Hands and feet usually have the longest-lasting results.'
    },
    {
      question: 'Do you travel to locations?',
      answer: 'Yes! We offer mobile services throughout the Parma and Nearby Areas. Travel fees may apply depending on the distance and duration of the event.'
    },
    {
      question: 'Is your henna safe and natural?',
      answer: 'Absolutely! We use only 100% natural henna paste made from high-quality henna powder, essential oils, and natural ingredients. No chemicals or black henna.'
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Details */}
      <div className="card p-8">
        <h3 className="text-2xl font-serif font-bold text-henna-dark mb-6">
          Get In Touch
        </h3>
        
        <div className="space-y-6">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="text-2xl">{detail.icon}</div>
              <div>
                <h4 className="font-semibold text-henna-dark mb-1">
                  {detail.title}
                </h4>
                <p className="text-henna-accent font-medium mb-1">
                  {detail.info}
                </p>
                <p className="text-henna-text/70 text-sm">
                  {detail.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div className="card p-8">
        <h3 className="text-2xl font-serif font-bold text-henna-dark mb-6">
          Frequently Asked Questions
        </h3>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="border-b border-henna-light pb-4 last:border-b-0"
            >
              <h4 className="font-semibold text-henna-dark mb-2">
                {faq.question}
              </h4>
              <p className="text-henna-text text-sm leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Emergency Contact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="bg-gradient-henna-secondary p-6 rounded-lg text-center"
      >
        <h4 className="font-semibold text-henna-dark mb-2">
          Need Immediate Assistance?
        </h4>
        <p className="text-henna-text mb-4">
          For urgent bookings or questions, call us directly
        </p>
        <a
          href="tel:+15551234567"
          className="btn-primary inline-block"
        >
          Call Now: (388) 588-5029
        </a>
      </motion.div>
    </motion.div>
  );
}
