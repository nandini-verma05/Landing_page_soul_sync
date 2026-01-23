import HeroSection from './components/HeroSection';
import FAQsection from './components/FAQsection';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import Video from './components/vdo';
import AboutMission from './components/AboutMission';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory min-h-screen overflow-y-auto scrollbar-hide scroll-smooth">
      <section className="h-screen w-full snap-start snap-always">
        <HeroSection />
      </section>
      <section className="h-screen w-full snap-start snap-always flex items-center justify-center overflow-hidden">
        <Video />
      </section>
      <section>
        <AboutMission />
      </section>
      <section>
        <BlogSection />
      </section>
      <section>
        <FAQsection />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}