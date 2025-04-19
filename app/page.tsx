
import type { Metadata } from "next";
import HeroSection from '@/components/HeroSection';

import Location from '@/components/Location';
import ServiceMenu from '@/components/ServiceMenu';
import HomeStats from '@/components/HomeStats';

import "./globals.css";

export const metadata: Metadata = {
  title: "SEO & Web Development |Raza Digital Solutions",
  description: "Ready to grow your online presence? Book a strategy session to discuss your website, SEO, or business goals with a digital expert.",
};


export default function Home() {
  return (
    <main>
      <HeroSection />
      <HomeStats/>
      <ServiceMenu />
      <Location/>
    </main>
  );
}