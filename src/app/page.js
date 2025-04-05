import Image from "next/image";
import GifBackground from '@/components/GifBackground';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <GifBackground />
    
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#003153] text-white">
        <h1 className="text-2xl font-bold">NeoRD.AI</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline font-bold hover:text-black">Platform<span className="ml-2">▾</span></a></li>
            <li><a href="#" className="hover:underline font-bold">Solutions<span className="ml-2">▾</span></a></li>
            <li><a href="#" className="hover:underline font-bold">Customers<span className="ml-2">▾</span></a></li>
            <li><a href="#" className="hover:underline font-bold">Resources<span className="ml-2">▾</span></a></li>
          </ul>
        </nav>
        <div>
          <a href="#login-page" className="inline-block mr-4 px-4 py-2 border rounded hover:bg-black transition-colors font-medium">Login</a>
          <a href="#book-demo" className="inline-block mr-4 px-4 py-2 border bg-black text-white rounded-lg hover:bg-[#1991db] transition-colors font-medium">Contact Us</a>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-12 px-6 flex-grow relative">

        {/* Left side - Company info (Moves slightly away from left) */}
        <div className="text-left pl-10">
          <h2 className="text-6xl font-bold mb-4 text-white">NeoRD.AI: End to End AI Solutions</h2>
          <h3 className="text-4xl font-bold mb-4 text-white">Empowering Your Business With Every Kind Of AI solutions</h3>
          <a href="#book-demo" 
          className="inline-block px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1991db] transition-colors font-medium">
            Book Demo<span className="ml-2"> &gt; </span>
          </a>
        </div>

        {/* Company Logo with absolute positioning */}
        <div className="absolute" style={{ top: '0px', left: '0px' }}>
          <Image 
            src="/compLogo.png" 
            alt="NeoRD.AI Logo" 
            width={50} 
            height={50} 
            className="object-contain"
          />
        </div>
      </main>
    </div>
  );
}
