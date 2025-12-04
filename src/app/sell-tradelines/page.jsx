"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const tradelinesData = [
  { id: 1, name: "Premium Tradeline A", limit: "$5,000", price: "$299", color: "bg-blue-500" },
  { id: 2, name: "Premium Tradeline B", limit: "$10,000", price: "$499", color: "bg-green-500" },
  { id: 3, name: "Premium Tradeline C", limit: "$15,000", price: "$699", color: "bg-purple-500" },
  { id: 4, name: "Premium Tradeline D", limit: "$20,000", price: "$899", color: "bg-pink-500" },
];

export default function SalesTradelines() {
  const [filter, setFilter] = useState("All");

  const filteredTradelines = tradelinesData.filter((tradeline) =>
    filter === "All" ? true : tradeline.limit === filter
  );

  const limits = ["All", "$5,000", "$10,000", "$15,000", "$20,000"];

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-900 py-20">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Buy Premium Tradelines
        </motion.h1>

        <motion.p
          className="text-lg md:text-2xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Boost your credit score with trusted tradelines instantly.
        </motion.p>

        <motion.button
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </section>

      {/* FILTER SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-center gap-4 flex-wrap mb-8">
          {limits.map((lim) => (
            <button
              key={lim}
              className={`px-4 py-2 rounded-full font-medium ${
                filter === lim ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              } hover:bg-blue-500 hover:text-white transition-colors`}
              onClick={() => setFilter(lim)}
            >
              {lim}
            </button>
          ))}
        </div>

        {/* TRADELINE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredTradelines.map((tradeline) => (
            <motion.div
              key={tradeline.id}
              className="bg-white rounded-xl shadow-xl p-6 text-center cursor-pointer transform hover:scale-105 transition-transform"
              whileHover={{ scale: 1.08 }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${tradeline.color} flex items-center justify-center text-white font-bold text-lg`}>
                {tradeline.name.split(" ")[2]}
              </div>

              <h3 className="text-xl font-semibold mb-2">{tradeline.name}</h3>
              <p className="text-gray-600 mb-4">Credit Limit: {tradeline.limit}</p>

              <motion.p
                className="text-2xl font-bold mb-4"
                whileHover={{ scale: 1.2, color: "#1D4ED8" }}
              >
                {tradeline.price}
              </motion.p>

              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-blue-600 text-white py-16 text-center mt-12">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Ready to boost your credit score?
        </h2>

        <p className="text-lg md:text-2xl mb-6">
          Choose your tradeline and watch your financial opportunities grow!
        </p>

        <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform">
          Get Your Tradeline
        </button>
      </section>
    </div>
  );
}
