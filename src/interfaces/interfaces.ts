import { ButtonHTMLAttributes, ReactNode } from "react";

export interface HeaderProps {
  navLinks: NavLinks[];
}

export interface NavLinks {
  title: string;
  url: string;
}

export interface SubtitleProps {
  children: ReactNode;
  color?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  review: string;
  rating: number;
}
export interface SpecialDataProps {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
}
export interface MenuDataProps {
  id: string;
  title: string;
  imgUrl: string;
  description: string;
  code: string;
}
