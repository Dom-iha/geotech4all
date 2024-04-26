'use client';
import { useState } from 'react';
import Link from 'next/link';

import SidebarLink from './sidebar-link';
import { auth, currentUser, UserButton } from '@clerk/nextjs';
import {
  ChevronFirst,
  HelpCircle,
  LayoutDashboard,
  Pen,
  User2Icon,
} from 'lucide-react';

const Sidebar = () => {
  // const { userId } = auth();
  // const user = await currentUser();
  const [expanded, setExpanded] = useState(false);

  return (
    <aside className='z-20 border-r bg-white transition-all sticky top-[60px] h-full max-h-[calc(100svh-60px)]'>
      <nav className='h-full flex flex-col gap-6 py-6 px-4 justify-between transition-all duration-300'>
        {/* logo & toggle*/}
        <div
          className={`relative flex ${
            expanded ? 'gap-0' : 'flex-col gap-4'
          } justify-between items-center`}
        >
          <Link
            href='/admin'
            className='flex text-xl items-center font-bold'
          >
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

        {/* user details / profile */}
        <div className='border-t flex pt-2'>
          <UserButton afterSignOutUrl='/' />
          <div
            className={`relative
              flex items-center gap-4
              overflow-hidden transition-all ${expanded ? 'ml-3' : 'w-0'}
          `}
          >
            <div className='leading-4'>
              <h4 className='font-semibold text-accent'>Geo Tech</h4>
              <span className='text-xs text-altTxt'>Geotech@gmail.com</span>
            </div>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
