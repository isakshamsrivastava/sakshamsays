import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const posts = [
  {
    title: "Welcome to Saksham Says",
    date: "2025-04-23",
    summary: "This is the first post on Saksham's personal blog. Get ready for tech tips, thoughts, and some cool stories!",
    slug: "welcome-to-saksham-says"
  },
  {
    title: "How I Built This Blog",
    date: "2025-04-23",
    summary: "A quick walkthrough of how this blog was built using React, Vite, and GitHub Pages.",
    slug: "how-i-built-this-blog"
  }
];

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Saksham Says</h1>
        <button className="bg-transparent" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
      <p className="text-lg mb-6 text-gray-500">
        Sharing thoughts, tech insights, and stories — one post at a time.
      </p>

      <motion.div layout className="grid gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="p-4 border rounded-lg shadow hover:shadow-xl transition-all">
            <h2 className="text-2xl font-semibold mb-1">{post.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{post.date}</p>
            <p>{post.summary}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
