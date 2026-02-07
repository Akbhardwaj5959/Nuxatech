import Image from 'next/image';
import AboutIntro from '@/components/AboutIntro';
import WhyChoseUs from '@/components/WhyChoseUs';
import Faq from '@/components/Faq';

export default function About() {
  return (
    <>
    <AboutIntro/>
    <WhyChoseUs/>
    <Faq/>
    
    </>
  );
}