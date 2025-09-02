# LinkedIn Post Generator

A beautiful AI-powered LinkedIn post generator built with React, TypeScript, and Tailwind CSS.

## Setup Instructions

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Important Notes for Local Development

- Make sure you have Node.js 18+ installed
- Ensure all dependencies are installed with `npm install`
- The app uses Tailwind CSS for styling - make sure PostCSS is properly configured
- If styles aren't loading, try clearing your browser cache and restarting the dev server

## Troubleshooting CSS Issues

If CSS styles aren't applying locally:

1. Clear your browser cache
2. Delete `node_modules` and `package-lock.json`, then run `npm install`
3. Restart the development server with `npm run dev`
4. Check that PostCSS and Tailwind are properly configured

## Features

- AI-powered LinkedIn post generation
- Multiple tone and length options
- Beautiful, responsive design
- Copy-to-clipboard functionality
- Error handling and loading states