import { HeroSection } from '@/components/hero-section';
// Sections will be moved to their own pages
// import { ServicesSection } from '@/components/services-section';
// import { TestimonialsSection } from '@/components/testimonials-section';
// import { ContactForm } from '@/components/contact-form';
// import { KeywordExtractor } from '@/components/keyword-extractor';
// import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      {/* 
        ServicesSection, TestimonialsSection, KeywordExtractor, and ContactForm 
        have been moved to their respective pages:
        /services
        /testimonials
        /keyword-tool
        /contact
      */}
      
      {/* You can add a brief overview or links to other pages here if desired */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Offerings</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Discover our range of IT solutions, client success stories, and useful tools.
          </p>
          {/* Optional: Add some cards or links to the new pages */}
        </div>
      </section>
    </div>
  );
}
