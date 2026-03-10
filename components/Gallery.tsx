"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/exterior.png",
  "/images/interior.png",
  "/images/food_platter.png",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1594212699903-eca8a3b159f8?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <section className="py-0 bg-[#0f0f0f] border-y border-white/5">
      <div className="grid grid-cols-2 md:grid-cols-3 w-full h-full p-2 gap-2">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative aspect-square md:aspect-video overflow-hidden cursor-pointer rounded-xl bg-black"
          >
            <Image
              src={src}
              alt={`Gallery Image ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              loading="lazy"
              className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold uppercase text-xs tracking-widest border border-white/20">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
