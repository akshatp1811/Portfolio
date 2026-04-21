import Hero from './Hero';
import TechCarousel from './TechCarousel';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TechCarousel />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
