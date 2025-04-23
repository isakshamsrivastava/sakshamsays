import { useState } from "react";
import { motion } from "framer-motion";

const posts = [
  {
    title: "Pahalgam Incident: A Tragic Day in India",
    date: "2025-04-23",
    image: "https://source.unsplash.com/600x400/?kashmir,mountains",
    summary: "A tragic incident unfolded today in Pahalgam, India. The situation remains tense as authorities investigate.",
    slug: "pahalgam-incident"
  },
  {
    title: "How I Built This Blog on GitHub Pages",
    date: "2025-04-22",
    image: "https://source.unsplash.com/600x400/?coding,developer",
    summary: "A step-by-step breakdown on how I launched this blog using Vite, React, and GitHub Pages.",
    slug: "build-blog-github"
  },
  {
    title: "My Favorite VS Code Extensions in 2025",
    date: "2025-04-20",
    image: "https://source.unsplash.com/600x400/?vscode,code",
    summary: "Here's a list of the extensions that supercharge my productivity in VS Code.",
    slug: "vscode-extensions"
  },
  {
    title: "Reflections on Tech & Life",
    date: "2025-04-19",
    image: "https://source.unsplash.com/600x400/?nature,thinking",
    summary: "Just taking a moment to reflect on how technology intersects with real life. It's deeper than you think.",
    slug: "tech-life"
  }
];

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-black'} transition duration-300`}>      
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 text-transparent bg-clip-text">Saksham Says</h1>
          <button
            className="px-4 py-2 border rounded-full text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
            onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
          </button>
        </div>

        <p className="mb-10 text-lg md:text-xl text-gray-600 dark:text-gray-300">Exploring tech, thoughts, and real stories. Welcome to my corner of the internet ✨</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.03 }}
              layout>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                <p className="text-md text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
                <a href={`/${post.slug}`} className="text-blue-500 dark:text-blue-300 hover:underline">Read More →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}