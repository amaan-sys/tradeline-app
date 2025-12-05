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

      {/* ===================== HERO SECTION REDESIGNED ===================== */}
      {/* ===================== HERO SECTION REDESIGNED CINEMATIC ===================== */}
      <section
        className="relative w-full h-screen bg-cover bg-center flex items-center"
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
      <section className="relative py-28 px-6 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        {/* Floating Background Elements */}
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute top-20 right-10 w-80 h-80 bg-cyan-200/10 rounded-full blur-3xl pointer-events-none"
        />
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 8, delay: 1 }}
          className="absolute bottom-0 left-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-cyan-50 border border-cyan-200 rounded-full mb-4">
              <span className="text-sm font-semibold text-cyan-700">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Leading Through Innovation & Purpose
            </h2>
          </motion.div>

          {/* TWO-COLUMN LAYOUT: Image + Content Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* LEFT: Large Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -15 }}
                transition={{ type: "spring", stiffness: 150 }}
                className="relative rounded-3xl overflow-hidden shadow-2xl group"
              >
                <Image
                  src="/about2.jpg"
                  alt="about"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 " />
              </motion.div>

              <Link href="/projects" className="w-full flex items-center justify-center gap-2 px-6 py-5 mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                Learn More About Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
              </Link>
              
            </motion.div>


            {/* RIGHT: Content Cards Stacked */}
            <div className="space-y-5">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🚀</span> Pioneer Innovation
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tradeline Supply Company, LLC is a pioneer in making it possible for consumers to purchase authorized user tradelines 100% online with an easy automated checkout process. By leveraging innovative technology, we have been able to cut costs and streamline the process, which ultimately makes this product available to more consumers.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">⚖️</span> Fair Opportunity
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tradeline Supply Company, LLC is not a credit repair company, does not advertise this product for the purpose of boosting credit scores. Its products do not directly impact credit scores. There is no guarantee of any improvements to credit in any way. Instead, we are simply fighting for the rights of our customers to have the same opportunities as other more privileged Americans who have friends and family to provide them with this product. Additionally, we provide free education and tools to learn about credit and finances in order to empower people to make the best choices possible.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="pt-2"
              >
                {/* <Link href="/projects" className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Learn More About Us
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== EQUAL OPPORTUNITY SECTION (Redesigned) ===================== */}
      <section className="relative py-20 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Providing
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500"> Equal Opportunity</span>
            </h2>
          </motion.div>

          {/* GRID: Image + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, rotate: -1 }}
                className="relative rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/whitehero.jpg"
                  width={700}
                  height={500}
                  alt="equal opportunity"
                  className="w-full object-cover aspect-video group-hover:brightness-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </motion.div>

            {/* RIGHT: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Traditionally, many parents have been advised to add their kids to their credit cards as authorized users to give them a head start in life. Sadly, not everyone has a parent with good credit to do that. Additionally, a large scale study of 300,000 credit profiles concluded that approximately one-third of our entire nation has one or more authorized user tradelines in their credit file. This same study pointed out that minorities and the lower demographic sectors were less likely to have these types of tradelines, which is further evidence of the inequality that exists in our financial system.
                </p>

                <p className="text-gray-700 text-lg leading-relaxed">
                  Tradeline Supply Company, LLC helps reduce this inequality by providing an equal opportunity for those who were not fortunate enough to have a friend or family member provide such a favor.
                </p>
              </div>

              <motion.div className="pt-4" whileHover={{ scale: 1.05 }}>
                <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all">
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
              </motion.div>
            </motion.div>
          </div>
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
