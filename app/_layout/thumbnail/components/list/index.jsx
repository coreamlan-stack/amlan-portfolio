'use client';

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
  const items = thumbnailOptions.map(({ href, title, category }, index) => {
    const id = index;
    return (
      <li
        key={`thumbnail-list-${id}`}
        className='group border-t border-solid transition-colors duration-500 hover:bg-primary/5 last-of-type:border-b'
        style={{
          paddingInline: 'clamp(1.25rem, 5vw, 5rem)',
          paddingBlock: 'clamp(1.75rem, 4vw, 4rem)',
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
          <h4
            style={{
              fontSize: 'clamp(2.25rem, 6vw, 6rem)',
            }}
          >
            {title}
          </h4>
          <p className='text-sm font-medium text-muted-foreground sm:text-lg'>{category}</p>
        </Link>
      </li>
    );
  });

  return <ul className='group'>{items}</ul>;
}
