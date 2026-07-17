# YL. Bilingual Portfolio

A static, bilingual student-developer portfolio built with React, Vite, TypeScript, React Router, Framer Motion, Lucide icons, and a token-based CSS design system.

## Run locally

```bash
npm install
npm run dev
```

## Edit content

- Projects: `src/data/projects.ts`
- Personal details and journey: `src/data/profile.ts`
- Shared navigation labels: `src/data/translations.ts`

Replace the placeholder resume at `public/resume/resume-placeholder.pdf` and update the social/contact values before publishing.

## Static deployment

Run `npm run build` and deploy the generated `dist` directory. `public/_redirects` enables React Router history fallback on Netlify and Cloudflare Pages. On Vercel, add a rewrite from `/(.*)` to `/index.html` if the platform does not automatically detect the Vite SPA.

The contact form intentionally does not claim to submit. Connect Formspree or Netlify Forms before enabling the submit action.
"# personal_website" 
