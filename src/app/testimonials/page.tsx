import { TestimonialsSection } from '@/components/testimonials-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials - Codeshift IT  Solutions',
  description: 'Read what our clients say about Codeshift IT  Solutions. Real stories from businesses we\'ve helped thrive.',
};

export default function TestimonialsPage() {
  return (
    <TestimonialsSection />
  );
}
