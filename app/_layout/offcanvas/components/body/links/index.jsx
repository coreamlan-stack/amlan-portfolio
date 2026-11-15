'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { Dot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navItems } from '@/data';

import { scale, slideOut } from './variants';

export function OffcanvasLinks({ onClose }) {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname);

  return (
    <nav aria-label='Portfolio sections' className='flex flex-col gap-5'>
      <div className='border-b border-background/20 pb-5'>
        <p className='text-xs uppercase tracking-[0.24em] text-background/60'>Navigation</p>
      </div>
      <ul onPointerLeave={() => setActiveLink(pathname)}>
        {navItems.map(({ href, title }, index) => (
          <motion.li
            key={href}
            className='relative my-4 flex items-center'
            custom={index}
            variants={slideOut}
            initial='initial'
            animate='enter'
            exit='exit'
            onPointerEnter={event => {
              if (event.pointerType === 'mouse') setActiveLink(href);
            }}
          >
            <motion.div
              aria-hidden='true'
              className='absolute -left-9'
              variants={scale}
              animate={activeLink === href ? 'open' : 'closed'}
            >
              <Dot size={30} />
            </motion.div>
            <Link
              href={href}
              onClick={onClose}
              aria-current={pathname === href ? 'page' : undefined}
              className='block w-full py-1 text-[clamp(2.2rem,8vw,4rem)] leading-[1.08] tracking-[-0.045em] capitalize transition-opacity hover:opacity-60 focus-visible:underline'
            >
              {title}
            </Link>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}
