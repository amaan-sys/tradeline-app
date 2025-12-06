"use client";

import React from "react";
import Link from "next/link";

const BrokersPage = () => {
  return (
    <div className="w-full bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* ================= HERO (DARK BAND) ================= */}
        <section className="mb-14 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-50 px-5 sm:px-8 py-10 md:py-12 shadow-[0_24px_60px_rgba(15,23,42,0.45)]">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_minmax(0,1fr)] items-center">
            {/* Left: main hero copy */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900 border border-sky-500/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-200">
                Broker Program
              </span>
              <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-black text-slate-50 leading-tight">
                Become a{" "}
                <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                  Tradeline Broker
                </span>
              </h1>
              <p className="mt-3 text-sm md:text-base text-slate-300 max-w-xl">
                Get wholesale access to verified tradelines, sell under your
                own brand, and earn a new stream of predictable revenue — all
                with enterprise-grade support behind you.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#broker-form"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-blue-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-md hover:from-sky-400 hover:to-blue-400 transition-colors"
                >
                  Start Broker Application
                </a>
                <span className="text-xs text-slate-400">
                  No upfront fees • Fast approvals • Volume discounts
                </span>
              </div>
            </div>

            {/* Right: stats / highlight card */}
            <div className="lg:justify-self-end">
              <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-[0_18px_40px_rgba(0,0,0,0.55)] p-6 md:p-7">
                <h2 className="text-sm font-semibold text-slate-50 mb-4">
                  Why brokers partner with us
                </h2>
                <dl className="grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-xl bg-slate-800 px-4 py-3">
                    <dt className="text-[11px] text-slate-400 uppercase tracking-wide mb-1">
                      Avg. broker margin
                    </dt>
                    <dd className="text-xl font-bold text-sky-300">25–40%</dd>
                  </div>
                  <div className="rounded-xl bg-slate-800 px-4 py-3">
                    <dt className="text-[11px] text-slate-400 uppercase tracking-wide mb-1">
                      Approval time
                    </dt>
                    <dd className="text-xl font-bold text-sky-300">24 hrs</dd>
                  </div>
                  <div className="rounded-xl bg-slate-800 px-4 py-3 col-span-2">
                    <dt className="text-[11px] text-slate-400 uppercase tracking-wide mb-1">
                      Support
                    </dt>
                    <dd className="text-sm text-slate-200">
                      Dedicated broker success team + optional API access for
                      advanced partners.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* ================= MAIN GRID (LIGHT) ================= */}
        <section className="grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] items-start">
          {/* LEFT: FORM CARD */}
          <div
            id="broker-form"
            className="bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] rounded-2xl p-6 md:p-8 border border-slate-200"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Broker Registration
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              Enter your details to start the onboarding process. A member of
              our broker team will reach out within one business day.
            </p>

            <form className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500"
                  placeholder="(000) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Company / Brand Name (optional)
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/70 focus:border-sky-500"
                  placeholder="Your brand or company"
                />
              </div>

              <div className="flex items-start gap-2 pt-2">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                />
                <label className="text-xs md:text-sm text-slate-600">
                  I agree to be contacted and accept the{" "}
                  <Link
                    href="/privacy-policy"
                    className="text-sky-600 underline underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="mt-4 w-full py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-sky-600 to-blue-600 text-white hover:from-sky-500 hover:to-blue-500 shadow-md transition-colors"
              >
                Submit Application
              </button>

              <p className="mt-2 text-[11px] text-slate-500 text-center">
                No credit card required • No setup fees
              </p>
            </form>
          </div>

          {/* RIGHT: STEPS + BENEFITS (LIGHT) */}
          <div className="space-y-10">
            {/* Steps */}
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                How It Works
              </h2>
              <p className="text-sm text-slate-600 mb-6">
                Follow these three steps to start selling tradelines under your
                own brand.
              </p>

              <ol className="space-y-5 relative">
                <span className="hidden md:block absolute left-[14px] top-3 bottom-3 w-px bg-slate-200" />
                {[
                  {
                    title: "Submit Application",
                    desc: "Complete the form with your basic details. Our team reviews new brokers daily.",
                  },
                  {
                    title: "Send Documentation",
                    desc: "Share your business documentation securely for compliance and quick approval.",
                  },
                  {
                    title: "Start Selling",
                    desc: "Access wholesale pricing, list tradelines for your clients, and set your margins.",
                  },
                ].map((step, index) => (
                  <li key={step.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="h-7 w-7 rounded-full bg-sky-600 text-white text-xs font-semibold flex items-center justify-center shadow-sm">
                        {index + 1}
                      </div>
                    </div>
                    <div className="bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-sm flex-1">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-xs md:text-sm text-slate-600">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3">
                Broker Benefits
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Built to support agencies, consultants, and credit professionals
                who want to scale.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Help your clients boost credit",
                  "Sell under your own brand",
                  "Access a large tradeline marketplace",
                  "Create a new recurring revenue stream",
                  "Set your own pricing & fees",
                  "Optional API Access",
                  "High closing rates",
                  "Volume-based discounts",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 rounded-lg bg-white border border-slate-200 px-3 py-2.5 text-xs md:text-sm shadow-sm"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 text-emerald-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-slate-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= PRICING (DARK, BUT LIGHTER FEEL) ================= */}
        <section className="mt-16 rounded-3xl bg-slate-900 text-slate-50 px-5 sm:px-8 py-10 md:py-12 shadow-[0_24px_60px_rgba(15,23,42,0.45)]">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-5">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-50">
                Broker Pricing
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Discounts are based on your lifetime order volume. The more you
                place, the more margin you keep.
              </p>
            </div>
            <p className="text-xs text-slate-400">
              Updated quarterly • Subject to change
            </p>
          </div>

          <div className="bg-slate-950/80 rounded-2xl overflow-hidden border border-slate-800">
            <table className="min-w-full text-sm">
              <thead className="bg-slate-900">
                <tr>
                  <th className="px-6 py-3 text-left text-[11px] font-semibold text-slate-200 uppercase tracking-[0.16em]">
                    Lifetime Volume
                  </th>
                  <th className="px-6 py-3 text-left text-[11px] font-semibold text-slate-200 uppercase tracking-[0.16em]">
                    Discount
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr>
                  <td className="px-6 py-3 text-slate-100">$0 – $4,999</td>
                  <td className="px-6 py-3 text-sky-300">5%</td>
                </tr>
                <tr className="bg-slate-900/70">
                  <td className="px-6 py-3 text-slate-100">$5,000 – $9,999</td>
                  <td className="px-6 py-3 text-sky-300">7.5%</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-slate-100">$10,000 – $24,999</td>
                  <td className="px-6 py-3 text-sky-300">10%</td>
                </tr>
                <tr className="bg-slate-900/70">
                  <td className="px-6 py-3 text-slate-100">$25,000+</td>
                  <td className="px-6 py-3 text-sky-300">15%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-400 mt-3">
            * Exact discount tiers and terms may be updated at any time. Your
            broker dashboard always shows your current level.
          </p>
        </section>

        {/* ================= FAQ (LIGHT) ================= */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            FAQs
          </h2>
          <p className="text-sm text-slate-600">
            New to selling tradelines? Review our{" "}
            <Link
              href="/faq"
              className="text-sky-700 font-semibold underline underline-offset-2"
            >
              most commonly asked questions
            </Link>{" "}
            for brokers, payout timelines, and compliance.
          </p>
        </section>

        {/* ================= VIDEOS (LIGHT, SUBTLE DARK CARDS) ================= */}
        <section className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
            Recommended Videos
          </h2>
          <p className="text-sm text-slate-600 mb-5">
            Short walkthroughs to help you understand the broker program,
            onboarding, and how to position tradelines to your clients.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {["Video Placeholder 1", "Video Placeholder 2"].map((label, i) => (
              <div
                key={i}
                className="relative bg-slate-900/5 border border-slate-200 aspect-video rounded-xl flex items-center justify-center overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-50 to-transparent opacity-60" />
                <button className="relative flex items-center justify-center h-14 w-14 rounded-full bg-white/90 shadow-md group-hover:bg-white transition-colors">
                  <span className="ml-0.5 border-l-[10px] border-y-[6px] border-y-transparent border-l-sky-600"></span>
                </button>
                <span className="relative mt-24 text-xs font-medium text-slate-700">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrokersPage;
