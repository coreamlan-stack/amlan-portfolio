'use client';

/** @param {{paragraph: string}}  */
export function ParallaxReveal({ paragraph }) {
  // Keep the lead statement in the document flow. The old word-by-word reveal
  // could remain at its hidden initial state after a route transition.
  return paragraph;
}
