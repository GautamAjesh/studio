import { HeroSection } from '@/components/hero-section';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Briefcase, Edit3, MessageSquare, Search, Star } from 'lucide-react';
import Link from 'next/link';

interface OfferingCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  linkLabel: string;
}

function OfferingCard({ icon, title, description, link, linkLabel }: OfferingCardProps) {
  return (
    <Card className="flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardHeader className="flex-row items-start gap-4 space-y-0 pb-4">
        <span className="p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </span>
        <div>
          <CardTitle className="text-xl mb-1">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow flex items-end">
        <Button asChild variant="link" className="p-0 h-auto text-primary hover:text-accent">
          <Link href={link}>
            {linkLabel} <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Explore Our Offerings</h2>
            <p className="text-lg text-muted-foreground mt-2">
              Discover our range of IT solutions, client success stories, and useful tools designed to help your business thrive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <OfferingCard 
              icon={<Briefcase className="h-6 w-6" />}
              title="Our Services"
              description="From web development to cybersecurity, explore our comprehensive IT services."
              link="/services"
              linkLabel="View Services"
            />
            <OfferingCard 
              icon={<Star className="h-6 w-6" />}
              title="Client Testimonials"
              description="See what our satisfied clients have to say about our work and impact."
              link="/testimonials"
              linkLabel="Read Testimonials"
            />
            <OfferingCard 
              icon={<Search className="h-6 w-6" />}
              title="Keyword Extractor"
              description="Utilize our smart tool to find relevant keywords for your content and SEO."
              link="/keyword-tool"
              linkLabel="Try the Tool"
            />
            <OfferingCard 
              icon={<MessageSquare className="h-6 w-6" />}
              title="Contact Us"
              description="Have questions or a project in mind? Get in touch with our expert team."
              link="/contact"
              linkLabel="Send a Message"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
