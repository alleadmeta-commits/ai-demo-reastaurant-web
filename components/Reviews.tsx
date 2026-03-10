"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    initials: "SM",
    review:
      "The Truffle Signature burger is a revelation. Every ingredient is perfectly balanced — this is what premium dining looks like in casual form.",
    rating: 5,
  },
  {
    name: "James Forrester",
    role: "Regular Guest",
    initials: "JF",
    review:
      "I've eaten here every week for the past year. The consistency and quality are simply unmatched. The golden classic never disappoints.",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    role: "Local Foodie",
    initials: "PK",
    review:
      "Absolutely loved the atmosphere and the attention to detail. The Spicy Inferno had me sweating but smiling the whole time!",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Food Blogger",
    initials: "DC",
    review:
      "Top tier ingredients, top tier execution. I've reviewed hundreds of burger joints — this one stands at the very top.",
    rating: 5,
  },
  {
    name: "Elena Rossi",
    role: "Chef & Guest",
    initials: "ER",
    review:
      "As a chef myself, I appreciate the craft here. The brioche buns, the house sauce, the beef quality — pure excellence on a plate.",
    rating: 5,
  },
];

export default function Reviews() {
  const trackRef = useRef(null as HTMLDivElement | null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let animationId: number;
    let position = 0;

    const step = () => {
      if (!isPaused) {
        position -= 0.5;
        // Reset when first set scrolled fully off-screen
        const halfWidth = track.scrollWidth / 2;
        if (Math.abs(position) >= halfWidth) {
          position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
      }
      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  // Duplicate reviews for seamless infinite loop
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 bg-[#0f0f0f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-bold tracking-widest uppercase mb-2">What They Say</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase">Customer Reviews</h2>
        </motion.div>
      </div>

      {/* Infinite scrolling slider */}
      <div
        className="relative w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 w-24 h-full z-10 bg-gradient-to-r from-[#0f0f0f] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 w-24 h-full z-10 bg-gradient-to-l from-[#0f0f0f] to-transparent" />

        <div className="flex overflow-hidden">
          <div ref={trackRef} className="flex gap-6 will-change-transform" style={{ width: "max-content" }}>
            {doubled.map((review, i) => (
              <div
                key={i}
                className="w-[320px] md:w-[400px] flex-shrink-0 glass-card p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-1 text-secondary mb-5">
                    {[...Array(review.rating)].map((_, j) => (
                      <Star key={j} fill="currentColor" size={16} />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed italic mb-6">
                    &ldquo;{review.review}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-black text-sm">{review.initials}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm uppercase tracking-wider">{review.name}</h4>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
