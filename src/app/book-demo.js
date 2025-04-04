import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
        <h1 className="text-2xl font-bold">Company</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Platform</a></li>
            <li><a href="#" className="hover:underline">Solutions</a></li>
            <li><a href="#" className="hover:underline">Customers</a></li>
            <li><a href="#" className="hover:underline">Resources</a></li>
          </ul>
        </nav>
        <div>
          <button className="mr-4 px-4 py-2 border rounded">Login</button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded">Get Started</button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
        <h2 className="text-3xl font-bold mb-4">About Our Company</h2>
        <p className="max-w-2xl">We are dedicated to providing innovative solutions to help businesses grow. Meet our visionary founders who make this possible.</p>
      </main>
      
      {/* Footer */}
      <footer className="p-4 bg-gray-800 text-white text-center">
        <p>Contact us | <Link href="/book-demo" className="underline">Book a Demo</Link></p>
      </footer>
    </div>
  );
}
