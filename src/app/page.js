import HeroSection from "@/components/Hero-Section";
import Image from "next/image";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import Popular from "@/components/Popular";
import TechStack from "@/components/TechStack";
export default function Home() {
  return (
   <>
   <HeroSection/>
   <Services/>
   <Popular/>
   <TrustSection/>  
   <TechStack/>


   </>
  );
}
