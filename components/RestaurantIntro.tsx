"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function RestaurantIntro() {
  return (
    <section className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <p className="text-primary font-bold tracking-widest uppercase mb-4">The Venue</p>
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase text-white mb-8 leading-tight">
              A Landmark of <br/> <span className="text-secondary">Culinary Excellence</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Welcome to Delhi-36. Our iconic building is more than just architecture; it's a destination where premium flavors meet a cinematic dining atmosphere. Experience a venue designed for flavor.
            </p>
            
            <div className="flex gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-black text-white">350+</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Daily Guests</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">4.8</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Google Rating</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Fresh Quality</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] order-1 lg:order-2"
          >
            <Image
              src="/images/exterior.png"
              alt="Delhi-36 Building Exterior"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute top-8 right-8 bg-primary p-6 rounded-2xl shadow-xl text-center rotate-3 hidden md:block">
              <p className="text-white text-3xl font-black mb-0">OPEN</p>
              <p className="text-white/80 text-[10px] uppercase font-bold tracking-widest leading-tight">11 AM - 11 PM</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
