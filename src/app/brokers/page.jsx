"use client";

import React from "react";
import Link from "next/link";

const BrokersPage = () => {
  return (
    <div className="w-full bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700">
            Become a Tradeline Broker
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Sign up for wholesale tradelines access and start earning commissions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-14 max-w-6xl mx-auto">

          {/* LEFT FORM */}
          <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              Broker Registration
            </h2>
            <p className="text-gray-600 mb-6">
              Enter your details below to begin your broker onboarding process.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone Number *</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <div className="flex items-start">
                <input type="checkbox" className="h-4 w-4 mt-1 text-blue-600 rounded focus:ring-blue-500" />
                <label className="ml-2 text-sm text-gray-700">
                  I agree to be contacted and accept the{" "}
                  <Link href="/privacy-policy" className="text-blue-600 underline">
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>

          {/* RIGHT COLUMN - STEPS */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-blue-700">
              How It Works
            </h2>
            <p className="text-gray-600 mb-8">
              Follow these 3 simple steps to start selling tradelines professionally.
            </p>

            <div className="space-y-8">

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-2">1. Submit Application</h3>
                <p className="text-gray-700">
                  Complete the form to begin your onboarding. No fees required.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-2">2. Send Documentation</h3>
                <p className="text-gray-700">
                  Provide your business documentation for fast approval within 1 day.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-600">
                <h3 className="text-xl font-semibold mb-2">3. Start Selling</h3>
                <p className="text-gray-700">
                  Access wholesale pricing, list tradelines under your name, and earn profits.
                </p>
              </div>
            </div>

            {/* BENEFITS */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                Broker Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {[
                  "Help your clients boost credit",
                  "Sell under your brand",
                  "Access the largest tradeline marketplace",
                  "Build a new revenue stream",
                  "Set your own pricing",
                  "API Access",
                  "High closing rates",
                  "Volume discounts",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" strokeWidth="2"
                      viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">Broker Pricing</h2>
          <p className="text-gray-600 mb-6">
            Discounts are based on lifetime order volume.
          </p>

          <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold text-blue-700 uppercase">
                    Lifetime Volume
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-bold text-blue-700 uppercase">
                    Discount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="px-6 py-4">$0 – $4,999</td>
                  <td className="px-6 py-4">5%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">$5,000 – $9,999</td>
                  <td className="px-6 py-4">7.5%</td>
                </tr>
                <tr>
                  <td className="px-6 py-4">$10,000 – $24,999</td>
                  <td className="px-6 py-4">10%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4">$25,000+</td>
                  <td className="px-6 py-4">15%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600 mt-4">
            *Discount terms may change at any time.
          </p>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-blue-700 mb-4">FAQs</h2>
          <p className="text-gray-600">
            See the{" "}
            <Link href="/faq" className="text-blue-600 underline">
              most commonly asked questions
            </Link>{" "}
            about selling tradelines.
          </p>
        </div>

        {/* VIDEOS */}
        <div className="max-w-4xl mx-auto mt-20 mb-20">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">
            Recommended Videos
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-100 aspect-video rounded-xl flex items-center justify-center text-blue-600">
              Video Placeholder 1
            </div>
            <div className="bg-blue-100 aspect-video rounded-xl flex items-center justify-center text-blue-600">
              Video Placeholder 2
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BrokersPage;
