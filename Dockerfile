# syntax=docker/dockerfile:1

FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

# ---------- dependencies ----------
FROM base AS deps
# pnpm-workspace.yaml must be copied here too: it carries the allowBuilds
# policy for native postinstall scripts (e.g. unrs-resolver). Without it,
# `pnpm install --frozen-lockfile` has no policy to fall back on in this
# clean environment and fails with ERR_PNPM_IGNORED_BUILDS.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store \
    pnpm install --frozen-lockfile

# ---------- development ----------
FROM base AS dev
ENV NODE_ENV=development
COPY --from=deps /app/node_modules ./node_modules
COPY . .
EXPOSE 3100
CMD ["pnpm", "dev"]

# ---------- build ----------
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# ---------- production runtime ----------
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3100
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Runs as an unprivileged user, not root.
USER nextjs
# Listens on 3100 inside the container (see PORT above) — docker-compose.yml
# maps host 3100 to this port; keep them in sync if either one changes.
EXPOSE 3100
CMD ["node", "server.js"]