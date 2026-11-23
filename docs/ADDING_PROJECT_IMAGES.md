# Updating project images

Project images live in `public/projects/`. Each case study in `app/_data/case-studies.js` has a `cover`, an `alt` description, and an optional `gallery` for additional screens.

## Adding an approved image

1. Put the image in `public/projects/`, using WebP or AVIF where practical.
2. Update the matching case study with the new public image path and accurate alt text.
3. For several related screens, add them to the project `gallery`.
4. Update the project's `note` so its public context remains accurate.
5. Run `npm run build` before publishing.

## Publishing guidance

- Do not include real employee records, identifying information, internal endpoints, credentials, unreleased plans, or restricted government material.
- Use approved, anonymized data in screenshots.
- Only publish images and implementation details that are appropriate to share.
