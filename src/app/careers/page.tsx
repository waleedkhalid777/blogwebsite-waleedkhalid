// src/app/careers/page.tsx
'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const positions = [
  {
    title: ' Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    type: 'Full-time'
  },
  {
    title: 'Graphic Designer',
    department: 'Designing',
    location: 'Hybrid',
    type: 'Full-time'
  },
  {
    title: 'UX Designer',
    department: 'Design',
    location: 'On-site',
    type: 'Full-time'
  }
]

export default function CareersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: -30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
        }}
        className="text-center mb-16"
      >
        <h1 className="text-6xl font-bold mb-4 text-indigo-700 tracking-tight">
          Exciting Opportunities Await
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Discover your next challenge with us. We are looking for talented individuals to join a dynamic team and make an impact.
        </p>
      </motion.div>

      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
        className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        {positions.map((position, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
            }}
            whileHover={{ scale: 1.05, boxShadow: "0px 6px 30px rgba(0, 0, 0, 0.2)" }}
            className="bg-gradient-to-r from-green-400 to-orange-500 rounded-lg shadow-lg p-8 text-white hover:shadow-2xl transition-all"
          >
            <h3 className="text-3xl font-semibold mb-4">{position.title}</h3>
            <div className="space-y-2">
              <p><strong>Department:</strong> {position.department}</p>
              <p><strong>Location:</strong> {position.location}</p>
              <p><strong>Type:</strong> {position.type}</p>
            </div>
            <Button className="mt-6 w-full bg-white text-teal-600 hover:bg-teal-100 transition">
              Apply Now
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
