"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function LocationContact() {
  return (
    <section id="location" className="py-24 bg-[#0f0f0f] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-bold tracking-widest uppercase mb-2">Find Us</p>
          <h2 className="text-4xl md:text-5xl font-heading font-black uppercase">Location & Contact</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden border border-white/10 h-80 lg:h-auto relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.7152203584eo!2d-118.4004!3d34.0736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd081ed1!2sBeverly%20Hills%2C%20CA%2090210!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.5) brightness(0.9)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Location"
              className="min-h-[320px]"
            />
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            {[
              {
                icon: MapPin,
                label: "Address",
                value: "123 Culinary Blvd\nBeverly Hills, CA 90210",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+1 (555) 123-4567",
              },
              {
                icon: Mail,
                label: "Email",
                value: "reserve@crafted.com",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon–Thu: 11am – 10pm\nFri–Sat: 11am – 12am\nSun: 12pm – 10pm",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <item.icon size={22} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mb-1">{item.label}</p>
                  <p className="text-white font-medium whitespace-pre-line leading-relaxed">{item.value}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
