import { Service } from '@/types/types';
import Image from 'next/image';

export default function ServiceCard({ id, icon, name, description }: Service) {
  return (
    <li
      data-aos='fade-right'
      data-aos-anchor-placement='top-center'
      data-aos-delay={id * 100}
    >
      <Image src={icon} width={60} height={60} alt='icon' />
      <h1 className='my-6 text-xl font-bold text-gray-200 md:text-2xl'>
        {name}
      </h1>
      <p className='text-gray-300'>{description}</p>
    </li>
  );
}
