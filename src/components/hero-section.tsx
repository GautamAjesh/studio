
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-20 md:py-28 lg:py-36 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Navigate Your Digital Future with Codeshift
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Expert IT solutions tailored to elevate your business. From web development to cybersecurity, we're your trusted partner in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md hover:shadow-lg transition-shadow">
              <Link href="/services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="shadow-sm hover:shadow-md transition-shadow">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
