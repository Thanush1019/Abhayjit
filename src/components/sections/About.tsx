'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '5+' },
    { label: 'Projects Completed', value: '100+' },
    { label: 'Satisfied Clients', value: '50+' },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
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
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 p-1">
                <div className="absolute inset-0 bg-white"></div>
              </div>
              
              {/* Image */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/photo1.jpeg"
                  alt="Abhayjit Singh working"
                  fill
                  className="object-cover object-center"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-xl -z-10" />
            <div className="absolute inset-0 bg-blue-500/10 translate-x-2 translate-y-2 -z-10" />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-700">
              As a Chartered Accountant with extensive experience at KPMG, I specialize in providing comprehensive financial solutions and strategic guidance to businesses across various sectors.
            </p>
            <p className="text-lg text-slate-700">
              My expertise spans financial analysis, risk management, and business development, enabling me to deliver valuable insights and drive sustainable growth for my clients.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="relative p-6 bg-slate-50 border border-blue-100"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-transparent" />
                  <div className="relative">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
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