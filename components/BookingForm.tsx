"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingForm() {
  const [status, setStatus] = useState("idle" as "idle" | "loading" | "success");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      
      <h3 className="text-3xl font-heading font-black uppercase text-white mb-2">Reserve a Table</h3>
      <p className="text-gray-400 mb-8">Secure your spot for the ultimate burger experience.</p>

      {status === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-2xl text-center font-bold"
        >
          Your reservation has been confirmed! We will see you soon.
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" required placeholder="Full Name" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
            <input type="email" required placeholder="Email Address" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="tel" required placeholder="Phone Number" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
            <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors appearance-none text-opacity-100">
              <option value="" disabled className="text-black">Number of Guests</option>
              <option value="1" className="text-black">1 Person</option>
              <option value="2" className="text-black">2 People</option>
              <option value="3" className="text-black">3 People</option>
              <option value="4" className="text-black">4+ People</option>
            </select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="date" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
            <input type="time" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" />
          </div>
          <button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full mt-4 bg-primary text-white font-bold text-lg uppercase tracking-wider py-4 rounded-xl shadow-[0_0_20px_rgba(255,60,47,0.3)] hover:shadow-[0_0_40px_rgba(255,60,47,0.6)] transition-all duration-300 disabled:opacity-50"
          >
            {status === "loading" ? "Processing..." : "Reserve Table"}
          </button>
        </form>
      )}
    </motion.div>
  );
}
