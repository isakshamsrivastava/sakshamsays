import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const posts = [
  {
    title: "Welcome to Saksham Says",
    date: "2025-04-23",
    summary: "This is the first post on Saksham's personal blog. Get ready for tech tips, thoughts, and some cool stories!",
    slug: "welcome-to-saksham-says",
  },
  {
    title: "Pahalgam Incident: A Tragic Day in India",
    date: "2025-04-23",
    summary: "A tragic incident unfolded today in Pahalgam, India. The situation remains tense as authorities investigate the events that led to chaos in the region. Stay tuned for updates on this unfortunate incident.",
    slug: "pahalgam-incident-april-23",
  },
];

export default function Blog() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-5xl font-extrabold text-gradient">Saksham Says</h1>
        <button
          className="bg-transparent p-2 rounded-full"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>

      <p className="text-xl mb-6 text-gray-600">
        Sharing thoughts, tech insights, and stories — one post at a time.
      </p>

      <motion.div layout className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="p-6 bg-white rounded-lg shadow-lg transition-all hover:shadow-xl dark:bg-gray-800 dark:text-white"
          >
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{post.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
            <p className="text-lg">{post.summary}</p>
            <a
              href={`/${post.slug}`}
              className="mt-4 inline-block text-blue-500 dark:text-blue-400 hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
