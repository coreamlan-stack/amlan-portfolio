'use client';

import Link from 'next/link';

import { MagneticButton } from '@/components';
import { socialMedias } from '@/data';
import { randomId } from '@/utils';

import { ListTitle } from './index.styled';

export function SocialInfo() {
  const medias = socialMedias.map(({ href, title }) => {
    const id = randomId();
    return (
      <li
        key={id}
        className='border-b border-solid border-b-transparent transition-all duration-300 ease-in-expo hover:border-b-border'
      >
        <Link href={href} target='_blank' rel='noopener' passHref>
          <MagneticButton>{title}</MagneticButton>
        </Link>
      </li>
    );
  });

  return (
    <div className='mx-auto w-full max-w-[1400px] px-6 pt-4 sm:px-[clamp(1.5rem,6vw,7rem)]'>
      <div className='flex flex-wrap items-stretch justify-between gap-10 border-t border-[#f5f3eb]/15 pt-8'>
        <div className='flex flex-wrap gap-x-10 gap-y-6'>
          <div>
            <ListTitle>Version</ListTitle>
            <p className='mt-7'>2026 © Portfolio</p>
          </div>
          <div>
            <ListTitle>Local time</ListTitle>
            <p className='mt-3 text-sm text-[#f5f3eb]/80'>
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
