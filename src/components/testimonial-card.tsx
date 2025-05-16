import Image from 'next/image';
import type { Testimonial } from '@/types';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <CardContent className="p-6 flex-grow">
        <div className="flex mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <blockquote className="text-foreground/80 italic">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
      <div className="bg-secondary/50 p-6 flex items-center gap-4">
        <Image
          src={testimonial.avatarUrl}
          alt={testimonial.name}
          width={50}
          height={50}
          className="rounded-full"
          data-ai-hint={testimonial.avatarAiHint}
        />
        <div>
          <p className="font-semibold text-primary">{testimonial.name}</p>
          {testimonial.company && <p className="text-sm text-muted-foreground">{testimonial.company}</p>}
        </div>
      </div>
    </Card>
  );
}
