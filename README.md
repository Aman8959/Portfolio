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
- `/projects/accident-detection-concept` - AI Road Accident Detection case study
- `/projects/accident-detection-system` - Accident Detection System case study
- `/projects/localink` - Localink case study
- `/projects/portfolio-website` - Portfolio Website case study
- `/contact` - Contact form
- `/education` - Education details
- `/skills` - Skills and technologies
- `/services` - Services
- `/experience` - Professional experience

## Updating Portfolio Content

Portfolio content is separated from the UI:

- `src/data/profile.ts` - Name, headline, bio, location, contact/social links, status, and About content
- `src/data/site.ts` - Compatibility mapping for site metadata and navigation
- `src/data/education.ts` - Education and certification details
- `src/data/skills.ts` - Skills and technologies
- `src/data/experience.ts` - Verified professional experience
- `src/data/projects.ts` - Project cards, categories, optional links, images, dates, metrics, and case-study references
- `content/case-studies/*.md` - One concise Markdown case study per project, using Overview, Problem, Approach / Solution, Key Features, Tech Stack, Challenges & Solutions, and Results & Learnings
- `src/data/services.ts` - Services and deliverables

Add project images under `public/images/` and reference them from `projects.ts` with a path such as `/images/project-name.webp`. Optional GitHub URLs, live demos, dates, metrics, and images render only when supplied.

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
