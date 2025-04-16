'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, LineChart } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'Financial Analysis',
      description: 'Comprehensive financial analysis and reporting to help you make informed business decisions.',
      icon: Calculator,
      color: 'text-brand-primary',
    },
    {
      title: 'Risk Management',
      description: 'Strategic risk assessment and mitigation strategies to protect your business interests.',
      icon: LineChart,
      color: 'text-brand-secondary',
    },
    {
      title: 'Business Development',
      description: 'Expert guidance on business growth, market expansion, and strategic planning.',
      icon: TrendingUp,
      color: 'text-brand-tertiary',
    },
  ]

  return (
    <section id="services" className="py-20 bg-white relative">
      {/* Simple accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-secondary via-brand-tertiary to-brand-secondary" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Services</h2>
          <div className="w-24 h-1 bg-brand-secondary mx-auto mb-8 rounded-full" />
          <p className="text-xl text-brand-slate">
            Providing comprehensive financial solutions tailored to your business needs
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
              className="group"
            >
              <div className="p-8 bg-brand-light rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`inline-flex p-4 rounded-xl bg-white mb-6 ${service.color} group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                <h3 className={`text-2xl font-semibold mb-4 ${service.color}`}>{service.title}</h3>
                <p className="text-lg text-brand-slate">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services 