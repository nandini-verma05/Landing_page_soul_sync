import HeroSection from './components/HeroSection';
import FAQsection from './components/FAQsection';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import Carousel from './components/Carousel';
import Video from './components/vdo';
import Works from './components/Works';
import AboutMission from './components/AboutMission';

export default function Home() {
  return (
    <main >
    <div className="h-screen w-full snap-y snap-mandatory overflow-y-scroll scroll-smooth">

      {/* FULL-PAGE SNAP SECTIONS */}
      <section className="snap-start h-screen">
        <HeroSection />
      </section>

      <section className="snap-start h-screen">
        <Video />
      </section>
   </div>
      
        <Works />

     
        <AboutMission />
    

  
      
        <Carousel />
  

    
        <BlogSection />
    

     
        <FAQsection />
  

  
        <Footer />
     

 </main>
  );
}
