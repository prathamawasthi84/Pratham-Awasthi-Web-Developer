# Forme — Training Institute

A minimal, responsive three-section website built with semantic HTML, CSS and vanilla JavaScript.

## Run locally

1. Download and extract the project.
2. Open `index.html` in your browser.

For a local development server, you can use the **Live Server** extension in VS Code and choose **Open with Live Server** on `index.html`.

## Font

The site uses **Manrope** from Google Fonts, with weights 400–800. It is a clean, modern sans-serif designed by Mikhail Sharanda. An internet connection is required to load it; Arial is used as a fallback.

## Features

- Home, Courses and Contact sections
- Responsive layout using CSS Grid and Flexbox
- Mobile navigation with accessible expanded/collapsed state
- Contact form validation for name, email and course
- Inline validation messages and keyboard focus on the first invalid field
- Reduced-motion support

## Important note

The contact form currently demonstrates client-side validation only. It does not send or store enquiries. Connect the submit handler in `script.js` to an API endpoint or form service to receive submissions.

## What I would improve next

- Connect the contact form to a backend and add server-side validation.
- Add course detail pages and a real enrolment workflow.
- Add real institute photography and testimonials.
- Add automated accessibility and responsive-browser tests.
- Add SEO metadata and analytics with appropriate consent.
