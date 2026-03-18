import Navbar from '@/components/Navbar';
import ScrollySection from '@/components/ScrollySection';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero / Image sequence scroller */}
        <ScrollySection />

        {/* About & Skills */}
        <About />

        {/* Work case studies */}
        <Projects />

        {/* Career timeline */}
        <Experience />

        {/* Contact / Footer */}
        <Contact />
      </main>
    </>
  );
}
