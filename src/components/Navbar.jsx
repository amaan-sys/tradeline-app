"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
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

  // Hide navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScroll && scrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastScroll(scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const toggleMenu = () => setOpenMenu((prev) => !prev);
  const handleMenuClick = () => setOpenMenu(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } bg-[#0F6FD3] shadow-sm`}
      >
        <div className="max-w-6xl mx-auto h-16 sm:h-20 flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
              TRADELINE
            </h1>
          </Link>

          {/* Right buttons */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop auth buttons */}
            <div className="hidden sm:flex items-center gap-4">
              <Link
                href="/signup"
                className="px-5 py-2 rounded-full bg-[#25536B] text-sm font-medium text-white hover:bg-[#1E4254] transition-colors"
              >
                Sign Up
              </Link>

              <Link
                href="/signin"
                className="px-5 py-2 rounded-full bg-white text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors"
              >
                Sign In
              </Link>
            </div>

            {/* Moon (theme) icon */}
            <button className="hidden sm:flex items-center justify-center h-9 w-9 rounded-full bg-[#0B3551] text-white hover:bg-[#082538] transition-colors">
              <Moon size={18} />
            </button>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0B3551] text-white hover:bg-[#082538] transition-colors"
            >
              {openMenu ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Small top-right menu card */}
      {openMenu && (
        <div className="fixed top-16 sm:top-20 right-4 sm:right-6 z-40">
          <div className="w-64 sm:w-72 rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
            {/* Card header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-100">
              <span className="text-sm font-semibold text-slate-800">Menu</span>
              <button
                onClick={handleMenuClick}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-700"
              >
                <X size={18} />
              </button>
            </div>

            {/* Links */}
            <nav className="max-h-[60vh] overflow-y-auto">
              <ul className="py-2">
                {links.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.path}
                      onClick={handleMenuClick}
                      className="block px-4 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0F6FD3] rounded-lg"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Auth buttons in card (for mobile / quick access) */}
            <div className="px-4 py-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/signup"
                onClick={handleMenuClick}
                className="w-full text-center px-4 py-2.5 rounded-full bg-[#25536B] text-sm font-medium text-white hover:bg-[#1E4254] transition-colors"
              >
                Sign Up
              </Link>
              <Link
                href="/signin"
                onClick={handleMenuClick}
                className="w-full text-center px-4 py-2.5 rounded-full bg-slate-100 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition-colors"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
