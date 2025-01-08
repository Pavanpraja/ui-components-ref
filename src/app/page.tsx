'use client';

import Image from "next/image";
import HeroSection from "./components/HomeComponents/HeroSection";
import ServiceCardsSection from "./components/ServiceCards/page"; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function Home() {
  useEffect(()=>{
    AOS.init({
      duration: 500,
      once: true,
      easing: 'ease-in-out'
    })
  },[])
  return (
    <div>
      <HeroSection />
      <ServiceCardsSection />
    </div>
  );
}
