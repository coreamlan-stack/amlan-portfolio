import {
  SiDocker,
  SiFlutter,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiRedis,
  SiSpringboot,
} from 'react-icons/si';

import { Center } from '@/components';

const icons = {
  atom: SiReact,
  container: SiDocker,
  database: SiPostgresql,
  layers: SiNextdotjs,
  leaf: SiSpringboot,
  mongodb: SiMongodb,
  redis: SiRedis,
  smartphone: SiFlutter,
};

/** @param {{ label: string; icon: keyof typeof icons; tone: string }} props */
export function ProjectSlider({ label, icon, tone }) {
  const Icon = icons[icon] || SiReact;

  return (
    <Center
      className={`relative w-1/4 overflow-hidden rounded-2xl border border-white/10 ${tone}`}
      style={{
        minWidth: 'min(34vw, 180px)',
        height: 'clamp(100px, 11vw, 148px)',
      }}
    >
      <div
        aria-hidden='true'
        className='absolute inset-3 rounded-xl border border-white/20'
      />
      <div className='relative flex flex-col items-center gap-2 px-3 text-center text-white'>
        <span className='flex size-10 items-center justify-center rounded-full border border-white/30 bg-black/15 backdrop-blur-sm'>
          <Icon size={22} strokeWidth={1.7} aria-hidden='true' />
        </span>
        <span className='max-w-[11ch] text-[clamp(.8rem,1.1vw,1rem)] font-medium tracking-tight'>
          {label}
        </span>
      </div>
    </Center>
  );
}
