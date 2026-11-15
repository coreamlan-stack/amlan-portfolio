'use client';

// The global RouteFlow owns navigation motion. Keep this wrapper layout-only
// so we don't double-animate each page and introduce a jerky entrance.
export function PageShell({ children }) {
  return <>{children}</>;
}
