import { ContactForm } from '@/components/contact-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Codeshift IT  Solutions',
  description: 'Get in touch with Codeshift IT  Solutions. We\'d love to hear about your project or answer any questions.',
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <ContactForm />
      </div>
    </section>
  );
}
