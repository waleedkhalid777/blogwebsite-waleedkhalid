import { notFound } from "next/navigation";
import { blogPosts } from "@/data/posts";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

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

interface BlogPostProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: {
    name: string;
    avatar: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ slug, title, excerpt, date, author }) => (
  <li className="mb-8 text-center">
    {/* Blog Post Title with Link */}
    <a
      href={`/blog/${slug}`}
      className="text-3xl font-semibold text-blue-600 hover:text-blue-800 hover:underline transition duration-300 ease-in-out"
    >
      {title}
    </a>

    {/* Date and Author Info */}
    <p className="text-sm text-gray-500 mt-2">
      {date} - {author.name}
    </p>

    {/* Excerpt */}
    <p className="text-lg text-gray-700 mt-4 px-6">{excerpt}</p>

    {/* Author Avatar and Name */}
    <div className="flex justify-center items-center mt-6">
      <img
        src={author.avatar}
        alt={`Avatar of ${author.name}`}
        className="w-12 h-12 rounded-full mr-2 border-2 border-blue-500"
      />
      <span className="text-sm text-gray-700 font-medium">{author.name}</span>
    </div>
  </li>
);

export default BlogPost;
