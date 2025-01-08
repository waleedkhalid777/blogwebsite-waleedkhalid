

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
  return post || null;
}


export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}


export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800">
      <div
        className="relative w-full h-[400px] bg-cover bg-center"
        style={{ backgroundImage: `url(${post.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg"
          >
            {post.title}
          </motion.h1>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-12"
      >
        <h1 className="text-5xl font-extrabold mb-6">{post.title}</h1>
        <div className="mb-6">
          <p className="text-lg font-medium">{post.author.name || "Unknown Author"}</p>
          <p className="text-sm text-gray-500">{post.date}</p>
        </div>
        <div className="prose prose-lg max-w-none text-gray-900">
          <p>{post.content}</p>
        </div>
      </motion.div>
    </div>
  );
}
