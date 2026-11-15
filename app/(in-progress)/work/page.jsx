import { Navbar, Transition } from '@/layout';

import { WorkPage } from '../../_components/portfolio-page';

export const metadata = {
  title: 'Selected Work',
  description: 'Selected work and case studies from Amlan Kumar Bhowmik.',
};

export default function Work() {
  return (
    <Transition>
      <div className='bg-background text-foreground'>
        <Navbar />
        <WorkPage />
      </div>
    </Transition>
  );
}
