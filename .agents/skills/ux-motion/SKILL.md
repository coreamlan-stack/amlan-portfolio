---
name: ux-motion
description: Audit and implement purposeful, accessible, performant UX and animation using 19 interaction principles. Use for React interfaces, portfolio transitions, navigation, forms, and motion reviews.
---

# UX Motion and Interaction Design

## Workflow
1. Inspect existing code, dependencies, design tokens, and interaction behavior before editing.
2. Identify actual UX problems; select relevant principles rather than forcing all 19 onto every screen.
3. Preserve branding, content, layout, existing working features, and API contracts. Prefer React JSX and Tailwind; reuse existing GSAP, Motion and Lenis where installed. Avoid new dependencies unless justified.
4. Implement small, reversible changes. Keep one animation owner per property and element; clean up timelines, listeners and scroll triggers on unmount.
5. Run available lint, tests and production build. Test keyboard, touch, rapid toggles, reduced motion, mobile scrolling and route changes. Report actual results, untested items and changed files. Never claim deployment or tests without evidence.

## The 19 principles
| Principle | Implementation rule |
|---|---|
| Exaggeration | Use restrained emphasis for meaningful feedback; avoid excessive bounce. |
| Origin awareness | Anchor menus, popovers and transitions to their triggering element. |
| Staggering | Sequence related items by 40–80 ms; cap total delay and never hide essential content unnecessarily. |
| Squash and stretch | Use subtle press compression, preserving legibility and hit areas. |
| Rubber banding | Use damped elastic feedback only where natural; do not hijack native scrolling. |
| Doherty threshold | Provide immediate interaction feedback, ideally within 100 ms and generally within 400 ms; show pending state for longer work. |
| Anticipation | Use a brief preparatory cue when it clarifies direction; never delay urgent actions. |
| Fitts's law | Make important targets large and easy to reach; aim for 44×44 CSS px on touch. |
| Slow in, slow out | Use natural easing; ease-out for entrances, ease-in for exits, ease-in-out for travel. |
| Hick's law | Group choices and simplify navigation without hiding necessary actions. |
| Follow-through | Allow restrained settling after major movement; avoid repeated oscillations. |
| Arcs | Use curved paths only when spatial continuity benefits from them. |
| Von Restorff effect | Reserve distinctive accent treatment for meaningful priorities. |
| Timing | Match duration to distance, complexity and urgency. |
| Interruptible motion | Support reversal, cancellation and rapid repeated input from the current visual state. |
| Secondary action | Coordinate supporting icon or label motion without distracting from the primary action. |
| Solid drawing | Maintain coherent geometry, perspective, depth and transform origins. |
| Frequency of use | Keep common actions visible, reachable and fast. |
| Peak-end rule | Make important milestones and completion states clear and satisfying. |

## Motion defaults
- Press: 80–150 ms; hover: 120–200 ms; popover: 150–250 ms; modal: 200–350 ms; overlay: 300–450 ms; page transition: 250–500 ms; hero: 600–1200 ms only if justified.
- Suggested entrance easing: cubic-bezier(0.22,1,0.36,1). Exit: cubic-bezier(0.4,0,1,1). Travel: cubic-bezier(0.4,0,0.2,1). Treat these as starting points.
- Prefer transform and opacity; avoid layout animation, large animated blur, excessive layers and continuous offscreen work. Apply will-change sparingly. Measure performance rather than assuming GPU acceleration guarantees smoothness.
- Respect prefers-reduced-motion in CSS and JS; disable nonessential parallax, particles, cursor effects and long reveals. Preserve immediate state feedback. Ensure content remains visible if JS fails.
- Preserve focus visibility, semantic controls, Escape behavior, focus restoration and modal focus management. Never make hover the only way to access content. Do not block input while animating.

## Portfolio application
For coreamlan-stack/amlan-portfolio: inspect current branch and latest code first. Preserve hero, multilingual greeting, branding, content and existing approved cursor behavior; do not restore removed gliding cursor. Keep navigation overlay above intro. Audit text reveals, project entrances, menu reversals, route transitions, mobile scroll and contact completion. Apply all 19 as an audit checklist, implementing only those with concrete benefits. Avoid adding decorative effects just to satisfy the checklist. Ensure GSAP, Motion and Lenis do not compete. Test rapid open/close, return home, reduced motion and touch devices. Use a separate branch for review unless explicitly instructed otherwise. Do not merge or deploy without authorization.
