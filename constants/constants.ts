import { NavLink, Service } from '@/types/types';

import serviceIcon1 from '@/public/images/s1.png';
import serviceIcon2 from '@/public/images/s2.png';
import serviceIcon3 from '@/public/images/s3.png';
import serviceIcon4 from '@/public/images/s4.png';

export const navLinks: NavLink[] = [
  { id: 1, url: '#', label: 'Home' },
  { id: 2, url: '#', label: 'Services' },
  { id: 3, url: '#', label: 'Resume' },
  { id: 4, url: '#', label: 'Works' },
  { id: 5, url: '#', label: 'Skills' },
  { id: 6, url: '#', label: 'Testimonials' },
  { id: 7, url: '#', label: 'Contact' },
];

export const services: Service[] = [
  {
    icon: serviceIcon1,
    name: 'UI and UX',
    description:
      'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
  {
    icon: serviceIcon2,
    name: 'Web and Mobile App',
    description:
      'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
  {
    icon: serviceIcon3,
    name: 'Design & Creative',
    description:
      'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
  {
    icon: serviceIcon4,
    name: 'Development',
    description:
      'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
];
