import Hero from '@/components/home/hero/Hero';
import Projects from '@/components/home/projects/Projects';
import Resume from '@/components/home/resume/Resume';
import Services from '@/components/home/services/Services';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Resume />
      <Projects />
    </>
  );
}
