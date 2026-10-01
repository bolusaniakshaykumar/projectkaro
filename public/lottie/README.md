# Lottie animations

`hero-build.json` is a free animation from LottieFiles, used under the Lottie
Simple License (see its row below). The `hiw-*`, `intake`, and `gallery` files
are hand-authored originals for ProjectKaro (see `tools/lottie/build.js`) —
no third-party source, no attribution required, no external requests at
runtime. All share one motion language: brand blue `#1e56e8`, ink `#0d1526`,
muted `#6b7a94`, success `#0e9f6e`; 240x240 canvas, 30fps, seamless loops
(every layer is invisible at frame 0 and fades before the loop point).

| File | Source | Notes |
|------|--------|-------|
| `hero-build.json` | "Web Development" animation, shades of blue. Original by thrivedesign, via Stephen John on LottieFiles (`https://assets6.lottiefiles.com/packages/lf20_RWmLEO.json`) | 59.6 KB. Coral-red accents recolored to brand blue `#1e56e8`. Used as the hero signature visual. |
| `hiw-submit.json` | Original (tools/lottie/build.js) | 5.2 KB. Brief document draws in, lines write, badge stamps. /how-it-works step 1. |
| `hiw-quote.json` | Original (tools/lottie/build.js) | 5.6 KB. Quote document with a spinning clock (24h turnaround). /how-it-works step 2. |
| `hiw-build.json` | Original (tools/lottie/build.js) | 5.4 KB. Code chevrons draw, lines type, cursor blinks. /how-it-works step 3. |
| `hiw-deliver.json` | Original (tools/lottie/build.js) | 8.6 KB. Ring draws, check stamps, ticks radiate. /how-it-works step 4. |
| `intake.json` | Original (tools/lottie/build.js) | 6.5 KB. Paper plane flies a dotted arc into its target. /start-a-project reassurance. |
| `gallery.json` | Original (tools/lottie/build.js) | 4.3 KB. Frames pop in around a pulsing plus (more work coming). /projects placeholder. |

Keep every file under ~200 KB. New additions must use a light-theme-compatible
palette (no neon, no dark-scene animations). Regenerate the originals with
`node tools/lottie/build.js` from the flagship dir.
