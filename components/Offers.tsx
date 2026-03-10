"use client";

import { motion } from "framer-motion";
import { Tag } from "lucide-react";

export default function Offers() {
  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-primary/20 p-10 md:p-14 border border-primary/30 hover:border-primary/60 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/30 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/50 transition-colors duration-500" />
            <div className="relative z-10 w-full h-full flex flex-col items-start">
              <span className="bg-primary text-white font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4 flex items-center gap-2 shadow-[0_0_15px_rgba(255,60,47,0.5)]">
                <Tag size={12} /> Limited Time
              </span>
              <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-4 leading-tight">Buy 1 Get 1<br/>Half Price</h3>
              <p className="text-gray-300 mb-8 max-w-sm">Bring a friend and enjoy our signature Wagyu burgers at a steal.</p>
              <button className="mt-auto tracking-widest text-primary font-bold uppercase border-b-2 border-primary hover:text-white hover:border-white transition-colors pb-1">
                Claim Offer
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative rounded-3xl overflow-hidden bg-secondary/10 p-10 md:p-14 border border-secondary/30 hover:border-secondary/60 transition-colors"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] pointer-events-none group-hover:bg-secondary/40 transition-colors duration-500" />
            <div className="relative z-10 w-full h-full flex flex-col items-start">
               <span className="bg-secondary text-black font-bold uppercase tracking-widest text-xs px-3 py-1 rounded-full mb-4 flex items-center gap-2 shadow-[0_0_15px_rgba(255,183,3,0.5)]">
                <Tag size={12} /> Weekend Special
              </span>
              <h3 className="text-3xl md:text-5xl font-heading font-black text-white uppercase mb-4 leading-tight">The Ultimate<br/>Combo</h3>
              <p className="text-gray-300 mb-8 max-w-sm">Signature burger, truffle fries, and a shake for just ₹999.</p>
              <button className="mt-auto tracking-widest text-secondary font-bold uppercase border-b-2 border-secondary hover:text-white hover:border-white transition-colors pb-1">
                Order Now
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
