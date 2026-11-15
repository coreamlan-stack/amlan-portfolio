import { Navbar, Transition } from '@/layout';

import { AboutPage } from '../../_components/portfolio-page';

export const metadata = {
  title: 'About',
  description:
    'Learn about Amlan Kumar Bhowmik’s approach to frontend engineering and UI/UX design.',
};

export default function About() {
  return (
    <Transition>
      <div className='bg-background text-foreground'>
        <Navbar />
        <AboutPage />
      </div>
    </Transition>
  );
}
