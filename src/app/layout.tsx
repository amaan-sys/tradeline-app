// src/app/layout.js
import "../styles/globals.css"; // import Tailwind/global styles
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "TradelineApp",
  description: "Manage and view tradelines",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
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
