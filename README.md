# OpenClaw Workshop Landing Page

Landing Page für Andys Live-Webinar am **13.02.2026**.

## Tech Stack
- **Vite** — Build tool
- **React** — UI framework
- **TypeScript** — Type safety
- **Tailwind CSS** — Styling

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

See [`CONCEPT.md`](./CONCEPT.md) for detailed technical documentation.

```
src/
├── components/
│   ├── sections/     # Landing page sections
│   └── ui/           # Reusable UI components
├── lib/              # Utilities (Stripe, etc.)
├── types/            # TypeScript types
└── App.tsx           # Main app component
```

## Environment Variables

Create a `.env` file:

```bash
VITE_STRIPE_PUBLIC_KEY=pk_test_xxx
```

## Deployment

Auto-deploys to Vercel on push to `main`.

## Documentation

- **[CONCEPT.md](./CONCEPT.md)** — Full technical specification
- **Issues #6-#10** — Detailed requirements

## Questions?

Contact Owen 🐸 or Andy.
