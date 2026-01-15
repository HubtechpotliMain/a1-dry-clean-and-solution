"use client";

import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { Target, Shield, Zap, Heart, Star, Droplets, Sparkles, Clock, History, UserCheck, ShieldCheck, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutPage() {
  const values = [
    {
      icon: Droplets,
      title: 'Fabric Integrity',
      description: 'We treat every fiber with respect, using specialized techniques for different materials.',
      color: 'text-primary-500',
      bg: 'bg-primary-50'
    },
    {
      icon: Leaf,
      title: 'Eco-Conscious',
      description: 'Our solvent-free and bio-degradable solutions are safe for you and the planet.',
      color: 'text-green-500',
      bg: 'bg-green-50'
    },
    {
      icon: Clock,
      title: 'Punctuality',
      description: 'We understand the value of time. Our delivery schedules are strictly honored.',
      color: 'text-indigo-500',
      bg: 'bg-indigo-50'
    },
    {
      icon: Star,
      title: 'Quality First',
      description: 'A1 isn&apos;t just a name; it&apos;s our promise of excellence in every garment.',
      color: 'text-highlight',
      bg: 'bg-highlight/10'
    }
  ];

  const milestones = [
    { year: 'Stage 1', title: 'The Beginning', description: 'Established A1 Dry Clean & Solution in Bikaner with a single goal: quality.' },
    { year: 'Stage 2', title: 'Modernization', description: 'Invested in Italian industrial steam technology and eco-safe boilers.' },
    { year: 'Stage 3', title: 'Expanding Services', description: 'Introduced specialized Shoe Spa and Curtain restoration services.' },
    { year: 'Stage 4', title: 'A1 Digital', description: 'Launched our digital presence to serve modern Bikaner better.' }
  ];

  return (
    <div className="min-h-screen bg-accent-50 text-secondary-900 overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 text-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/30 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-highlight/20 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-primary-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-primary-500" />
            <span className="text-primary-600 font-jakarta text-xs font-bold uppercase tracking-widest">The A1 Story</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-outfit font-extrabold text-secondary-900 leading-tight">
            Restoring Freshness <br />
            <span className="text-gradient">Since 2018</span>
          </h1>
          <p className="text-lg md:text-xl text-secondary-600 font-jakarta max-w-2xl mx-auto leading-relaxed">
            From a small specialized unit to Bikaner&apos;s most trusted fabric care experts,
            our journey has always been about one thing: Absolute Perfection.
          </p>
        </motion.div>
      </section>

      {/* Stats Section 12-Column Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Customers', value: 'Happy', icon: UserCheck },
            { label: 'Garments Processed', value: 'Many', icon: ShieldCheck },
            { label: 'Of Experience', value: 'Years', icon: History },
            { label: 'Staff', value: 'Expert', icon: Target }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl text-center items-center flex flex-col space-y-3"
            >
              <stat.icon className="w-8 h-8 text-primary-500" />
              <p className="text-4xl font-outfit font-black text-secondary-900">{stat.value}</p>
              <p className="text-sm font-jakarta text-secondary-500 font-bold uppercase tracking-tighter">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Section: Alternating Layout */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-secondary-900">
              Our Dedication to <br /> <span className="text-primary-600">Pure Quality</span>
            </h2>
            <p className="text-lg text-secondary-600 font-jakarta leading-relaxed">
              At A1 Dry Clean & Solution, we believe that clothes are more than just fabric;
              they are memories, confidence, and identity. That&apos;s why we combined traditional
              dry-cleaning wisdom with Italian steam technology.
            </p>
            <div className="space-y-4">
              {['100% Solvent-Free cleaning options', 'Specialized treatment for wedding attire', 'Antibacterial post-wash treatment', 'Safe for newborns & sensitive skin'].map(item => (
                <div key={item} className="flex items-center space-x-3">
                  <div className="w-5 h-5 rounded-full bg-primary-500 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-white" />
                  </div>
                  <span className="font-jakarta font-semibold text-secondary-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -bottom-10 -right-10 bg-highlight p-8 rounded-3xl shadow-xl -rotate-3 hidden md:block">
              <p className="text-4xl font-outfit font-black text-white">NIC 96010</p>
              <p className="text-white/80 font-jakarta font-bold text-sm">Certified Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-secondary-900 rounded-[4rem] mx-4 md:mx-10 my-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl text-white">Our Core <span className="text-primary-400">Values</span></h2>
            <p className="text-secondary-400 font-jakarta text-lg">The principles that guide every garment we touch.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-all"
              >
                <div className={`w-14 h-14 ${v.bg} rounded-2xl flex items-center justify-center ${v.color} mb-6`}>
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-outfit font-bold text-white mb-3">{v.title}</h3>
                <p className="text-secondary-400 font-jakarta text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-outfit font-extrabold text-secondary-900">Timeline of <span className="text-gradient">Growth</span></h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:left-8 before:md:left-1/2 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary-200 before:to-transparent">
          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-primary-100 text-primary-600 font-outfit font-bold shadow-xl z-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                {m.year}
              </div>
              <div className="w-full md:w-[calc(50%-4rem)] p-8 glass-card rounded-3xl mt-4 md:mt-0 transition-all group-hover:shadow-2xl">
                <h4 className="font-outfit font-bold text-xl text-secondary-900 mb-2">{m.title}</h4>
                <p className="font-jakarta text-secondary-600 text-sm leading-relaxed">{m.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
