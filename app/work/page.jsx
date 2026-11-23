import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { FluidProjectCover } from '@/app/_components/fluid-project-cover';
import { PageReveal } from '@/app/_components/page-reveal';
import { PageShell } from '@/app/_components/page-shell';
import { SubpageNav } from '@/app/_components/subpage-nav';
import { caseStudies } from '@/data';

export const metadata = {
  title: 'Selected Work',
  description: 'Frontend, Flutter and business software by Core Amlan.',
};

const accessLabels = {
  internal: 'Internal systems',
  independent: 'Independent project',
  'details-pending': 'Project details pending',
  public: 'Public project',
};

export default function WorkPage() {
  return (
    <PageShell>
      <main className='relative min-h-screen bg-background/85 text-foreground'>
        <SubpageNav />
        <section className='mx-auto max-w-[1440px] px-6 pb-16 pt-36 sm:px-12 sm:pt-44 lg:px-20'>
          <p className='mb-8 text-xs uppercase tracking-[0.28em] text-primary'>
            Selected projects / 2026
          </p>
          <div className='flex flex-col justify-between gap-10 border-b border-foreground/15 pb-14 lg:flex-row lg:items-end'>
            <PageReveal>
              <h1 className='max-w-5xl text-[clamp(4.25rem,12vw,11rem)] font-medium leading-[0.85] tracking-[-0.075em]'>
                Selected
                <span className='block text-primary'>work.</span>
              </h1>
            </PageReveal>
            <p className='max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg'>
              Interfaces, products and experiments across web, mobile and
              software engineering. Each project tells a different part of the
              story.
            </p>
          </div>
          <div className='mt-12 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            <span>
              {String(caseStudies.length).padStart(2, '0')} selected projects
            </span>
            <ArrowDownRight size={20} aria-hidden='true' />
          </div>
        </section>

        <section
          aria-label='Project gallery'
          className='mx-auto max-w-[1440px] space-y-24 px-6 pb-28 sm:px-12 lg:space-y-32 lg:px-20'
        >
          {caseStudies.map((project, index) => {
            const imageOnRight = index % 2 === 1;

            return (
              <PageReveal
                key={project.slug}
                delay={Math.min(index * 0.04, 0.12)}
              >
                <Link
                  href={`/work/${project.slug}`}
                  className='group grid items-center gap-8 outline-offset-8 focus-visible:outline-2 focus-visible:outline-primary lg:grid-cols-2 lg:gap-16'
                >
                  <div
                    className={`relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-[#182024] transition-colors duration-300 group-hover:border-primary/45 group-focus-visible:border-primary lg:aspect-[16/10] ${
                      imageOnRight ? 'lg:order-2' : ''
                    }`}
                  >
                    <FluidProjectCover
                      src={project.cover}
                      alt={project.alt}
                      priority={index === 0}
                    />
                    <span className='absolute left-4 top-4 rounded-full border border-white/20 bg-[#121a19]/80 px-3 py-2 text-[11px] tracking-wide text-white backdrop-blur-sm sm:left-6 sm:top-6'>
                      {accessLabels[project.access] || 'Project'}
                    </span>
                    <span className='absolute bottom-5 right-5 flex size-12 items-center justify-center rounded-full bg-primary text-background transition-transform duration-500 motion-safe:group-hover:rotate-45 sm:size-14'>
                      <ArrowUpRight size={23} aria-hidden='true' />
                    </span>
                  </div>
                  <div
                    className={`max-w-xl py-2 transition-transform duration-300 motion-safe:group-hover:translate-x-1 lg:py-8 ${
                      imageOnRight ? 'lg:order-1 lg:justify-self-end' : ''
                    }`}
                  >
                    <div className='flex items-start justify-between gap-5'>
                      <p className='text-xs uppercase tracking-[0.18em] text-muted-foreground'>
                        {project.eyebrow}
                      </p>
                      <span className='shrink-0 text-xs text-muted-foreground'>
                        {project.year}
                      </span>
                    </div>
                    <h2 className='mt-5 text-4xl tracking-[-0.045em] sm:text-6xl'>
                      {project.title}
                    </h2>
                    <p className='mt-5 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg'>
                      {project.summary}
                    </p>
                    <span className='mt-8 inline-flex items-center gap-3 text-sm text-primary'>
                      View project <ArrowUpRight size={18} aria-hidden='true' />
                    </span>
                  </div>
                </Link>
              </PageReveal>
            );
          })}
        </section>

        <aside className='mx-auto max-w-[1440px] border-t border-white/10 px-6 py-12 sm:px-12 lg:px-20'>
          <p className='max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base'>
            Some work is described at a high level because implementation
            details are not available for public sharing. All gallery visuals
            are authentic project screens.
          </p>
          <Link
            href='/about'
            className='group mt-9 inline-flex items-center gap-3 text-lg transition-colors hover:text-primary'
          >
            More about how I work
            <ArrowUpRight
              className='transition-transform group-hover:-translate-y-1 group-hover:translate-x-1'
              size={20}
              aria-hidden='true'
            />
          </Link>
        </aside>
      </main>
    </PageShell>
  );
}
