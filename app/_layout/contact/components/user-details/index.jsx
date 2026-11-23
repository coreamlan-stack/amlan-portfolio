'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MagneticButton } from '@/components';

import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

const rise = {
  initial: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 90, damping: 18, mass: 0.95 },
  },
};

export function UserDetails() {
  return (
    <Container>
      <Row>
        <motion.div
          className='flex min-w-0 items-center gap-3 sm:gap-8'
          variants={rise}
          initial='initial'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
        >
          <ImageWrapper>
            <span className='flex size-full items-center justify-center rounded-full bg-primary'>
              <Image src='/icon.svg' alt='' width={42} height={36} priority />
            </span>
          </ImageWrapper>
          <MainTitle>Let’s build</MainTitle>
        </motion.div>
        <motion.div
          className='mt-3 flex items-center justify-between gap-3 sm:gap-6'
          variants={rise}
          initial='initial'
          whileInView='show'
          viewport={{ once: true, amount: 0.3 }}
        >
          <MainTitle>with intent</MainTitle>
          <ArrowDownLeft
            className='shrink-0 text-primary'
            size={28}
            strokeWidth={1.25}
            aria-hidden='true'
          />
        </motion.div>
      </Row>
      <Row>
        <motion.div
          className='relative z-20 -mt-2 flex justify-start md:-mt-4 md:justify-end'
          initial={{ opacity: 0, scale: 0.75, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ type: 'spring', stiffness: 110, damping: 15, mass: 1 }}
        >
          <span
            aria-hidden='true'
            className='absolute inset-x-0 top-1/2 h-px bg-[#f5f3eb]/20'
          />
          <Link href='/contact' className='relative z-10'>
            <MagneticButton
              variant='primary'
              className='size-40 !p-0 text-sm sm:size-48 md:size-52'
            >
              Get in touch
            </MagneticButton>
          </Link>
        </motion.div>
      </Row>
      <Row>
        <motion.div
          className='-mt-5 flex w-full flex-col gap-4 lg:flex-row'
          variants={rise}
          initial='initial'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
        >
          <a
            href='https://github.com/coreamlan-stack'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MagneticButton
              variant='outline'
              size='md'
              className='w-full border-[#f5f3eb]/35 !px-7 !py-5 !text-sm hover:border-primary sm:!p-8 sm:!text-base'
            >
              View GitHub
            </MagneticButton>
          </a>
          <Link href='/contact'>
            <MagneticButton
              variant='outline'
              size='md'
              className='w-full border-[#f5f3eb]/35 !px-7 !py-5 !text-sm hover:border-primary sm:!p-8 sm:!text-base'
            >
              Contact details
            </MagneticButton>
          </Link>
        </motion.div>
      </Row>
    </Container>
  );
}
