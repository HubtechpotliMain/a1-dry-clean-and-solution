"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Droplets, ShieldCheck, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/90 z-10" />
        <img
          src="/hero-bg.jpg"
          alt="Pristine Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-20">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md px-6 py-2.5 rounded-full border border-primary-100 shadow-xl"
          >
            <Droplets className="w-4 h-4 text-primary-500 animate-pulse" />
            <span className="text-primary-600 font-jakarta text-xs font-bold uppercase tracking-[0.2em]">
              Serving Bikaner Since 2018
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-outfit font-extrabold text-secondary-900 leading-[1.05] tracking-tight"
          >
            Pristine Care <br />
            <span className="text-gradient drop-shadow-sm">For Every Fiber</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-secondary-700 font-jakarta text-xl md:text-2xl leading-relaxed max-w-2xl"
          >
            Experience the pinnacle of luxury garment care with Bikaner&apos;s most trusted dry cleaning service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
          >
            <Link href="/services" className="premium-button text-lg px-10 py-5 shadow-2xl hover:shadow-primary-200/50">
              Explore Services
            </Link>
            <Link href="/contact" className="px-10 py-5 rounded-2xl border-2 border-primary-500 text-primary-600 font-outfit font-bold hover:bg-white transition-all text-lg shadow-lg">
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 mt-12 border-t border-primary-100/50 w-full"
          >
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2 text-primary-600">
                <ShieldCheck className="w-6 h-6" />
                <span className="font-outfit font-bold text-lg">100% Secure</span>
              </div>
              <p className="text-sm text-secondary-500 font-jakarta font-medium text-center">Gentle on fabrics, tough on stains.</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2 text-primary-600">
                <Zap className="w-6 h-6" />
                <span className="font-outfit font-bold text-lg">Fast Service</span>
              </div>
              <p className="text-sm text-secondary-500 font-jakarta font-medium text-center">Express delivery options available.</p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2 text-primary-600">
                <Droplets className="w-6 h-6" />
                <span className="font-outfit font-bold text-lg">Eco Friendly</span>
              </div>
              <p className="text-sm text-secondary-500 font-jakarta font-medium text-center">Safe for you and the planet.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
