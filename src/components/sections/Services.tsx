'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, ShieldCheck, TrendingUp } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Financial Analysis',
    description: 'Comprehensive financial analysis and reporting to help you make informed business decisions.',
    features: [
      'Financial Statement Analysis',
      'Budgeting & Forecasting',
      'Performance Metrics',
      'Investment Analysis'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Risk Management',
    description: 'Strategic risk assessment and management solutions to protect your business interests.',
    features: [
      'Risk Assessment',
      'Compliance Management',
      'Internal Controls',
      'Audit Support'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Business Development',
    description: 'Strategic guidance and solutions to drive sustainable business growth.',
    features: [
      'Growth Strategy',
      'Market Analysis',
      'Business Planning',
      'Performance Optimization'
    ]
  }
]

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Services</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8" />
          <p className="text-lg text-slate-600">
            Comprehensive financial services tailored to your business needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-slate-700">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 