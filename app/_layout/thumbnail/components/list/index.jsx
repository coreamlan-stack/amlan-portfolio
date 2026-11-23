'use client';

import Image from 'next/image';
import Link from 'next/link';

import { thumbnailOptions } from '@/data';

/**
 * @param {Object} props
 * @param {(index: number) => void} props.handlePointerEnter
 * @param {(index: number) => void} props.handlePointerLeave
 * @param {(x: number, y: number) => void} props.moveItems
 */
export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}) {
  const items = thumbnailOptions.map(
    ({ href, title, category, cover, alt }, index) => {
      const id = index;
      return (
        <li
          key={`thumbnail-list-${id}`}
          className='group relative isolate border-t border-solid transition-colors duration-500 before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-screen before:-translate-x-1/2 before:bg-transparent before:transition-colors before:duration-500 last-of-type:border-b hover:before:bg-primary/5'
          style={{
            paddingInline: 'clamp(1.25rem, 5vw, 5rem)',
            paddingBlock: 'clamp(1.5rem, 3vw, 3rem)',
          }}
          onPointerEnter={event => {
            if (event.pointerType !== 'mouse') return;
            handlePointerEnter(id);
            moveItems(event.clientX, event.clientY);
          }}
          onPointerLeave={event => {
            if (event.pointerType !== 'mouse') return;
            handlePointerLeave(id);
            moveItems(event.clientX, event.clientY);
          }}
        >
          <Link
            href={href}
            className='flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap'
            passHref
          >
            <div className='mb-4 w-full overflow-hidden rounded-2xl border border-white/10 lg:hidden'>
              <Image
                src={cover}
                alt={alt}
                width={1200}
                height={960}
                unoptimized
                className='aspect-[5/3] w-full object-cover transition-transform duration-700 motion-safe:group-active:scale-[1.03]'
              />
            </div>
            <h4
              style={{
                fontSize: 'clamp(2rem, 5vw, 5rem)',
              }}
            >
              {title}
            </h4>
            <p className='text-sm font-medium text-muted-foreground sm:text-lg'>
              {category}
            </p>
          </Link>
        </li>
      );
    },
  );

  return <ul className='group'>{items}</ul>;
}
