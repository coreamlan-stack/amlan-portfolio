'use client';

import { useState } from 'react';

import { useServerInsertedHTML } from 'next/navigation';
import {
  ServerStyleSheet,
  StyleSheetManager,
  ThemeProvider,
} from 'styled-components';

import { theme } from './theme';

/** @param {import('react').PropsWithChildren<unknown>} */
export function StyledComponentsRegistry({ children }) {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const themedChildren = (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );

  if (typeof window !== 'undefined') return themedChildren;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {themedChildren}
    </StyleSheetManager>
  );
}
