import type { Metadata } from "next";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer';
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

export const metadata: Metadata = {
  title: "Digital Solutions for Businesses | Web Design, SEO & Marketing",
  description: "Empowering small businesses with affordable web design, SEO, and marketing strategies. Get custom digital solutions that grow your brand and bring in real results.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer/>
      </body>

    </html>
  )
}