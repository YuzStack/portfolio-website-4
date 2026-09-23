import { NavLink, ResumeExp, Service } from '@/types/types';

import serviceIcon1 from '@/public/images/s1.png';
import serviceIcon2 from '@/public/images/s2.png';
import serviceIcon3 from '@/public/images/s3.png';
import serviceIcon4 from '@/public/images/s4.png';
import { FaCodepen, FaReact } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';
import { BiBadge } from 'react-icons/bi';

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

export const resumeExps: ResumeExp[] = [
  {
    Icon: FaCodepen,
    role: 'Full-Stack Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio.',
  },
  {
    Icon: FaReact,
    role: 'Frontend Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio.',
  },
  {
    Icon: BsDatabase,
    role: 'Web Developer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio.',
  },
];

export const resumeEdus: ResumeExp[] = [
  {
    Icon: BiBadge,
    role: 'Design Institute of Technology',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio.',
    date: 'Jan 2023 - Dec 2024',
  },
  {
    Icon: FaReact,
    role: 'Bachelor in Computer Science',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio.',
    date: 'Jan 2019 - Dec 2022',
  },
  {
    Icon: BsDatabase,
    role: 'Certificate in Digital Marketing',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat eum laudantium sapiente cumque distinctio.',
    date: 'Jan 2016 - Dec 2019',
  },
];
