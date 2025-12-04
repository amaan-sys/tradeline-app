"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
    <div className="w-full overflow-hidden text-gray-800">

      {/* ===================== HERO SECTION ===================== */}
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url('/hero.avif')` }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6">

          {/* Floating circles */}
          <motion.div
            animate={{ x: [-30, 30, -30], y: [-20, 20, -20] }}
            transition={{ repeat: Infinity, duration: 8 }}
            className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ x: [30, -30, 30], y: [20, -20, 20] }}
            transition={{ repeat: Infinity, duration: 10 }}
            className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
          />

          {/* Text Content */}
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-xl"
          >
            Boost Your Credit Fast
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-6 text-lg md:text-2xl max-w-3xl text-white/90"
          >
            Tradeline Supply Company, LLC is a leader in providing solutions to end credit invisibility. By providing universal access to authorized user tradelines, we help deliver equal credit opportunity.
          </motion.p>

          {/* Animated Button */}
          {/* 🔘 Button directly under the title */}
          <div className="mt-4">
            <Link
              href="/projects"
              className="group flex gap-4 items-center w-fit bg-blue-500 border border-primary hover:border hover:border-white/30 hover:bg-gray-800 rounded-full transition-all duration-200 ease-in-out"
            >
              <span className="pl-6 text-lg font-bold text-secondary group-hover:text-white group-hover:translate-x-12 transform transition-transform duration-200 ease-in-out ">
                Start Now
              </span>
              <svg
                className="py-1 group-hover:-translate-x-37 group-hover:rotate-45 transition-all duration-300 ease-in-out"
                width="58"
                height="58"
                viewBox="0 0 58 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1_873)">
                  <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                  <path
                    d="M24 23H34M34 23V33M34 23L24 33"
                    stroke="#1F2A2E"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1_873"
                    x="0"
                    y="0"
                    width="58"
                    height="58"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_873"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1_873"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </Link>
          </div>

        </div>
      </section>









      {/* ===================== WHY US ===================== */}
      {/* <section className="py-24 px-6 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-16">
            Why Choose Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Fast Results", desc: "See improvement in 7–15 days." },
              { title: "Verified Tradelines", desc: "100% authentic and fully authorized." },
              { title: "Secure Process", desc: "Complete protection & transparency." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/30 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-200/50 text-blue-700 text-2xl font-bold shadow-md">
                  {idx + 1}
                </div>
                <h3 className="text-2xl font-semibold text-blue-700 mb-3">{item.title}</h3>
                <p className="text-blue-800/80">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===================== HOW IT WORKS ===================== */}
      {/* <section className="py-24 px-6 bg-blue-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-20">
            How It Works
          </h2>

          <div className="relative flex flex-col md:flex-row items-center justify-between md:space-x-6">
            {[
              { title: "Select a Tradeline", icon: "💳" },
              { title: "Submit Details", icon: "📝" },
              { title: "Get Added as AU", icon: "✅" },
              { title: "Score Boost in 2–3 Weeks", icon: "🚀" },
            ].map((step, i) => (
              <div key={i} className="relative flex-1 flex flex-col items-center">

                {i < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-1/2 w-full h-1 bg-white z-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 1 }}
                  />
                )}

                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="z-10 w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-3xl font-bold text-blue-600 mb-4"
                >
                  {step.icon}
                </motion.div>

                <motion.h4
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.3 }}
                  className="text-lg md:text-xl font-semibold text-blue-700 max-w-xs"
                >
                  {step.title}
                </motion.h4>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ===================== ABOUT ===================== */}
      <section className="relative py-28 px-6 bg-blue-50 overflow-hidden">
        <div className="max-w-7xl mx-auto relative flex flex-col md:flex-row items-center gap-14">

          {/* Floating decorative shapes */}
          <motion.div
            animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
            className="absolute top-0 left-1/4 w-28 h-28 bg-white/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ y: [0, 15, 0], x: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute bottom-10 right-1/4 w-36 h-36 bg-white/10 rounded-full blur-3xl"
          />

          {/* Image */}
          <div className="relative w-full md:w-1/2 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Image
                src="/about2.jpg"
                alt="about"
                width={600}
                height={400}
                className="rounded-2xl w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>

            {/* Soft glow behind image */}
            <div className="absolute inset-0 rounded-2xl bg-blue-500/5 blur-xl group-hover:bg-blue-500/10 transition duration-500"></div>
          </div>

          {/* Text content */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* About badge */}
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="
          text-sm md:text-base font-bold text-blue-700
          bg-gradient-to-r from-blue-50 to-blue-100
          border border-blue-300 rounded-full
          px-7 py-2 mb-5 inline-block
          shadow-[0_0_25px_rgba(59,130,246,0.25)]
        "
            >
              About Us
            </motion.h2>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold pb-3 leading-tight">
              Leading Through Innovation & Purpose
            </h2>

            {/* Description paragraphs */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-700 text-lg leading-relaxed mb-6"
            >
              Tradeline Supply Company, LLC is a pioneer in making it possible for
              consumers to purchase authorized user tradelines 100% online with an
              easy automated checkout process. By leveraging innovative technology,
              we cut costs and streamline the process, making these tools accessible
              to more consumers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-gray-700 text-lg leading-relaxed mb-6"
            >
              We do not repair credit or guarantee score changes. Instead, we fight
              for equal access to financial opportunities for customers who may not
              have family support or traditional advantages. We also provide free
              educational tools to empower people with financial knowledge.
            </motion.p>
          </motion.div>

        </div>
      </section>






 <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        {/* LEFT: Heading */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-4"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-blue-900 leading-snug">
            Providing <span className="text-blue-500">Equal</span> <br /> Opportunity
          </h2>
         
        </motion.div>

        {/* MIDDLE: Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 cursor-pointer"
        >
          <Image
            src="/about2.jpg" // replace with your image path
            alt="equal opportunity"
            width={500}
            height={350}
            className="rounded-xl object-cover w-full h-full"
          />
        </motion.div>

        {/* RIGHT: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4 text-gray-700 text-lg leading-relaxed"
        >
          <p>
           Traditionally, many parents have been advised to add their kids to their credit cards as authorized users to give them a head start in life. Sadly, not everyone has a parent with good credit to do that. Additionally, a large scale study of 300,000 credit profiles concluded that approximately one-third of our entire nation has one or more authorized user tradelines in their credit file. This same study pointed out that minorities and the lower demographic sectors were less likely to have these types of tradelines, which is further evidence of the inequality that exists in our financial system.
          </p>

          <p className="text-blue-700 font-semibold">
            Tradeline Supply Company, LLC helps reduce this inequality by providing an equal opportunity for those who were not fortunate enough to have a friend or family member provide such a favor.

          </p>
        </motion.div>
      </div>
    </section>



      {/* ===================== TESTIMONIALS ===================== */}
      {/* <section className="py-24 px-6 bg-blue-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-16">
            Clients Love Us
          </h2>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {[
              { msg: "My score jumped 96 points in 20 days. Amazing service!", name: "Customer 1" },
              { msg: "Super professional & verified tradelines. Highly trusted.", name: "Customer 2" },
              { msg: "Fast posting and clear communication. Worth every penny.", name: "Customer 3" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, rotate: -3 + i * 3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl p-8 w-80 shadow-2xl hover:scale-105 hover:shadow-3xl transition cursor-pointer"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 + i }}
                  className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
                >
                  {item.name.split(" ")[1][0]}
                </motion.div>

                <p className="italic text-gray-800 mt-10">{item.msg}</p>
                <p className="mt-4 font-bold text-blue-700">{`— ${item.name}`}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ x: [-30, 30, -30], y: [-20, 20, -20] }}
          transition={{ repeat: Infinity, duration: 12 }}
          className="absolute top-10 left-10 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [30, -30, 30], y: [20, -20, 20] }}
          transition={{ repeat: Infinity, duration: 14 }}
          className="absolute bottom-10 right-20 w-48 h-48 bg-blue-300/20 rounded-full blur-3xl"
        />
      </section> */}

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
        {/* 🔘 Button directly under the title */}
        <div className="mt-4 flex justify-center">
          <Link
            href="/projects"
            className=" group flex gap-4 items-center w-65   bg-blue-900 border border-primary hover:border hover:border-white/30 hover:bg-gray-800 rounded-full transition-all duration-200 ease-in-out"
          >
            <span className="pl-6 text-lg font-bold text-secondary group-hover:text-white group-hover:translate-x-18 transform transition-transform duration-200 ease-in-out ">
              Get Started Now
            </span>
            <svg
              className="py-1 group-hover:-translate-x-37 group-hover:rotate-45 transition-all duration-300 ease-in-out"
              width="58"
              height="58"
              viewBox="0 0 58 58"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_1_873)">
                <rect x="3" y="2" width="52" height="52" rx="26" fill="white" />
                <path
                  d="M24 23H34M34 23V33M34 23L24 33"
                  stroke="#1F2A2E"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_873"
                  x="0"
                  y="0"
                  width="58"
                  height="58"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_873"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_873"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </Link>
        </div>

      </section>

    </div>
  );
}
