import { navLinks } from '@/constants/constants';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';

interface MobileHeaderProps {
  showNav: boolean;
  closeNav: () => void;
}

export default function MobileNav({ showNav, closeNav }: MobileHeaderProps) {
  const navOpen = showNav ? 'translate-x-0' : 'translate-x-full';

  return (
    <header className='lg:hidden'>
      {/* OVERLAY */}
      <div
        className={`bg-primary-950/70 fixed inset-0 right-0 z-110 transition-all duration-500 ${navOpen}`}
      />

      {/* NAVLINKS */}
      <nav
        className={`text-primary-50 fixed right-0 z-120 flex h-full w-[80%] flex-col justify-center space-y-6 bg-cyan-800 transition-all delay-300 duration-500 sm:w-[60%] ${navOpen}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className='text-primary-50 border-primary-50 ml-12 w-fit border-b-[1.5px] pb-1 text-xl sm:text-3xl'
          >
            {link.label}
          </Link>
        ))}

        {/* CLOSE BUTTON */}
        <button onClick={closeNav}>
          <CgClose className='absolute top-[0.7rem] right-[1.4rem] z-120 size-6 sm:h-8' />
        </button>
      </nav>
    </header>
  );
}
