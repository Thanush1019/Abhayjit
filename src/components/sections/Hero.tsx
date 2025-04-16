'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Abhayjit Singh
              </h1>
              <h2 className="text-xl sm:text-2xl text-blue-400 mb-8">
                Chartered Accountant
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Specialized in Financial Analysis, Risk Management, and Strategic Business Development
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="space-x-4"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </a>
              <a
                href="#services"
                className="inline-block px-8 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-md hover:bg-blue-400/10 transition-colors"
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
              {/* Square container with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 p-1">
                <div className="absolute inset-0 bg-slate-900"></div>
              </div>
              
              {/* Main image container */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/images/Photo 2.jpeg"
                  alt="Abhayjit Singh"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 33vw"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-blue-500/20 blur-xl -z-10" />
              <div className="absolute inset-0 bg-blue-500/10 translate-x-2 translate-y-2 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 