
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import { Metadata } from 'next/dist/lib/metadata/types/metadata-interface'
import Footer from '@/components/Footer'







const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'A modern blog built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
            <Footer/>
          </main>
   
        </div>
      </body>
    </html>
  )
}