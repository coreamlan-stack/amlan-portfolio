'use client';

import Link from 'next/link';
import Balancer from 'react-wrap-balancer';

import { MagneticButton, ParallaxFade, ParallaxReveal } from '@/components';

import { Title, Wrapper } from './index.styled';

const phrase =
  'I design and build digital products where clear interfaces, considered motion, and maintainable code move together.';

export function Description() {
  return (
    <article className='container relative'>
      <Wrapper>
        <div className='basis-full lg:basis-9/12'>
          <Title>
            <ParallaxReveal paragraph={phrase} />
          </Title>
        </div>

        <div className='w-full lg:w-auto lg:basis-3/12'>
          <ParallaxFade>
            <Balancer as='p' className='mt-2 text-base lg:text-lg'>
              I work across frontend engineering and UI/UX design, bringing the
              same care to product structure as I do to the details people use.
            </Balancer>
          </ParallaxFade>
        </div>

        <div className='description-action'>
          <Link href='/about' passHref>
            <MagneticButton
              variant='ghost'
              size='xl'
              className='!px-8 !py-7 !text-sm sm:!p-10 lg:!px-14 lg:!py-20 lg:!text-lg'
            >
              About Amlan
            </MagneticButton>
          </Link>
        </div>
      </Wrapper>
    </article>
  );
}
