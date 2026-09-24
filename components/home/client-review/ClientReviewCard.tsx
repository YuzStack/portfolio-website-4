import { ClientReview } from '@/types/types';
import Image from 'next/image';

export default function ClientReviewCard({
  image,
  review,
  name,
  role,
}: ClientReview) {
  return (
    <div className='m-2'>
      <Image
        src={image}
        alt={name}
        width={60}
        height={60}
        className='rounded-full'
      />
      <p className='mt-6 text-base font-medium text-gray-200'>"{review}"</p>
      <h1 className='mt-6 text-xl font-bold text-cyan-200'>{name}</h1>
      <p className='text-primary-50 mt-1'>{role}</p>
    </div>
  );
}
