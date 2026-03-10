"use client";

import { motion } from "framer-motion";
import { ChefHat, Leaf, Clock } from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Leaf,
    title: "Fresh Ingredients",
    desc: "Sourced locally every single morning.",
  },
  {
    icon: ChefHat,
    title: "Expert Chefs",
    desc: "Decades of culinary perfection combined.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    desc: "Hot, fresh, and to your door in minutes.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#0a0a0a]">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <p className="text-secondary font-bold tracking-widest uppercase mb-2">Our Story</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black uppercase leading-none">
                More Than<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Just A Burger</span>
              </h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              We started with a simple belief: a burger isn't just fast food, it's a culinary canvas. We source the finest Wagyu beef, bake our artisan brioche buns daily, and craft proprietary sauces that elevate every single bite into a cinematic experience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {features.map((feature, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <feature.icon size={24} />
                  </div>
                  <h4 className="font-bold text-white uppercase text-sm">{feature.title}</h4>
                  <p className="text-xs text-gray-500">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="/images/interior.png"
                  alt="Delhi-36 Dining Hall"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 glass-card p-6 rounded-2xl shadow-2xl bg-black/80 backdrop-blur-2xl border border-white/10"
            >
              <p className="text-4xl font-black text-primary mb-1">10+</p>
              <p className="text-sm text-gray-400 uppercase tracking-widest font-bold">Years of<br/>Excellence</p>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
