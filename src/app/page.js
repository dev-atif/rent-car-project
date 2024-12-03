import CardSection from "@/Components/Cards/CardSection";
import HeroSection from "@/Components/HeroSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <HeroSection />
        </div>
        <CardSection />
      </div>
    </>
  );
}
