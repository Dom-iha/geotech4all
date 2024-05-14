import { ReactElement } from 'react';

export interface NavbarLink {
  route: string;
  label: string;
}
export interface SidebarLink {
  route: string;
  label: string;
  icon: ReactElement | null;
}
interface MenuProps {
  toggleMenu: () => void;
  isOpen: boolean;
}

export interface ArticleProps {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  content: string;
  image: string;
  category: string;
  createdAt: Date;
  author: User;
}
export interface User {
  id: string;
  name: string | null;
  email: string;
  image?: string | null;
}

export interface Author {
  id: string;
  name: string;
  email: string;
  image: string;
}
export interface CategoryResponseType {
  id: string;
  name: string;
  title: string;
}
export interface ArticleResponseType {
  id: string;
  createdAt: string;
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  content: string;
  featured: Boolean;
  views: string;
  authorId: string;
  categoryName: string;
  author: Author;
}

export interface TestimonialResponseType {
  id: string;
  name: string;
  message: string;
  position: string;
  authorId: string;
  author: Author;
}

export interface EventResponseType {
  id: string;
  title: string;
  details: string;
  date: string;
  authorId: string;
  author: Author;
}

export interface OpportunityResponseType {
  id: string;
  title: string;
  description: string;
  position: string;
  company: string;
  authorId: string;
  author: Author;
}
