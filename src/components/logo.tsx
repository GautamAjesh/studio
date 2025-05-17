import { Briefcase } from 'lucide-react';
import { Image as LucideImage } from 'lucide-react'; // If needed elsewhere
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg'

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
      <Image
        src={logo}
        alt="Codeshift IT Solutions Logo"
        width={150} 
        height={75}
        className="rounded-md"
      />
      {/* <span className="text-2xl font-bold">Codeshift IT Solutions</span> */}
    </Link>
  );
}
