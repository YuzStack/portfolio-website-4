import { ResumeExp } from '@/types/types';

export default function ResumeCard({
  Icon,
  role,
  description,
  date,
}: ResumeExp) {
  return (
    <li className='mb-6'>
      <div className='flex items-start space-x-6 rounded-md bg-blue-950/20 p-4 transition-all duration-300 sm:p-8'>
        <div className='flex size-10 flex-col items-center justify-center rounded-full bg-blue-950 sm:size-14'>
          <Icon className='text-primary-50 size-6 sm:size-8' />
        </div>
        <div className='flex-1'>
          {date && (
            <h1 className='mb-2 w-fit rounded-full bg-gray-200 px-4 py-1 text-sm font-bold text-gray-600 sm:px-6 sm:py-1.5 sm:text-lg'>
              {date}
            </h1>
          )}
          <h1 className='text-xl font-semibold text-gray-200 sm:text-2xl'>
            {role}
          </h1>
          <p className='pt-3 text-sm text-gray-300 sm:text-base'>
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}
