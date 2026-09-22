'use client';

import { navLinks } from '@/constants/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiDownload } from 'react-icons/bi';
import { FaCode } from 'react-icons/fa';
import { HiBars3BottomRight } from 'react-icons/hi2';

interface DesktopHeaderProps {
  openMobileNavHandler: () => void;
}

export default function Header({ openMobileNavHandler }: DesktopHeaderProps) {
  const [headerBg, setHeaderBg] = useState(false);

  useEffect(function () {
    const headerBgHandler = () => {
      if (window.scrollY >= 90) setHeaderBg(true);
      if (window.scrollY < 90) setHeaderBg(false);
    };

    window.addEventListener('scroll', headerBgHandler);

    return () => window.removeEventListener('scroll', headerBgHandler);
  }, []);

  return (
    <header
      className={`fixed z-100 h-[12vh] w-full transition-all duration-200 ${headerBg ? 'bg-primary-800 shadow-md' : ''}`}
    >
      <div className='mx-auto flex h-full w-[90%] items-center justify-between'>
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='bg-primary-50 flex size-10 flex-col items-center justify-center rounded-full'>
            <FaCode className='text-primary-950 size-5' />
          </div>
          <h1 className='hidden text-xl font-bold text-white sm:block md:text-2xl'>
            Yusuf
          </h1>
        </div>

        {/* NAVLINKS */}
        <nav className='hidden items-center space-x-10 lg:flex'>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className='text-primary-50 text-base font-medium transition-all duration-200 hover:text-cyan-300'
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* BUTTONS */}
        <div className='flex items-center space-x-4'>
          {/* CV BUTTON */}
          <button className='flex items-center space-x-2 rounded-lg bg-blue-800 px-8 py-3.5 text-sm text-white transition-all duration-300 hover:bg-blue-900'>
            <BiDownload className='size-5' />
            <span>Download CV</span>
          </button>

          {/* MOBILE MENU BUTTON */}
          <button onClick={openMobileNavHandler}>
            <HiBars3BottomRight className='text-primary-50 size-8 lg:hidden' />
          </button>
        </div>
      </div>
    </header>
  );
}
