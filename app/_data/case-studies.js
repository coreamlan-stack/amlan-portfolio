// Only publish details grounded in existing work. Do not imply government
// endorsement, client permission, delivery status, or results without evidence.
// Screenshots may be added to the public/projects folder after approval.
export const caseStudies = [
  {
    slug: 'hrms',
    title: 'HRMS',
    eyebrow: '01 / Administrative systems',
    discipline: 'Frontend engineering · UI/UX',
    year: 'Ongoing',
    cover: '/projects/hrms.svg',
    alt: 'Illustrative UI artwork for employee management, not a production screenshot',
    summary: 'Making complex employee records, onboarding and leave processes easier to navigate.',
    overview: 'My HRMS frontend work focuses on the experience around employee records, onboarding, location selection, payroll presentation, permission-aware interfaces and leave-management journeys. I work within existing backend contracts rather than moving business rules into the client.',
    challenge: 'Large administrative workflows need clarity, continuity and careful permissions. Different roles must see the right actions, and long forms need reliable resume and error states.',
    approach: [
      'Organized onboarding into clear steps and improved draft-resume behavior.',
      'Refined dependent location selections, directory search and payroll display.',
      'Improved retry, loading and permission-aware read-only states.'
    ],
    stack: ['React', 'UI/UX', 'Frontend architecture', 'API integration'],
    access: 'internal',
    note: 'A detailed product UI is not published here. Artwork is illustrative, and no employee or internal-system data is included.',
  },
  {
    slug: 'saathi',
    title: 'Saathi',
    eyebrow: '02 / Mobile experience',
    discipline: 'Flutter · Dart · Android',
    year: 'In development',
    cover: '/projects/saathi.svg',
    alt: 'Illustrative mobile app composition, not a screenshot of Saathi',
    summary: 'A Flutter mobile application project focused on useful, accessible experiences on Android.',
    overview: 'Saathi is a Flutter-based mobile project. This case study focuses on the mobile UI and application structure; project-specific features will be documented once the public description and screenshots are finalized.',
    challenge: 'Mobile apps need clear navigation, responsive interfaces and deliberate handling of user information.',
    approach: [
      'Developed an Android-first application in Flutter and Dart, with testing on an Android device.',
      'Worked on navigation, interface structure and mobile UI exploration.',
      'Kept this public summary high-level until verified feature details and screenshots are ready.'
    ],
    stack: ['Flutter', 'Dart', 'Android', 'Mobile UI/UX'],
    access: 'independent',
    note: 'Independent project; not an official or government-affiliated application. Visuals are placeholders until real screenshots are added.',
  },
  {
    slug: 'billing-system',
    title: 'Billing system',
    eyebrow: '03 / Application development',
    discipline: 'Business application · UI/UX',
    year: 'Private project',
    cover: '/projects/billing.svg',
    alt: 'Typographic placeholder for a billing system project',
    summary: 'A billing-system project focused on practical business software.',
    overview: 'I have worked on a billing-system project. This public case study keeps its scope deliberately high-level until I can share an accurate feature breakdown, screenshots and my specific contributions.',
    challenge: 'Business software needs legible information, predictable workflows and straightforward user interaction. Project-specific requirements are not described publicly here.',
    approach: [
      'Present the project as a software-development case study without publishing internal screens.',
      'Add verified workflow details and implementation decisions once reviewed for public sharing.',
      'Keep the visual showcase ready for authentic screenshots rather than invented dashboards.'
    ],
    stack: ['Business software', 'Application UI', 'Workflow design'],
    access: 'details-pending',
    note: 'Project details and screenshots are pending review. No client, government affiliation or implementation features are implied.',
  },
  {
    slug: 'portfolio',
    title: 'Personal portfolio',
    eyebrow: '04 / Creative development',
    discipline: 'Next.js · Motion · Design',
    year: '2026',
    cover: '/projects/portfolio.svg',
    alt: 'Illustrative composition for this portfolio',
    summary: 'An evolving personal website exploring expressive interaction and thoughtful engineering.',
    overview: 'This portfolio is a living project for exploring design systems, interaction design, page transitions, accessibility and responsive behavior in public.',
    challenge: 'An expressive portfolio needs memorable motion without sacrificing readability, comfort or performance on touch devices.',
    approach: [
      'Built the site around Next.js and reusable frontend components.',
      'Explored motion using Framer Motion, GSAP and Lenis.',
      'Refined responsive navigation, touch feedback and page transitions using real-device observations.'
    ],
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'GSAP'],
    access: 'public',
    note: 'Cover is illustrative artwork rather than a website screenshot.',
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find(project => project.slug === slug);
}
