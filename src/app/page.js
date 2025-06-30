import Image from "next/image";
import GifBackground from '@/components/background/GifBackground';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <GifBackground />
      
      {/* Main Content */}
      <main className="container mx-auto flex flex-col items-center justify-center py-12 px-6 flex-grow relative">
        <div className="flex flex-col items-center max-w-4xl">
          <h2 className="text-6xl font-bold mb-4 text-white text-center">NeoRD.AI: End to End AI Solutions</h2>
          <h3 className="text-2xl font-regular mb-4 text-white text-center">Empowering Your Business With Every Kind Of AI solutions</h3>
          <Link href="/booking" 
          className="inline-block px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1991db] transition-colors font-medium">
            Book Demo<span className="ml-2"> &gt; </span>
          </Link>
        </div>
      </main>
    </div>
  );
}
