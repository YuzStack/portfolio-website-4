'use client';

import { useState } from 'react';
import Header from './Header';
import MobileNav from './MobileNav';

export default function ResponsiveHeader() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const openMobileNav = () => setShowMobileNav(true);
  const closeMobileNav = () => setShowMobileNav(false);

  return (
    <div>
      <Header openMobileNavHandler={openMobileNav} />
      <MobileNav showNav={showMobileNav} closeNav={closeMobileNav} />
    </div>
  );
}
