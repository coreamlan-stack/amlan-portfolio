'use client';

import { usePathname } from 'next/navigation';

/** @param {import('react').PropsWithChildren<unknown>} */
export function Transition({ children }) {
  const pathname = usePathname();

  // Page wrapper only. The introductory language loader and smooth-scroll
  // engine are mounted once in the persistent root layout.
  return <div key={pathname} className='overflow-hidden'>{children}</div>;
}
