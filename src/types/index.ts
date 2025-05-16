
import type { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  technologies?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  company?: string;
  quote: string;
  // avatarUrl and avatarAiHint are no longer needed as images are removed
}
