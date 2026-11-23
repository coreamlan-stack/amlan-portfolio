'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const medias = socialMedias.map(({ href, title }) => (
    <li
      key={title}
      className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
    >
      {href ? (
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      ) : (
        <span
          aria-disabled='true'
          className='inline-flex p-2 text-sm text-[#f5f3eb]/55'
        >
          {title}
        </span>
      )}
    </li>
  ));

  return (
    <div className='w-full px-6 pt-4 sm:px-14'>
      <div className='flex flex-wrap items-stretch justify-between gap-8 pt-4'>
        <div className='flex flex-wrap gap-x-7 gap-y-6 sm:gap-x-10'>
          <div>
            <ListTitle>Version</ListTitle>
            <p>2026 © Portfolio</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className='text-sm text-[#f5f3eb]/80'>
              <time>India · GMT+5:30</time>
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <ListTitle>Socials</ListTitle>
          <ul className='flex gap-5'>{medias}</ul>
        </div>
      </div>
    </div>
  );
}
