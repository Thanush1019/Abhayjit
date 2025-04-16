'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-brand-dark to-brand-primary/90">
      {/* Simple grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:44px_44px]" />
      
      {/* Simple accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary via-brand-tertiary to-brand-secondary" />
      
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
                Abhayjit <span className="text-brand-secondary">Singh</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-brand-tertiary mb-8 font-light tracking-wide">
                Chartered Accountant
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-white/90 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Specialized in Financial Analysis, Risk Management, and Strategic Business Development
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-x-6"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-brand-secondary text-brand-dark font-semibold rounded-lg hover:bg-brand-secondary/90 transition-all duration-300 shadow-lg hover:shadow-brand-secondary/25 transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-4 border-2 border-brand-tertiary text-brand-tertiary font-semibold rounded-lg hover:bg-brand-tertiary/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Services
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative w-full max-w-lg mx-auto order-1 lg:order-2"
          >
            <div className="aspect-square relative">
              {/* Simple border */}
              <div className="absolute inset-0 border-2 border-brand-secondary rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 border-2 border-brand-tertiary rounded-2xl transform -rotate-3"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/Photo 2.jpeg"
                  alt="Abhayjit Singh"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  priority
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
                />
                {/* Simple overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/30 to-transparent" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 