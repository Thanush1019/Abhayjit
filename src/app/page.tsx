import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import client components
const Hero = dynamic(() => import('@/components/sections/Hero'))
const About = dynamic(() => import('@/components/sections/About'))
const Services = dynamic(() => import('@/components/sections/Services'))
const Contact = dynamic(() => import('@/components/sections/Contact'))

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  )
} 