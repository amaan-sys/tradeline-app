"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  // Parallax mouse movement for hero section
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="w-full overflow-hidden text-gray-800">

      {/* ===================== HERO SECTION REDESIGNED CINEMATIC ===================== */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center mt-10"
        style={{ backgroundImage: "url('/trdee.jpg')" }}
      >
        {/* Dark Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/50 to-black/20"></div>
        <div className="absolute inset-0 bg-black/30 pointer-events-none"></div> {/* extra soft dark layer */}

        {/* PARALLAX FLOATING SHAPES */}
        <motion.div
          style={{ x: mousePos.x * 0.03, y: mousePos.y * 0.03 }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-16 left-8 w-52 h-52 bg-gradient-to-tr from-cyan-400/50 to-blue-500/40 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ x: -mousePos.x * 0.02, y: -mousePos.y * 0.02 }}
          animate={{ scale: [1, 1.25, 1], rotate: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute bottom-12 right-16 w-64 h-64 bg-gradient-to-bl from-pink-400/30 to-purple-600/30 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          style={{ x: mousePos.x * 0.015, y: -mousePos.y * 0.015 }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-r from-yellow-300/40 to-red-400/30 rounded-full blur-2xl pointer-events-none"
        />

        {/* CONTENT CONTAINER */}
        <div className="relative z-20 w-full h-full flex items-center px-8 md:px-16">
          <div className="w-full md:w-3/5 lg:w-1/2 space-y-6">

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-2xl leading-tight"
            >
              Boost Your Credit
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400">
                Instantly
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-lg md:text-xl text-white/95 max-w-2xl leading-relaxed font-light drop-shadow-lg"
            >
              Tradeline Supply Company eliminates credit invisibility by giving universal access to authorized user tradelines. Build your credit fast with our proven solution.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex gap-4 items-center mt-8"
            >
              <Link
                href="/projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Get Started
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-md hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-12 flex flex-wrap gap-6 text-white/80 text-sm md:text-base drop-shadow-lg"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">✓</span>
                <span>100% Secure & Verified</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">⚡</span>
                <span>Fast Results</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">🏆</span>
                <span>Trusted by 100K+</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* ===================== ABOUT SECTION (Redesigned with Cards) ===================== */}
      {/* ===================== ABOUT SECTION (Professional Light Theme) ===================== */}
      <section className="relative py-20 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 overflow-hidden">
        {/* Subtle Background Orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute top-24 right-24 w-80 h-80 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0]
          }}
          transition={{ repeat: Infinity, duration: 14, delay: 2 }}
          className="absolute -bottom-16 -left-16 w-80 h-80 bg-gradient-to-tr from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block mb-6 px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full border border-cyan-200">
              <span className="text-sm font-semibold text-gray-800">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              About <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Tradeline Supply</span>
            </h2>

            <p className="text-gray-700 text-lg max-w-2xl mx-auto leading-relaxed">
              Pioneering fair access to financial opportunities through innovation and transparency.
            </p>
          </motion.div>

          {/* PROFESSIONAL THREE-COLUMN CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">🚀</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Innovative Access
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Streamlined authorized user tradelines available 100% online with automated checkout for easy access.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">⚖️</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Fair Opportunity
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Equal financial opportunities for all through education and transparent financial tools.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                <span className="text-3xl">💡</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Financial Empowerment
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed text-center">
                Free education and tools to understand credit and make informed financial decisions.
              </p>
            </motion.div>
          </div>

          {/* PROFESSIONAL CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-cyan-200"
            >
              Explore Our Mission
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>


 {/* ===================== PREMIUM EXECUTIVE SECTION ===================== */}
<section className="relative py-24 px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-blue-900/50 to-transparent">
  {/* Dynamic Grid Pattern */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute inset-0 [background-image:linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] [background-size:40px_40px]"></div>
  </div>

  {/* Floating Geometric Elements */}
  <motion.div 
    animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
    transition={{ repeat: Infinity, duration: 16 }}
    className="absolute top-20 left-20 w-32 h-32 bg-cyan-400/10 rounded-3xl border border-cyan-500/20 backdrop-blur-xl"
  />
  <motion.div 
    animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
    transition={{ repeat: Infinity, duration: 20, delay: 4 }}
    className="absolute bottom-32 right-24 w-40 h-40 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-2xl border border-purple-500/20 backdrop-blur-xl"
  />

  <div className="relative z-10 max-w-7xl mx-auto">
    {/* Premium Header */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-3xl backdrop-blur-xl mb-8 shadow-xl">
        <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse" />
        <span className="text-lg font-bold text-white tracking-wider uppercase">Mission Statement</span>
      </div>
      
      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-[0.9] tracking-tight">
          Equal Access
        </h1>
        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent drop-shadow-2xl">
          Credit Freedom
        </div>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
          Breaking systemic barriers with secure tradeline access for all Americans.
        </p>
      </div>
    </motion.div>

    {/* Asymmetric KPI Cards */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20">
      {/* Main KPI Tower */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:col-span-4 p-10 bg-gradient-to-b from-white/5 to-black/20 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
      >
        <div className="text-6xl mb-6 opacity-75">📈</div>
        <div className="text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          33<span className="text-3xl">%</span>
        </div>
        <p className="text-gray-400 text-lg font-medium">Americans<br/>with Tradelines</p>
      </motion.div>

      {/* Secondary Metrics */}
      <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { num: "100K+", label: "Profiles Studied", icon: "🔬" },
          { num: "✓ Verified", label: "Secure Trades", icon: "🔒" },
          { num: "24/7", label: "Live Access", icon: "⚡" },
          { num: "0% Risk", label: "Guaranteed Safe", icon: "🛡️" }
        ].map((metric, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
            className="group p-8 bg-white/3 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-cyan-400/30 hover:bg-white/5 transition-all duration-400 cursor-pointer"
          >
            <div className="text-3xl mb-4 opacity-80">{metric.icon}</div>
            <div className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {metric.num}
            </div>
            <p className="text-gray-500 text-sm font-medium group-hover:text-gray-300 transition-colors">
              {metric.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Premium Dual Reveal Cards */}
    <div className="grid lg:grid-cols-2 gap-8 mb-24">
      {/* Challenge Card */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="group relative p-12 rounded-3xl bg-gradient-to-br from-slate-800/50 to-gray-900/50 backdrop-blur-3xl border border-white/5 shadow-2xl overflow-hidden hover:shadow-[0_35px_60px_-15px_rgba(239,68,68,0.3)] transition-all duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-orange-500/5 -skew-x-3 -translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-1000" />
        <div className="relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">⚖️</span>
          </div>
          <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Systemic Exclusion</h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            67% of Americans lack access to generational wealth-building tools.
          </p>
        </div>
      </motion.div>

      {/* Solution Card */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="group relative p-12 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10 backdrop-blur-3xl border border-cyan-400/20 shadow-2xl overflow-hidden hover:shadow-[0_35px_60px_-15px_rgba(34,197,94,0.4)] transition-all duration-700"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 -skew-x-3 translate-x-[100%] group-hover:translate-x-[0%] transition-transform duration-1000" />
        <div className="relative z-10">
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-cyan-400/30 rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300">
            <span className="text-3xl">🚀</span>
          </div>
          <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Universal Access</h3>
          <p className="text-gray-300 text-lg leading-relaxed max-w-md">
            Enterprise-grade platform delivering verified tradelines to every citizen.
          </p>
        </div>
      </motion.div>
    </div>

    {/* Hero CTA */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="text-center"
    >
      <Link
        href="/tradelines"
        className="group relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-600 text-white font-black text-xl rounded-3xl shadow-2xl border border-white/20 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_0_0_100px_rgba(34,197,94,0.3)] hover:shadow-emerald-500/50 transition-all duration-700"
      >
        <span className="absolute inset-0 bg-gradient-to-r from-emerald-400/50 to-cyan-400/50 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
        <span className="relative">
          Claim Your Advantage
        </span>
        <motion.svg 
          animate={{ x: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-6 relative"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </motion.svg>
      </Link>
    </motion.div>
  </div>
</section>




      {/* ===================== CTA ===================== */}
      <section className="py-24 px-6 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-center">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-8"
        >
          Ready to Boost Your Credit Score?
        </motion.h2>

        <motion.div className="mt-4 flex justify-center" whileHover={{ scale: 1.05 }}>
          <Link
            href="/projects"
            className="group flex gap-4 items-center w-[260px] bg-blue-900 border border-primary hover:border-white/30 hover:bg-gray-800 rounded-full transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white/10 blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></span>

            <span className="pl-6 text-lg font-bold text-white group-hover:translate-x-6 transition-transform duration-300 relative z-10">
              Get Started Now
            </span>

            <svg
              className="py-1 group-hover:-translate-x-[37px] group-hover:rotate-45 transition-all duration-300 relative z-10"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
            >
              <g filter="url(#shadow)">
                <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                <path
                  d="M24 23H34M34 23V33M34 23L24 33"
                  stroke="#1F2A2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </Link>
        </motion.div>
      </section>

    </div>
  );
}
