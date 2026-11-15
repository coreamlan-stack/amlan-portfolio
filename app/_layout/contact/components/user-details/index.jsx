'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <div className='flex items-center gap-4 sm:gap-8'>
          <ImageWrapper>
            <span className='flex size-full items-center justify-center rounded-full bg-primary text-xl text-primary-foreground'>
              AK
            </span>
          </ImageWrapper>
          <MainTitle>Let’s build</MainTitle>
        </div>
        <div className='mt-3 flex items-center justify-between gap-6'>
          <MainTitle>with intent</MainTitle>
          <ArrowDownLeft
            className='shrink-0 text-primary'
            size={28}
            strokeWidth={1.25}
            aria-hidden='true'
          />
        </div>
      </Row>
      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-[#f5f3eb]/25' />
          <div className='absolute right-0 top-0 z-20 -translate-x-1/2 -translate-y-1/2'>
            <motion.div style={{ x: transformX }}>
              <Link href='/contact'>
                <MagneticButton variant='primary' size='lg'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </div>
        </div>
      </Row>
      <Row>
        <div className='flex w-full flex-col gap-4 lg:flex-row'>
          <a
            href='https://github.com/coreamlan-stack'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MagneticButton
              variant='outline'
              size='md'
              className='w-full border-[#f5f3eb]/35 hover:border-primary'
            >
              View GitHub
            </MagneticButton>
          </a>
          <Link href='/contact'>
            <MagneticButton
              variant='outline'
              size='md'
              className='w-full border-[#f5f3eb]/35 hover:border-primary'
            >
              Contact details
            </MagneticButton>
          </Link>
        </div>
      </Row>
    </Container>
  );
}
