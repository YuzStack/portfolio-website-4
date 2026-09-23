import { services } from '@/constants/constants';
import ServiceCard from './ServiceCard';

export default function Services() {
  return (
    <section className='py-16'>
      <h1 className='text-primary-50 text-center text-2xl font-bold md:text-4xl xl:text-5xl'>
        Colleborate with brand <br /> and agencies to create <br /> impactful
        results
      </h1>
      <ul className='mx-auto mt-20 grid w-[90%] items-center gap-10 sm:w-[70%] md:grid-cols-2 xl:grid-cols-4'>
        {services.map((service) => (
          <ServiceCard
            key={service.name}
            icon={service.icon}
            name={service.name}
            description={service.description}
          />
        ))}
      </ul>
    </section>
  );
}
