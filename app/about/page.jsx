import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MediaReveal } from '@/app/_components/media-reveal';
import { PageReveal } from '@/app/_components/page-reveal';
import { PageShell } from '@/app/_components/page-shell';
import { SubpageNav } from '@/app/_components/subpage-nav';

export const metadata = {
  title: 'About',
  description:
    'Core Amlan — design-led software development across frontend, UI/UX and mobile.',
};

const disciplines = [
  {
    number: '01',
    title: 'Interface engineering',
    detail:
      'Building clear, accessible, maintainable frontend experiences that support real workflows.',
  },
  {
    number: '02',
    title: 'Interaction & motion',
    detail:
      'Making navigation, transitions and feedback feel intentional rather than decorative.',
  },
  {
    number: '03',
    title: 'Mobile & systems',
    detail:
      'Exploring Flutter experiences and the APIs, databases and infrastructure that power applications.',
  },
];

const tools = [
  {
    title: 'Frontend & design',
    items: [
      'React',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'UI/UX',
      'Framer Motion',
      'GSAP',
    ],
  },
  {
    title: 'Mobile & backend',
    items: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'REST APIs'],
  },
  {
    title: 'Data & infrastructure',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'GitHub', 'GitLab'],
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <main className='relative min-h-screen bg-background/85 text-foreground'>
        <SubpageNav />
        <section className='mx-auto max-w-[1440px] px-6 pb-24 pt-36 sm:px-12 sm:pt-44 lg:px-20'>
          <p className='mb-10 text-xs uppercase tracking-[0.25em] text-primary'>
            More than a title
          </p>
          <PageReveal>
            <h1 className='max-w-6xl text-[clamp(3.6rem,10.2vw,9rem)] font-medium leading-[0.94] tracking-[-0.075em]'>
              Design-led.
              <span className='block text-primary'>Code-minded.</span>
            </h1>
          </PageReveal>
          <div className='mt-14 flex flex-col gap-9 border-t border-white/15 pt-10 md:flex-row md:items-start md:justify-between'>
            <p className='max-w-3xl text-xl leading-relaxed -tracking-wide sm:text-3xl'>
              I’m <span className='core-amlan-name'>Core Amlan</span>, a
              software developer and UI/UX designer. I enjoy turning complex
              systems into experiences people can understand, use and trust.
            </p>
            <ArrowDownRight
              size={34}
              className='shrink-0 text-primary'
              aria-hidden='true'
            />
          </div>
        </section>

        <section className='mx-auto grid max-w-[1440px] gap-12 px-6 pb-28 sm:px-12 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:px-20'>
          <MediaReveal className='overflow-hidden rounded-3xl bg-[#182124]'>
            <Image
              src='/projects/about-abstract.svg'
              width={1000}
              height={1000}
              unoptimized
              alt='Abstract illustration connecting design and engineering'
              className='aspect-square size-full object-cover'
            />
          </MediaReveal>
          <div className='flex flex-col justify-center'>
            <p className='mb-7 text-xs uppercase tracking-[0.25em] text-primary'>
              The way I work
            </p>
            <PageReveal>
              <h2 className='max-w-xl text-3xl leading-tight -tracking-wider sm:text-5xl'>
                The strongest digital products make complexity feel effortless.
              </h2>
            </PageReveal>
            <p className='mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>
              I work at the intersection of interface design and implementation:
              structuring workflows, refining responsive layouts, and shaping
              interactions down to the smallest details. I care about how the
              product behaves just as much as how it looks.
            </p>
          </div>
        </section>

        <section className='bg-[#151d1e] px-6 py-24 sm:px-12 lg:px-20'>
          <div className='mx-auto max-w-screen-xl'>
            <p className='mb-4 text-xs uppercase tracking-[0.25em] text-primary'>
              What I bring to a project
            </p>
            <h2 className='mb-12 max-w-3xl text-3xl -tracking-wider sm:text-5xl'>
              From first sketch to the final interaction.
            </h2>
            {disciplines.map(item => (
              <PageReveal key={item.number}>
                <div className='grid gap-4 border-t border-white/15 py-9 md:grid-cols-[80px_1fr_1fr] md:gap-10'>
                  <span className='text-sm text-primary'>{item.number}</span>
                  <h3 className='text-2xl tracking-[-0.04em] sm:text-3xl'>
                    {item.title}
                  </h3>
                  <p className='max-w-lg leading-relaxed text-muted-foreground'>
                    {item.detail}
                  </p>
                </div>
              </PageReveal>
            ))}
          </div>
        </section>

        <section className='mx-auto max-w-[1440px] px-6 py-24 sm:px-12 lg:px-20'>
          <p className='mb-4 text-xs uppercase tracking-[0.25em] text-primary'>
            The toolkit
          </p>
          <h2 className='mb-12 max-w-3xl text-3xl tracking-[-.04em] sm:text-5xl'>
            What I build with.
          </h2>
          <div className='grid gap-10 md:grid-cols-3 md:gap-6'>
            {tools.map((group, index) => (
              <PageReveal
                key={group.title}
                delay={index * 0.06}
                className='border-t border-white/15 pt-6'
              >
                <h3 className='mb-6 text-sm font-medium text-primary'>
                  {group.title}
                </h3>
                <div className='flex flex-wrap gap-2'>
                  {group.items.map(item => (
                    <span
                      key={item}
                      className='rounded-full border border-white/15 px-4 py-2 text-sm transition-colors hover:border-primary hover:text-primary'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </PageReveal>
            ))}
          </div>
          <Link
            href='/work'
            className='group mt-24 flex items-center justify-between gap-4 border-t border-white/15 py-8 text-2xl tracking-tight transition-colors hover:text-primary sm:text-4xl'
          >
            Explore selected work
            <ArrowUpRight
              className='shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1'
              aria-hidden='true'
            />
          </Link>
        </section>
      </main>
    </PageShell>
  );
}
