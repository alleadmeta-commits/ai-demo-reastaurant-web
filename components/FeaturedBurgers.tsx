"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus } from "lucide-react";

const burgers = [
  {
    id: 1,
    name: "The Truffle Signature",
    ingredients: "Wagyu Beef, Black Truffle Mayo, Aged Cheddar, Caramelized Onions",
    price: "₹850.00",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1999&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Spicy Inferno",
    ingredients: "Angus Patty, Jalapeño Jam, Pepper Jack, Chipotle Aioli",
    price: "₹650.00",
    image: "https://images.unsplash.com/photo-1594212699903-eca8a3b159f8?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Golden Classic",
    ingredients: "Double Beef, Secret Sauce, American Cheese, Pickles, Brioche Bun",
    price: "₹550.00",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1965&auto=format&fit=crop",
  }
];

export default function FeaturedBurgers() {
  return (
    <section className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold tracking-widest uppercase mb-2">Our Masterpieces</p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold uppercase">Featured Burgers</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {burgers.map((burger, index) => (
            <motion.div
              key={burger.id}
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, type: "spring", stiffness: 100 }}
              className="group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-4 hover:shadow-neon-hover bg-white/5 border border-white/10 hover:border-primary/50 flex flex-col items-center overflow-hidden z-10"
            >
              {/* Glowing Outer Border / Neon Outline */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-colors duration-500 pointer-events-none z-20" />
              
              <div className="relative w-full aspect-square mb-6 rounded-xl overflow-hidden shadow-2xl z-10 bg-black/40 mix-blend-screen ring-1 ring-white/10 group-hover:ring-primary/30 transition-all duration-500">
                <Image
                  src={burger.image}
                  alt={burger.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="text-center w-full z-20">
                <h3 className="text-2xl font-heading font-bold mb-2 text-white group-hover:text-primary group-hover:drop-shadow-[0_0_8px_rgba(255,60,47,0.8)] transition-all duration-300">{burger.name}</h3>
                <p className="text-gray-400 text-sm mb-6 h-10">{burger.ingredients}</p>
                
                <div className="flex items-center justify-between border-t border-white/10 pt-4 w-full">
                  <span className="text-2xl font-bold flex-1 text-left text-white drop-shadow-md">{burger.price}</span>
                  <button className="bg-white/10 group-hover:bg-primary text-white p-3 rounded-full transition-colors duration-300 shadow-lg group-hover:shadow-[0_0_15px_rgba(255,60,47,0.6)]">
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              {/* Decorative glow layer inside card */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 rounded-2xl blur-xl transition-opacity duration-500 z-0 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
