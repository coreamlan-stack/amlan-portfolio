'use client';

import { styled } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: space-between;
  gap: 2rem;
  padding-block: clamp(3.5rem, 8vw, 12rem) clamp(4rem, 10vh, 9rem);
  padding-inline: clamp(1.25rem, 4vw, 8rem);

  @media screen and (min-width: ${({ theme }) => theme?.breakpoints?.lg}) {
    flex-wrap: revert;
  }
`;

export const Title = styled.h4`
  font-size: clamp(1.5em, 2.2vw, 3em);
  line-height: 1.45;
`;
