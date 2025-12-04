"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link"; // ⭐ Next.js Link

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const links = [
    { name: "HOME", path: "/" },
    { name: "BUY TRADELINES", path: "/buy-tradelines" },
    { name: "SELL TRADELINES", path: "/sell-tradelines" },
    { name: "BROKERS", path: "/brokers" },
    { name: "RESOURCES", path: "/resources" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
    { name: "MY ACCOUNT", path: "/my-account" },
  ];

  // Hide Navbar on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <header
      className={`w-full py-3 bg-gradient-to-r bg-blue-600 shadow-lg fixed top-0 z-50 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-white tracking-wide drop-shadow">
          TRADELINE
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-white font-medium hover:text-black transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-white/20 backdrop-blur-md shadow-xl overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <div className="px-6 space-y-4">
          {links.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block text-white font-medium hover:text-blue-200 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
