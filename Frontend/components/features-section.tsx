"use client";

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Leaf,
  Truck,
  History,
  Award,
  CircleDot
} from 'lucide-react';

const usps = [
  {
    title: 'Expert Laundry Care',
    description: 'Trained professionals handling your delicate garments with surgical precision.',
    icon: <ShieldCheck className="w-6 h-6" />,
    delay: 0.1
  },
  {
    title: 'Eco-Friendly Solvents',
    description: 'Non-toxic, bio-degradable chemicals that are safe for your skin and the nature.',
    icon: <Leaf className="w-6 h-6" />,
    delay: 0.2
  },
  {
    title: 'Express 24h Delivery',
    description: 'In a rush? Our express service ensures you get your clothes back fresh in a day.',
    icon: <Truck className="w-6 h-6" />,
    delay: 0.3
  },
  {
    title: 'Legacy Since 2018',
    description: 'Over 6 years of trusted service providing A1 quality to the people of Bikaner.',
    icon: <History className="w-6 h-6" />,
    delay: 0.4
  },
  {
    title: 'Award Winning Quality',
    description: 'Recognized for excellence in garment care and customer satisfaction.',
    icon: <Award className="w-6 h-6" />,
    delay: 0.5
  }
];

const FeaturesSection = () => {
  return (
    <section className="section-container relative bg-secondary-900 overflow-hidden rounded-[4rem] my-20 mx-4 md:mx-10 py-32">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-highlight rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left Side: Text */}
        <div className="lg:col-span-5 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2 text-primary-400">
              <CircleDot className="w-4 h-4 animate-pulse" />
              <span className="font-jakarta font-bold text-sm uppercase tracking-widest">Why Choose A1?</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-outfit font-extrabold text-white leading-tight">
              Crafting Pure <br />
              <span className="text-primary-400">Excellence.</span>
            </h2>
            <p className="font-jakarta text-secondary-300 text-lg leading-relaxed">
              We don&apos;t just wash clothes; we restore them. Our multi-step quality control
              ensures every garment returned to you is in its absolute best condition.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="space-y-1">
              <p className="text-4xl font-outfit font-black text-white">Many</p>
              <p className="text-secondary-400 font-jakarta text-sm">Garments Processed</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl font-outfit font-black text-white">4.9/5</p>
              <p className="text-secondary-400 font-jakarta text-sm">Customer Rating</p>
            </div>
          </div>
        </div>

        {/* Right Side: USPS Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: usp.delay, duration: 0.6 }}
              className={`p-8 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] transition-all group ${i === 0 ? 'md:translate-y-12' : i === 2 ? 'md:translate-y-12' : ''
                }`}
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-500/20 flex items-center justify-center text-primary-400 mb-6 group-hover:scale-110 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                {usp.icon}
              </div>
              <h3 className="text-xl font-outfit font-bold text-white mb-3">{usp.title}</h3>
              <p className="text-secondary-400 font-jakarta text-sm leading-relaxed">{usp.description}</p>
            </motion.div>
          ))}

          {/* Floating Element for Asymmetry */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-primary-500/20 rounded-full pointer-events-none hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
