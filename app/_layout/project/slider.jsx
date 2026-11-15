import { Center } from '@/components';

/** @param {{ label: string; tone: string }} props */
export function ProjectSlider({ label, tone }) {
  return (
    <Center
      className={`relative w-1/4 overflow-hidden rounded-2xl border border-white/10 ${tone}`}
      style={{ minWidth: 'min(42vw, 220px)', height: 'clamp(112px, 20vw, 280px)' }}
    >
      <div
        aria-hidden='true'
        className='absolute inset-4 rounded-xl border border-white/20'
      />
      <span className='relative max-w-[11ch] px-3 text-center text-[clamp(.85rem,1.45vw,1.3rem)] font-medium tracking-tight text-white mix-blend-difference'>
        {label}
      </span>
    </Center>
  );
}
