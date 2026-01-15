"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Quote, Star, User } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Business Owner',
    feedback: 'A1 Dry Clean has been my go-to for years. Their attention to detail with my business suits is unmatched in Bikaner.',
    rating: 5,
    location: 'Kamla Colony'
  },
  {
    id: 2,
    name: 'Anita Verma',
    role: 'Home Maker',
    feedback: 'I was worried about my heavy wedding lehenga, but they handled it with so much care. It looks brand new again!',
    rating: 5,
    location: 'Rani Bazar'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Corporate Professional',
    feedback: 'The express delivery is a lifesaver. I got my shirts back crisp and fresh within 24 hours. Highly recommended.',
    rating: 5,
    location: 'JNV Colony'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section-container relative overflow-hidden" id="testimonials">
      {/* Background Decor */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-primary-50 px-4 py-2 rounded-full border border-primary-100"
          >
            <Star className="w-4 h-4 text-primary-500 fill-primary-500" />
            <span className="text-primary-600 font-jakarta text-xs font-bold uppercase tracking-widest">
              Trusted by Many Customers
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl text-secondary-900">
            Voices of <span className="text-gradient">Satisfaction</span>
          </h2>
          <p className="font-jakarta text-secondary-600 text-lg leading-relaxed">
            Our commitment to quality has earned us a loyal community in Bikaner.
            Here&apos;s what our happy customers have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[2.5rem] relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-primary-100 group-hover:text-primary-200 transition-colors">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              <div className="flex space-x-1 mb-6">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 text-highlight fill-highlight" />
                ))}
              </div>

              <blockquote className="font-jakarta text-secondary-700 text-lg italic leading-relaxed mb-8 relative z-10">
                &quot;{t.feedback}&quot;
              </blockquote>

              <div className="flex items-center space-x-4 pt-6 border-t border-primary-50">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-outfit font-bold text-secondary-900 underline decoration-primary-200 decoration-4 underline-offset-4">
                    {t.name}
                  </p>
                  <p className="font-jakarta text-xs text-secondary-500 uppercase tracking-widest font-bold">
                    {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 relative rounded-[3rem] overflow-hidden bg-primary-600 p-12 md:p-20 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600 via-primary-500 to-indigo-600" />
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h3 className="text-4xl md:text-5xl font-outfit font-extrabold text-white leading-tight">
              Ready to Give Your Clothes <br className="hidden md:block" /> The A1 Treatment?
            </h3>
            <p className="font-jakarta text-primary-50 text-lg opacity-90">
              Schedule your first pickup today and experience the difference between
              regular washing and professional fabric care.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="https://wa.me/9024800972" target="_blank" className="bg-white text-primary-600 px-10 py-5 rounded-2xl font-outfit font-bold text-lg hover:bg-secondary-900 hover:text-white transition-all shadow-xl">
                Book a Pickup Now
              </Link>
              <Link href="/services" className="border-2 border-white/30 text-white px-10 py-5 rounded-2xl font-outfit font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
                View All Services
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
