import './globals.css';
import GifBackground from '@/components/background/GifBackground';
import Header from '@/components/Header';

export const metadata = {
  title: 'NeoRD.AI',
  description: 'End to End AI Solutions',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <GifBackground />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}
