import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

import { PageReveal } from '@/app/_components/page-reveal';
import { PageShell } from '@/app/_components/page-shell';
import { SubpageNav } from '@/app/_components/subpage-nav';

export const metadata = {
  title: 'About',
  description: 'About Amlan Kumar Bhowmik — software developer and UI/UX designer.',
};

const strengths = [
  { number: '01', title: 'Frontend engineering', text: 'Accessible, maintainable interfaces built around real user needs and reliable application behavior.' },
  { number: '02', title: 'UI/UX design', text: 'Clear hierarchy, purposeful interactions and systems that stay consistent as products grow.' },
  { number: '03', title: 'Beyond the browser', text: 'An interest in full-stack systems, mobile experiences and the engineering behind digital products.' },
];
const toolkit = ['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'UI/UX', 'Framer Motion', 'GSAP', 'Flutter', 'Java / Spring Boot', 'Docker', 'Redis'];

export default function AboutPage() {
  return (
    <PageShell>
    <main className='relative min-h-screen bg-background text-foreground'>
      <SubpageNav />
      <section className='mx-auto max-w-[1440px] px-6 pb-24 pt-36 sm:px-12 sm:pt-44 lg:px-20'>
        <p className='mb-10 text-xs uppercase tracking-[0.25em] text-primary'>A little about me</p>
        <PageReveal><h1 className='max-w-6xl text-[clamp(3.8rem,10.2vw,9rem)] font-medium leading-[0.94] tracking-[-0.075em]'>Design-led.<br/><span className='text-primary'>Code-minded.</span></h1></PageReveal>
        <div className='mt-14 flex flex-col gap-9 border-t border-white/15 pt-10 md:flex-row md:items-start md:justify-between'>
          <p className='max-w-2xl text-xl leading-relaxed tracking-[-0.025em] sm:text-3xl'>I’m Amlan Kumar Bhowmik, a software developer and UI/UX designer. I enjoy bringing interface design and engineering together to build thoughtful digital experiences.</p>
          <ArrowDownRight size={34} className='text-primary'/>
        </div>
      </section>
      <section className='mx-auto grid max-w-[1440px] gap-12 px-6 pb-28 sm:px-12 lg:grid-cols-[1fr_1.2fr] lg:px-20'>
        <PageReveal className='overflow-hidden rounded-[1.5rem] bg-[#182124]'><img src='/projects/about-abstract.svg' alt='Abstract linework illustrating design and engineering connections' className='aspect-square h-full w-full object-cover' /></PageReveal>
        <div className='flex flex-col justify-center'>
          <p className='mb-7 text-xs uppercase tracking-[0.25em] text-primary'>How I think</p>
          <h2 className='max-w-xl text-3xl leading-tight tracking-[-0.05em] sm:text-5xl'>Good interfaces should feel simple, even when the systems behind them aren’t.</h2>
          <p className='mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg'>I work across frontend architecture, interaction design and product implementation. From detailed forms to motion-led experiences, I value clarity, maintainability and the small details people notice.</p>
        </div>
      </section>
      <section className='bg-[#151d1e] px-6 py-24 sm:px-12 lg:px-20'>
        <div className='mx-auto max-w-[1280px]'>
          <p className='mb-12 text-xs uppercase tracking-[0.25em] text-primary'>What I focus on</p>
          <div>{strengths.map(item => <div key={item.number} className='grid gap-4 border-t border-white/15 py-9 md:grid-cols-[80px_1fr_1fr] md:gap-10'><span className='text-sm text-primary'>{item.number}</span><h3 className='text-2xl tracking-[-0.04em] sm:text-3xl'>{item.title}</h3><p className='max-w-lg leading-relaxed text-muted-foreground'>{item.text}</p></div>)}</div>
        </div>
      </section>
      <section className='mx-auto max-w-[1440px] px-6 py-24 sm:px-12 lg:px-20'>
        <p className='mb-8 text-xs uppercase tracking-[0.25em] text-primary'>Toolkit</p>
        <div className='flex flex-wrap gap-3'>{toolkit.map(item => <span key={item} className='rounded-full border border-white/15 px-5 py-3 text-sm transition-colors hover:border-primary hover:text-primary sm:text-base'>{item}</span>)}</div>
        <Link href='/work' className='group mt-20 flex items-center justify-between border-t border-white/15 py-7 text-2xl tracking-tight transition-colors hover:text-primary sm:text-4xl'>Explore selected work <ArrowUpRight className='transition-transform group-hover:-translate-y-1 group-hover:translate-x-1'/></Link>
      </section>
    </main>
    </PageShell>
  );
}
