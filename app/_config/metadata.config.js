/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://amlan-portfolio-six.vercel.app'),
  title: {
    template: '%s | Amlan Kumar Bhowmik',
    default: 'Amlan Kumar Bhowmik — Software Developer & UI/UX Designer',
  },
  description:
    'Portfolio of Amlan Kumar Bhowmik, a design-driven software developer building elegant, maintainable digital experiences.',
  generator: 'Next.js',
  applicationName: 'Amlan Kumar Bhowmik Portfolio',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Software Developer',
    'UI/UX Designer',
    'React',
    'Next.js',
    'Flutter',
    'Spring Boot',
  ],
  authors: [
    { name: 'Amlan Kumar Bhowmik', url: 'https://github.com/coreamlan-stack' },
  ],
  creator: 'Amlan Kumar Bhowmik',
  publisher: 'Amlan Kumar Bhowmik',
  openGraph: {
    type: 'website',
    url: 'https://amlan-portfolio-six.vercel.app',
    title: 'Amlan Kumar Bhowmik — Software Developer & UI/UX Designer',
    description:
      'A design-driven software developer building elegant, maintainable digital experiences.',
  },
  twitter: {
    card: 'summary',
    title: 'Amlan Kumar Bhowmik',
    description:
      'A design-driven software developer building elegant, maintainable digital experiences.',
    creator: '@coreamlan-stack',
  },
  robots: { index: true, follow: true },
};
