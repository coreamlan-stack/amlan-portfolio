'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  width: min(100%, 1400px);
  padding-inline: clamp(1.5rem, 6vw, 7rem);
  margin-inline: auto;
`;

export const Row = styled.div`
  --default-padding: clamp(1.75rem, 6vh, 6.5rem);

  &:nth-child(1) {
    padding-block-end: calc(var(--default-padding) / 2);
  }

  &:nth-child(2) {
    padding-block-end: calc(var(--default-padding) * 0.5);
  }
`;

export const ImageWrapper = styled.div`
  --image-size: clamp(3.5rem, 5vw, 5.5rem);

  position: relative;
  width: var(--image-size);
  height: var(--image-size);
`;

export const MainTitle = styled.h2`
  font-size: clamp(2rem, 7.2vw, 7.5rem);
  letter-spacing: -0.065em;
  line-height: 0.94;
`;
