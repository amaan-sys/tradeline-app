// src/components/Navbar.jsx
"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-black shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">TradelineApp</Link>

        <div className="hidden md:flex gap-6">
          <Link href="/features" className="hover:underline">Features</Link>
          <Link href="#tradelines" className="hover:underline">Tradelines</Link>
          <Link href="#pricing" className="hover:underline">Pricing</Link>
          <Link href="#contact" className="hover:underline">Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} aria-label="menu">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-4 space-y-2">
    <Link href="/features">Features</Link>
    <Link href="#tradelines">Tradelines</Link>
    <Link href="#pricing">Pricing</Link>
    <Link href="#contact">Contact</Link>
  </div>
      )}
    </nav>
  )
}
