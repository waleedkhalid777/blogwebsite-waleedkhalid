// src/app/page.tsx
import HeroSection from '@/components/HeroSection'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-100">
      
      <HeroSection
        title="Welcome to MyBlog"
        subtitle="Discover exciting articles on lifestyle, tech, and more. Stay informed and get inspired with our content."
        imageUrl='/hero.webp'
      />

      {/* Articles Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-600 to-slate-600 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-bold text-center mb-12"> Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <Image
                src="/image.jpeg"
                alt="Featured content"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Latest Articles</h3>
                <p className="text-gray-700 mb-4">
                  Discover our latest posts on technology, design, and more to keep you informed.
                </p>
                <Link
                  href="/blog"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <Image
                src="/article2.jpeg"
                alt="About Us"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">About Us</h3>
                <p className="text-gray-700 mb-4">
                  Learn about our mission and the team behind this creative project.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Learn More
                </Link>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl">
              <Image
                src="/article3.jpeg"
                alt="Explore Content"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Explore Content</h3>
                <p className="text-gray-700 mb-4">
                  Dive deeper into our curated content and uncover new perspectives.
                </p>
                <Link
                  href="/content"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Explore
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Featured Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl  hover:bg-[#fdd3cb]">
              <Image
                src="/feature1.jpeg"
                alt="Featured Post 1"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">SEO Optimization</h3>
                <p className="text-gray-700 mb-4">
                Ensure titles are optimized with relevant keywords for search engine visibility.
                </p>
                <Link
                  href="/blog/post-1"
                  className="inline-block  bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl  hover:bg-[#fdd3cb]">
              <Image
                src="/feature2.jpg"
                alt="Featured Post 2"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Action-Oriented</h3>
                <p className="text-gray-700 mb-4">
                Use action verbs like “discover,” “learn,” “explore,” or “how to” to engage your audience and create curiosity.


                </p>
                <Link
                  href="/blog/post-2"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#fdd3cb]">
              <Image
                src="/feature3.webp"
                alt="Featured Post 3"
                width={500}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Dynamic Display</h3>
                <p className="text-gray-700 mb-4">
                Display titles dynamically on the homepage, category pages, and archives.
                </p>
                <Link
                  href="/blog/post-3"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-200">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Browse Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* Category 1 */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl  hover:bg-[#fdd3cb]">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Tech</h3>
                <p className="text-gray-700 mb-4">
                  Dive into the latest trends, tips, and news in technology.
                </p>
                <Link
                  href="/category/tech"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Explore Tech
                </Link>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl  hover:bg-[#fdd3cb]">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Lifestyle</h3>
                <p className="text-gray-700 mb-4">
                  Read posts on wellness, travel, and daily living tips.
                </p>
                <Link
                  href="/category/lifestyle"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Explore Lifestyle
                </Link>
              </div>
            </div>

        
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#fdd3cb]">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Design</h3>
                <p className="text-gray-700 mb-4">
                  Find inspiration and tips for web and graphic design.
                </p>
                <Link
                  href="/category/design"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Explore Design
                </Link>
              </div>
            </div>

            
            <div className="bg-white rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-[#fdd3cb]">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3">Health</h3>
                <p className="text-gray-700 mb-4">
                  Stay healthy with expert advice on fitness, nutrition, and mental health.
                </p>
                <Link
                  href="/category/health"
                  className="inline-block bg-orange-400 text-black px-5 py-3 rounded-lg hover:bg-blue-700 transition-colors font-bold"
                >
                  Explore Health
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </div>
  )
}
