# Bowen Driving School - Refactored Website

This is a modern refactored version of the Bowen Driving School website, built with React, TypeScript, Vite, and Tailwind CSS.

## Technology Stack

- **React 18** - Modern React with functional components and hooks
- **TypeScript** - Type-safe JavaScript for better development experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework for styling
- **React Router** - Client-side routing for single-page application

## Features

- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **SEO Optimized** - Proper meta tags, structured data, and semantic HTML
- **Modern UI/UX** - Clean, accessible interface with smooth navigation
- **Mobile-First** - Responsive design with mobile navigation drawer
- **Fast Loading** - Optimized build with Vite for quick page loads

## Pages

- **Home** - Welcome page with seasonal notices (commented out)
- **About** - Information about the driving school and instructor
- **Lessons** - Booking information and pricing
- **Schedule** - Availability table with responsive design

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Navigate to the refactored directory
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   └── Layout.tsx          # Main layout with header, nav, and footer
├── pages/
│   ├── Home.tsx           # Home page component
│   ├── About.tsx          # About page component
│   ├── Lessons.tsx        # Lessons page component
│   └── Schedule.tsx       # Schedule page component
├── App.tsx                # Main app component with routing
├── main.tsx              # Application entry point
└── index.css             # Global styles and Tailwind directives

public/
├── images/               # Image assets from original site
├── CancellationPolicy.pdf # Policy document
└── index.html           # HTML template with SEO meta tags
```

## Key Improvements

1. **Modern Framework** - Migrated from Oracle JET/Knockout.js to React/TypeScript
2. **Better Performance** - Vite build system provides faster development and builds
3. **Responsive Design** - Improved mobile experience with responsive table and navigation
4. **SEO Enhancement** - Added structured data, proper meta tags, and semantic HTML
5. **Maintainability** - Component-based architecture for easier updates
6. **Type Safety** - TypeScript provides better development experience and fewer runtime errors

## SEO Features

- Proper HTML5 semantic structure
- Meta descriptions and keywords
- Open Graph and Twitter Card tags
- Structured data (JSON-LD) for local business
- Optimized images and loading
- Mobile-friendly responsive design

## Contact Information

- **Phone**: 0487397625
- **Location**: Bowen, Queensland, Australia

## License

This project is for Bowen Driving School. All rights reserved.

