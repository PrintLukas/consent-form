// Single source of truth for the app's basePath (see next.config.ts).
//
// This has to be a plain constant, not read from Next's own config at
// runtime, because of a real gap in Next.js 16.3.1: `next/image` only
// auto-prepends basePath to a <Image> src when going through its built-in
// optimizer. We have images.unoptimized set (see next.config.ts for why),
// which skips that prepending entirely — so any absolute ("/...") image src
// has to be prefixed by hand. Import this constant everywhere that's
// needed instead of hardcoding "/consent" a second time, so the two stay in
// sync if this ever changes.
export const BASE_PATH = "/consent";
