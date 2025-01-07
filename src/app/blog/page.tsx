// src/app/blog/page.tsx

"use client";

import { blogPosts } from "@/data/posts"; // Importing the mock data
import { motion } from "framer-motion";
import BlogPost from "./[slug]/BlogPost";
// Import BlogPost Component

// Hero Section Component
const HeroSection: React.FC<{
  title: string;
  subtitle: string;
  imageUrl: string;
  cta: string;
}> = ({ title, subtitle, imageUrl, cta }) => (
  <div
    className="relative w-full h-[600px] bg-cover bg-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute top-0 left-0 right-0 bottom-0 z-[-1] bg-black opacity-40"></div>
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4 text-shadow-lg"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl mb-6 text-shadow-lg"
      >
        {subtitle}
      </motion.p>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        onClick={() => window.location.href = "#posts"}
        className="px-6 py-3 text-lg bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
      >
        {cta}
      </motion.button>
    </div>
  </div>
);

export default function Blog() {
  return (
    <div>
      <HeroSection
        title="Welcome to Our Blog"
        subtitle="Explore insights, tutorials, and stories"
        imageUrl="/blog.jpg"  // Your image URL
        cta="Explore Posts"
      />
      <div id="posts" className="mt-16">
        <h1 className="text-7xl font-bold mb-6 text-black text-center ">Blog</h1>
        <ul className="text-black">
          {blogPosts.map((post) => (
            <BlogPost
              key={post.slug}
              slug={post.slug}
              title={post.title }
              excerpt={post.excerpt}
              date={post.date} author={{
                name: "",
                avatar: ""
                
              }}              
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
