'use client';

import Image from 'next/image';
import Link from 'next/link';

export function NavbarBrand() {
  return (
    <Link
      href='/'
      className='group flex items-center gap-3 pb-5'
      aria-label='Core Amlan home'
    >
      <div className='flex items-center justify-center transition-transform duration-500 ease-in-expo group-hover:rotate-[360deg]'>
        <Image src='/icon.svg' alt='' width={36} height={31} priority />
      </div>
      <span className='brand-wordmark text-[0.95rem]'>Core Amlan</span>
    </Link>
  );
}
