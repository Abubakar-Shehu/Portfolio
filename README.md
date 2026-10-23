# Abubakar Shehu's Portfolio

Personal portfolio site for **Abubakar Shehu** — a software engineer with experience in web development and back-end systems (React, Node.js, Express, PostgreSQL / MSSQL), plus a background in accounting.

Built with **Next.js** and **React**.

## Sections

1. **About** — Name, photo, and a short intro
2. **Projects** — Personal web apps, plus skills & technologies
3. **Journey** — Work history across Lagos, Nottingham, Leeds, and Edmonton
4. **Hobbies** — Manchester City, favourite games, and matchday energy
5. **Favourites** — Travel and life photos
6. **Contact** — Social links (GitHub, X, Instagram, email)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

### Optional environment

Copy `env.example` to `.env.local` if you want the interactive Journey map:

```bash
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

Without a key, the Journey section still shows the location list.

## Scripts

| Command       | Description                |
| ------------- | -------------------------- |
| `pnpm dev`    | Start the dev server       |
| `pnpm build`  | Production build           |
| `pnpm start`  | Run the production server  |
| `pnpm lint`   | Run ESLint                 |
