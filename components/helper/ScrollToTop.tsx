'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show and hide scroll-to-top button base on scroll position
  useEffect(function () {
    const handleToggleVisibility = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener('scroll', handleToggleVisibility);

    return () => window.removeEventListener('scroll', handleToggleVisibility);
  }, []);

  // Scroll-To-Top Function
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className='fixed right-4 bottom-4 animate-pulse'>
      {isVisible && (
        <button
          className='flex size-12 items-center justify-center rounded-full bg-blue-950/60 focus:outline-none'
          onClick={scrollToTop}
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}
