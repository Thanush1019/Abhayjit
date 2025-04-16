'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Phone } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you can add your form submission logic
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-brand-light via-white to-brand-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary mx-auto mb-8 rounded-full" />
          <p className="text-lg text-brand-slate">
            Let's discuss how I can help your business achieve its financial goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:contact@abhayjit.com"
                  className="flex items-center text-brand-slate hover:text-brand-primary transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-primary/80 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">contact@abhayjit.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center text-brand-slate hover:text-brand-secondary transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-secondary to-brand-secondary/80 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">+1 (234) 567-890</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhayjit-singh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-brand-slate hover:text-brand-tertiary transition-all duration-300 group"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-brand-tertiary to-brand-tertiary/80 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-5 h-5 text-white" />
                  </div>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">LinkedIn Profile</span>
                </a>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary mb-4">Office Hours</h3>
              <div className="space-y-3 text-brand-slate">
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-brand-primary to-brand-primary/80 rounded-full mr-3" />
                  Monday - Friday: 9:00 AM - 6:00 PM
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-brand-secondary to-brand-secondary/80 rounded-full mr-3" />
                  Saturday: By Appointment
                </p>
                <p className="flex items-center">
                  <span className="w-2 h-2 bg-gradient-to-r from-brand-tertiary to-brand-tertiary/80 rounded-full mr-3" />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-brand-charcoal mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent transition-all duration-300 bg-white/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-brand-charcoal mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-secondary focus:border-transparent transition-all duration-300 bg-white/50"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-brand-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-brand-light rounded-xl focus:ring-2 focus:ring-brand-tertiary focus:border-transparent transition-all duration-300 bg-white/50"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-tertiary text-white py-3 rounded-xl hover:opacity-90 transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 