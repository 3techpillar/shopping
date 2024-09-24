import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  "title": "Shopping Demo",
  "name": "Shopping Demo",
  "description":"ecommerce demo, online store demo, shopping site show case, pwa POC, mcommerce sample site",
  "url": "https://www.3TechPillar.com",
  "logo": "https://www.3TechPillar.com/logo.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "telephone": "+91 7827956850",
    "email": "info@3TechPillar.com"
  },
  "sameAs": [
    "https://www.facebook.com/3TechPillar",
    "https://twitter.com/3TechPillar",
    "https://www.instagram.com/3TechPillar"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
        {children}
        <Footer />
        </CartProvider>
        </body>
    </html>
  );
}
