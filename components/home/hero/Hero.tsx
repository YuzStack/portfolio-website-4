'use client';

import Image from 'next/image';
import img from '@/public/images/s1.jpg';
import TypewriterComponent from 'typewriter-effect';
import { BsArrowRight } from 'react-icons/bs';
import ParticlesHero from './ParticleBackground';

export default function Hero() {
  return (
    <section className='text-primary-50 relative flex h-screen flex-col items-center justify-center'>
      {/* <ParticlesHero /> */}

      <div className='relative z-10 flex flex-col items-center'>
        <Image
          src={img}
          alt='Hero Image'
          width={150}
          height={150}
          className='border-primary-700 rounded-full border-8'
        />

        <h1 className='mt-6 text-center text-2xl font-bold tracking-wider sm:text-4xl md:text-5xl lg:text-6xl'>
          Creating web products, <br /> brands,{' '}
          <span className='text-cyan-500'> and experiences</span>
        </h1>

        <h2 className='mt-5 flex items-center px-2 text-center text-sm font-medium sm:text-2xl'>
          Hi! I'm Yusuf &mdash; A passionate
          <span className='font-bold text-cyan-200'>
            <TypewriterComponent
              options={{
                strings: [
                  'Frontend Developer',
                  'Full-Stack Developer',
                  'Web Developer',
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: 'pl-2',
              }}
            />
          </span>
        </h2>

        <button className='mt-6 rounded-full bg-blue-800 px-10 py-4 text-lg font-medium transition-all duration-300 hover:bg-blue-900'>
          <span>See my work</span>
          <BsArrowRight className='ml-2 inline-block size-5' />
        </button>
      </div>
    </section>
  );
}
