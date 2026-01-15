"use client";

import Link from "next/link";
import {
  Droplets,
  Wind,
  Sparkles,
  Footprints,
  Home,
  Layers,
  ChevronRight,
  CheckCircle2
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    name: "Dry Cleaning",
    description: "Premium care for silk, wool, and designer wear using eco-safe solvents.",
    icon: <Droplets className="w-8 h-8" />,
    color: "bg-blue-500",
    size: "lg",
    features: ["Silk & Wool", "Designer Wear", "Stain Removal"]
  },
  {
    id: 2,
    name: "Steam Press",
    description: "Industrial-grade steam technology for a crisp, wrinkle-free finish.",
    icon: <Wind className="w-8 h-8" />,
    color: "bg-sky-400",
    size: "md",
    features: ["Instant Freshness", "Fabric Safe"]
  },
  {
    id: 3,
    name: "Curtain Cleaning",
    description: "Specialized cleaning for heavy drapes and delicate window treatments.",
    icon: <Layers className="w-8 h-8" />,
    color: "bg-indigo-400",
    size: "md",
    features: ["Deep Dusting", "Color Protection"]
  },
  {
    id: 4,
    name: "Shoe Spa",
    description: "Revive your leather, suede, and designer sneakers to box-fresh condition.",
    icon: <Footprints className="w-8 h-8" />,
    color: "bg-highlight",
    size: "lg",
    features: ["Suede Care", "Deodorization", "Sole Restore"]
  },
  {
    id: 5,
    name: "Sofa & Carpet",
    description: "Expert home cleaning for upholstered furniture and floor textiles.",
    icon: <Home className="w-8 h-8" />,
    color: "bg-primary-600",
    size: "sm",
    features: ["Deep Extraction", "Micro-Clean"]
  },
  {
    id: 6,
    name: "Premium Wash",
    description: "Gentle automated washing for high-end casuals and daily essentials.",
    icon: <Sparkles className="w-8 h-8" />,
    color: "bg-accent-600",
    size: "sm",
    features: ["Fabric Softening", "Anti-Bacterial"]
  }
];

function PlanShowcase() {
  const handleWhatsAppContact = (type: string, name: string) => {
    const whatsappNumber = '+919024800972';

    const whatsappMessage =
      `*${type} Inquiry* 📩

  Hello Team,
  I am interested in the following service:

  ✅ ${name}

  Please share more details about the process, pricing, and availability.

  Thanks & Regards`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber.replace('+', '')}&text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="section-container relative overflow-hidden" id="services">
      {/* Background elements */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 opacity-20">
        <div className="w-[500px] h-[500px] rounded-full bg-primary-100 blur-3xl" />
      </div>

      <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl text-secondary-900"
        >
          Specialized <span className="text-gradient">Cleaning Solutions</span>
        </motion.h2>
        <p className="font-jakarta text-secondary-600 text-lg">
          We use state-of-the-art technology to ensure your fabrics receive the premium care they deserve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[240px]">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`group relative glass-card p-8 rounded-3xl overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-500
              ${service.size === 'lg' ? 'md:col-span-3 row-span-2' : service.size === 'md' ? 'md:col-span-3' : 'md:col-span-2'}`}
          >
            {/* Visual Decor */}
            <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full ${service.color} opacity-[0.03] group-hover:scale-150 transition-transform duration-700`} />

            <div className="space-y-4 relative z-10">
              <div className={`w-14 h-14 rounded-2xl ${service.color} flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform`}>
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-outfit font-bold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {service.name}
                </h3>
                <p className="font-jakarta text-secondary-600 text-sm mt-2 leading-relaxed max-w-[280px]">
                  {service.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-2 pt-2">
                {service.features.map(f => (
                  <li key={f} className="flex items-center space-x-1 bg-white/50 px-3 py-1 rounded-full border border-primary-50">
                    <CheckCircle2 className="w-3 h-3 text-primary-500" />
                    <span className="text-[10px] font-jakarta font-bold text-secondary-700 uppercase">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex items-center justify-between relative z-10">
              <button
                onClick={() => handleWhatsAppContact('Service', service.name)}
                className="flex items-center space-x-2 text-primary-600 font-outfit font-bold text-sm hover:translate-x-2 transition-transform"
              >
                <span>Call for Pickup</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default PlanShowcase;
