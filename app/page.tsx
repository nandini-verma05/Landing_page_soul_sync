import HeroSection from './components/HeroSection';

import FAQsection from './components/FAQsection';
import  Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import Carousel from './components/Carousel';

import Works from './components/Works';
import AboutMission from './components/AboutMission';
export default function Home() {
  return (
    <main>
       <HeroSection />
       

       <Works />
       <AboutMission />
      
        <Carousel />
        <BlogSection />
        <FAQsection />
        <Footer />
    </main>
  );
}
