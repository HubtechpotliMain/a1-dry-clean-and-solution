import Navigation from '../components/navigation';
import HeroSection from '../components/hero-section';
import PlanShowcase from '../components/plan-showcase';
import FeaturesSection from '../components/features-section';
import TestimonialsSection from '../components/testimonials-section';
import GallerySection from '../components/gallery-section';
import VideoSection from '../components/video-section';
import Footer from '../components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PlanShowcase />
      <FeaturesSection />
      <GallerySection />
      <VideoSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
