import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
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
