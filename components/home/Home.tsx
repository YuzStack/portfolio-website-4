'use client';

import Blogs from '@/components/home/blogs/Blogs';
import ClientReview from '@/components/home/client-review/ClientReview';
import Contact from '@/components/home/contact/Contact';
import Hero from '@/components/home/hero/Hero';
import Projects from '@/components/home/projects/Projects';
import Resume from '@/components/home/resume/Resume';
import Services from '@/components/home/services/Services';
import Skills from '@/components/home/skills/Skills';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(function () {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1_000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };

    initAOS();
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <ClientReview />
      <Blogs />
      <Contact />
    </>
  );
}
