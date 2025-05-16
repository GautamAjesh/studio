import { HeroSection } from '@/components/hero-section';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { ContactForm } from '@/components/contact-form';
import { KeywordExtractor } from '@/components/keyword-extractor';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <ServicesSection />

      <TestimonialsSection />
      
      <section id="keywords" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <KeywordExtractor />
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
