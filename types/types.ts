import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface NavLink {
  id: number;
  url: string;
  label: string;
}

export interface Service {
  id: number;
  icon: StaticImageData;
  name: string;
  description: string;
}

export interface ResumeExp {
  Icon: IconType;
  role: string;
  description: string;
  date?: string;
}

export interface Project {
  id: number;
  image: StaticImageData;
  title: string;
  contribution: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: IconType;
  percentage: number;
}

export interface ClientReview {
  image: StaticImageData;
  review: string;
  name: string;
  role: string;
}

export interface Blog {
  id: number;
  image: StaticImageData;
  date: string;
  title: string;
  techStack: string[];
}
