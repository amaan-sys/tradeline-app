// src/app/layout.js
import "../styles/globals.css"; // import Tailwind/global styles
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // Define a CSS variable for easy access
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] // Specify desired weights
});

export const metadata = {
  title: "TradelineApp",
  description: "Manage and view tradelines",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
