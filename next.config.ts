import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Served behind nginx at https://meeting.vc-itsecurity.de/consent/ (path-
  // proxied to the BBB server's existing domain, see nginx notes elsewhere).
  // This makes "/consent" the app's actual root and prefixes every asset URL
  // it generates (/_next/..., the logo, etc.) with it, matching what nginx
  // forwards unchanged (no trailing slash on its proxy_pass).
  basePath: "/consent",
  // @vercel/nft's static tracing misses the ESM variant of @swc/helpers
  // (Next's SWC output requires deep paths like
  // "@swc/helpers/esm/_interop_require_default.js" that aren't statically
  // discoverable), so the standalone build silently omits it and the
  // production server crashes at runtime. Force it in explicitly.
  outputFileTracingIncludes: {
    "/": ["./node_modules/@swc/helpers/**"],
  },
};

export default nextConfig;
