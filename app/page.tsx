
import type { Metadata } from "next";
import HeroSection from '@/components/HeroSection';
import Location from '@/components/Location';
import ServiceMenu from '@/components/ServiceMenu';
import HomeStats from '@/components/HomeStats';

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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