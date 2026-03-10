"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";

export default function OrderSystem() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col justify-between border border-secondary/20"
    >
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
      
      <div>
        <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-secondary mb-6">
          <ShoppingBag size={32} />
        </div>
        <h3 className="text-3xl font-heading font-black uppercase text-white mb-2">Order Online</h3>
        <p className="text-gray-400 mb-8 leading-relaxed">Craving our crafted burgers at home? Skip the line and order directly from our kitchen to your door.</p>
        
        <div className="space-y-4 mb-8">
          {[
            { name: "Spicy Inferno", price: "₹650.00" },
            { name: "Truffle Fries", price: "₹250.00" }
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-white font-bold">{item.name}</span>
              <span className="text-secondary">{item.price}</span>
            </div>
          ))}
          <div className="flex justify-between items-center pt-2">
            <span className="text-gray-400 font-bold uppercase text-sm">Total</span>
            <span className="text-white font-black text-xl">₹900.00</span>
          </div>
        </div>
      </div>

      <button className="w-full group flex items-center justify-between bg-white text-black font-bold text-lg uppercase tracking-wider px-6 py-4 rounded-xl hover:bg-secondary transition-colors duration-300">
        <span>Proceed to Checkout</span>
        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
      </button>
    </motion.div>
  );
}
