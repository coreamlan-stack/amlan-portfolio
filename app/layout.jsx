import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { Offcanvas } from '@/layout';
import { Providers } from '@/providers';

import { FluidPointer } from './_components/fluid-pointer';
import { FrameMeter } from './_components/frame-meter';
import { RouteFlow } from './_components/route-flow';
import { SiteExperience } from './_layout/transition/site-experience';
import './globals.css';

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html lang='en' dir='ltr' className={neue_montreal.variable}>
      <body className={neue_montreal.className}>
        <Providers>
          <SiteExperience />
          <FluidPointer />
          <FrameMeter />
          <Offcanvas />
          <RouteFlow>{children}</RouteFlow>
        </Providers>
      </body>
    </html>
  );
}
