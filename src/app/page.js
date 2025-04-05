import Image from "next/image";
import GifBackground from '@/components/background/GifBackground';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <GifBackground />
    
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#003153] text-white">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="ml-1">
              <Image 
                src="/compLogo.png" 
                alt="NeoRD.AI Logo" 
                width={40} 
                height={40} 
                className="object-contain"
              />
            </div>
            <h1 className="text-2xl font-bold">NeoRD.AI</h1>
          </div>
          <div></div>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#" className="hover:underline font-bold hover:text-black">Platform<span className="ml-2">▾</span></Link></li>
              <li><Link href="#" className="hover:underline font-bold">Solutions<span className="ml-2">▾</span></Link></li>
              <li><Link href="#" className="hover:underline font-bold">Customers<span className="ml-2">▾</span></Link></li>
              <li><Link href="#" className="hover:underline font-bold">Resources<span className="ml-2">▾</span></Link></li>
            </ul>
          </nav>
        </div>
        <div>
          <Link href="#login" className="inline-block mr-4 px-4 py-2 border rounded hover:bg-black transition-colors font-medium">Login</Link>
          <Link href="/book-demo" className="inline-block mr-4 px-4 py-2 border bg-black text-white rounded-lg hover:bg-[#1991db] transition-colors font-medium">
            Contact Us
          </Link>
        </div>
      </header>
      
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
