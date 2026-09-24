import { Blog } from '@/types/types';
import Image from 'next/image';

export default function BlogCard({ image, date, title, techStack }: Blog) {
  return (
    <li>
      <Image
        src={image}
        alt='Blog image'
        width={500}
        height={500}
        className='object-cover'
      />
      <p className='mt-4 text-base font-medium text-gray-500 sm:text-lg'>
        {date}
      </p>
      <h1 className='text-primary-50 mt-5 cursor-pointer text-lg font-bold transition-all duration-300 hover:text-cyan-300 hover:underline sm:text-xl'>
        {title}
      </h1>
      <ul className='mt-4 flex items-center gap-2'>
        {techStack.map((tech) => (
          <li className='text-primary-50 rounded-full bg-blue-950 px-4 py-1.5 text-sm font-bold sm:text-base'>
            {tech}
          </li>
        ))}
      </ul>
    </li>
  );
}
