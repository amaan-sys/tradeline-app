'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaBullseye, FaEye } from 'react-icons/fa';
import { RiTeamLine } from 'react-icons/ri';

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 md:py-34 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="mt-4 md:mt-6 text-gray-700 max-w-3xl mx-auto text-lg md:text-xl">
            Discover Tradeline Supply Company, LLC — our vision, mission, and innovative fintech solutions in the tradeline industry.
          </p>
        </motion.div>

        {/* COMPANY STORY */}
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center mb-20"
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 hover:text-blue-600 transition">
              Tradeline Supply Company, LLC
            </h2>
            <p className="text-gray-700 leading-relaxed md:text-lg">
              Tradeline Supply Company, LLC is the leading niche fintech platform dedicated to the tradeline industry. 
              We provide the highest quality peer-to-peer tradeline marketplace for consumers and resellers alike.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition"
            >
              Learn More
            </motion.button>
          </div>
          <div className="relative h-80 md:h-96 w-full rounded-2xl overflow-hidden shadow-xl group cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
              alt="Financial growth and credit building"
              fill
              className="object-cover transform group-hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </motion.div>

        {/* MISSION, VISION, TEAM */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition relative cursor-pointer"
          >
            <FaBullseye className="absolute -top-5 -left-5 w-12 h-12 text-blue-500 bg-white p-2 rounded-full shadow-md" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Our mission is to reduce financial inequalities and provide equal credit-building opportunities to all Americans.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition relative cursor-pointer"
          >
            <FaEye className="absolute -top-5 -left-5 w-12 h-12 text-blue-500 bg-white p-2 rounded-full shadow-md" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              We aim to empower Americans with financial knowledge and resources historically available only to affluent communities.
            </p>
          </motion.div>

          {/* Team */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border-l-4 border-blue-600 hover:shadow-2xl transition relative cursor-pointer"
          >
            <RiTeamLine className="absolute -top-5 -left-5 w-12 h-12 text-blue-500 bg-white p-2 rounded-full shadow-md" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-700 leading-relaxed">
              Our team is composed of fintech and credit experts dedicated to creating a fair, transparent, and effective tradeline ecosystem.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
