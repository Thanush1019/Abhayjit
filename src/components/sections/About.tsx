'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+', icon: '🌟' },
    { label: 'Projects Completed', value: '100+', icon: '📊' },
    { label: 'Satisfied Clients', value: '50+', icon: '🤝' },
  ]

  return (
    <section id="about" className="py-20 bg-brand-light relative">
      {/* Simple accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4">About Me</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto mb-8 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main image container */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
              {/* Simple border */}
              <div className="absolute inset-0 border-2 border-brand-primary rounded-2xl"></div>
              
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/photo1.jpeg"
                  alt="Abhayjit Singh working"
                  fill
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-xl text-brand-charcoal leading-relaxed">
              As a Chartered Accountant with extensive experience at KPMG, I specialize in providing comprehensive financial solutions and strategic guidance to businesses across various sectors.
            </p>
            <p className="text-xl text-brand-charcoal leading-relaxed">
              My expertise spans financial analysis, risk management, and business development, enabling me to deliver valuable insights and drive sustainable growth for my clients.
            </p>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="relative">
                    <div className="text-3xl mb-3">{stat.icon}</div>
                    <div className="text-3xl font-bold text-brand-primary mb-2 group-hover:text-brand-secondary transition-all duration-300">{stat.value}</div>
                    <div className="text-sm text-brand-slate">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 