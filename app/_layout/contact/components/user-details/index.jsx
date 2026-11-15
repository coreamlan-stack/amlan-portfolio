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
        <div className='flex items-center gap-8'>
          <ImageWrapper>
            <span className='flex size-full items-center justify-center rounded-full bg-orange-400 text-xl text-zinc-950'>
              AK
            </span>
          </ImageWrapper>
          <MainTitle>Let’s build</MainTitle>
        </div>
        <div className='flex items-center justify-between'>
          <MainTitle>with intent</MainTitle>
          <ArrowDownLeft size={28} strokeWidth={1.25} />
        </div>
      </Row>
      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-muted-foreground' />
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
              className='w-full border-muted-foreground'
            >
              github.com/coreamlan-stack
            </MagneticButton>
          </a>
          <Link href='/contact'>
            <MagneticButton
              variant='outline'
              size='md'
              className='w-full border-muted-foreground'
            >
              Contact details
            </MagneticButton>
          </Link>
        </div>
      </Row>
    </Container>
  );
}
