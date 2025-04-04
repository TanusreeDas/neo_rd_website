import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NeoRD.AI",
  description: "AI Solution Company",
  icons: {
    icon: '/compLogo.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`flex flex-col min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="flex-grow">
          {children}
        </main>

        <footer className="p-4 bg-[#1DA1F2] text-white text-center">
          <p><a href="#contact-us" className="underline">Contact Sales</a> | <a href="#book-demo" className="underline">Book a Demo</a></p>
        </footer>

      </body>
    </html>
  );
}
