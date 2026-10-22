// Unified build entrypoint for every platform.
//
//  - Vercel / local: runs a plain `next build` (unchanged behaviour).
//  - Cloudflare Workers Builds (WORKERS_CI=1, injected by Cloudflare):
//    also bundles the Cloudflare Worker via OpenNext, which is what
//    `npx wrangler deploy` then publishes.
//
// Keeping the worker bundling behind WORKERS_CI means no platform ever
// runs the other platform's build steps.
const { execSync } = require("node:child_process");

execSync("npx next build", { stdio: "inherit" });

if (process.env.WORKERS_CI === "1") {
  execSync("npx opennextjs-cloudflare build --skipNextBuild", { stdio: "inherit" });
}
