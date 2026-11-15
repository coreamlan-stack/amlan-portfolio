import { caseStudies } from './case-studies';

// Keep the homepage preview and project count synchronized with case studies.
export const thumbnailOptions = caseStudies.map(project => ({
  href: `/work/${project.slug}`,
  title: project.title,
  category: project.discipline,
  cover: project.cover,
  alt: project.alt,
}));
