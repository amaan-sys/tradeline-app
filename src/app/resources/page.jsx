"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Calendar,
  Users,
  TrendingUp,
  CheckCircle,
  Sparkles,
} from "lucide-react";

const stats = [
  { label: "Active Users", value: "50,000+", icon: Users, color: "text-cyan-400" },
  { label: "Average Score Increase", value: "+85 pts", icon: TrendingUp, color: "text-emerald-400" },
  { label: "Client Success Rate", value: "97%", icon: CheckCircle, color: "text-white" },
];

const categories = [
  { id: 1, name: "Credit Basics", slug: "credit-basics", count: 12 },
  { id: 2, name: "Tradelines", slug: "tradelines", count: 8 },
  { id: 3, name: "Score Repair", slug: "score-repair", count: 15 },
  { id: 4, name: "Business Credit", slug: "business-credit", count: 6 },
];

// Featured Cards — now with real images
const featuredCards = [
  {
    id: 1,
    title: "FICO Score Calculator",
    desc: "Calculate your potential score boost based on tradeline limits and age.",
    icon: TrendingUp,
    link: "/tools/fico-calculator",
    color: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Tradeline Selector",
    desc: "Find the perfect tradeline for your credit goals and budget.",
    icon: Sparkles,
    link: "/tools/tradeline-selector",
    color: "from-emerald-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Reporting Timeline",
    desc: "Track when your tradelines will appear on all 3 bureaus.",
    icon: Calendar,
    link: "/tools/reporting-timeline",
    color: "from-purple-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=800&fit=crop",
  },
];

const posts = [
  {
    id: 1,
    title: "How Tradelines Boost Your Credit Score: 2025 Guide",
    desc: "Authorized user tradelines can boost FICO scores by 50-100+ points in 30-45 days through primary tradeline piggybacking.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop",
    date: "Dec 08, 2025",
    category: "Tradelines",
    readTime: "5 min",
    views: "2.4K",
    link: "/blog/tradelines-credit-score-boost",
  },
  {
    id: 2,
    title: "Tradeline Limits: $10K vs $50K vs $100K Comparison",
    desc: "High-limit tradelines ($25K+) show 3x greater impact on credit utilization ratios vs low-limit accounts.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&h=800&fit=crop",
    date: "Dec 05, 2025",
    category: "Tradelines",
    readTime: "7 min",
    views: "1.8K",
    link: "/blog/tradeline-limits-comparison",
  },
  {
    id: 3,
    title: "Tradeline Reporting Windows: When Will It Post?",
    desc: "Primary tradelines report within 1-3 statement cycles. Learn exact timing for Experian, Equifax, TransUnion.",
    image: "https://images.unsplash.com/photo-1504868586233-c78872d1d2ce?w=1200&h=800&fit=crop",
    date: "Nov 28, 2025",
    category: "Credit Basics",
    readTime: "6 min",
    views: "3.2K",
    link: "/blog/tradeline-reporting-windows",
  },
  {
    id: 4,
    title: "Seasoned Tradelines vs New: Real Data Comparison",
    desc: "24+ month seasoned tradelines average 72-point FICO boost vs 28-point boost from new primary accounts.",
    image: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=1200&h=800&fit=crop",
    date: "Dec 02, 2025",
    category: "Score Repair",
    readTime: "8 min",
    views: "1.1K",
    link: "/blog/seasoned-vs-new-tradelines",
  },
  {
    id: 5,
    title: "Credit Mix Impact: Installment + Revolving Strategy",
    desc: "Optimal credit mix = 10% installment, 45% revolving, 45% tradelines yields highest FICO algorithm scores.",
    image: "https://images.unsplash.com/photo-1556155092-490a1ba16284?w=1200&h=800&fit=crop",
    date: "Nov 22, 2025",
    category: "Credit Basics",
    readTime: "4 min",
    views: "4.1K",
    link: "/blog/credit-mix-strategy",
  },
  {
    id: 6,
    title: "Business Tradelines: EIN vs SSN Funding Explained",
    desc: "Personal credit tradelines boost business scores 40% faster than direct business tradeline applications.",
    image: "https://images.unsplash.com/photo-1450101499160-c884817bc638?w=1200&h=800&fit=crop",
    date: "Dec 01, 2025",
    category: "Business Credit",
    readTime: "9 min",
    views: "892",
    link: "/blog/business-tradelines-guide",
  },
];

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const filteredPosts = posts.filter((post) =>
    (activeCategory === "all" || post.category.toLowerCase() === activeCategory) &&
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const nextPage = () => currentPage < totalPages && setCurrentPage((prev) => prev + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage((prev) => prev - 1);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Dark Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 py-16 px-4 sm:py-20 sm:px-6 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 sm:gap-3 bg-cyan-500/20 backdrop-blur-md border border-cyan-500/30
                 text-cyan-300 px-4 py-2 sm:px-6 sm:py-3 rounded-full mb-6 sm:mb-10"
          >
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
            <span className="text-xs sm:text-sm font-medium">Updated December 2025</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mb-4 sm:mb-6 leading-tight"
          >
            Credit Education
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400
                       text-3xl sm:text-4xl md:text-5xl mt-1">
              Resources Hub
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto mb-12 sm:mb-16 font-light leading-relaxed px-2"
          >
            Real strategies backed by data — used by 50,000+ clients.
            <br className="hidden md:block" />
            Average result: <span className="font-bold text-cyan-400">+85 points in 45 days</span>
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto w-full px-2">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8
                       hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(0,255,255,0.4)]
                       transition-all duration-500"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 shadow-2xl">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-gray-400 font-medium text-sm sm:text-base">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>


      {/* Light Content Area */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <div className="max-w-7xl mx-auto">

          {/* Search + Filters */}
          <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 mb-10 border border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-4 justify-between">

              {/* Search Input */}
              <div className="relative w-full flex-1 max-w-full lg:max-w-lg xl:max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
                <input
                  type="text"
                  placeholder="Search tradelines, FICO tips, score repair..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-5 py-3 bg-gray-50 border border-gray-300 rounded-2xl shadow-sm 
            focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 
            transition-all duration-200 text-gray-800 placeholder-gray-500"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 mt-4 lg:mt-0 lg:gap-3 justify-start lg:justify-end">
                {/* All Button */}
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl font-semibold transition-all duration-200 
            shadow-sm whitespace-nowrap 
            ${activeCategory === "all"
                      ? "bg-blue-600 text-white shadow-md hover:bg-blue-700"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                    }`}
                >
                  All Resources
                </button>

                {/* Dynamic Category Buttons */}
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-2xl font-medium transition-all duration-200 
              flex items-center gap-1.5 whitespace-nowrap shadow-sm hover:shadow-md
              ${activeCategory === cat.slug
                        ? "bg-blue-600 text-white hover:bg-blue-700 border-0"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200"
                      }`}
                  >
                    <span>{cat.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full 
                ${activeCategory === cat.slug ? "bg-white/40 text-white" : "bg-gray-300 text-gray-700"}`}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Cards */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 mb-16"
          >
            {featuredCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="group bg-white rounded-3xl border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-2 
            transition-all duration-500 overflow-hidden"
                >
                  <div className="p-6 sm:p-8">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 ${card.color} rounded-2xl flex items-center justify-center mb-4 sm:mb-6`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{card.title}</h3>
                    <p className="text-gray-600 mb-5 text-sm sm:text-base">{card.desc}</p>
                    <Link
                      href={card.link}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-3 transition-all"
                    >
                      Use Tool
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div> */}

          {/* Blog Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeCategory}-${searchTerm}-${currentPage}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            >
              {paginatedPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:bg-blue-50
            transition-all duration-500 border border-gray-200"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-7">
                    <div className="flex items-center flex-wrap gap-2 text-xs sm:text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </div>
                      <span>•</span>
                      <span>{post.readTime} read</span>
                      <span>•</span>
                      <span>{post.views} views</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight line-clamp-2 hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-5 text-sm sm:text-base leading-relaxed line-clamp-3">
                      {post.desc}
                    </p>

                    <Link
                      href={post.link}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:gap-4 transition-all"
                    >
                      Read Guide
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-14 flex-wrap">
              <button
                onClick={prevPage}
                disabled={currentPage === 1}
                className="p-3 rounded-xl bg-white shadow disabled:opacity-40 hover:bg-gray-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-xl font-medium transition-all 
              ${currentPage === page
                        ? "bg-blue-600 text-white shadow"
                        : "bg-white text-gray-700 shadow hover:bg-gray-100"
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>

              <button
                onClick={nextPage}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl bg-white shadow disabled:opacity-40 hover:bg-gray-50"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}