"use client";

import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-heading font-bold text-white tracking-widest uppercase mb-6">
              CRAFTED<span className="text-primary">.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Redefining the premium burger experience with elite ingredients and cinematic flavor profiles.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              {['Home', 'Our Story', 'Menu', 'Gallery', 'Book a Table'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={18} />
                <span className="text-gray-500 text-sm">123 Culinary Blvd<br/>Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-primary" size={18} />
                <span className="text-gray-500 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-primary" size={18} />
                <span className="text-gray-500 text-sm">reserve@crafted.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">Opening Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Mon - Thu</span>
                <span className="text-white">11:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Fri - Sat</span>
                <span className="text-white">11:00 AM - 12:00 AM</span>
              </li>
              <li className="flex justify-between text-sm">
                <span className="text-gray-500">Sunday</span>
                <span className="text-white">12:00 PM - 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} Crafted Burgers. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
