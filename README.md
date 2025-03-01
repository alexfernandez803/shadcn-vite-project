# Shadcn UI + Vite

A starter project using Vite, React, TypeScript, and shadcn UI components.

## Features

- Vite for fast development
- React + TypeScript
- Tailwind CSS for styling
- shadcn UI components
- React Router for navigation
- Example pages with common UI patterns

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Run the development server:
   ```
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `/src`: Source code
  - `/components/ui`: shadcn UI components
  - `/pages`: Page components for routing
  - `/lib`: Utility functions

## Adding More Components

To add more shadcn UI components, you'll need to:

1. Create the component file in `/src/components/ui`
2. Install any required Radix UI dependencies
3. Copy the component code from the shadcn UI website (https://ui.shadcn.com)

Example structure for adding a new component:

```tsx
// src/components/ui/your-component.tsx
import * as React from "react"
import { cn } from "../../lib/utils"

// Component code here...
```

## Building for Production

```
npm run build
```

## Learn More

- [Vite Documentation](https://vitejs.dev/guide/)
- [shadcn UI Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/en/main)
# shadcn-vite-project
