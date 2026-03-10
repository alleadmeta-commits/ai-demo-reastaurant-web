"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Burgers", "Chinese", "Fast Food", "Beverages", "Snacks"];

const menuItems = [
  // Burgers
  { id: 1, name: "Classic Cheeseburger", price: "₹249", category: "Burgers", desc: "American cheese, lettuce, tomato, house sauce", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop" },
  { id: 2, name: "Truffle Mushroom Burger", price: "₹349", category: "Burgers", desc: "Swiss cheese, wild mushrooms, truffle mayo", image: "https://images.unsplash.com/photo-1594212699903-eca8a3b159f8?q=80&w=600&auto=format&fit=crop" },
  { id: 3, name: "Crispy Chicken Sandwich", price: "₹299", category: "Burgers", desc: "Buttermilk fried chicken, slaw, spicy mayo", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600&auto=format&fit=crop" },
  
  // Chinese - Special
  { id: 8, name: "Crispy Veg", price: "₹259", category: "Chinese", desc: "Crispy seasonal vegetables tossed in specialty sauce", image: "/images/spring_rolls.png" },
  { id: 9, name: "Lotus Steam Honey Chilli", price: "₹259", category: "Chinese", desc: "Crispy lotus stem chips with sweet and spicy glaze", image: "/images/honey_chilli.png" },
  { id: 10, name: "Paneer Tai-Chi", price: "₹309", category: "Chinese", desc: "Premium cottage cheese in aromatic tai-chi sauce", image: "/images/chilli_paneer.png" },
  { id: 11, name: "Kung Pao Cottage Cheese", price: "₹329", category: "Chinese", desc: "Spicy stir-fry with peanuts, vegetables, and paneer", image: "/images/chilli_paneer.png" },
  
  // Chinese - Others
  { id: 12, name: "Chilli Potato", price: "₹179", category: "Chinese", desc: "Fried potato batons in spicy soy sauce", image: "/images/honey_chilli.png" },
  { id: 13, name: "Honey Chilli Potato", price: "₹189", category: "Chinese", desc: "Crispy potato strips glazed in honey chilli sauce", image: "/images/honey_chilli.png" },
  { id: 14, name: "Veg Spring Roll (8 pcs)", price: "₹189", category: "Chinese", desc: "Crispy rolls stuffed with seasoned vegetables", image: "/images/spring_rolls.png" },
  { id: 15, name: "Chilli Cauliflower", price: "₹189", category: "Chinese", desc: "Crispy cauliflower florets in spicy sauce", image: "/images/manchurian.png" },
  { id: 20, name: "Veg Manchurian Dry", price: "₹239", category: "Chinese", desc: "Deep fried vegetable balls, tossed dry", image: "/images/manchurian.png" },
  { id: 22, name: "Chilli Paneer Dry", price: "₹259", category: "Chinese", desc: "Fried paneer cubes, tossed dry in spicy sauce", image: "/images/chilli_paneer.png" },

  // Fast Food
  { id: 4, name: "Truffle Parmesan Fries", price: "₹180", category: "Fast Food", desc: "Shoestring fries, truffle oil, parmesan", image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=600&auto=format&fit=crop" },
  { id: 5, name: "Sweet Potato Fries", price: "₹160", category: "Fast Food", desc: "Served with marshmallow dip", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=600&auto=format&fit=crop" },

  // Beverages
  { id: 26, name: "Virgin Mojito", price: "₹149", category: "Beverages", desc: "Fresh mint, lime, and sparkling soda", image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop" },
  { id: 27, name: "Belgian Hot Chocolate", price: "₹189", category: "Beverages", desc: "Rich and creamy melted Belgian chocolate", image: "https://images.unsplash.com/photo-1544787210-2211d64b2826?q=80&w=600&auto=format&fit=crop" },

  // Snacks
  { id: 28, name: "Cheesy Garlic Bread", price: "₹159", category: "Snacks", desc: "Toasted artisan bread with garlic butter and mozzarella", image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=600&auto=format&fit=crop" },
  { id: 29, name: "Chicken Wings (6 pcs)", price: "₹249", category: "Snacks", desc: "Spicy buffalo sauce with ranch dip", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=600&auto=format&fit=crop" },
];

export default function InteractiveMenu() {
  const [active, setActive] = useState("Burgers");

  const filtered = menuItems.filter(item => item.category === active);

  return (
    <section id="menu" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-primary font-bold tracking-widest uppercase mb-2">Our Menu</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase">Taste The Art</h2>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 relative z-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`relative px-6 py-2 rounded-full text-sm uppercase tracking-wider font-bold transition-colors ${
                active === cat ? "text-background" : "text-gray-400 hover:text-primary"
              }`}
            >
              {active === cat && (
                <motion.div
                  layoutId="menu-bubble"
                  className="absolute inset-0 bg-secondary rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 120 }}
                className="group relative flex flex-col sm:flex-row gap-6 p-6 glass-card rounded-2xl hover:border-primary/60 hover:shadow-neon-hover bg-white/5 border border-white/10 transition-all duration-300 overflow-hidden z-10"
              >
                {/* Image if available */}
                {item.image && (
                  <div className="relative w-full sm:w-28 h-28 rounded-xl overflow-hidden shadow-lg flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                )}
                
                <div className="flex-1 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors text-white group-hover:drop-shadow-[0_0_8px_rgba(255,60,47,0.8)]">{item.name}</h3>
                    <div className="text-xl font-black text-secondary group-hover:text-white transition-colors">{item.price}</div>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                  
                  {/* Category Label */}
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-white/10 text-[10px] uppercase tracking-widest text-gray-300 rounded-full group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Subtly glowing border effect */}
                <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-2xl pointer-events-none transition-colors duration-300 z-20" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
