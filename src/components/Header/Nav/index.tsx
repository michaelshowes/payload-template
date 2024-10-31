'use client';

import Link from 'next/link';
import React from 'react';

import { SearchIcon } from 'lucide-react';

import type { Header as HeaderType } from '@/payload-types';
import { CMSLink } from '@/payload/components/Link';

export const HeaderNav: React.FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || [];

  return (
    <nav className='flex gap-3 items-center'>
      {navItems.map(({ link }, i) => {
        return (
          <CMSLink
            key={i}
            {...link}
            appearance='link'
          />
        );
      })}
      <Link href='/search'>
        <span className='sr-only'>Search</span>
        <SearchIcon className='w-5 text-primary' />
      </Link>
    </nav>
  );
};
