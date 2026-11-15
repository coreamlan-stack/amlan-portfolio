// Project descriptions stay deliberately factual; artwork is illustrative, not screenshots.
export const caseStudies = [
  {
    slug: 'hrms',
    title: 'HRMS',
    eyebrow: '01 / Product engineering',
    discipline: 'Frontend development · UI/UX',
    year: 'Ongoing',
    cover: '/projects/hrms.svg',
    alt: 'Illustrative diagram of a structured employee management interface',
    summary: 'A government-focused human resource management frontend, designed for complex employee records and workflows.',
    overview: 'Working on an HRMS frontend means turning dense administrative tasks into understandable steps. The interface brings employee onboarding, directory browsing, payroll information, role-based access and leave workflows together while respecting existing backend API contracts.',
    challenge: 'Administrative forms combine conditional fields, complex location hierarchies, permissions and long-running tasks. The goal is clarity without weakening validation or changing server-owned business rules.',
    approach: ['Designed a progressive onboarding experience with clearly defined steps and resumable drafts.', 'Refined location selection, employee directory filtering and payroll presentation around existing API contracts.', 'Improved loading, error and retry states, with attention to permissions and read-only records.'],
    stack: ['React', 'Frontend architecture', 'UI/UX', 'API integration'],
    note: 'Illustrative artwork. Production screenshots and sensitive employee records are intentionally not shown.',
  },
  {
    slug: 'portfolio',
    title: 'Personal portfolio',
    eyebrow: '02 / Creative development',
    discipline: 'Next.js · Motion · Design',
    year: '2026',
    cover: '/projects/portfolio.svg',
    alt: 'Illustrative abstract composition showing flowing typography and motion paths',
    summary: 'An experimental personal site exploring the balance of expressive interaction and clear interface design.',
    overview: 'This portfolio is a living project: a place to refine design systems, motion language, page transitions, accessibility and responsive behavior in public.',
    challenge: 'The central design challenge is balancing memorable animation with usability, especially on smaller touch screens.',
    approach: ['Built a component-driven Next.js portfolio with reusable layouts and styling.', 'Explored motion through Framer Motion, GSAP and Lenis.', 'Iterated on mobile navigation, section hierarchy and interaction performance based on real-device feedback.'],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    note: 'Illustrative artwork, not a captured application screen.',
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find(project => project.slug === slug);
}
