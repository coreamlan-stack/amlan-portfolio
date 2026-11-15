# Replacing portfolio project artwork

The public portfolio intentionally ships with clearly labeled illustrative SVG covers.
Real images can be added later without redesigning the pages.

## Where to add screenshots

1. Put approved images in `public/projects/`, using WebP/AVIF where possible.
2. Edit `app/_data/case-studies.js`; each case study has a `cover` path and `alt` description.
3. Replace the existing `cover: '/projects/<slug>.svg'` with a real image path, e.g. `'/projects/hrms-cover.webp'`.
4. Update `alt` to describe what the screenshot actually depicts.
5. Review and update `note` to distinguish real screens from illustrative work.
6. Commit the change to `main`. Vercel deploys new commits.

## Publishing guidance

- Do not include real employee records, identifying information, internal endpoints, access credentials, unreleased plans or restricted government material.
- Use approved, anonymized synthetic data in screenshots.
- For a project with a confidentiality agreement, only publish images and specific information after permission is established.
- The two independent concepts are clearly labeled as concepts, not commissioned or deployed government systems.
- The Billing System's implementation details have intentionally been left high-level until verified.

Both the gallery and detail page use the same `cover` value, so one approved cover updates both locations.
