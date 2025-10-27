# Engineering College — Static Brochure Website

This repository contains a complete, mobile-first, accessible static brochure-style website for an educational institution named "Engineering College." Built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript (ES6+).

## Project overview

- Responsive, semantic, multi-page static website.
- Mobile-first design, consistent branding, and WCAG-conscious accessibility.
- All interactivity is client-side (no server required).

## File structure

- index.html — Home (hero, features)
- about.html — About & Programs
- admissions.html — Admissions steps, tuition table, FAQ accordion
- student-life.html — Student life, filterable content
- contact.html — Contact details and contact form with anti-spam
- registration.html — Advanced registration form with validation
- assets/
  - css/styles.css — Custom styles, variables, focus states
  - js/main.js — All custom JavaScript (validation, accordion, filters)
  - images/ — Placeholder images (replace with optimized .webp files)
- screenshots/ — (empty) place for evidence screenshots or PDF
- .gitignore — OS and common ignores

## Pages & purpose

- Home: introduction, hero, CTA to registration
- About: college description and offered programs
- Admissions: steps, fees table, FAQ (interactive accordion)
- Student Life: events, clubs, announcements with client-side filters
- Contact: address, phone, email, contact form with anti-spam
- Registration: full application form with inline validation

## Implemented features

- Fixed, sticky Bootstrap 5 navbar across pages (collapses on small screens).
- Keyboard accessible elements with visible focus outlines.
- All images include meaningful `alt` attributes (replace placeholders with real images).
- Registration and Contact forms include client-side validation and simulated submission messages.
- Password visibility toggle and aria attributes for accessibility.
- FAQ accordion supports keyboard toggling and uses Bootstrap's accessible accordion markup.
- Student Life page includes filter buttons that toggle content visibility.
- Progressive enhancement: page is usable with JS disabled (forms will not submit but markup remains readable).

## Accessibility notes

- Labels are associated with inputs; `aria-invalid` and `aria-describedby` used for validation feedback.
- Focus outlines visible on keyboard navigation.
- Alerts use `role="alert"` and `aria-live="polite"` for screen reader updates.

## How to run locally

1. Open the project folder in your code editor.
2. Serve the files with a static server or just open `index.html` in your browser.

Optional (Node):

```powershell
# from project root
npx http-server -c-1 .
```

## Deploying to GitHub Pages

- Push repository to GitHub and enable GitHub Pages to serve from the `main` branch or `gh-pages` branch in repository settings.

## Known limitations

- Images are placeholders (files under `assets/images/` contain TODOs) — replace with optimized `.webp` assets.
- This template simulates form submission; to enable real back-end handling, implement a server API or use a third-party form endpoint.

## Attribution

- Built with Bootstrap 5 (CDN) and Bootstrap Icons.
- Google Fonts: Inter.
- Placeholder images: replace with real images and include proper credits.

## Live URL

- Placeholder: https://your-username.github.io/engineering-college (replace after deployment)

## Checklist (deliverables verification)

1. Fixed navbar on all pages.
2. Mobile navigation collapses correctly.
3. Registration form blocks submission until valid.
4. Inline validation and success message work.
5. Contact form anti-spam logic works.
6. FAQ accordion opens/closes via click or keyboard.
7. Student Life filter buttons function properly.
8. Responsive layout — no horizontal scroll.
9. All images have alt text.
10. Active link highlighting in navbar.

Replace TODO images and update README credits as needed.

## Git & commits

Suggested commit messages to use locally:

- init: base project
- feat: add home/about/admissions pages
- feat: add registration + validation
- fix: accessibility improvements
- style: update colors/fonts

Note: I did not run any git commands in this environment. Initialize a local git repository and commit with the messages above when ready.
