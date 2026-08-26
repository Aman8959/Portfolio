# Aman Kumar Yadav Portfolio

Personal portfolio website for Aman Kumar Yadav, focused on AI/ML, Data Science, and full-stack software development.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Heroicons

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Create a `.env.local` file in the project root:

```env
CONTACT_WEBHOOK_URL=https://formspree.io/f/your-form-id
```

The contact form uses this server-side webhook to deliver inquiries. Never commit `.env.local` or real credentials.

## Available Commands

```bash
npm run dev      # Start development server
npm run lint     # Run ESLint
npm run build    # Create production build
npm run start    # Start production server
```

## Main Routes

- `/` - Home page
- `/about` - Profile, career objective, education, skills, and current learning
- `/projects` - All projects and case-study links
- `/projects/recall-ai` - Recall AI case study
- `/projects/accident-detection` - Accident Detection case study
- `/projects/localink` - Localink case study
- `/projects/portfolio-website` - Portfolio Website case study
- `/contact` - Contact form
- `/education` - Education details
- `/skills` - Skills and technologies
- `/services` - Services
- `/experience` - Professional experience

## Updating Portfolio Content

Most portfolio content is stored in typed data files:

- `src/data/site.ts` - Name, role, social links, email, and navigation
- `src/data/education.ts` - Education and certification details
- `src/data/skills.ts` - Skills and technologies
- `src/data/projects.ts` - Project cards and project status
- `src/data/caseStudies.ts` - Detailed project case studies
- `src/data/services.ts` - Services and deliverables
- `src/data/experience.ts` - Verified professional experience

Place the resume at:

```text
public/resume.pdf
```

## Build and Deployment

Verify the project before deployment:

```bash
npm run lint
npm run build
```

The project can be deployed to Vercel or any platform that supports Next.js. Set `CONTACT_WEBHOOK_URL` in the deployment environment variables before using the contact form in production.
