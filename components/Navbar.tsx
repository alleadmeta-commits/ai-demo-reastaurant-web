"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About", href: "#about" },
  { name: "Reviews", href: "#reviews" },
  { name: "Book", href: "#book" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "glass-card py-4" : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="#home" className="text-2xl font-heading font-bold text-white tracking-widest uppercase">
            CRAFTED<span className="text-primary">.</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button className="flex items-center justify-center p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all duration-300">
              <ShoppingCart size={20} />
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#0f0f0f]/95 backdrop-blur-xl border-t border-white/5 overflow-hidden"
          >
            <div className="flex flex-col items-center justify-center space-y-8 pt-24 h-full pb-32">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-heading text-gray-300 hover:text-white hover:scale-110 transition-transform"
                >
                  {link.name}
                </a>
              ))}
              <button className="mt-12 flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-primary text-white font-bold w-64 text-lg">
                <ShoppingCart size={24} />
                <span>Order Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
