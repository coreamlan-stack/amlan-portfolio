export default function manifest() {
  return {
    name: 'Core Amlan — Portfolio',
    short_name: 'Core Amlan',
    description: 'Design-driven software developer and UI/UX designer.',
    start_url: '/',
    display: 'browser',
    background_color: '#101316',
    theme_color: '#d8ff67',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
    ],
  };
}
