"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-white/70 backdrop-blur-lg border-b border-primary-100 py-3 shadow-sm"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-300">
              <Droplets className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col -space-y-1">
              <span className="font-outfit font-bold text-xl text-secondary-900 tracking-tight">
                A1 DRY CLEAN
              </span>
              <span className="font-jakarta text-[10px] uppercase tracking-[0.2em] text-primary-600 font-bold">
                & Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary-700 font-jakarta font-medium hover:text-primary-600 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="hidden lg:flex items-center">
            <Link
              href="tel:9024800972"
              className="premium-button flex items-center space-x-2 group"
            >
              <div className="relative">
                <Phone className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-highlight rounded-full animate-ping" />
              </div>
              <span>Call Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-secondary-900 bg-white/50 backdrop-blur-sm rounded-xl border border-primary-100 shadow-sm transition-all hover:bg-primary-50"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-primary-50 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4 px-6 py-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-secondary-800 font-outfit text-xl font-semibold hover:text-primary-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-primary-50">
                <Link
                  href="tel:9024800972"
                  onClick={() => setIsOpen(false)}
                  className="premium-button w-full flex justify-center items-center space-x-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;