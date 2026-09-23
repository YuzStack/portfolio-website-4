import { StaticImageData } from 'next/image';

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
