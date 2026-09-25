import { BiEnvelope, BiMap, BiPhone } from 'react-icons/bi';
import { FaFacebook, FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section className='py-16'>
      <div className='mx-auto grid w-[90%] items-center gap-10 md:w-[80%] lg:w-[70%] lg:grid-cols-2'>
        {/* TEXT CONTENT */}
        <div>
          <h1 className='text-3xl font-bold text-gray-200 sm:text-4xl lg:text-5xl'>
            Schedule a call with me to see if I can help
          </h1>
          <p className='mt-6 text-base text-gray-400 sm:text-lg'>
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          {/* Info */}
          <div className='mt-7 space-y-4'>
            <a
              href='mailto:nasrudeenyuusuf@gmail.com'
              className='flex items-center gap-3'
            >
              <BiEnvelope className='size-9 text-cyan-300' />
              <span className='text-lg font-bold text-gray-400'>
                nasrudeenyuusuf@gmail.com
              </span>
            </a>
            <a href='tel:+2347063153269' className='flex items-center gap-3'>
              <BiPhone className='size-9 text-cyan-300' />
              <span className='text-lg font-bold text-gray-400'>
                +2347063153269
              </span>
            </a>
            <address className='flex items-center gap-3'>
              <BiMap className='size-9 text-cyan-300' />
              <span className='text-lg font-bold text-gray-400'>
                Kwara, Nigeria
              </span>
            </address>
          </div>

          {/* Social Icons */}
          <div className='mt-8 flex items-center gap-3'>
            <a
              href='https://www.linkedin.com/in/yusuf-oyinlola'
              target='_blank'
              className='flex size-14 cursor-pointer flex-col items-center justify-center rounded-full bg-blue-950/60 transition-all duration-300 hover:bg-blue-800'
            >
              <FaLinkedin className='size-7' />
            </a>
            <a
              href='https://github.com/YuzStack'
              target='_blank'
              className='flex size-14 cursor-pointer flex-col items-center justify-center rounded-full bg-blue-950/60 transition-all duration-300 hover:bg-zinc-800'
            >
              <FaGithub className='size-7' />
            </a>
            <a
              href='https://x.com/yuzstack'
              target='_blank'
              className='flex size-14 cursor-pointer flex-col items-center justify-center rounded-full bg-blue-950/60 transition-all duration-300 hover:bg-zinc-900'
            >
              <FaXTwitter className='size-7' />
            </a>
          </div>
        </div>

        {/* FORM */}
        <form className='bg-primary-500 space-y-6 rounded-lg p-5 md:p-10'>
          <input
            type='text'
            placeholder='Name'
            className='bg-primary-400 placeholder:text-primary-50/70 w-full rounded-md px-4 py-3.5 outline-none'
          />
          <input
            type='email'
            placeholder='Email'
            className='bg-primary-400 placeholder:text-primary-50/70 w-full rounded-md px-4 py-3.5 outline-none'
          />
          <input
            type='tel'
            placeholder='Mobile Number'
            className='bg-primary-400 placeholder:text-primary-50/70 w-full rounded-md px-4 py-3.5 outline-none'
          />
          <textarea
            placeholder='Your Message'
            className='bg-primary-400 placeholder:text-primary-50/70 h-40 w-full rounded-md px-4 py-3.5 outline-none'
          ></textarea>
          <button className='mt-2 rounded-full bg-blue-950 px-12 py-4 transition-all duration-300 hover:bg-blue-900'>
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
