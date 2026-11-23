'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding-block: clamp(5rem, 11vw, 13.5rem) clamp(8rem, 11vw, 12rem);
  padding-inline: clamp(1.25rem, 4vw, 8rem);

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    grid-template-columns: minmax(0, 3fr) minmax(15rem, 1fr);
    column-gap: clamp(3rem, 8vw, 10rem);

    .description-action {
      position: absolute;
      top: calc(100% - clamp(9.5rem, 10vw, 11rem));
      right: clamp(1.25rem, 8vw, 10rem);
    }

    .description-action > a > button {
      width: clamp(10rem, 11vw, 13rem);
      aspect-ratio: 1;
      padding: 0 !important;
    }
  }
`;

export const Title = styled.h4`
  font-size: clamp(2rem, 2.45vw, 3.5rem);
  line-height: 1.28;
  letter-spacing: -0.045em;
`;
