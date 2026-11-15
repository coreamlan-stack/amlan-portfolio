import Link from 'next/link';

const links = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function SubpageNav() {
  return (
    <nav aria-label='Main navigation' className='absolute inset-x-0 top-0 z-20 border-b border-white/10'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-6 py-7 sm:px-12 lg:px-20'>
        <Link href='/' className='text-lg font-medium tracking-[-0.04em] transition-colors hover:text-primary'>Amlan<span className='text-primary'>.</span></Link>
        <div className='hidden items-center gap-9 pr-24 text-sm md:flex'>
          {links.map(link => <Link key={link.href} href={link.href} className='transition-colors hover:text-primary'>{link.label}</Link>)}
        </div>
        <span className='pr-20 text-xs uppercase tracking-[0.15em] text-muted-foreground md:hidden'>Portfolio</span>
      </div>
    </nav>
  );
}
