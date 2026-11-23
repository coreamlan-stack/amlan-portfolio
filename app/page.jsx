import {
  Contact,
  Description,
  Header,
  Navbar,
  Project,
  Thumbnail,
  Transition,
} from '@/layout';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'Core Amlan — Software Developer & UI/UX Designer',
  description:
    'Core Amlan is a software developer and UI/UX designer focused on elegant, maintainable digital experiences.',
};

export default function Home() {
  return (
    <Transition>
      <div className='relative isolate z-10'>
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
