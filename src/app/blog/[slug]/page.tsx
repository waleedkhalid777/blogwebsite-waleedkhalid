"use client";

import { notFound } from "next/navigation";
import { blogPosts } from "@/data/posts";
import { motion } from "framer-motion";

type Post = {
  slug: string;
  title: string;
  content: string;
  date: string;
  author: {
    name?: string;
    avatar: string;
  };
  image: string;
};

async function fetchPost(slug: string): Promise<Post | null> {
  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) return null;


  return {
    ...post,
    author: {
      ...post.author,
      
    },
  };
}


const HeroSection: React.FC<{ title: string; imageUrl: string }> = ({ title, imageUrl }) => (
  <div
    className="relative w-full h-[400px] bg-cover bg-center"
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
      >
        {title}
      </motion.h1>
    </div>
  </div>
);


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <HeroSection title={post.title} imageUrl={post.image} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12"
      >
        <h1 className="text-5xl font-extrabold mb-6">{post.title}</h1>
        <div className="mb-6">
          <p className="text-lg font-medium">{post.author.name}</p> {/* Author name */}
          <p className="text-sm text-gray-500">{post.date}</p> {/* Date */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-lg max-w-none text-gray-900"
        >
          <p>{post.content}</p>
        </motion.div>
      </motion.div>

      <div className="mt-12 flex justify-between items-center border-t pt-6">
        <button
          onClick={() => {
            const shareData = {
              title: post.title,
              text: `Check out this blog post: ${post.title}`,
              url: window.location.href,
            };

            if (navigator.share) {
              navigator.share(shareData).catch((error) => {
                console.error("Error sharing:", error);
                alert("Sharing failed. Please try again!");
              });
            } else {
              
              navigator.clipboard.writeText(shareData.url);
              alert("Post URL copied to clipboard!");
            }
          }}
          className="bg-gray-900 text-white px-6 py-2 rounded-full shadow-md transition hover:bg-white hover:text-black"
        >
          Share
        </button>
        <div className="text-sm text-gray-600">
          <span>Enjoying this post? Let us know!</span>
        </div>
      </div>
    </div>
  );
}
