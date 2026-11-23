/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://amlan-portfolio-six.vercel.app'),
  title: {
    template: '%s | Core Amlan',
    default: 'Core Amlan - Software Developer & UI/UX Designer',
  },
  description:
    'Portfolio of Core Amlan, a design-driven software developer building elegant, maintainable digital experiences.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    shortcut: '/icon.svg',
  },
  manifest: '/manifest.webmanifest',
  generator: 'Next.js',
  applicationName: 'Core Amlan Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Software Developer',
    'UI/UX Designer',
    'React',
    'Next.js',
    'Flutter',
    'Spring Boot',
  ],
  authors: [{ name: 'Core Amlan', url: 'https://github.com/coreamlan-stack' }],
  creator: 'Core Amlan',
  publisher: 'Core Amlan',
  openGraph: {
    type: 'website',
    url: 'https://amlan-portfolio-six.vercel.app',
    title: 'Core Amlan - Software Developer & UI/UX Designer',
    description:
      'A design-driven software developer building elegant, maintainable digital experiences.',
  },
  twitter: {
    card: 'summary',
    title: 'Core Amlan',
    description:
      'A design-driven software developer building elegant, maintainable digital experiences.',
  },
  robots: { index: true, follow: true },
};
