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
    <div className={`${darkMode ? 'dark' : ''}`}>
      <motion.div
        className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white transition duration-300 min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* HERO SECTION */}
        <div className="relative bg-cover bg-center h-72 sm:h-96" style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?blog,writing')` }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center px-6">
            <h1 className="text-4xl sm:text-6xl font-bold text-white">Saksham Says</h1>
            <p className="mt-4 text-lg sm:text-2xl text-gray-200">Exploring tech, thoughts & stories that matter ✨</p>
            <button
              className="mt-6 px-5 py-2 bg-white text-black rounded-full font-medium hover:bg-gray-200"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </div>
        </div>

        {/* BLOG POSTS */}
        <div className="max-w-7xl mx-auto py-12 px-6">
          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {posts.map((post) => (
              <motion.div
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition duration-300 transform hover:-translate-y-1"
                whileHover={{ scale: 1.02 }}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{post.summary}</p>
                  <a
                    href={`/${post.slug}`}
                    className="inline-block text-blue-500 dark:text-blue-300 hover:underline font-medium"
                  >
                    Read More →
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* FOOTER */}
        <footer className="py-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 Saksham. Built with 💻 & ☕
        </footer>
      </motion.div>
    </div>
  );
}
