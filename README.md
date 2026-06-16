# Dawit Shibru Portfolio

A production-ready React portfolio for Dawit Shibru, built with Vite, React Router, Tailwind CSS, Framer Motion, and React Icons. It includes dark and light themes, animated sections, project filtering, a testimonial carousel, animated statistics, SEO metadata, sitemap setup, and an email-ready contact form.

## Folder Structure

```text
Portifolio_website/
  public/
    favicon.svg
    og-image.svg
    robots.txt
    sitemap.xml
  src/
    assets/              Visual SVG assets used by the portfolio
    components/          Reusable UI sections and controls
    data/portfolio.js    Centralized profile, skills, projects, and contact content
    hooks/               Reusable React hooks
    pages/Home.jsx       Main page composition
    utils/motion.js      Shared Framer Motion variants
    App.jsx
    main.jsx
    styles.css
  .env.example
  package.json
  vite.config.js
```

## Installation

```bash
npm install
npm run dev
```

The local dev server runs on `http://127.0.0.1:5173`.

## Environment Variables

Copy `.env.example` to `.env` and update values as needed:

```bash
VITE_CONTACT_EMAIL=your-email@example.com
VITE_SITE_URL=https://your-domain.com
```

The current contact form opens the user's email client with a prepared message. It is ready to connect to Netlify Forms, Formspree, Resend, or a custom API endpoint.

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variables from `.env.example`.
5. Deploy.

## Deploy to Netlify

1. Push the project to GitHub.
2. Create a new Netlify site from the repository.
3. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Add environment variables from `.env.example`.
5. Deploy.

## Content Updates

Edit `src/data/portfolio.js` to update profile details, skills, projects, experience, education, services, testimonials, statistics, and contact links.
