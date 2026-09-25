import { projects } from '@/constants/constants';
import Image from 'next/image';

export default function Projects() {
  return (
    <section className='py-16'>
      <h1 className='text-primary-50 text-center text-2xl font-bold md:text-4xl xl:text-5xl'>
        A small selection of recent <br />
        <span className='text-cyan-300'>projects</span>
      </h1>
      <ul className='mx-auto mt-16 grid w-[70%] gap-10 md:grid-cols-2'>
        {projects.map((project) => (
          <li
            data-aos='fade-up'
            data-aos-anchor-placement='top-center'
            data-aos-delay={project.id * 100}
            key={project.id}
          >
            <Image
              src={project.image}
              alt='Project'
              width={800}
              height={650}
              className='rounded-lg'
              // 70vw on mobile (since the ul is w-[70%]), and roughly 35vw on desktop (split into 2 columns)
              sizes='(max-width: 768px) 70vw, 35vw'
            />
            <h1 className='text-primary-50 mt-4 text-xl font-semibold sm:text-2xl'>
              {project.title}
            </h1>
            <p className='text-primary-50/80 pt-2 font-medium'>
              {project.contribution}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
