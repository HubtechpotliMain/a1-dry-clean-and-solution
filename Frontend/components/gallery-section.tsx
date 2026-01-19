"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// List of all images from the images folder
const galleryImages = [
  'images/sofa-cleaning.jpeg',
  'images/visiting-card.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.50 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.50 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.51 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.51 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.52 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.52 PM (2).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.52 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.53 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.53 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.54 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.54 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.55 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.55 PM (2).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.55 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.56 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.56 PM (2).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.56 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.57 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.57 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.58 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.58 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.59 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.59 PM (2).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.40.59 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.00 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.00 PM (2).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.00 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.01 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.01 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.02 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.02 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.03 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.03 PM (2).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.03 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.04 PM (1).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.04 PM (2).jpeg',
  'images/WhatsApp Image 2026-01-19 at 4.41.04 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 6.39.26 PM.jpeg',
  'images/WhatsApp Image 2026-01-19 at 6.39.27 PM.jpeg',
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    } else {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <>
      <section className="section-container py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-outfit font-extrabold text-secondary-900">
              Our Work <span className="text-gradient">Gallery</span>
            </h2>
            <p className="font-jakarta text-secondary-600 text-lg max-w-2xl mx-auto">
              See the quality and care we put into every garment. From delicate silks to heavy curtains, 
              we treat each piece with the attention it deserves.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 12) * 0.05 }}
                className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={`/${image}`}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-primary-400 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
            className="absolute left-4 text-white hover:text-primary-400 transition-colors z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
            className="absolute right-4 text-white hover:text-primary-400 transition-colors z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/${galleryImages[selectedImage]}`}
              alt={`Gallery image ${selectedImage + 1}`}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm font-jakarta">
            {selectedImage + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default GallerySection;
