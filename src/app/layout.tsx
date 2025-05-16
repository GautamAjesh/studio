import type {Metadata} from 'next';
import { Geist } from 'next/font/google'; // Using Geist Sans as primary
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

// Removed geistMono as it's not specified in the request, simplifying font setup.

export const metadata: Metadata = {
  title: 'Codeshift IT  Solutions - Your IT Solutions Partner',
  description: 'Expert IT services including web & app development, SEO, cybersecurity, and UI/UX design.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body className="antialiased font-sans flex flex-col min-h-screen">
        <AppHeader />
        <main className="flex-grow">
          {children}
        </main>
        <AppFooter />
        <Toaster />
      </body>
    </html>
  );
}
