import { Center } from '@/components';

/** @param {{ label: string; tone: string }} props */
export function ProjectSlider({ label, tone }) {
  return (
    <Center
      className={`relative w-1/4 overflow-hidden rounded ${tone}`}
      style={{ minWidth: '150px', height: '20vw' }}
    >
      <div
        aria-hidden='true'
        className='absolute inset-4 border border-white/35'
      />
      <span className='relative max-w-[10ch] text-center text-sm uppercase tracking-[0.15em] text-white mix-blend-difference'>
        {label}
      </span>
    </Center>
  );
}
