# Vercel CLI Skill Monorepo

This is a monorepo managed with **pnpm** and **turborepo**, containing three applications deployed to Vercel.

**GitHub Repository**: https://github.com/jeffsee55/vercel-cli-skill-monorepo-check

## Structure

```
vercel-cli-skill-monorepo-check/
├── apps/
│   ├── nextjs-app/          # Next.js application
│   ├── vite-app/            # Vite React application
│   └── express-api/         # Express API application
├── package.json
├── pnpm-workspace.yaml
└── turbo.json
```

## Applications

### 1. Next.js App
- **Location**: `apps/nextjs-app/`
- **Vercel Project**: `nextjs-app-monorepo`
- **Custom Environment**: `dev` (preview type)
- **Framework**: Next.js 15 with TypeScript
- **Live URL**: https://nextjs-app-monorepo-ltv3g1mcd-jsee.vercel.app

### 2. Vite App
- **Location**: `apps/vite-app/`
- **Vercel Project**: `vite-app-monorepo`
- **Custom Environment**: `dev` (preview type)
- **Framework**: Vite with React 18 and TypeScript
- **Live URL**: https://vite-app-monorepo.vercel.app

### 3. Express API
- **Location**: `apps/express-api/`
- **Vercel Project**: `express-api-monorepo`
- **Custom Environment**: `dev` (preview type)
- **Framework**: Express with TypeScript (deployed as Vercel serverless functions)
- **Live URL**: https://express-api-monorepo-gguk99ppi-jsee.vercel.app

## Development

Install dependencies:
```bash
pnpm install
```

Run all apps in development mode:
```bash
pnpm dev
```

Or run individual apps:
```bash
turbo dev --filter nextjs-app
turbo dev --filter vite-app
turbo dev --filter express-api
```

## Building

Build all apps:
```bash
pnpm build
```

Build individual apps:
```bash
turbo build --filter nextjs-app
turbo build --filter vite-app
turbo build --filter express-api
```

## Deployment

Each app is linked to its own Vercel project. To deploy:

```bash
# Deploy Next.js app
cd apps/nextjs-app
vercel

# Deploy Vite app
cd apps/vite-app
vercel

# Deploy Express API
cd apps/express-api
vercel
```

For production deployments:
```bash
vercel --prod
```

## Custom Environments

Each project has a `dev` custom environment configured. You can view them:

```bash
vercel api /v9/projects/nextjs-app-monorepo/custom-environments
vercel api /v9/projects/vite-app-monorepo/custom-environments
vercel api /v9/projects/express-api-monorepo/custom-environments
```

## Vercel Projects

- **nextjs-app-monorepo**: Next.js application
- **vite-app-monorepo**: Vite React application
- **express-api-monorepo**: Express API (serverless)

All projects are linked and ready for deployment!
