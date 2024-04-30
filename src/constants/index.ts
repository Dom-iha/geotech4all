import { NavbarLink, SidebarLink } from '@/types';

export const navbarLinks: NavbarLink[] = [
  {
    route: '/',
    label: 'Home',
  },
  {
    route: '/services',
    label: 'services',
  },
  {
    route: '/geohub',
    label: 'geosciencehub',
  },
  {
    route: '/blog',
    label: 'blog',
  },
  {
    route: '/about',
    label: 'about',
  },
  {
    route: '/gallery',
    label: 'gallery',
  },
];

export const sidebarLinks: SidebarLink[] = [
  {
    route: '/admin',
    label: 'dashboard',
    icon: null,
  },
  {
    route: '/admin/create',
    label: 'create',
    icon: null,
  },
  {
    route: '/admin/authors',
    label: 'authors',
    icon: null,
  },
  {
    route: '/admin/help',
    label: 'help',
    icon: null,
  }
];
