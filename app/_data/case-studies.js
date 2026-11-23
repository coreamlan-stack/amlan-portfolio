// Only publish details grounded in existing work. Do not imply government
// endorsement, client permission, delivery status, or results without evidence.
export const caseStudies = [
  {
    slug: 'hrms',
    title: 'HRMS',
    eyebrow: '01 / Administrative systems',
    discipline: 'Frontend engineering · UI/UX',
    year: 'Ongoing',
    cover: '/project%20images/hrms%20ss.png',
    alt: 'HRMS portal landing screen for Tripura Municipality',
    summary:
      'Making complex employee records, onboarding and leave processes easier to navigate.',
    overview:
      'My HRMS frontend work focuses on the experience around employee records, onboarding, location selection, payroll presentation, permission-aware interfaces and leave-management journeys. I work within existing backend contracts rather than moving business rules into the client.',
    challenge:
      'Large administrative workflows need clarity, continuity and careful permissions. Different roles must see the right actions, and long forms need reliable resume and error states.',
    approach: [
      'Organized onboarding into clear steps and improved draft-resume behavior.',
      'Refined dependent location selections, directory search and payroll display.',
      'Improved retry, loading and permission-aware read-only states.',
    ],
    stack: ['React', 'UI/UX', 'Frontend architecture', 'API integration'],
    access: 'internal',
    note: 'Public HRMS portal artwork. No employee records or internal-system data are included.',
  },
  {
    slug: 'saathi',
    title: 'Saathi',
    eyebrow: '02 / Mobile experience',
    discipline: 'Flutter · Dart · Android',
    year: 'In development',
    cover: '/project%20images/saathi%20img%201.jpeg',
    gallery: [
      {
        src: '/project%20images/saathi%20img%201.jpeg',
        alt: 'Saathi document library screen',
      },
      {
        src: '/project%20images/saathi%20img%202.jpeg',
        alt: 'Saathi files screen',
      },
      {
        src: '/project%20images/saathi%20img%203.jpeg',
        alt: 'Saathi tools screen',
      },
    ],
    alt: 'Saathi document library mobile screen',
    summary:
      'A Flutter mobile application project focused on useful, accessible experiences on Android.',
    overview:
      'Saathi is a Flutter-based mobile project. This case study focuses on the mobile UI and application structure; project-specific features will be documented once the public description and screenshots are finalized.',
    challenge:
      'Mobile apps need clear navigation, responsive interfaces and deliberate handling of user information.',
    approach: [
      'Developed an Android-first application in Flutter and Dart, with testing on an Android device.',
      'Worked on navigation, interface structure and mobile UI exploration.',
      'Kept the public summary high-level while using authentic product screens.',
    ],
    stack: ['Flutter', 'Dart', 'Android', 'Mobile UI/UX'],
    access: 'independent',
    note: 'Independent project. Screens shown are real Saathi application screens.',
  },
  {
    slug: 'billing-system',
    title: 'Billing system',
    eyebrow: '03 / Application development',
    discipline: 'Business application · UI/UX',
    year: 'Private project',
    cover: '/project%20images/billing%20system%20ss.png',
    alt: 'Billing system application screen',
    summary: 'A billing-system project focused on practical business software.',
    overview:
      'I have worked on a billing-system project. This public case study keeps its scope deliberately high-level until I can share an accurate feature breakdown and my specific contributions.',
    challenge:
      'Business software needs legible information, predictable workflows and straightforward user interaction. Project-specific requirements are not described publicly here.',
    approach: [
      'Present the project as a software-development case study without publishing sensitive data.',
      'Add verified workflow details and implementation decisions once reviewed for public sharing.',
      'Use authentic project imagery rather than an invented dashboard.',
    ],
    stack: ['Business software', 'Application UI', 'Workflow design'],
    access: 'details-pending',
    note: 'Billing system screen shown with project details kept high-level.',
  },
  {
    slug: 'street-vending-service',
    title: 'Street vending service',
    eyebrow: '04 / Public service portal',
    discipline: 'React · UI/UX · Frontend engineering',
    year: '2026',
    cover: '/project%20images/vendor%20ss.png',
    alt: 'Street Vending Certificate Service sign-in screen',
    summary:
      'A digital service portal for certificate applications and online application tracking.',
    overview:
      'A public-facing portal experience for Tripura Municipality Street Vending Certificate Service, built around a clear entry point for vendors and employees.',
    challenge:
      'The first screen needs to make two distinct sign-in paths immediately understandable while keeping the service welcoming and easy to scan.',
    approach: [
      'Designed the landing and role-selection experience around clear next actions.',
      'Used visual hierarchy to balance the service message with the sign-in panel.',
      'Kept responsive layout and readable contrast central to the interface.',
    ],
    stack: ['React', 'UI/UX', 'Frontend engineering'],
    access: 'public',
    note: 'Street Vending Certificate Service sign-in screen.',
  },
];

export function getCaseStudy(slug) {
  return caseStudies.find(project => project.slug === slug);
}
