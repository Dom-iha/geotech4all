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

export const Services = [
  {
    name: 'Geological Services',
    description: 'Our geological services encompass a wide range of expertise including geological mapping, mineral exploration, and site characterization.',
    route:'geological-services'
  },
  {
    name: 'Project Writing',
    description: 'Our project writing services offer professional assistance in preparing high-quality project proposals, reports and research papers.',
    route:'project-writing'
  },
  {
    name: 'Field Mapping',
    description: 'Our field mapping services combine fieldwork expertise with advanced mapping technologies to facilitate accurate geological surveys.',
    route:'field-mapping'
  },
  {
    name: 'Software Training',
    description: 'Our software training programs provide hands-on instruction in popular geological software incliding ArcGis, Petrel and Surfer.',
    route:'software-training'
  },
  {
    name: 'Equipment sales',
    description: 'We offer a comprehensive selection of high quality geological equipments to support fieldwork, research, and exploration activities.',
    route:'equipment-sales'
  },
  {
    name: 'Geopysical survey',
    description: 'Our geophysical survey services utilize state-of-the-art equipment to conduct non-invasive subsurface investigations.',
    route:'geophysical-survey'
  },
];
