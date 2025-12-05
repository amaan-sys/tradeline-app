"use client";

import { useState, useEffect } from "react";
import { Menu, X, Moon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [autoClose, setAutoClose] = useState(false);

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

  // Auto-close mobile menu
  useEffect(() => {
    if (openMenu && !autoClose) {
      const timer = setTimeout(() => {
        setAutoClose(true);
        setTimeout(() => {
          setOpenMenu(false);
          setAutoClose(false);
        }, 600);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [openMenu, autoClose]);

  const handleMenuClick = () => {
    setOpenMenu(false);
    setAutoClose(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      } ${
        openMenu
          ? "h-screen bg-blue-700"
          : "h-20 bg-blue-700/90 backdrop-blur-md"
      }`}
    >
      {/* Bottom line */}
      {/* {!openMenu && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-800"></div>
      )} */}

      <div className="max-w-8xl mx-auto h-full flex flex-col">
        {/* TOP BAR */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-4 h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-wide">
              TRADELINE
            </h1>
          </Link>

          {/* Right buttons */}
          <div className="flex items-center gap-4 sm:gap-6">

            {/* Hide sign up/sign in on very small screens */}
            <div className="hidden sm:flex items-center gap-6">
              <Link
                href="/signup"
                className="px-5 py-2 text-white text-lg font-medium hover:text-white/80 transition"
              >
                Sign Up
              </Link>

              <Link
                href="/signin"
                className="px-6 py-2.5 bg-white/20 hover:bg-white/30 text-white text-lg font-semibold rounded-full transition"
              >
                Sign In
              </Link>
            </div>

            <button className="text-white hover:text-white/80 transition p-2 hidden sm:block">
              <Moon size={26} />
            </button>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpenMenu(!openMenu)}
              className="text-white hover:text-white/80 transition p-2"
            >
              {openMenu ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>

        {/* FULLSCREEN MOBILE MENU */}
        {openMenu && (
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 px-4">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={handleMenuClick}
                className="text-3xl text-white font-semibold hover:text-white/70 transition text-center"
              >
                {item.name}
              </Link>
            ))}

            {/* Show sign in/up inside mobile menu */}
            <div className="flex flex-col gap-4 mt-8 w-full max-w-xs">
              <Link
                href="/signup"
                onClick={handleMenuClick}
                className="text-center px-6 py-3 bg-white/20 hover:bg-white/30 text-white text-xl font-medium rounded-full transition"
              >
                Sign Up
              </Link>

              <Link
                href="/signin"
                onClick={handleMenuClick}
                className="text-center px-6 py-3 bg-white text-blue-700 text-xl font-semibold rounded-full transition"
              >
                Sign In
              </Link>
            </div>
          </nav>
        )}
      </div>

      {/* Bottom border when open */}
      {openMenu && (
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-blue-500 to-blue-800"></div>
      )}
    </header>
  );
}
