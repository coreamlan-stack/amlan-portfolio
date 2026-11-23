import { projectOptions } from '@/data';

import { LogoLoop } from './slider';

export function Project() {
  return (
    <section aria-labelledby='technology-stack' className='relative z-10 mt-20'>
      <div className='mx-auto max-w-[1440px] px-6 sm:px-12 lg:px-20'>
        <div className='flex flex-col gap-3 py-7 sm:flex-row sm:items-end sm:justify-between'>
          <p className='text-xs uppercase tracking-[.24em] text-primary'>
            Tools & technologies
          </p>
          <h2
            id='technology-stack'
            className='max-w-xl text-xl tracking-[-.04em] sm:text-2xl'
          >
            Interfaces, systems, and the infrastructure behind them.
          </h2>
        </div>
        <div className='space-y-1 py-7 sm:py-9'>
          <LogoLoop
            logos={projectOptions.slice(0, 9)}
            speed={42}
            ariaLabel='Frontend and mobile technologies'
          />
          <LogoLoop
            logos={projectOptions.slice(9)}
            speed={36}
            direction='right'
            ariaLabel='Backend and infrastructure technologies'
          />
        </div>
      </div>
    </section>
  );
}
