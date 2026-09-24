import Blogs from '@/components/home/blogs/Blogs';
import ClientReview from '@/components/home/client-review/ClientReview';
import Hero from '@/components/home/hero/Hero';
import Projects from '@/components/home/projects/Projects';
import Resume from '@/components/home/resume/Resume';
import Services from '@/components/home/services/Services';
import Skills from '@/components/home/skills/Skills';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Blogs />
    </>
  );
}
