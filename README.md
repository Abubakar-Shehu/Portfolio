# Portfolio Template

A clean, modern portfolio template built with Next.js 15 and designed as a Single Page Application (SPA).

## Features

- 🎨 Clean, modern design
- 📱 Fully responsive
- 🚀 Built with Next.js 15
- 🎯 SPA navigation with smooth scrolling
- 🧩 Modular component structure
- 💨 Optimized performance

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.jsx          # Root layout
│   └── page.jsx            # Main page with all sections
├── components/
│   ├── Navigation.jsx      # Navigation component
│   └── Section.jsx        # Reusable section wrapper
├── styles/
│   └── globals.css        # Global styles
└── public/                # Static assets
```

## Customization

1. **Update the content**: Edit `app/page.jsx` to customize your sections
2. **Modify styles**: Update `styles/globals.css` for custom styling
3. **Add components**: Create new components in the `components/` directory
4. **Update metadata**: Change title and description in `app/layout.jsx`

## Sections

The template includes four main sections:
- **Home**: Hero section with welcome message
- **About**: Personal information and skills
- **Projects**: Portfolio showcase
- **Contact**: Contact information and social links

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
