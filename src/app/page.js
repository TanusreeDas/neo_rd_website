import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-[#1DA1F2] text-white">
        <h1 className="text-2xl font-bold">NeoRD.AI</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:underline font-bold">Platform<span className="ml-2">▾</span></a></li>
            <li><a href="#" className="hover:underline font-bold">Solutions<span className="ml-2">▾</span></a></li>
            <li><a href="#" className="hover:underline font-bold">Customers<span className="ml-2">▾</span></a></li>
            <li><a href="#" className="hover:underline font-bold">Resources<span className="ml-2">▾</span></a></li>
          </ul>
        </nav>
        <div>
          <a href="#login-page" className="inline-block mr-4 px-4 py-2 border rounded hover:bg-black transition-colors font-medium">Login</a>
          <a href="#book-demo" className="inline-block mr-4 px-4 py-2 border bg-black text-white rounded-lg hover:bg-[#1991db] transition-colors font-medium">Get Started</a>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="container mx-auto flex flex-col md:flex-row items-center gap-12 py-12 px-6 flex-grow">

        {/* Left side - Company info (Moves slightly away from left) */}
        <div className="md:w-1/2 text-left pl-10">
          <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
          <p className="max-w-lg mb-6">
            We, <b>NeoRD.AI</b> specialize in building and deploying <strong>cutting-edge AI solutions</strong> including Generative AI, Agentic AI systems, and custom AI products. 
            Our end-to-end support helps businesses harness AI's transformative potential.
          </p>
          <a href="#book-demo" 
          className="inline-block px-6 py-3 bg-[#1DA1F2] text-white rounded-lg hover:bg-[#1991db] transition-colors font-medium">
            Get Started <span className="ml-2"> &gt; </span>
          </a>
        </div>

        {/* Right side - Image (Push to extreme right) */}
        <div className="md:w-1/2 flex w-full justify-end">
            <Image className="dark:invert" src="/compLogo.png" alt="company logo" width={400} height={400} priority />
        </div>
      </main>
    </div>
  );
}
