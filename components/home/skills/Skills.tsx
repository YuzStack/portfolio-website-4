'use client';

import { skills } from '@/constants/constants';
import Tilt from 'react-parallax-tilt';

export default function Skills() {
  return (
    <section className='text-primary-50 py-16'>
      <h1 className='text-primary-50 text-center text-2xl font-bold md:text-4xl xl:text-5xl'>
        My <span className='text-cyan-300'>Skills</span>
      </h1>
      <ul className='mt-16 flex flex-wrap justify-center gap-6'>
        {skills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <li key={skill.name}>
              <Tilt scale={1.5} transitionSpeed={400}>
                <div
                  data-aos='flip-right'
                  data-aos-anchor-placement='top-center'
                  data-aos-delay={skill.id * 100}
                  className='bg-primary-600 flex h-48 w-40 flex-col items-center justify-center rounded-3xl text-center shadow-lg transition-all hover:scale-105'
                >
                  <div className='mb-4 text-5xl text-gray-300'>
                    <IconComponent />
                  </div>
                  <p className='text-2xl font-semibold'>{skill.percentage}</p>
                  <p className='mt-1 text-purple-400'>{skill.name}</p>
                </div>
              </Tilt>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
