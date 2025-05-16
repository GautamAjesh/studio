import { ServicesSection } from '@/components/services-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - Codeshift IT  Solutions',
  description: 'Explore the comprehensive IT services offered by Codeshift IT  Solutions, including web development, SEO, app development, and more.',
};

export default function ServicesPage() {
  return (
    <ServicesSection />
  );
}
