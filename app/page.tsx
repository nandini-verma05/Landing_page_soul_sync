import HeroSection from './components/HeroSection';
import FAQsection from './components/FAQsection';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import Carousel from './components/Carousel';
import Video from './components/vdo';
import Works from './components/Works';
import AboutMission from './components/AboutMission';
import VideoCarousel from './components/VideoCrousal';
export default function Home() {
  return (
    <main >
    <div className="  h-screen
        overflow-y-scroll
        scroll-snap-type-y-mandatory
        scroll-smooth
      ">

      {/* FULL-PAGE SNAP SECTIONS */}
      <section className="h-screen scroll-snap-align-start ">
        <HeroSection />
      </section>

      <section className="h-screen">
        <Video />
      </section>
   </div>

          <AboutMission />
     
     
     
   
      <BlogSection />
      <FAQsection />
      <Footer />
     

 </main>
  );
}
