import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export interface NavLink {
  id: number;
  url: string;
  label: string;
}

export interface Service {
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
  image: StaticImageData;
  title: string;
  contribution: string;
}

export interface Skill {
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
