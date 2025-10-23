# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 13 portfolio website for Felipe Vargas, a full-stack freelance developer. The site is heavily optimized for SEO with extensive use of structured data, Open Graph metadata, and semantic HTML. It features a single-page application with smooth scrolling sections.

## Development Commands

### Running the Project
```bash
npm run dev     # Start development server at http://localhost:3000
npm run build   # Build production bundle
npm start       # Start production server
npm run lint    # Run Next.js linter
```

## Architecture

### Tech Stack
- **Framework**: Next.js 13.4.2 (App Router)
- **State Management**: Redux Toolkit (@reduxjs/toolkit)
- **Styling**: Tailwind CSS 3.3.2
- **Forms**: Formik + Yup validation
- **Animations**: Framer Motion
- **Notifications**: React Toastify
- **Icons**: React Icons

### Directory Structure
```
src/app/
├── assets/           # Static data (translation.js for i18n, data.js for content)
├── components/       # React components (NavBar, Header, Contact, etc.)
│   ├── ProjectsSection/
│   └── SkillSection/
├── config/           # API configuration (apiConfig.js)
├── services/         # External service integrations
├── store/            # Redux store
│   ├── slices/
│   │   └── settings/ # SettingsSlices.js (lang, theme)
│   ├── provider.js   # Redux Provider wrapper (client component)
│   └── store.js      # Store configuration
├── utilities/        # Helper functions
├── layout.js         # Root layout with SEO metadata
└── page.js           # Home page with all sections
```

### State Management
Redux store manages:
- **Language**: `lang` state (default: "es") - switches between Spanish/English
- **Theme**: `theme` state (default: "dark") - prepared for light/dark mode

Access via `useSelector` and dispatch via `setLang()/setTheme()` actions from `store/slices/settings/SettingsSlices.js`.

### Client/Server Component Pattern
- **Root Layout** (`layout.js`): Server component with extensive SEO metadata and structured data
- **Provider** (`store/provider.js`): Client component wrapping children with Redux Provider
- **Page** (`page.js`): Server component assembling all sections
- **Individual Components**: Most are client components using hooks, framer-motion, etc.

Use `'use client'` directive when components need:
- React hooks (useState, useEffect, useSelector)
- Browser APIs
- Event handlers
- Animation libraries (framer-motion)

### SEO Implementation
The site has comprehensive SEO optimization:
- **Metadata** in `layout.js`: title, description, keywords, Open Graph, Twitter cards
- **Structured Data**: JSON-LD for Person and WebSite schemas embedded in `<Head>`
- **Semantic HTML**: Uses `itemScope`, `itemType`, `itemProp` microdata attributes
- **Sitemap**: Generated in `sitemap.xml.js` (note: uses Pages Router pattern, may need migration to App Router)
- **Image Optimization**: Configured domains in `next.config.js`

When modifying SEO-related code:
- Keep structured data schemas valid (verify with schema.org)
- Update `verification` codes in metadata (currently placeholder values)
- Maintain semantic HTML attributes for accessibility

### Internationalization
The app supports Spanish (default) and English via `src/app/assets/translation.js`:
- Navigation links (`linksEs`, `linksEn`)
- Section content (about, etc.)

Language switching is managed through Redux `lang` state. When adding translatable content:
1. Add translations to `translation.js` export object
2. Use `useSelector(state => state.settings.lang)` to get current language
3. Access appropriate translation key

### Form Handling
Contact form (`ContactUseFormik.jsx`) uses:
- **Formik** for form state management
- **Yup** for validation schemas
- **Toast notifications** for user feedback
- Environment variable `NEXT_PUBLIC_GET_FORM_URL` for form submission endpoint

Ensure `.env` contains:
```
NEXT_PUBLIC_GET_FORM_URL=your_form_endpoint
```

### Styling Conventions
- Tailwind CSS utility classes throughout
- Custom font: "Great Vibes" for signature style (configured in `tailwind.config.js`)
- Dark theme by default (black backgrounds, white/gray text)
- Responsive design with mobile-first approach using `sm:`, `md:`, `lg:` breakpoints
- Framer Motion for scroll animations and transitions

### Image Configuration
External image domains are whitelisted in `next.config.js`:
```javascript
domains: ['github.com', 'jonathanvargas0111.github.io', 'appatico.com']
```

When adding new external images, add the domain to this array.

### Projects Data
Project information is stored in `src/app/assets/translation.js` under `linksProjects` array. Each project has:
- `id`: Unique identifier
- `title`: Project name
- `images`: Array of image URLs
- `linkDisplayed`: Live demo URL
- `linkRepo`: GitHub repository URL

## Common Development Tasks

### Adding a New Section
1. Create component in `src/app/components/`
2. Import and add to `page.js` within the `<div className="w-full space-y-20">` container
3. Add corresponding navigation link in `assets/translation.js` (both `linksEs` and `linksEn`)
4. Implement section ID for smooth scrolling (e.g., `id="section-name"`)

### Modifying Redux State
1. Add reducer to `store/slices/settings/SettingsSlices.js`
2. Export action creators
3. Import in components and use with `useDispatch()`

### Updating Metadata/SEO
All metadata is centralized in `src/app/layout.js`. Update:
- `metadata` object for basic meta tags
- `structuredData` object for JSON-LD schema
- Embedded scripts in `<Head>` for additional structured data

## Important Notes

- **Next.js Version**: Uses Next.js 13 App Router (not Pages Router)
- **Sitemap**: Current `sitemap.xml.js` uses Pages Router pattern (`getServerSideProps`). This may not work correctly with App Router and should be migrated to `app/sitemap.js` with the new API.
- **Environment Variables**: Form submission requires `NEXT_PUBLIC_GET_FORM_URL` to be set
- **Git Repository**: Currently uses "JonathanVargas0111" GitHub username; consider updating to "felipevargas" for brand consistency (noted in layout.js:84)
- **Verification Codes**: Google and Bing verification codes in metadata are placeholders and need to be updated with actual values
