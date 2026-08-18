import type { NextConfig } from "next";
import { BASE_PATH } from "./base-path";

const nextConfig: NextConfig = {
  output: 'standalone',
  // Served behind nginx at https://meeting.vc-itsecurity.de/consent/ (path-
  // proxied to the BBB server's existing domain, see nginx notes elsewhere).
  // This makes "/consent" the app's actual root and prefixes every asset URL
  // it generates (/_next/..., the logo, etc.) with it, matching what nginx
  // forwards unchanged (no trailing slash on its proxy_pass).
  basePath: BASE_PATH,
  // next/image's local-image optimizer does an internal self-request that
  // doesn't get basePath applied to it, so with basePath set it 400s on
  // every local image (confirmed: manually prefixing the url param makes it
  // work, so this is a Next-internal gap, not a config mistake on our end).
  // We only have one small, fixed-size logo — not worth fighting the
  // optimizer (or requiring sharp) for it, so skip optimization entirely.
  images: {
    unoptimized: true,
  },
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
