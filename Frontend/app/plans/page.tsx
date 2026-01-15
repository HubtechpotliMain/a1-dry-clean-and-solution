"use client";

import Link from 'next/link';
import { Shirt, Sparkles, Clock, ShieldCheck, Waves, Star, Search, Filter, Droplets, Zap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { useState } from 'react';

const services = [
    {
        id: 1,
        name: 'Premium Dry Cleaning',
        description: 'Specialized chemical cleaning for delicate fabrics like silk, wool, and designer wear.',
        features: ['Eco-Safe Solvents', 'Fabric Softening', 'Minor Repairs', 'Luxury Packaging'],
        icon: <Droplets className="w-6 h-6" />,
        popular: true,
        tag: 'Best Seller'
    },
    {
        id: 2,
        name: 'Italian Steam Press',
        description: 'Crisp, wrinkle-free finishing using advanced Italian boiler technology.',
        features: ['Vacuum Tables', 'Precision Crease', 'Shape Retention', 'Hanger Packaging'],
        icon: <Zap className="w-6 h-6" />,
        popular: false,
        tag: 'Quick'
    },
    {
        id: 3,
        name: 'Designer Shoe Spa',
        description: 'Deep restoration for your premium sneakers, leathers, and suede footwear.',
        features: ['Antibacterial Wash', 'Sole Whitening', 'Deodorizing', 'Lace Cleaning'],
        icon: <Sparkles className="w-6 h-6" />,
        popular: false,
        tag: 'Premium'
    },
    {
        id: 4,
        name: 'Curtain Restoration',
        description: 'Professional cleaning for heavy drapes, blinds, and blackout curtains.',
        features: ['Dust Removal', 'UVD Infection', 'Ironing', 'On-Site Pickup'],
        icon: <Waves className="w-6 h-6" />,
        popular: false,
        tag: 'Home'
    },
    {
        id: 5,
        name: 'Sofa & Carpet Care',
        description: 'Industrial extraction cleaning for home upholstery and expensive carpets.',
        features: ['Deep Extraction', 'Stain Removal', 'Fresh Scent', 'Quick Drying'],
        icon: <ShieldCheck className="w-6 h-6" />,
        popular: false,
        tag: 'Deep Clean'
    },
    {
        id: 6,
        name: 'Wedding Wear Spa',
        description: 'Preserve your heavy lehengas, sherwanis and suits with specialized care.',
        features: ['Stone Protection', 'Oxidation Removal', 'Luxury Box', 'Memory Guard'],
        icon: <Star className="w-6 h-6" />,
        popular: false,
        tag: 'Luxury'
    }
];

export default function PlansPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredServices = services.filter(s =>
        s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        s.tag.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-accent-50 text-secondary-900">
            <Navigation />

            {/* Hero Header */}
            <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-secondary-900 rounded-b-[5rem]">
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full blur-[120px]" />
                    <div className="absolute bottom-10 right-10 w-96 h-96 bg-highlight rounded-full blur-[150px]" />
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center space-y-6"
                    >
                        <div className="inline-flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                            <Shirt className="w-4 h-4 text-primary-400" />
                            <span className="text-primary-300 font-jakarta text-xs font-bold uppercase tracking-widest">A1 Service Menu</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-outfit font-extrabold text-white leading-tight">
                            Crafting Flawless <br />
                            <span className="text-primary-400">Garment Care.</span>
                        </h1>
                        <p className="text-lg text-secondary-300 font-jakarta max-w-2xl mx-auto leading-relaxed">
                            Explore our range of professional cleaning services tailored for every
                            piece of your wardrobe. From daily shirts to wedding couture.
                        </p>
                    </motion.div>

                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto mt-12 relative"
                    >
                        <div className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary-400">
                            <Search className="w-5 h-5" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for a service... (e.g. Shoes, Wedding)"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white/10 border border-white/10 rounded-full py-5 pl-16 pr-8 text-white font-jakarta focus:outline-none focus:ring-4 focus:ring-primary-500/20 backdrop-blur-xl transition-all"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 px-6 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredServices.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`glass-card p-10 rounded-[3rem] relative group border border-primary-50 hover:shadow-2xl transition-all duration-500 ${service.popular ? 'border-primary-200' : ''
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-600 text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">
                                    Most Trusted
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-8">
                                <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                                    {service.icon}
                                </div>
                                <span className="text-highlight font-outfit font-black text-xs uppercase bg-highlight/10 px-4 py-2 rounded-full">
                                    {service.tag}
                                </span>
                            </div>

                            <h3 className="text-2xl font-outfit font-extrabold text-secondary-900 mb-2">{service.name}</h3>

                            <p className="text-secondary-600 font-jakarta text-sm leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-10">
                                {service.features.map((f, idx) => (
                                    <li key={idx} className="flex items-center space-x-3 text-secondary-500 text-sm font-jakarta font-semibold">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>{f}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href={`https://wa.me/9024800972?text=Hi A1,%20I'm%20interested%20in%20your%20${service.name}%20service.`}
                                target="_blank"
                                className="w-full flex items-center justify-center space-x-3 py-4 rounded-2xl bg-secondary-900 text-white font-outfit font-bold hover:bg-primary-600 transition-all group/btn shadow-xl"
                            >
                                <span>Book Service</span>
                                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {filteredServices.length === 0 && (
                    <div className="text-center py-20 space-y-4">
                        <h3 className="text-2xl font-outfit font-bold text-secondary-400">No services found matching &quot;{searchTerm}&quot;</h3>
                        <button onClick={() => setSearchTerm('')} className="text-primary-600 font-bold underline">Clear search</button>
                    </div>
                )}
            </section>

            {/* Quality Badge */}
            <section className="py-20 bg-primary-50/50">
                <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
                    <div className="flex justify-center -space-x-4">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-primary-100 flex items-center justify-center overflow-hidden">
                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" />
                            </div>
                        ))}
                    </div>
                    <h2 className="text-3xl font-outfit font-extrabold text-secondary-900">
                        Joined by <span className="text-primary-600">Many residents</span> for premium care.
                    </h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-sm border border-primary-100">
                            <Star className="w-5 h-5 text-highlight fill-highlight" />
                            <span className="font-outfit font-bold">4.9/5 Rating</span>
                        </div>
                        <div className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-sm border border-primary-100">
                            <ShieldCheck className="w-5 h-5 text-green-500" />
                            <span className="font-outfit font-bold">QC Certified</span>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

function CheckCircle({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
    )
}
