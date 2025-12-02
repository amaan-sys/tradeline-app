"use client";
import { useState } from 'react';

const resources = [
  {
    title: "Is a Balance Transfer Worth It? How to Know if It's Right for You",
    author: "Ellen Johnson",
    date: "03/12/2025",
    excerpt: "Balance transfers are a somewhat controversial topic in the world of credit repair and debt payoff. They can be a wonderful tool for helping consumers get out of credit card debt without being crushed by sky-high interest rates. On the other hand, if you're not careful, they can also enable you to get yourself even deeper into debt than you were before.",
    likes: 33,
    comments: 3
  },
  {
    title: "How to Improve Your Financial Situation With Extra Money",
    author: "Sarah Sharkey",
    date: "03/08/2025",
    excerpt: "Many of us come into extra money from time to time. Whether you come into a significant windfall or build a new income stream outside of your regular job...",
    likes: 8,
    comments: 0
  },
  // Add more resources here following the same format
  {
    title: "Credit Myth Busting: The Opt-Out Myth",
    author: "Ellen Johnson",
    date: "03/03/2025",
    excerpt: "The 'opt-out' myth is one of many myths that lead consumers astray when it comes to credit. What is the opt-out myth and why does it not work?",
    likes: 20,
    comments: 0
  }
  // Add remaining resources...
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-12">
        <div className="text-center mb-16 px-4 sm:px-0">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Resources
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Latest articles and guides to help you with your financial journey
          </p>
        </div>

        {/* Filter Dropdown */}
        <div className="mb-8 px-4 sm:px-6">
          <div className="relative inline-block w-64">
            <select 
              className="block w-full px-4 py-2 pr-8 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Categories</option>
              <option value="credit-cards">Credit Cards</option>
              <option value="debt-management">Debt Management</option>
              <option value="credit-scores">Credit Scores</option>
              <option value="financial-planning">Financial Planning</option>
              <option value="investing">Investing</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-8 px-4 sm:px-6">
          {resources.map((resource, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>Published by {resource.author} at {resource.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h2>
                <p className="text-gray-600 mb-4">{resource.excerpt}</p>
                <div className="flex items-center justify-between mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    Read more
                  </span>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Do you like it? {resource.likes}</span>
                    <span>{resource.comments} comments</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="flex items-center space-x-2">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Previous
            </button>
            <button className="px-4 py-2 border border-blue-500 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
              1
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              2
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
