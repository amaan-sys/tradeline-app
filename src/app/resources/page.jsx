"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Heart } from "lucide-react";

const resources = [
  {
    title: "Is a Balance Transfer Worth It? How to Know if It's Right for You",
    author: "Ellen Johnson",
    date: "03/12/2025",
    excerpt:
      "Balance transfers can help reduce high-interest debt, but using them wisely is key. Here’s how to know if it's the right move for you...",
    likes: 33,
    comments: 3,
  },
  {
    title: "How to Improve Your Financial Situation With Extra Money",
    author: "Sarah Sharkey",
    date: "03/08/2025",
    excerpt:
      "Extra money—even small amounts—can change your financial future. Learn the smartest ways to use unexpected income...",
    likes: 8,
    comments: 0,
  },
  {
    title: "Credit Myth Busting: The Opt-Out Myth",
    author: "Ellen Johnson",
    date: "03/03/2025",
    excerpt:
      "The 'opt-out' myth is one of the biggest misunderstandings in credit. Let’s break down what it is and why it doesn’t work...",
    likes: 20,
    comments: 0,
  },
];

export default function ResourcesPage() {
  const [category, setCategory] = useState("all");

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-34">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            Financial Resources
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto ">
            Expert guides, tips, and strategies to help you grow financially.
          </p>
        </motion.div>

        {/* FILTER DROPDOWN */}
        <div className="flex justify-center mb-14">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-72 px-4 py-3 rounded-xl border border-blue-200 shadow-md bg-white 
                       focus:ring-2 focus:ring-blue-500 transition-all text-gray-700"
          >
            <option value="all">All Categories</option>
            <option value="credit-cards">Credit Cards</option>
            <option value="debt-management">Debt Management</option>
            <option value="credit-scores">Credit Scores</option>
            <option value="financial-planning">Financial Planning</option>
            <option value="investing">Investing</option>
          </select>
        </div>

        {/* RESOURCE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              // whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              // transition={{ duration: 0.4 }}
              className="group bg-white/70 backdrop-blur-xl border border-blue-100 rounded-3xl 
                         shadow-md hover:shadow-xl hover:border-blue-300 transition-all p-7 hover:bg-blue-50"
            >
              {/* Meta Info */}
              <p className="text-sm text-gray-500 mb-3">
                Published by <span className="font-medium">{resource.author}</span> •{" "}
                {resource.date}
              </p>

              {/* Title */}
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                {resource.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                {resource.excerpt}
              </p>

              {/* Footer Actions */}
              <div className="flex items-center justify-between pt-2">
                <button className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 shadow-sm">
                  Read More
                </button>

                <div className="flex items-center gap-4 text-gray-600 text-sm">
                  <span className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <Heart size={18} /> {resource.likes}
                  </span>
                  <span className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                    <MessageCircle size={18} /> {resource.comments}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-4">
            <button className="px-5 py-2 rounded-lg bg-white border border-gray-500 text-gray-600 hover:bg-gray-100 shadow-sm">
              Previous
            </button>
            <button className="px-5 py-2 rounded-lg bg-blue-600 text-white border border-blue-600 hover:bg-blue-700 shadow-sm">
              1
            </button>
            <button className="px-5 py-2 rounded-lg bg-white border border-gray-500 text-gray-600 hover:bg-gray-100 shadow-sm">
              2
            </button>
            <button className="px-5 py-2 rounded-lg bg-white border border-gray-500 text-gray-600 hover:bg-gray-100 shadow-sm">
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
