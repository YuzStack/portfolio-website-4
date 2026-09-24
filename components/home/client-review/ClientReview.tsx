'use client';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ClientReviewCard from './ClientReviewCard';
import { clientReviews } from '@/constants/constants';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function ClientReview() {
  return (
    <section className='py-16'>
      <h1 className='text-primary-50 text-center text-2xl font-bold md:text-4xl xl:text-5xl'>
        Kind words from satisfied <br />{' '}
        <span className='text-cyan-300'>clients</span>
      </h1>
      <ul className='mx-auto mt-16 w-[70%]'>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={false}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3_000}
        >
          {clientReviews.map((review) => (
            <ClientReviewCard
              image={review.image}
              review={review.review}
              name={review.name}
              role={review.role}
              key={review.name}
            />
          ))}
        </Carousel>
      </ul>
    </section>
  );
}
