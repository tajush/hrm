import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Banner from "@/components/Banner";
import FeaturesSection from "@/components/FeaturesSection";
import CoreFeatures from "@/components/CoreFeatures";
import CallToAction from "@/components/CallToAction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
   <div>
    <Banner/>
    <FeaturesSection/>
    <CoreFeatures/>
    <CallToAction/>
   </div>
  );
}
