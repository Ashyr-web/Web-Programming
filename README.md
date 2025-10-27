# Engineering College Website

A modern, accessible, responsive website for Engineering College built with HTML5, CSS3, Bootstrap 5, and vanilla JavaScript.

## Features

- 📱 Fully responsive, mobile-first design
- ♿ WCAG-conscious accessibility features
- 🔒 Client-side form validation with age verification and format checks
- 🎨 Consistent branding and typography

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

## Technical Details

### Forms & Validation

- Registration form includes:
  - Age verification (must be 15+ years old)
  - Email format validation
  - Phone number validation (supports +1, +44, +966)
  - Password strength requirements
  - Terms acceptance

- Contact form includes:
  - Email format validation
  - Anti-spam check
  - Required field validation

### Accessibility Features

- Semantic HTML structure
- ARIA attributes for dynamic content
- Keyboard navigation support
- Visible focus indicators
- Screen reader considerations

### JavaScript Features

- Form validation with inline feedback
- FAQ accordion with keyboard support
- Content filtering system
- Password visibility toggle
- Anti-spam protection

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
