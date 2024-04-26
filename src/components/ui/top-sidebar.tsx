'use client';
import Link from 'next/link';
import {
  ChevronFirst,
  HelpCircle,
  LayoutDashboard,
  Pen,
  User2Icon,
} from 'lucide-react';
import { useState } from 'react';
import SidebarLink from '../shared/sidebar-link';

export const TopSidebar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className='relative flex justify-between items-center'>
        <Link href='/admin' className='flex text-xl items-center font-bold'>
          <div className='w-10 h-10 rounded-lg bg-accent/80'></div>
          <span
            className={`overflow-hidden transition-all uppercase ${
              expanded ? 'ml-4' : 'w-0 ml-0'
            }`}
          >
            admin
          </span>
        </Link>
        <button
          type='button'
          onClick={() => setExpanded(!expanded)}
          title={expanded ? 'Close' : 'Open'}
          className='absolute top-1 -right-10 w-7 h-8 rounded-r-md bg-white border-r border-y text-main flex items-center justify-center'
        >
          <ChevronFirst
            size={20}
            className={`text-accent ${
              !expanded ? 'rotate-180' : ''
            } transition duration-500`}
          />
        </button>
      </div>

      {/* main nav */}
      <ul className='flex flex-col gap-4 min-w-full py-4'>
        <SidebarLink
          path='/admin'
          text='dashboard'
          icon={<LayoutDashboard size={25} />}
          expanded={expanded}
        />
        <SidebarLink
          path='/admin/create'
          text='create'
          icon={<Pen size={25} />}
          expanded={expanded}
        />
        <SidebarLink
          path='/admin/profile'
          text='profile'
          icon={<User2Icon size={25} />}
          expanded={expanded}
        />
        <SidebarLink
          path='/admin/help'
          text='help'
          icon={<HelpCircle size={25} />}
          expanded={expanded}
        />
      </ul>
    </>
  );
};
