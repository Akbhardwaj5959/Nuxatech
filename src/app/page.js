import HeroSection from "@/components/Hero-Section";
import Image from "next/image";
import Services from "@/components/Services";
import TrustSection from "@/components/TrustSection";
import Popular from "@/components/Popular";
import TechStack from "@/components/TechStack";
import Testimonials from "@/components/Testimonials";
import Testimonials2 from "@/components/Testimonials2";
export default function Home() {
  return (
   <>
   <HeroSection/>
   <Services/>
   <Popular/>
   <TrustSection/>  
   <TechStack/>
   <Testimonials/>
   <Testimonials2/>


   </>
  );
}
