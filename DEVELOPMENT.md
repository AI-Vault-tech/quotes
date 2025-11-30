# Veritas Development Guide

## Project Overview

Veritas is a digital sanctuary for wisdom, built with Next.js, TypeScript, and Tailwind CSS. It provides a comprehensive platform for exploring quotes, authors, and philosophical concepts across history.

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

```bash
npm run dev
```

The application will be available at http://localhost:3000

### Building for Production

```bash
npm run build
```

### Running Production Server

```bash
npm run start
```

## Project Structure

```
src/
├── app/                 # Next.js app router pages
│   ├── explore/         # Explore wisdom by various dimensions
│   ├── authors/         # Author profiles and library
│   ├── collections/     # Curated learning paths
│   ├── my-sanctuary/    # User personalization dashboard
│   ├── quotes/          # Individual quote pages
│   ├── api/             # API routes for data access
│   └── ...              # Other pages
├── components/          # Reusable UI components
├── data/                # Content data and type definitions
├── lib/                 # Utility functions and helpers
└── styles/              # Global styles and theme definitions
```

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the application for production
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint
- `npm run test` - Runs tests (when implemented)

## Technology Stack

- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Google Fonts via next/font
- **UI Components**: Custom-built with accessibility in mind
- **Data**: In-memory data structures (scalable to database integration)

## Key Features

### Homepage
- Dynamic typewriter-style quote display
- Daily Triple Wisdom (Morning, Afternoon, Evening)
- Mood-based discovery system
- Quick search and category access

### Explore System
- By Era: Ancient Wisdom through Contemporary Thinkers
- By Theme: Love, Success, Struggle, Nature, Truth, Life
- By School: Stoicism, Existentialism, Buddhism, Feminism
- By Personality: MBTI and Enneagram integration

### Author Profiles
- Interactive timelines
- Biography in multiple depths
- Philosophical contributions
- Historical context
- Influence networks

### Collections
- "The Stoic Path" - 30-day meditation series
- "Feminist Wisdom Through Ages"
- "Eastern Philosophy for Western Minds"
- "Revolutionary Thoughts"
- "Scientific Poetry"
- "Unsung Voices"

### Personal Sanctuary
- Saved quotes with tagging
- Wisdom journal with prompts
- Learning path progress tracking
- Daily practice reminders
- Mood correlation tracking

## Premium Features

### Wisdom Match AI
- Personality assessment
- Philosophical DNA analysis
- Recommended reading paths
- Compatible philosopher matching

### Context Explorer
- Historical background
- Philosophical concepts
- Related quotes network
- Modern interpretations

### Quote Anatomy
- Rhetorical device identification
- Philosophical school analysis
- Cultural influence mapping
- Translation comparisons

## Performance & Optimization

- Text-first loading strategy (<1s for quote visibility)
- Progressive image loading for author portraits
- Intelligent caching of daily content
- Global CDN distribution ready
- Semantic search optimization

## Troubleshooting

### Common Issues

1. **Port already in use**: If port 3000 is occupied, Next.js will automatically use another port
2. **Font warnings**: The project uses next/font which is the recommended approach
3. **Workspace root warning**: This can be resolved by setting turbopack.root in next.config.js

### Updating Dependencies

To update baseline-browser-mapping:
```bash
npm i baseline-browser-mapping@latest -D
```

## Deployment

The application is ready for deployment to Vercel or any Node.js hosting platform. Simply run:

```bash
npm run build
npm run start
```

For Vercel deployment, the platform will automatically detect and build the Next.js application.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary to Veritas and should not be distributed without permission.