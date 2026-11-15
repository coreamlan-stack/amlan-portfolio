import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { PageReveal } from '@/app/_components/page-reveal';
import { SubpageNav } from '@/app/_components/subpage-nav';
import { caseStudies } from '@/data';

export const metadata = {
  title: 'Selected Work',
  description: 'Selected frontend engineering and interface design projects by Amlan Kumar Bhowmik.',
};

export default function WorkPage() {
  return (
    <main className='relative min-h-screen bg-background text-foreground'>
      <SubpageNav />
      <section className='mx-auto max-w-[1440px] px-6 pb-16 pt-36 sm:px-12 sm:pt-44 lg:px-20'>
        <p className='mb-8 text-xs uppercase tracking-[0.28em] text-primary'>Portfolio / 2026</p>
        <div className='flex flex-col justify-between gap-10 border-b border-foreground/15 pb-14 lg:flex-row lg:items-end'>
          <PageReveal><h1 className='max-w-5xl text-[clamp(4.25rem,12vw,11rem)] font-medium leading-[0.85] tracking-[-0.075em]'>
            Selected<br/><span className='text-primary'>work.</span>
          </h1></PageReveal>
          <p className='max-w-sm text-base leading-relaxed text-muted-foreground sm:text-lg'>Building products where considered design, maintainable engineering and meaningful interaction meet.</p>
        </div>
        <div className='mt-12 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground'>
          <span>Explore projects</span><ArrowDownRight size={20} />
        </div>
      </section>

      <section className='mx-auto grid max-w-[1440px] gap-14 px-6 pb-32 sm:px-12 lg:grid-cols-2 lg:gap-10 lg:px-20'>
        {caseStudies.map((project, index) => (
          <PageReveal key={project.slug} delay={index * 0.08}><Link href={`/work/${project.slug}`} className='group block focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary'>
            <div className='relative aspect-[5/4] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#182024]'>
              <img src={project.cover} alt={project.alt} loading={index ? 'lazy' : 'eager'} className='h-full w-full object-cover transition-transform duration-700 ease-out motion-safe:group-hover:scale-[1.045]' />
              <span className='absolute right-5 top-5 flex size-12 items-center justify-center rounded-full bg-primary text-background transition-transform duration-500 group-hover:rotate-45 sm:size-14'><ArrowUpRight size={24}/></span>
            </div>
            <div className='mt-6 flex items-start justify-between gap-5'>
              <div>
                <p className='mb-3 text-xs uppercase tracking-[0.18em] text-muted-foreground'>{project.eyebrow}</p>
                <h2 className='text-3xl tracking-[-0.045em] sm:text-5xl'>{project.title}</h2>
                <p className='mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base'>{project.summary}</p>
              </div>
              <span className='shrink-0 text-xs text-muted-foreground'>{project.year}</span>
            </div>
          </Link></PageReveal>
        ))}
      </section>
      <section className='mx-auto max-w-[1440px] border-t border-white/10 px-6 py-12 sm:px-12 lg:px-20'>
        <Link href='/about' className='group inline-flex items-center gap-3 text-lg transition-colors hover:text-primary'>More about how I work <ArrowUpRight className='transition-transform group-hover:-translate-y-1 group-hover:translate-x-1' size={20}/></Link>
      </section>
    </main>
  );
}
