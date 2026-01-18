import HeroSection from './components/HeroSection';
import FAQsection from './components/FAQsection';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import Video from './components/vdo';
import AboutMission from './components/AboutMission';

export default function Home() {
  return (
    <main className="snap-y snap-mandatory overflow-y-auto scrollbar-hide">
      <section className="h-screen snap-start">
        <HeroSection />
      </section>
      <section className="h-screen w-full snap-start flex items-center justify-center overflow-hidden">
        <div className="w-full h-full">
          <Video />
        </div>
      </section>
      <section className="snap-start">
        <AboutMission />
      </section>
      <section className="snap-start">
        <BlogSection />
      </section>
      <section className="snap-start">
        <FAQsection />
      </section>
      <section className="snap-start">
        <Footer />
      </section>
    </main>
  );
}