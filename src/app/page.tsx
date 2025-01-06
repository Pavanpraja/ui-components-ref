import Image from "next/image";
import HeroSection from "./components/HomeComponents/HeroSection";
import ServiceCardsSection from "./components/ServiceCards/page";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServiceCardsSection />
    </div>
  );
}
