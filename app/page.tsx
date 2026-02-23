import HeroSection from './components/HeroSection';
import FAQsection from './components/FAQsection';
import Footer from './components/Footer';
import BlogSection from './components/BlogSection';
import Video from './components/vdo';
import AboutMission from './components/AboutMission';

export default function Home() {
  return (
    <main >
      <section >
        <HeroSection />
      </section>
      <section >
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
