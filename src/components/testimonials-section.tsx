
import type { Testimonial } from '@/types';
import { TestimonialCard } from './testimonial-card';

const testimonialsData: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    company: 'Tech Solutions Inc.',
    quote: 'Codeshift IT Navigator transformed our online presence with their exceptional web development and SEO services. Highly recommended!',
  },
  {
    id: '2',
    name: 'Rohan Patel',
    company: 'Innovate Startups',
    quote: 'The app development team was fantastic. They delivered a high-quality Flutter app on time and within budget. Their UI/UX insights were invaluable.',
  },
  {
    id: '3',
    name: 'Aisha Khan',
    company: 'SecureNet LLC',
    quote: 'Their cybersecurity expertise gave us peace of mind. The team was professional, knowledgeable, and proactive. A great partner for any business.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Real stories from businesses we've helped thrive.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

