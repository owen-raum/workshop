# Workshop Landing Page — Technical Concept

## Project Overview
Landing Page für Andys OpenClaw Workshop (Live-Webinar am 13.02.2026).

**Tech Stack:** Vite + React + TypeScript + Tailwind CSS  
**Deployment:** Vercel (auto-deploy from main)  
**Domain:** TBD (workshop.openclaw.ai oder event.raum.so)

---

## 1. Component Architecture

### Section Components (`src/components/sections/`)

| Component | Purpose | Key Features |
|-----------|---------|--------------|
| `Hero.tsx` | Above-the-fold CTA | Headline, Subline, Primary CTA, Live Counter |
| `WhatIsOpenClaw.tsx` | Product Explanation | Features, Screenshots, Value Prop |
| `AboutUs.tsx` | Credibility | Andy + Owen, Authentic Story |
| `WorkshopContent.tsx` | Agenda | What attendees will learn |
| `ForWhom.tsx` | Target Audience | Who should attend (✅/❌) |
| `Pricing.tsx` | Conversion | 3 Tiers, Dynamic Pricing, Stripe CTA |
| `SocialProof.tsx` | Trust | Testimonials, Live Counter |
| `FAQ.tsx` | Objection Handling | Accordion with common questions |
| `Footer.tsx` | Final CTA | Repeat CTA, Legal Links, Contact |

### UI Components (`src/components/ui/`)

| Component | Purpose | Props |
|-----------|---------|-------|
| `Button.tsx` | Reusable CTA | `variant`, `size`, `onClick`, `disabled` |
| `PricingCard.tsx` | Tier Display | `tier`, `price`, `features[]`, `onCheckout` |
| `FAQItem.tsx` | Accordion Item | `question`, `answer`, `isOpen`, `onToggle` |

### Layout Structure

```tsx
// App.tsx
<main>
  <Hero />
  <WhatIsOpenClaw />
  <AboutUs />
  <WorkshopContent />
  <ForWhom />
  <Pricing />
  <SocialProof />
  <FAQ />
  <Footer />
</main>
```

---

## 2. Design System

### Color Palette (Dark Theme)
```css
/* Primary */
--bg-primary: #0a0a0a;        /* Deep black */
--bg-secondary: #1a1a1a;      /* Card background */
--bg-accent: #2a2a2a;         /* Hover states */

/* Text */
--text-primary: #ffffff;       /* Headings */
--text-secondary: #a0a0a0;     /* Body text */
--text-muted: #666666;         /* Subtle text */

/* Brand Colors */
--accent-primary: #00ff88;     /* OpenClaw green (CTAs) */
--accent-hover: #00cc6a;       /* Hover state */
--accent-glow: rgba(0, 255, 136, 0.2); /* Glow effects */

/* State Colors */
--success: #00ff88;
--warning: #ffa500;
--error: #ff4444;
```

### Typography
```css
/* Fonts */
font-family: 'Inter', sans-serif; /* Body */
font-family: 'Space Grotesk', sans-serif; /* Headings (optional) */

/* Scale */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
--text-5xl: 3rem;      /* 48px */
```

### Spacing System
Tailwind default (4px base unit):
- `p-4` = 16px
- `gap-6` = 24px
- `mt-8` = 32px

### Animation Principles
- **Scroll Animations:** Fade-in + Slide-up on section reveal (Intersection Observer)
- **Hover States:** Smooth scale/glow transitions (200ms ease-out)
- **Button Interactions:** Scale + glow on hover/active
- **No Auto-Play:** No carousels, no automatic scrolling
- **Performance:** CSS transforms (not position changes), will-change sparingly

---

## 3. Responsive Strategy

### Breakpoints (Tailwind defaults)
```css
sm: 640px   /* Tablet portrait */
md: 768px   /* Tablet landscape */
lg: 1024px  /* Laptop */
xl: 1280px  /* Desktop */
2xl: 1536px /* Large desktop */
```

### Mobile-First Approach
1. **Base styles** = Mobile (320px+)
2. **Progressive enhancement** = Tablet/Desktop via media queries
3. **Critical sections first:** Hero, Pricing, CTA always visible

### Layout Patterns
| Section | Mobile | Desktop |
|---------|--------|---------|
| Hero | Single column, centered | Single column, max-w-4xl |
| Features | 1 column stack | 2-3 column grid |
| Pricing | 1 card stack | 3 cards row |
| FAQ | Full width accordion | Max-w-3xl centered |
| Footer | Stacked links | Multi-column grid |

### Touch Targets
- Minimum 44x44px for buttons (WCAG AA)
- Accordion items: 56px height minimum
- Pricing cards: Full-width tap area on mobile

---

## 4. Stripe Checkout Integration

### Architecture
**Client-side only** — No backend required initially.

```
User clicks "Jetzt buchen"
  ↓
Frontend calls Stripe Checkout API
  ↓
Redirect to Stripe Checkout (hosted)
  ↓
Success → /success
Cancel → /cancel
```

### Implementation (`src/lib/stripe.ts`)

```typescript
export interface PricingTier {
  id: 'standard' | 'middle' | 'premium';
  name: string;
  price: number; // in cents
  stripePriceId: string; // Stripe Price ID
  features: string[];
  soldCount: number; // Dynamic from API/Stripe
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'standard',
    name: 'Standard',
    price: 14900, // 149€
    stripePriceId: 'price_xxx', // TODO: Create in Stripe Dashboard
    features: ['Workshop-Zugang', 'Live Q&A', 'Chat-Zugang'],
    soldCount: 0,
  },
  {
    id: 'middle',
    name: 'Plus',
    price: 19900, // 199€
    stripePriceId: 'price_yyy',
    features: ['Alles aus Standard', '+ Workshop-Materialien', '+ Bonus XYZ'],
    soldCount: 0,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 24900, // 249€
    stripePriceId: 'price_zzz',
    features: ['Alles aus Plus', '+ 1:1 Session (30min)', '+ VIP Support'],
    soldCount: 0,
  },
];

export async function redirectToCheckout(priceId: string) {
  const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  
  const { error } = await stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  });
  
  if (error) {
    console.error('Stripe Checkout error:', error);
    // Handle error (e.g., show toast notification)
  }
}
```

### Stripe Setup Tasks
1. **Create Products in Stripe Dashboard:**
   - Standard Ticket (149€)
   - Plus Ticket (199€)
   - Premium Ticket (249€)
2. **Get Price IDs** → Add to `VITE_STRIPE_PUBLIC_KEY` env var
3. **Configure Success/Cancel URLs** in Stripe Dashboard
4. **Optional:** Webhook for post-purchase email (later phase)

### Environment Variables (`.env`)
```bash
VITE_STRIPE_PUBLIC_KEY=pk_live_xxx
```

---

## 5. Dynamic Pricing Mechanism

### Concept: "Seats Left" instead of Countdown Timer
- **Current approach (NO):** "Noch 2 Stunden zum Early-Bird-Preis!"
- **Our approach (YES):** "Noch 15 Plätze zum aktuellen Preis verfügbar"

### Price Increase Logic
| Sold Tickets | Price Tier | Standard | Middle | Premium |
|--------------|------------|----------|--------|---------|
| 0-30         | Early Bird | 149€     | 199€   | 249€    |
| 31-60        | Regular    | 179€     | 229€   | 279€    |
| 61-100       | Late       | 199€     | 249€   | 299€    |

### Implementation Options

#### Option A: Stripe Metadata (Recommended)
- Store `soldCount` in Stripe Price metadata
- Query on page load: `stripe.prices.list({ active: true })`
- Update via webhook when purchase completes
- **Pros:** Single source of truth, no extra backend
- **Cons:** Requires webhook setup

#### Option B: Simple JSON API
- Static JSON file hosted on Vercel (`/api/pricing-status.json`)
- Updated manually or via webhook
- **Pros:** Fast, cacheable, no Stripe API calls on page load
- **Cons:** Manual updates required

#### Option C: Real-time Backend (Later Phase)
- Supabase/Firebase for real-time counters
- **Pros:** Live updates, scalable
- **Cons:** Overkill for MVP

**Decision for MVP:** **Option B** (Static JSON + Manual Updates)

### UI Implementation (`src/components/sections/Pricing.tsx`)

```tsx
interface PricingStatus {
  currentTier: 'early' | 'regular' | 'late';
  soldCount: number;
  seatsLeftInCurrentTier: number;
}

function Pricing() {
  const [status, setStatus] = useState<PricingStatus | null>(null);
  
  useEffect(() => {
    fetch('/api/pricing-status.json')
      .then(res => res.json())
      .then(setStatus);
  }, []);
  
  const seatsLeft = status?.seatsLeftInCurrentTier ?? null;
  
  return (
    <section>
      {seatsLeft && seatsLeft < 20 && (
        <div className="urgency-banner">
          ⚡ Nur noch {seatsLeft} Plätze zum aktuellen Preis!
        </div>
      )}
      {/* Pricing cards */}
    </section>
  );
}
```

---

## 6. Content Strategy

### Copywriting Principles
- **Benefit-driven headlines:** "Wie du..." statt "Workshop über..."
- **Social Proof early:** Live counter in Hero
- **Objection handling:** FAQ addresses "zu teuer", "keine Zeit", etc.
- **Risk reversal:** "Nicht zufrieden? Geld zurück in den ersten 15 Min."
- **Authentic voice:** Nicht corporate, sondern menschlich (Andy + Owen Story)

### CTA Hierarchy
1. **Primary CTA:** "Jetzt Platz sichern" (Hero + Footer)
2. **Secondary CTA:** "Mehr erfahren" (scrollt zu Content)
3. **Micro-CTAs:** In jeder Section wiederholen ("Dabei sein")

### SEO & Meta Tags
```html
<title>OpenClaw Workshop — Baue deinen AI-Assistenten (13.02.2026)</title>
<meta name="description" content="Live-Webinar mit Andy Steinberger. Lerne in 90 Minuten, wie du deinen eigenen KI-Assistenten baust. Nur 100 Plätze verfügbar.">

<!-- Open Graph -->
<meta property="og:title" content="OpenClaw Workshop — Baue deinen AI-Assistenten">
<meta property="og:description" content="Live-Webinar am 13.02.2026. 90 Minuten. 100 Plätze.">
<meta property="og:image" content="https://workshop.openclaw.ai/og-image.png">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="OpenClaw Workshop">
<meta name="twitter:description" content="Live-Webinar am 13.02.2026">
<meta name="twitter:image" content="https://workshop.openclaw.ai/og-image.png">
```

---

## 7. Performance & Optimization

### Core Web Vitals Targets
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Optimization Strategies
1. **Image Optimization:**
   - WebP format with JPEG fallback
   - Lazy loading for below-the-fold images
   - Responsive images (`srcset`)
2. **Code Splitting:**
   - Lazy load FAQ/SocialProof sections (React.lazy)
3. **Critical CSS:**
   - Inline Hero section styles
4. **Font Loading:**
   - `font-display: swap` to prevent FOIT
5. **Analytics:**
   - Defer non-critical scripts (Plausible/GA)

---

## 8. Accessibility (WCAG AA)

### Requirements
- **Keyboard Navigation:** All interactive elements tabbable
- **Screen Readers:** Semantic HTML (`<section>`, `<nav>`, `<button>`)
- **Color Contrast:** Minimum 4.5:1 (text on background)
- **Focus States:** Visible outline on all focusable elements
- **ARIA Labels:** For icon-only buttons
- **Alt Text:** Descriptive for all images

### Testing Checklist
- [ ] Tab through entire page (no trapped focus)
- [ ] Test with VoiceOver (macOS) / NVDA (Windows)
- [ ] Run Lighthouse Accessibility audit (score > 90)
- [ ] Validate HTML (no errors)

---

## 9. Testing Strategy

### Manual Testing
- [ ] Mobile (iPhone 13 Pro, Safari)
- [ ] Tablet (iPad Air, Safari)
- [ ] Desktop (Chrome, Firefox, Safari)
- [ ] Test Stripe Checkout flow (test mode)
- [ ] Verify all links work
- [ ] Test FAQ accordion interactions

### Automated Testing (Later Phase)
- Playwright for E2E (Checkout flow)
- Vitest for unit tests (components)

---

## 10. Deployment Plan

### Phase 1: MVP (ASAP)
- [ ] Setup Vite + React + Tailwind
- [ ] Build all 9 sections (static content)
- [ ] Integrate Stripe Checkout (test mode)
- [ ] Deploy to Vercel
- [ ] Add placeholder OG image

### Phase 2: Dynamic Pricing (Week 2)
- [ ] Implement pricing status API
- [ ] Add urgency messaging ("X Plätze frei")
- [ ] Setup Stripe webhook for sold count

### Phase 3: Polish (Week 3)
- [ ] Final copy review (Andy)
- [ ] Professional OG image
- [ ] Performance optimization
- [ ] Analytics integration
- [ ] Go live (switch to Stripe live mode)

---

## 11. Open Questions (for Andy)

### Content
- [ ] Was unterscheidet die 3 Pricing-Tiers genau? (Nur Workshop vs. + Bonus Material?)
- [ ] Ab wie vielen verkauften Plätzen steigt der Preis? (30/60/100?)
- [ ] Gibt es bereits Testimonials oder PULSE Community Quotes?
- [ ] Max. Teilnehmerzahl = 100?

### Technical
- [ ] Welcher Stripe Account? (STEINBERGER LTD?)
- [ ] Domain: workshop.openclaw.ai oder event.raum.so?
- [ ] Brauchen wir ein Backend für Webhook Handling?

### Assets
- [ ] Andy Headshot (hochauflösend)
- [ ] Owen Bild/Foto 🐸
- [ ] OpenClaw Screenshots (Dashboard, Chat, etc.)
- [ ] PULSE Branding Guidelines (Colors, Fonts)

---

## 12. File Structure

```
workshop/
├── public/
│   ├── og-image.png          # Social sharing image
│   ├── favicon.ico
│   └── assets/
│       ├── andy-headshot.jpg
│       ├── owen.jpg
│       └── screenshots/
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── WhatIsOpenClaw.tsx
│   │   │   ├── AboutUs.tsx
│   │   │   ├── WorkshopContent.tsx
│   │   │   ├── ForWhom.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── SocialProof.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Footer.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── PricingCard.tsx
│   │       └── FAQItem.tsx
│   ├── lib/
│   │   └── stripe.ts          # Stripe integration logic
│   ├── types/
│   │   └── index.ts           # TypeScript types
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── .env                        # Stripe keys (gitignored)
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── README.md
└── CONCEPT.md                  # This file
```

---

## 13. Next Steps

1. **Owen reviews this concept** — Feedback/Approval
2. **Andy answers open questions** — Content details
3. **Start building:**
   - Hero section first (CTA + Live Counter)
   - Then Pricing (core conversion)
   - Then remaining sections
4. **Stripe setup** (create products, test checkout)
5. **Deploy to Vercel** (staging)
6. **QA & Iteration**
7. **Go Live** 🚀

---

**Last Updated:** 2026-02-04  
**Status:** ⏳ Awaiting Review
