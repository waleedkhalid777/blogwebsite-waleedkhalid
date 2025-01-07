"use client"
import { useState, useEffect } from 'react'
import HeroSection from '@/components/HeroSection'
import { motion } from 'framer-motion'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <HeroSection
        title="About Us"
        subtitle="where we share insights, stories, and ideas to inspire and connect with curious minds"
        imageUrl="/about.webp"
      />

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              We strive to create engaging and informative content that helps our readers stay up-to-date with the latest trends in technology and web development. Our goal is to make complex topics accessible and enjoyable for everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in the power of the web to bring people together, foster creativity, and inspire innovation. Our team is dedicated to delivering high-quality solutions and creating a positive impact in the world of technology.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-8">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Integrity, collaboration, and innovation are at the core of everything we do. We believe in being transparent, working together as a team, and pushing the boundaries of what’s possible in the world of web development.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
