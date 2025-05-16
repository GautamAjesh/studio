import { KeywordExtractor } from '@/components/keyword-extractor';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Keyword Extractor Tool - Codeshift IT Navigator',
  description: 'Use our Smart Keyword Extractor to discover relevant keywords for your content, SEO, and proposals.',
};

export default function KeywordToolPage() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <KeywordExtractor />
      </div>
    </section>
  );
}
