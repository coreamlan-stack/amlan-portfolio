import { Navbar, Transition } from '@/layout';

import { ContactPage } from '../../_components/portfolio-page';

export const metadata = {
  title: 'Contact',
  description: 'Connect with Amlan Kumar Bhowmik on GitHub.',
};

export default function Contact() {
  return (
    <Transition>
      <div className='bg-background text-foreground'>
        <Navbar />
        <ContactPage />
      </div>
    </Transition>
  );
}
