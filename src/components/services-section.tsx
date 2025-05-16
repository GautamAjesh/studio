import type { Service } from '@/types';
import { ServiceCard } from './service-card';
import { 
  Globe, LineChart, Smartphone, Feather, Code2, Orbit, Database, FileCode, Network, Shield, Coffee, Blocks, PenSquare, Wrench, ShieldCheck, Palette 
} from 'lucide-react';

const servicesData: Service[] = [
  { id: 'web', name: 'Website Development', description: 'Crafting stunning, responsive websites tailored to your brand.', icon: Globe, technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Angular', 'PHP', '.NET'] },
  { id: 'seo', name: 'SEO Optimization', description: 'Boosting your online visibility and search engine rankings.', icon: LineChart, technologies: ['Keyword Research', 'On-Page SEO', 'Link Building'] },
  { id: 'app', name: 'App Development', description: 'Building innovative mobile apps for Android and iOS platforms.', icon: Smartphone, technologies: ['Flutter', 'Kotlin', 'React Native', 'Swift', 'Java'] },
  { id: 'flutter', name: 'Flutter Development', description: 'Cross-platform apps with beautiful UIs and native performance.', icon: Feather },
  { id: 'kotlin', name: 'Kotlin Development', description: 'Modern, concise, and safe programming for Android and beyond.', icon: Code2 },
  { id: 'react', name: 'React Development', description: 'Building interactive UIs with the popular JavaScript library.', icon: Orbit },
  { id: 'dotnet', name: '.NET Development', description: 'Robust and scalable solutions with Microsoft\'s .NET framework.', icon: Database },
  { id: 'php', name: 'PHP Development', description: 'Versatile web solutions with the widely-used PHP language.', icon: FileCode },
  { id: 'nextjs', name: 'Next.js Development', description: 'High-performance React applications with server-side rendering.', icon: Network },
  { id: 'angular', name: 'Angular Development', description: 'Enterprise-grade web applications with Google\'s Angular framework.', icon: Shield }, // Shield for Angular logo shape
  { id: 'java', name: 'Java Development', description: 'Powerful and versatile applications with the Java ecosystem.', icon: Coffee },
  { id: 'web3', name: 'Web3 Solutions', description: 'Exploring decentralized applications and blockchain technology.', icon: Blocks, technologies: ['Smart Contracts', 'dApps', 'Blockchain Integration'] },
  { id: 'content', name: 'Content Writing', description: 'Engaging and SEO-friendly content that tells your story.', icon: PenSquare },
  { id: 'maintenance', name: 'Website Maintenance', description: 'Keeping your website secure, updated, and running smoothly.', icon: Wrench },
  { id: 'cybersecurity', name: 'Cybersecurity', description: 'Protecting your digital assets with cutting-edge security measures.', icon: ShieldCheck },
  { id: 'uiux', name: 'UI/UX Design', description: 'Creating intuitive and visually appealing user experiences.', icon: Palette, technologies: ['User Research', 'Wireframing', 'Prototyping'] },
];

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Comprehensive IT Services</h2>
          <p className="text-lg text-muted-foreground mt-2">
            Empowering your business with cutting-edge technology solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
