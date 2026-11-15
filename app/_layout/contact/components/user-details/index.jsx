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
        <div className='flex min-w-0 items-center gap-3 sm:gap-8'>
          <ImageWrapper>
            <span className='flex size-full items-center justify-center rounded-full bg-primary text-xl text-primary-foreground'>
              AK
            </span>
          </ImageWrapper>
          <MainTitle>Let’s build</MainTitle>
        </div>
        <div className='mt-3 flex items-center justify-between gap-3 sm:gap-6'>
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
          <div className='relative z-20 mt-6 flex justify-start md:absolute md:right-0 md:top-0 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2'>
            <motion.div className='max-md:!transform-none' style={{ x: transformX }}>
              <Link href='/contact'>
                <MagneticButton variant='primary' size='lg' className='!px-8 !py-7 !text-base sm:!px-10 sm:!py-12 md:!px-12 md:!py-20'>
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
              className='w-full !px-7 !py-5 !text-sm sm:!px-8 sm:!py-8 sm:!text-base border-[#f5f3eb]/35 hover:border-primary'
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
