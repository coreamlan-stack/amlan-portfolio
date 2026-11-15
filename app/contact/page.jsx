import { ArrowUpRight, Github } from 'lucide-react';
import Link from 'next/link';

import { PageReveal } from '@/app/_components/page-reveal';
import { PageShell } from '@/app/_components/page-shell';
import { SubpageNav } from '@/app/_components/subpage-nav';

export const metadata = {
  title: 'Contact',
  description: 'Connect with Amlan Kumar Bhowmik about frontend development, product design and creative collaborations.',
};

export default function ContactPage() {
  return (
    <PageShell>
    <main className='relative min-h-screen bg-background px-6 pb-24 pt-36 text-foreground sm:px-12 sm:pt-44 lg:px-20'>
      <SubpageNav />
      <div className='mx-auto max-w-[1280px]'>
        <p className='mb-10 text-xs uppercase tracking-[0.25em] text-primary'>Have something in mind?</p>
        <PageReveal><h1 className='max-w-5xl text-[clamp(3.5rem,10vw,9rem)] leading-[0.92] tracking-[-0.075em]'>Let’s make<br/><span className='text-primary'>it matter.</span></h1></PageReveal>
        <p className='mt-12 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-2xl'>Interested in building something thoughtful? I’m always open to connecting about design and frontend engineering.</p>
        <div className='mt-20 border-t border-white/15'>
          <a href='https://github.com/coreamlan-stack' target='_blank' rel='noopener noreferrer' className='group flex items-center justify-between gap-4 border-b border-white/15 py-9 text-2xl transition-colors hover:text-primary sm:text-4xl'><span className='flex items-center gap-5'><Github size={27}/> GitHub</span><ArrowUpRight className='transition-transform group-hover:-translate-y-1 group-hover:translate-x-1'/></a>
          <Link href='/work' className='group flex items-center justify-between gap-4 border-b border-white/15 py-9 text-2xl transition-colors hover:text-primary sm:text-4xl'><span>Explore my work</span><ArrowUpRight className='transition-transform group-hover:-translate-y-1 group-hover:translate-x-1'/></Link>
        </div>
      </div>
    </main>
    </PageShell>
  );
}
