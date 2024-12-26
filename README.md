# New Travolic Monorepo

This is a monorepo built with Turborepo, Next.js 15, React 19, and TypeScript.

## Getting Started

First, install dependencies:

```sh
yarn install
```

Then, run the development server:

```sh
yarn dev
```

## What's inside?

This monorepo includes the following packages/apps:

### Apps

- `home`: A [Next.js](https://nextjs.org/) app running on Next.js 15 with Turbopack
- `shell`: A [Next.js](https://nextjs.org/) app running on Next.js 15 with Turbopack

### Packages

- `@repo/ui`: A shared React component library
- `@repo/eslint-config`: Shared ESLint configurations
- `@repo/typescript-config`: Shared TypeScript configurations
- `@repo/tailwind-config`: Shared Tailwind CSS configuration

### Tech Stack

- [Next.js 15](https://nextjs.org/) with Turbopack
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)

### Available Scripts

From the root directory:

```bash
# Start development servers
yarn dev

# Build all apps and packages
yarn build

# Lint all apps and packages
yarn lint

# Format code with Prettier
yarn format
```

### Requirements

- Node.js >= 18
- Yarn 1.22.22

## Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)
