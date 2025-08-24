import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { BeforeAfterSection } from '../components/BeforeAfterSection';
import { GallerySection } from '../components/GallerySection';
import { VideoSection } from '../components/VideoSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { FAQSection } from '../components/FAQSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';
import { SocialButtons } from '../components/SocialButtons';
// Desenvolvido por Iago Miguel
export function Home() {
  return <div className="font-sans bg-white text-gray-800">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <BeforeAfterSection />
        <TestimonialsSection />
        <GallerySection />
        <VideoSection />
        <FAQSection />
        <ContactSection />
      </main>
      <SocialButtons />
      <Footer />
    </div>;
}