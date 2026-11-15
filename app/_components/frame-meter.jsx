'use client';

import { useEffect, useState } from 'react';

// Optional diagnostic: open any portfolio page with ?perf=1 on your device.
// No RAF loop or overlay is created for normal visitors.
export function FrameMeter() {
  const [enabled, setEnabled] = useState(false);
  const [stats, setStats] = useState({ fps: 0, longFrames: 0 });

  useEffect(() => {
    const enabledForSession = new URLSearchParams(window.location.search).get('perf') === '1';
    if (!enabledForSession) return undefined;
    setEnabled(true);
    let frameId = 0;
    let last = 0;
    let sampleStart = 0;
    let frames = 0;
    let longFrames = 0;
    const loop = time => {
      if (!sampleStart) sampleStart = time;
      if (last) {
        const delta = time - last;
        frames += 1;
        if (delta > 34) longFrames += 1;
      }
      last = time;
      const elapsed = time - sampleStart;
      if (elapsed >= 1000) {
        setStats({ fps: Math.round(frames * 1000 / elapsed), longFrames });
        sampleStart = time;
        frames = 0;
        longFrames = 0;
      }
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);

  if (!enabled) return null;
  return (
    <output
      aria-live='off'
      className='pointer-events-none fixed bottom-3 left-3 z-[90] rounded-lg border border-primary/35 bg-[#101819]/90 px-3 py-2 font-mono text-xs text-primary backdrop-blur-sm'
    >
      {stats.fps} FPS · {stats.longFrames} slow frames/s
    </output>
  );
}
