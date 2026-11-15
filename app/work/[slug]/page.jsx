import Link from 'next/link';
import { PageReveal } from '@/app/_components/page-reveal';
import { SubpageNav } from '@/app/_components/subpage-nav';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { caseStudies, getCaseStudy } from '@/data/case-studies';

export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const project = getCaseStudy(params.slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default function CaseStudyPage({ params }) {
  const project = getCaseStudy(params.slug);
  if (!project) notFound();
  const currentIndex = caseStudies.findIndex(item => item.slug === project.slug);
  const next = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className='relative min-h-screen bg-background text-foreground'>
      <SubpageNav />
      <article>
        <header className='mx-auto max-w-[1440px] px-6 pb-14 pt-36 sm:px-12 sm:pt-44 lg:px-20'>
          <Link href='/work' className='mb-14 inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary'><ArrowLeft size={18}/> All work</Link>
          <p className='mb-6 text-xs uppercase tracking-[0.24em] text-primary'>{project.eyebrow}</p>
          <PageReveal><h1 className='max-w-5xl text-[clamp(3.75rem,10vw,9rem)] font-medium leading-[0.92] tracking-[-0.07em]'>{project.title}</h1></PageReveal>
          <div className='mt-12 flex flex-wrap gap-x-16 gap-y-6 border-t border-white/15 pt-7 text-sm'>
            <div><p className='mb-2 text-muted-foreground'>Discipline</p><p>{project.discipline}</p></div>
            <div><p className='mb-2 text-muted-foreground'>Timeline</p><p>{project.year}</p></div>
          </div>
        </header>
        <div className='mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-12'>
          <PageReveal className='overflow-hidden rounded-[1.25rem] bg-[#192023]'>
            <img src={project.cover} alt={project.alt} className='aspect-[16/10] w-full object-cover sm:aspect-[16/8]' />
          </PageReveal>
          <p className='mt-3 text-right text-xs text-muted-foreground'>{project.note}</p>
        </div>
        <section className='mx-auto grid max-w-[1440px] gap-8 px-6 py-24 sm:px-12 lg:grid-cols-[1fr_2fr] lg:gap-20 lg:px-20 lg:py-36'>
          <p className='text-xs uppercase tracking-[0.24em] text-primary'>The overview</p>
          <div>
            <h2 className='max-w-4xl text-2xl leading-snug tracking-[-0.035em] sm:text-4xl'>{project.overview}</h2>
            <div className='mt-16 grid gap-10 border-t border-white/15 pt-10 md:grid-cols-2'>
              <div><h3 className='mb-4 text-lg'>The challenge</h3><p className='leading-relaxed text-muted-foreground'>{project.challenge}</p></div>
              <div><h3 className='mb-4 text-lg'>Tools & disciplines</h3><div className='flex flex-wrap gap-2'>{project.stack.map(item => <span key={item} className='rounded-full border border-white/15 px-4 py-2 text-sm'>{item}</span>)}</div></div>
            </div>
          </div>
        </section>
        <section className='bg-[#151d1e] px-6 py-24 sm:px-12 lg:py-32'>
          <div className='mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[1fr_2fr]'>
            <p className='text-xs uppercase tracking-[0.24em] text-primary'>The approach</p>
            <div>{project.approach.map((line,index) => <div key={line} className='flex gap-8 border-t border-white/15 py-7'><span className='text-sm text-primary'>0{index+1}</span><p className='max-w-2xl text-lg leading-relaxed sm:text-2xl'>{line}</p></div>)}</div>
          </div>
        </section>
      </article>
      <Link href={`/work/${next.slug}`} className='group block border-t border-white/15 px-6 py-20 transition-colors hover:bg-[#161e1d] sm:px-12 lg:px-20'>
        <span className='text-xs uppercase tracking-[0.24em] text-muted-foreground'>Next project</span>
        <div className='mt-6 flex items-center justify-between gap-4'><h2 className='text-[clamp(2.5rem,7vw,7rem)] tracking-[-0.06em]'>{next.title}</h2><ArrowUpRight className='text-primary transition-transform group-hover:-translate-y-2 group-hover:translate-x-2' size={34}/></div>
      </Link>
    </main>
  );
}
