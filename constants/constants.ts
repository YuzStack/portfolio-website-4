import {
  Blog,
  ClientReview,
  NavLink,
  Project,
  ResumeExp,
  Service,
  Skill,
} from '@/types/types';

import serviceIcon1 from '@/public/images/s1.png';
import serviceIcon2 from '@/public/images/s2.png';
import serviceIcon3 from '@/public/images/s3.png';
import serviceIcon4 from '@/public/images/s4.png';

import { FaCodepen, FaReact } from 'react-icons/fa';
import { BsDatabase } from 'react-icons/bs';
import { BiBadge } from 'react-icons/bi';

import projImg1 from '@/public/images/p1.jpg';
import projImg2 from '@/public/images/p2.jpg';
import projImg3 from '@/public/images/p3.jpg';
import projImg4 from '@/public/images/p4.jpg';

import {
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';

import clientImg1 from '@/public/images/c1.png';
import clientImg2 from '@/public/images/c2.png';
import clientImg3 from '@/public/images/c3.png';
import clientImg4 from '@/public/images/c4.png';
import clientImg5 from '@/public/images/c5.png';

import blogImg1 from '@/public/images/b1.jpg';
import blogImg2 from '@/public/images/b2.jpg';
import blogImg3 from '@/public/images/b3.jpg';

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
    id: 0,
    icon: serviceIcon1,
    name: 'UI and UX',
    description:
      'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
  {
    id: 1,
    icon: serviceIcon2,
    name: 'Web and Mobile App',
    description:
      'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
  {
    id: 2,
    icon: serviceIcon3,
    name: 'Design & Creative',
    description:
      'Designing interfaces that are intuitive, efficient, and enjoyable to use.',
  },
  {
    id: 3,
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

export const projects: Project[] = [
  {
    id: 0,
    image: projImg1,
    title: 'Modern Finance Dashboard UI',
    contribution: 'Apps, UI/UX',
  },
  {
    id: 1,
    image: projImg2,
    title: 'Portfolio Website for Creatives',
    contribution: 'Branding, Motion',
  },
  {
    id: 2,
    image: projImg3,
    title: 'Brand Identity for Startups',
    contribution: 'Branding, UI/UX',
  },
  {
    id: 3,
    image: projImg4,
    title: 'SaaS Dashboard Development',
    contribution: 'Apps, UI/UX',
  },
];

export const skills: Skill[] = [
  { id: 0, name: 'JavaScript', icon: SiJavascript, percentage: 90 },
  { id: 1, name: 'React', icon: SiReact, percentage: 93 },
  { id: 2, name: 'Next.js', icon: SiNextdotjs, percentage: 88 },
  { id: 3, name: 'Tailwind CSS', icon: SiTailwindcss, percentage: 95 },
  { id: 4, name: 'TypeScript', icon: SiTypescript, percentage: 81 },
  { id: 5, name: 'Supabase', icon: SiSupabase, percentage: 85 },
];

export const clientReviews: ClientReview[] = [
  {
    image: clientImg1,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae modi repellat veniam ratione perspiciatis ut rem reprehenderit commodi officia doloribus',
    name: 'Jassica Doe',
    role: 'CEO , Tech Company',
  },
  {
    image: clientImg2,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae modi repellat veniam ratione perspiciatis ut rem reprehenderit commodi officia doloribus',

    name: 'John Doe',
    role: 'UI UX Designer',
  },
  {
    image: clientImg3,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae modi repellat veniam ratione perspiciatis ut rem reprehenderit commodi officia doloribus',
    name: 'Jora Doe',
    role: 'CEO , Design Studio',
  },
  {
    image: clientImg4,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae modi repellat veniam ratione perspiciatis ut rem reprehenderit commodi officia doloribus',
    name: 'Janny Doe',
    role: 'CEO , Landscape',
  },
  {
    image: clientImg5,
    review:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae modi repellat veniam ratione perspiciatis ut rem reprehenderit commodi officia doloribus',
    name: 'Jara Doe',
    role: 'Web Developer',
  },
];

export const blogs: Blog[] = [
  {
    id: 0,
    image: blogImg1,
    date: '5 July 2025',
    title: 'Learn how to build an amazing portfolio website using next js',
    techStack: ['React', 'Next.js', 'Tailwind'],
  },
  {
    id: 1,
    image: blogImg2,
    date: '5 July 2025',
    title: 'Learn how to build an amazing portfolio website using next js',
    techStack: ['React', 'Next.js', 'Tailwind'],
  },
  {
    id: 2,
    image: blogImg3,
    date: '5 July 2025',
    title: 'Learn how to build an amazing portfolio website using next js',
    techStack: ['React', 'Next.js', 'Tailwind'],
  },
];
