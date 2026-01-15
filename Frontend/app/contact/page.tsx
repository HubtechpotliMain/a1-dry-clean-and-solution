"use client";

import { useState } from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { Phone, Mail, MapPin, Clock, Send, Sparkles, MessageCircle, Instagram, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Dry Cleaning',
    message: ''
  });

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = '+919024800972';
    const whatsappMessage =
      `*Service Inquiry* 📩

  Hello Team,
  I am interested in the following service:

  ✅ ${formData.service}

  *Details:*
  Name: ${formData.name}
  Email: ${formData.email}
  Note: ${formData.message}

  Please share more details about the process, pricing, and availability.

  Thanks & Regards`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber.replace('+', '')}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactCards = [
    {
      icon: Phone,
      title: 'Call Us',
      detail: '+91-9024800972',
      link: 'tel:+919024800972',
      sub: 'Mon-Sat, 10am-9pm'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      detail: '+91-9024800972',
      onClick: () => handleWhatsAppContact('General', 'A1 Services'),
      sub: 'Instant Support'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'asofadryclean@gmail.com',
      link: 'mailto:asofadryclean@gmail.com',
      sub: 'Official Inquiries'
    }
  ];

  return (
    <div className="min-h-screen bg-accent-50 text-secondary-900">
      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/30 rounded-full blur-[140px] -z-10" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-primary-100 shadow-sm">
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-primary-600 font-jakarta text-xs font-bold uppercase tracking-widest">Connect with us</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-outfit font-extrabold text-secondary-900 leading-tight">
              Let&apos;s Get Your <br />
              <span className="text-gradient">Fabrics Glowing.</span>
            </h1>
            <p className="text-lg text-secondary-600 font-jakarta max-w-xl leading-relaxed">
              Have questions about a delicate material? Need a bulk pickup for your business?
              Reach out and our experts will help you out.
            </p>

            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-12 h-12 rounded-full bg-white border border-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-white border border-primary-100 flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {contactCards.map((card, i) => (
              <motion.div
                key={i}
                onClick={card.onClick ? card.onClick : () => card.link && window.open(card.link, '_self')}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 rounded-3xl hover:-translate-y-2 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all">
                  <card.icon className="w-6 h-6" />
                </div>
                <h3 className="font-outfit font-bold text-secondary-500 text-sm uppercase tracking-widest mb-1">{card.title}</h3>
                <p className="font-outfit font-bold text-secondary-900 text-lg mb-2">{card.detail}</p>
                <p className="font-jakarta text-secondary-400 text-xs font-bold">{card.sub}</p>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 rounded-3xl bg-secondary-900 text-white flex flex-col justify-center"
            >
              <h3 className="font-outfit font-bold text-primary-400 text-sm uppercase tracking-widest mb-1">Our Location</h3>
              <p className="font-jakarta text-sm leading-relaxed opacity-80">
                Ramdev Pathshala Ke Samne,<br />
                Kamla Colony, Bikaner,<br />
                Rajasthan 334001
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-primary-50"
          >
            <h2 className="text-3xl md:text-4xl font-outfit font-extrabold text-secondary-900 mb-8">
              Send a Service <span className="text-primary-600">Request</span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-jakarta font-bold text-sm text-secondary-600 px-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-accent-50/50 border border-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-jakarta"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="font-jakarta font-bold text-sm text-secondary-600 px-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-6 py-4 rounded-2xl bg-accent-50/50 border border-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-jakarta"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-jakarta font-bold text-sm text-secondary-600 px-1">Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-2xl bg-accent-50/50 border border-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-jakarta appearance-none"
                >
                  <option>Dry Cleaning</option>
                  <option>Steam Press</option>
                  <option>Shoe Spa</option>
                  <option>Curtain Cleaning</option>
                  <option>Sofa & Carpet</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="font-jakarta font-bold text-sm text-secondary-600 px-1">Special Instructions</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 rounded-2xl bg-accent-50/50 border border-primary-100 focus:outline-none focus:ring-4 focus:ring-primary-100 transition-all font-jakarta resize-none"
                  placeholder="Tell us about your garments or specific needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-5 rounded-2xl bg-primary-600 text-white font-outfit font-bold text-lg hover:bg-secondary-900 transition-all shadow-xl flex items-center justify-center space-x-3 group"
              >
                <span>Continue to WhatsApp</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <p className="text-center text-secondary-400 text-xs font-jakarta">
                We'll redirected you to WhatsApp to finalize your booking locally.
              </p>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="rounded-[3rem] overflow-hidden shadow-2xl h-[400px] border-8 border-white bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14144.59750134444!2d73.31065471718749!3d28.0206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393fe37cd9a40001%3A0xe54d8964d4b29c97!2sKamla%20Colony%2C%20Bikaner%2C%20Rajasthan%20334001!5e0!3m2!1sen!2sin!4v1715870000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="p-10 rounded-[3rem] bg-highlight/10 border border-highlight/20 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-highlight flex items-center justify-center text-white">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-outfit font-bold text-secondary-900">Working Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between font-jakarta font-semibold py-2 border-b border-highlight/10">
                  <span className="text-secondary-600">Monday - Saturday</span>
                  <span className="text-primary-600">10:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between font-jakarta font-semibold py-2">
                  <span className="text-secondary-600">Sunday</span>
                  <span className="text-red-500 underline decoration-red-100">Closed</span>
                </div>
              </div>
              <p className="text-xs text-secondary-500 font-jakarta pt-4 italic">
                *Pickup requests made on Sunday will be processed on Monday morning.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
