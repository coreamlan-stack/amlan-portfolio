'use client';

import { useLenis } from '@/hooks';

// The first render is never blocked by a timed intro.
export function SiteExperience() {
  useLenis();
  return null;
}
