import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
            Navigate Your Digital Future with Codeshift
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Expert IT solutions tailored to elevate your business. From web development to cybersecurity, we're your trusted partner in technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#services">Explore Services</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/1200x675.png"
            alt="Modern IT solutions"
            layout="fill"
            objectFit="cover"
            data-ai-hint="technology office"
            priority
          />
        </div>
      </div>
    </section>
  );
}
