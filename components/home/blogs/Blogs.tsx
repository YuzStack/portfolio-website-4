import { blogs } from '@/constants/constants';
import BlogCard from './BlogCard';

export default function Blogs() {
  return (
    <section className='py-16'>
      <h1 className='text-primary-50 text-center text-2xl font-bold md:text-4xl xl:text-5xl'>
        My latest <span className='text-cyan-300'>Blogs</span>
      </h1>
      <ul className='mx-auto mt-16 grid w-[70%] items-center gap-10 xl:grid-cols-3 xl:gap-4'>
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            date={blog.date}
            title={blog.title}
            techStack={blog.techStack}
          />
        ))}
      </ul>
    </section>
  );
}
