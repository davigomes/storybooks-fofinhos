# Project: Storybooks Fofinhos

## Project Overview

This is a Next.js web application designed to display a collection of bedtime stories. The project is named "storybooks-fofinhos" (Cute Storybooks) and the UI is in Portuguese. It uses TypeScript, React, and Tailwind CSS for styling. The main page displays a grid of story cards, each with an image and a title.

The application is built with Next.js 15 and utilizes Turbopack for development and builds, as specified in `package.json`.

## Key Technologies

*   **Framework:** Next.js 15.5.2
*   **UI Library:** React 19.1.0
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS (configured via `postcss.config.mjs`)
*   **Linting:** ESLint
*   **Package Manager:** npm

## Project Structure

*   `src/app/page.tsx`: The main entry point of the application. It fetches a static list of stories and renders them in a grid using the `StoryCard` component.
*   `src/app/layout.tsx`: The root layout for all pages. It sets up the HTML structure, body classes, and applies the Geist font.
*   `src/components/StoryCard.tsx`: A reusable React component that displays a single story with an image and a title. It is designed as a clickable card.
*   `public/images/`: Contains the images used for the story cards.
*   `next.config.ts`: Next.js configuration. It is currently configured to allow external images from `lh3.googleusercontent.com`.
*   `postcss.config.mjs` & `tailwind.config.ts`: Configuration for PostCSS and Tailwind CSS.
*   `tsconfig.json`: TypeScript compiler options, including the path alias `@/*` which points to the `src/` directory.

## Building and Running

To work with this project, use the following npm scripts defined in `package.json`:

*   **Run the development server:**
    ```bash
    npm run dev
    ```
    This starts the app in development mode with Turbopack at `http://localhost:3000`.

*   **Build the application for production:**
    ```bash
    npm run build
    ```
    This creates an optimized production build of the application.

*   **Start the production server:**
    ```bash
    npm run start
    ```
    This command should be run after building the project. It starts a Node.js server to serve the production application.

*   **Run the linter:**
    ```bash
    npm run lint
    ```
    This runs ESLint to check for code quality and style issues.

## Development Conventions

*   **Component-Based Architecture:** The UI is built with React components, with reusable components stored in `src/components`.
*   **TypeScript:** The project is written in TypeScript, and type safety should be maintained.
*   **Styling:** Utility-first CSS with Tailwind CSS is the standard for styling.
*   **Path Aliases:** Use the `@/*` alias to import modules from the `src/` directory (e.g., `import Component from '@/components/Component';`).
*   **Linting:** Adhere to the linting rules configured in `eslint.config.mjs` which extends from `next/core-web-vitals`.
