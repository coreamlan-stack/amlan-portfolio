import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

import { CinematicBackground } from './_components/cinematic-background';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Amlan Kumar Bhowmik — Software Developer & UI/UX Designer',
  description:
    'Amlan Kumar Bhowmik is a software developer and UI/UX designer focused on elegant, maintainable digital experiences.',
};

export default function Home() {
  return (
    <Transition>
      <CinematicBackground />
      <div className='isolate relative z-10'>
        <Navbar />
        <Header />
        <main>
          <Description />
          <Thumbnail />
          <Project />
        </main>
        <Contact />
      </div>
    </Transition>
  );
}
