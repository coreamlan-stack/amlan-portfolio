/* eslint-disable @next/next/no-img-element -- brand SVGs are served directly by Simple Icons. */

/**
 * @param {{
 *  logos: Array<{ label: string; logo: string; href: string }>;
 *  speed?: number;
 *  direction?: 'left' | 'right';
 *  ariaLabel: string;
 * }} props
 */
export function LogoLoop({ logos, speed = 40, direction = 'left', ariaLabel }) {
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      className='logo-loop group relative overflow-hidden py-3 sm:py-4'
      role='region'
      aria-label={ariaLabel}
    >
      <ul
        className={`logo-loop__track ${direction === 'right' ? 'logo-loop__track--right' : ''}`}
        style={{ '--logo-loop-duration': `${speed}s` }}
      >
        {repeatedLogos.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            aria-hidden={index >= logos.length}
          >
            <a
              href={item.href}
              target='_blank'
              rel='noreferrer noopener'
              tabIndex={index >= logos.length ? -1 : undefined}
              className='flex items-center gap-3 py-2 text-foreground/75 transition-colors hover:text-primary focus-visible:text-primary'
            >
              <img
                src={item.logo}
                alt=''
                width='26'
                height='26'
                className='size-[26px] shrink-0 object-contain'
                loading='lazy'
              />
              <span className='whitespace-nowrap text-base font-medium tracking-[-.02em]'>
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
