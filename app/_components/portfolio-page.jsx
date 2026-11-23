import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const expertise = [
  ['Frontend', 'React, Next.js, JavaScript, TypeScript, Tailwind CSS'],
  ['UI/UX', 'Interface systems, interaction design, responsive product flows'],
  ['Backend', 'Java, Spring Boot, Docker, Redis'],
  ['Mobile', 'Flutter, accessible mobile-first experiences'],
];

function PageIntro({ eyebrow, title, children }) {
  return (
    <header className='border-b border-border px-6 pb-16 pt-36 md:px-12 md:pb-24'>
      <p className='mb-8 text-xs font-medium uppercase tracking-[0.2em] text-primary'>
        {eyebrow}
      </p>
      <h1 className='max-w-5xl text-5xl leading-[0.92] tracking-tight md:text-8xl'>
        {title}
      </h1>
      {children && (
        <div className='mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground'>
          {children}
        </div>
      )}
    </header>
  );
}

export function AboutPage() {
  return (
    <main>
      <PageIntro
        eyebrow='About'
        title='Design-minded development, built to last.'
      >
        I’m <span className='core-amlan-name'>Core Amlan</span>, a software
        developer and UI/UX designer. I enjoy shaping the complete
        experience—from the structure behind an application to the small
        decisions that make an interface feel clear.
      </PageIntro>
      <section className='grid gap-16 px-6 py-20 md:grid-cols-[1.1fr_1fr] md:px-12 md:py-28'>
        <div>
          <p className='text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            Approach
          </p>
          <h2 className='mt-5 max-w-xl text-3xl leading-tight md:text-5xl'>
            Useful products should be as considered in code as they are on
            screen.
          </h2>
        </div>
        <div className='space-y-6 text-lg leading-relaxed text-muted-foreground'>
          <p>
            I focus on the work that gives an application a durable foundation:
            clear component boundaries, responsive behavior, accessible
            interactions, and a visual language that serves the content.
          </p>
          <p>
            My practice spans frontend engineering, interface design, backend
            services, and mobile development—enough range to keep product
            decisions connected without losing attention to detail.
          </p>
        </div>
      </section>
      <Expertise />
    </main>
  );
}

function Expertise() {
  return (
    <section className='border-y border-border bg-card px-6 py-20 text-foreground md:px-12 md:py-28'>
      <p className='text-xs uppercase tracking-[0.2em] text-primary'>
        Expertise
      </p>
      <div className='mt-10 divide-y divide-border'>
        {expertise.map(([name, detail], index) => (
          <div
            key={name}
            className='grid gap-4 py-7 md:grid-cols-[0.35fr_0.65fr]'
          >
            <span className='text-primary'>0{index + 1}</span>
            <div>
              <h2 className='text-3xl'>{name}</h2>
              <p className='mt-2 text-muted-foreground'>{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export function WorkPage() {
  return (
    <main>
      <PageIntro
        eyebrow='Selected work'
        title='Projects deserve an honest introduction.'
      >
        Case studies are being prepared. Rather than present work without
        context, this space will be updated with project details,
        responsibilities, and outcomes as they are ready to share.
      </PageIntro>
      <section className='px-6 py-20 md:px-12 md:py-28'>
        <div className='grid gap-6 md:grid-cols-2'>
          {[
            'Project case study 01',
            'Project case study 02',
            'Project case study 03',
            'Project case study 04',
          ].map((item, index) => (
            <article
              key={item}
              className='group min-h-80 border border-border bg-card p-7 transition-colors duration-500 hover:border-primary hover:bg-secondary md:min-h-[28rem]'
            >
              <div className='flex justify-between text-xs uppercase tracking-[0.16em] text-muted-foreground'>
                <span>Placeholder</span>
                <span>0{index + 1}</span>
              </div>
              <div className='mt-40'>
                <h2 className='text-3xl'>{item}</h2>
                <p className='mt-3 max-w-sm text-muted-foreground'>
                  Details coming soon—no project claims or visuals have been
                  added before they can be represented accurately.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow='Contact'
        title='Let’s make something clear, useful, and well crafted.'
      >
        For project context and current work, visit my GitHub. A GitLab profile
        has not been provided, so its link is intentionally left unlisted.
      </PageIntro>
      <section className='grid gap-10 px-6 py-20 md:grid-cols-2 md:px-12 md:py-28'>
        <a
          className='group border border-primary/30 bg-primary p-8 text-primary-foreground transition-colors hover:bg-foreground md:p-12'
          href='https://github.com/coreamlan-stack'
          target='_blank'
          rel='noopener noreferrer'
        >
          <span className='text-xs uppercase tracking-[0.2em] text-primary-foreground/65 group-hover:text-background/70'>
            Code &amp; current work
          </span>
          <div className='mt-24 flex items-end justify-between'>
            <h2 className='text-4xl'>GitHub</h2>
            <ArrowUpRight size={32} />
          </div>
        </a>
        <div className='border border-border bg-card p-8 md:p-12'>
          <span className='text-xs uppercase tracking-[0.2em] text-muted-foreground'>
            Additional profile
          </span>
          <div className='mt-24'>
            <h2 className='text-4xl'>GitLab</h2>
            <p className='mt-4 max-w-sm text-muted-foreground'>
              Profile link to be added when available.
            </p>
          </div>
        </div>
      </section>
      <section className='border-t border-border px-6 py-12 md:px-12'>
        <Link
          href='/'
          className='inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] hover:text-primary'
        >
          Back home <ArrowUpRight size={17} />
        </Link>
      </section>
    </main>
  );
}
