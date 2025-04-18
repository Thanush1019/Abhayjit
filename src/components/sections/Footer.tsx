'use client'

import React from 'react'
import Link from 'next/link'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-brand-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Abhayjit Singh</h3>
            <p className="text-brand-light/80 mb-4">
              Chartered Accountant specializing in financial solutions and strategic guidance for businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/abhayjit-singh?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-light/80 hover:text-brand-primary transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#home" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  Financial Analysis
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  Risk Management
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  Business Development
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  Strategic Planning
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="text-brand-primary mt-1">
                  <FaEnvelope className="text-lg" />
                </div>
                <a href="mailto:caabhayjit@gmail.com" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  caabhayjit@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-brand-primary mt-1">
                  <FaPhone className="text-lg" />
                </div>
                <a href="tel:+917340803706" className="text-brand-light/80 hover:text-brand-primary transition-colors">
                  +91 7340803706
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="text-brand-primary mt-1">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <span className="text-brand-light/80">Punjab, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-light/20 mt-8 pt-8 text-center text-brand-light/60">
          <p>&copy; {currentYear} Abhayjit Singh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 