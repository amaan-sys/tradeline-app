'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';

export default function AboutPage() {
  return (
    <div className="bg-slate-950/5 min-h-screen py-20 md:py-28 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* ================= HERO (DARK, PREMIUM) ================= */}
        <motion.section
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl px-8 py-16 md:px-14 md:py-20 text-center shadow-[0_25px_80px_rgba(0,0,0,0.55)] mb-24 relative overflow-hidden"
        >
          {/* Glow accents */}
          <div className="absolute -top-10 -left-10 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-sky-500/20 rounded-full blur-3xl"></div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent"
          >
            About Us
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-5 text-slate-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
          >
            Learn how we’re transforming the tradeline industry through transparent,
            accessible, and technology-driven credit solutions.
          </motion.p>
        </motion.section>

        {/* ================= COMPANY STORY (LIGHT & CLEAN) ================= */}
        <section className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-24">
          <div className="space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold text-slate-900"
            >
              Tradeline Supply Company, LLC
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-slate-600 md:text-lg leading-relaxed"
            >
              We are a pioneering fintech platform dedicated to simplifying and modernizing 
              the tradeline marketplace. By combining technology, transparency, and education, 
              we empower individuals and businesses to access powerful credit-building opportunities.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition font-semibold"
            >
              Learn More
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1500&q=80"
              alt="Credit growth and fintech innovation"
              fill
              className="object-cover transform hover:scale-105 transition duration-700"
              priority
            />
          </motion.div>
        </section>

        {/* ================= MISSION / VISION / TEAM (DARK CARDS) ================= */}
        <section className="grid md:grid-cols-3 gap-10">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] p-10 border border-slate-700 hover:shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition cursor-pointer"
          >
            <FaBullseye className="absolute -top-6 -left-6 w-14 h-14 text-sky-400 bg-slate-950 p-3 rounded-full shadow-lg" />
            <h3 className="text-2xl font-bold text-sky-100 mb-3">Mission</h3>
            <p className="text-slate-300 leading-relaxed">
              Our mission is to eliminate credit inequality by delivering fair,
              accessible, and transparent tradeline services to everyone.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] p-10 border border-slate-700 hover:shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition cursor-pointer"
          >
            <FaEye className="absolute -top-6 -left-6 w-14 h-14 text-sky-400 bg-slate-950 p-3 rounded-full shadow-lg" />
            <h3 className="text-2xl font-bold text-sky-100 mb-3">Vision</h3>
            <p className="text-slate-300 leading-relaxed">
              We envision a future where financial empowerment is universal—
              not restricted to wealth, status, or background.
            </p>
          </motion.div>

          {/* Team */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl shadow-[0_25px_80px_rgba(0,0,0,0.35)] p-10 border border-slate-700 hover:shadow-[0_25px_80px_rgba(0,0,0,0.55)] transition cursor-pointer"
          >
            <RiTeamLine className="absolute -top-6 -left-6 w-14 h-14 text-sky-400 bg-slate-950 p-3 rounded-full shadow-lg" />
            <h3 className="text-2xl font-bold text-sky-100 mb-3">Our Team</h3>
            <p className="text-slate-300 leading-relaxed">
              Our team blends fintech innovation, credit expertise, and a passion for 
              consumer empowerment to redefine the credit improvement experience.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
