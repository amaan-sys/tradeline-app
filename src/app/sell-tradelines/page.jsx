"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";

const tradelinesData = [
  { id: 1, name: "Premium Tradeline A", limit: "$5,000", price: "$299", color: "bg-sky-500" },
  { id: 2, name: "Premium Tradeline B", limit: "$10,000", price: "$499", color: "bg-emerald-500" },
  { id: 3, name: "Premium Tradeline C", limit: "$15,000", price: "$699", color: "bg-indigo-500" },
];

export default function SalesTradelines() {
  const [filter, setFilter] = useState("All");

  const limits = ["All", "$5,000", "$10,000", "$15,000"];

  const filteredTradelines = useMemo(
    () =>
      tradelinesData.filter((tradeline) =>
        filter === "All" ? true : tradeline.limit === filter
      ),
    [filter]
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.08 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  const cheapestId = useMemo(() => {
    let min = Infinity;
    let id = null;
    tradelinesData.forEach((t) => {
      const price = Number(t.price.replace("$", ""));
      if (price < min) {
        min = price;
        id = t.id;
      }
    });
    return id;
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-950 text-slate-50">
      {/* ========== HERO (DARK) ========== */}
      <section className="relative overflow-hidden">
        {/* Background glow & grid */}
        <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_top,_rgba(56,189,248,0.35),transparent_55%),linear-gradient(rgba(15,23,42,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.8)_1px,transparent_1px)] [background-size:600px_600px,60px_60px,60px_60px]" />
        <div className="pointer-events-none absolute -top-32 -left-24 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-16 lg:pb-24 grid gap-10 lg:grid-cols-[1.2fr_minmax(0,1fr)] items-center">
          {/* Left content */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.25em] text-sky-200"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Instant Credit Boost
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight"
            >
              Buy{" "}
              <span className="bg-gradient-to-r from-sky-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Premium Tradelines
              </span>{" "}
              with Confidence.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed"
            >
              Select from a curated set of high-quality tradelines designed to
              help strengthen your credit profile. Transparent pricing, clear
              reporting windows, and no fluff.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() => {
                  const el = document.getElementById("plans");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_35px_rgba(56,189,248,0.55)] transition-transform hover:translate-y-0.5"
              >
                View Available Tradelines
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </button>
              <span className="text-xs text-slate-400">
                No hard pull • Verified accounts • Clear timelines
              </span>
            </motion.div>
          </div>

          {/* Right highlight card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative"
          >
            <motion.div
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-sky-500/40 bg-slate-950/80 shadow-[0_24px_60px_rgba(15,23,42,0.95)] backdrop-blur-2xl p-6 sm:p-7 max-w-md mx-auto"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-slate-400 mb-2">
                Featured Tradeline
              </p>
              <h3 className="text-lg font-semibold text-slate-50 mb-1">
                Premium Tradeline A
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Ideal for first-time buyers seeking a quick utilization boost.
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">Limit</span>
                  <span className="text-2xl font-bold text-slate-50">
                    $5,000
                  </span>
                </div>
                <div className="h-10 w-px bg-slate-700/70" />
                <div className="flex flex-col">
                  <span className="text-[11px] text-slate-400">Price</span>
                  <span className="text-2xl font-bold text-sky-300">
                    $299
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300 mb-4">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Fast reporting window</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Seasoned account age</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>Great value ratio</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>Perfect for rebuilding</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const el = document.getElementById("plans");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full rounded-full bg-sky-500/90 hover:bg-sky-400 text-slate-950 font-semibold text-sm py-2.5 transition-colors"
              >
                Compare All Tradelines
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ========== FILTER + CARDS (LIGHT, 3 CARDS, BLUE BUTTONS) ========== */}
      <section
        id="plans"
        className="bg-white text-slate-900 border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16 pt-10">
          {/* Filter bar */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 rounded-2xl bg-white border border-slate-200 px-4 py-3 sm:px-5 sm:py-4 shadow-sm">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  Filter by Limit
                </span>
                <div className="flex gap-2 flex-wrap">
                  {limits.map((lim) => (
                    <button
                      key={lim}
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${
                        filter === lim
                          ? "bg-slate-900 text-white shadow-sm"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                      onClick={() => setFilter(lim)}
                    >
                      {lim}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-slate-500">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>
                  Showing{" "}
                  <span className="font-semibold text-slate-800">
                    {filteredTradelines.length}
                  </span>{" "}
                  matching tradelines
                </span>
              </div>
            </div>
          </div>

          {/* Exactly 3 cards max (because data has 3 items) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredTradelines.map((tradeline) => {
              const priceNumber = Number(tradeline.price.replace("$", ""));
              const isCheapest = tradeline.id === cheapestId;
              return (
                <motion.div
                  key={tradeline.id}
                  variants={cardVariants}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="relative overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition"
                >
                  {/* Highlight ribbon (kept subtle) */}
                  {isCheapest && (
                    <div className="absolute top-3 right-3 rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-[10px] font-semibold">
                      Best Value
                    </div>
                  )}

                  <div className="p-6 flex flex-col h-full">
                    {/* Neutral icon circle */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-14 h-14 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 font-semibold text-lg">
                        {tradeline.name.split(" ")[2]}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold text-slate-900 text-center mb-1">
                      {tradeline.name}
                    </h3>
                    <p className="text-xs text-slate-500 text-center mb-4">
                      Hand-verified tradeline with balanced impact.
                    </p>

                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div>
                        <p className="text-xs text-slate-500">Credit Limit</p>
                        <p className="text-base font-semibold text-slate-900">
                          {tradeline.limit}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-slate-500">Price</p>
                        <p className="text-xl font-bold text-slate-900">
                          {tradeline.price}
                        </p>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-500 mb-4">
                      Estimated cost per $1k limit:{" "}
                      <span className="font-semibold text-sky-700">
                        $
                        {Math.round(
                          (priceNumber /
                            Number(tradeline.limit.replace(/[$,]/g, ""))) *
                            1000
                        )}
                      </span>
                    </p>

                    <motion.button
                      whileTap={{ scale: 0.97 }}
                      className="mt-auto w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white text-sm font-semibold rounded-lg py-2.5 hover:from-sky-500 hover:to-sky-500 transition"
                    >
                      Add to Cart
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}

            {filteredTradelines.length === 0 && (
              <div className="col-span-full text-center text-sm text-slate-500 py-10">
                No tradelines match this filter yet. Try another limit range.
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* ========== CTA (BLUE BAND) ========== */}
      <section className="bg-gradient-to-r from-sky-600 via-sky-500 to-blue-600 text-white py-14">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready to boost your credit profile?
          </h2>
          <p className="text-sm md:text-base mb-6 text-sky-50/95">
            Pick the tradeline that matches your goals, and we’ll guide you
            through each step of the process&mdash;clear expectations, no
            surprises.
          </p>

          <button
            onClick={() => {
              const el = document.getElementById("plans");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-white text-sky-700 font-semibold px-7 py-3 rounded-full shadow-[0_18px_40px_rgba(15,23,42,0.45)] hover:bg-slate-100 transition-transform hover:-translate-y-0.5"
          >
            Get Your Tradeline
            <span>↗</span>
          </button>
        </div>
      </section>
    </div>
  );
}
