'use client';

import { motion } from 'framer-motion';
import { ArrowDownLeft } from 'lucide-react';
import Link from 'next/link';

import { MagneticButton } from '@/components';
import { Container, ImageWrapper, MainTitle, Row } from './index.styled';

const rise = {
  initial: { opacity: 0, y: 55 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 90, damping: 18, mass: 0.95 } },
};

export function UserDetails({ transformX }) {
  return (
    <Container>
      <Row>
        <motion.div className='flex min-w-0 items-center gap-3 sm:gap-8'
          variants={rise} initial='initial' whileInView='show' viewport={{ once: true, amount: 0.3 }}>
          <ImageWrapper>
            <span className='flex size-full items-center justify-center rounded-full bg-primary text-xl text-primary-foreground'>
              AK
            </span>
          </ImageWrapper>
          <MainTitle>Let’s build</MainTitle>
        </motion.div>
        <motion.div className='mt-3 flex items-center justify-between gap-3 sm:gap-6'
          variants={rise} initial='initial' whileInView='show' viewport={{ once: true, amount: 0.3 }}>
          <MainTitle>with intent</MainTitle>
          <ArrowDownLeft className='shrink-0 text-primary' size={28} strokeWidth={1.25} aria-hidden='true' />
        </motion.div>
      </Row>
      <Row>
        <div className='relative w-full'>
          <div className='h-px bg-[#f5f3eb]/25' />
          <motion.div
            className='relative z-20 mt-6 flex justify-start md:absolute md:right-0 md:top-0 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2'
            initial={{ opacity: 0, scale: 0.75, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: 'spring', stiffness: 110, damping: 15, mass: 1 }}
          >
            <motion.div style={{ x: transformX }}>
              <Link href='/contact'>
                <MagneticButton variant='primary' size='lg'
                  className='!px-8 !py-7 !text-base sm:!px-10 sm:!py-12 md:!px-12 md:!py-20'>
                  Get in touch
                </MagneticButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Row>
      <Row>
        <motion.div className='flex w-full flex-col gap-4 lg:flex-row'
          variants={rise} initial='initial' whileInView='show' viewport={{ once: true, amount: 0.2 }}>
          <a href='https://github.com/coreamlan-stack' target='_blank' rel='noopener noreferrer'>
            <MagneticButton variant='outline' size='md'
              className='w-full !px-7 !py-5 !text-sm sm:!px-8 sm:!py-8 sm:!text-base border-[#f5f3eb]/35 hover:border-primary'>
              View GitHub
            </MagneticButton>
          </a>
          <Link href='/contact'>
            <MagneticButton variant='outline' size='md'
              className='w-full !px-7 !py-5 !text-sm sm:!px-8 sm:!py-8 sm:!text-base border-[#f5f3eb]/35 hover:border-primary'>
              Contact details
            </MagneticButton>
          </Link>
        </motion.div>
      </Row>
    </Container>
  );
}
