"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f0f0f]"
    >
      {/* === Hero Visual: Looping WEBP Animation === */}
      <div className="absolute inset-0 z-0">
        {/* Cinematic dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0f0f]/30 via-[#0f0f0f]/50 to-[#0f0f0f] z-10 pointer-events-none" />

        {/*
          We use a native <img> tag here intentionally.
          - Next.js <Image> re-encodes animated WEBP into static images, breaking animation.
          - `loading="eager"` + `fetchpriority="high"` ensures LCP image is preloaded instantly.
          - `will-change: transform` + `contain: layout` prevents layout shift (no CLS).
          - The outer div has an explicit intrinsic height so no layout reflow occurs.
        */}
        <div className="relative w-full h-full" style={{ contain: "layout" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://pykksvxuxwhzqzqdqhbu.supabase.co/storage/v1/object/public/buger%20king/Burger_assembly_and_reveal_f598383508-ezgif.com-video-to-webp-converter.webp"
            alt="Cinematic Burger Assembly Animation"
            className="w-full h-full object-cover object-center opacity-80"
            style={{ willChange: "transform" }}
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* === Hero Content === */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-primary font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-6"
        >
          Premium Restaurant &bull; Est. 2014
        </motion.p>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-4 relative inline-block group"
        >
          <div className="overflow-hidden mb-1">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-heading font-medium text-white tracking-[0.2em] uppercase leading-none transition-all duration-500">
              {"Crafted Burger".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    visible: { 
                      y: 0, 
                      opacity: 1, 
                      transition: { 
                        duration: 0.8, 
                        delay: 0.2 + index * 0.05, 
                        ease: [0.22, 1, 0.36, 1] 
                      } 
                    }
                  }}
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </h1>
          </div>
          <motion.div 
            initial={{ scaleX: 0, opacity: 0 }} 
            whileInView={{ scaleX: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 1, ease: "circOut" }}
            className="h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent w-full"
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-secondary tracking-tighter uppercase leading-[0.9] mb-6 drop-shadow-2xl"
        >
          Ultimate Flavor.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-xs sm:text-base md:text-lg text-gray-400 font-light tracking-widest mb-10 md:mb-14 uppercase"
        >
          Fresh Ingredients &bull; Handmade Patties &bull; Premium Taste
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Primary CTA */}
          <button className="group relative w-full sm:w-auto px-10 py-4 bg-primary text-white font-black text-sm uppercase tracking-widest rounded-full shadow-[0_0_40px_rgba(255,60,47,0.5)] hover:shadow-[0_0_70px_rgba(255,60,47,0.7)] transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Order Now</span>
            <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left bg-white/20 transition-transform duration-300 rounded-full" />
          </button>

          {/* Secondary CTA */}
          <a
            href="#book"
            className="group w-full sm:w-auto px-10 py-4 border border-white/20 text-white font-black text-sm uppercase tracking-widest rounded-full hover:border-white/60 hover:bg-white/5 transition-all duration-300 flex items-center justify-center"
          >
            Book a Table
          </a>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <p className="text-gray-600 text-[10px] uppercase tracking-widest">Scroll</p>
        <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
      </motion.div>
    </section>
  );
}
