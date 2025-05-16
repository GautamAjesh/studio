
import type { Testimonial } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star, UserCircle2 } from 'lucide-react'; // Added UserCircle2 as a placeholder

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="h-full flex flex-col justify-between shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <CardContent className="p-6 flex-grow">
        <div className="flex mb-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <blockquote className="text-foreground/80 italic text-base">
          "{testimonial.quote}"
        </blockquote>
      </CardContent>
      <CardFooter className="bg-secondary/50 p-6 flex items-center gap-3 border-t">
        <UserCircle2 className="h-10 w-10 text-primary" />
        <div>
          <p className="font-semibold text-primary">{testimonial.name}</p>
          {testimonial.company && <p className="text-sm text-muted-foreground">{testimonial.company}</p>}
        </div>
      </CardFooter>
    </Card>
  );
}
