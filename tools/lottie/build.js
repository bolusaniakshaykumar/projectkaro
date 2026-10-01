/**
 * ProjectKaro custom Lottie generator.
 *
 * Hand-authored, on-brand motion language for the flagship site.
 * Palette: brand blue #1e56e8, ink #0d1526, muted #6b7a94, success #0e9f6e.
 * Canvas 240x240, 30fps, looping. Each file stays well under 200KB.
 *
 * Run: node tools/lottie/build.js   (outputs to public/lottie/)
 *
 * Only battle-tested Lottie primitives are used: rect/ellipse/path shapes,
 * strokes (incl. dashes), fills, trim-paths, and transform keyframes.
 * No expressions, masks, mattes, or gradients.
 */

const fs = require("fs");
const path = require("path");

const OUT = path.join(__dirname, "..", "..", "public", "lottie");

/* ---------- palette (0-1 RGBA) ---------- */
const BLUE  = [0.1176, 0.3373, 0.9098, 1]; // #1e56e8
const INK   = [0.0510, 0.0824, 0.1490, 1]; // #0d1526
const MUTED = [0.4196, 0.4784, 0.5804, 1]; // #6b7a94
const GREEN = [0.0549, 0.6235, 0.4314, 1]; // #0e9f6e
const WHITE = [1, 1, 1, 1];

/* ---------- easing ---------- */
const EASE  = [{ x: [0.25], y: [1] }, { x: [0.55], y: [0] }];       // ease-out-ish
const EASE3 = (n) => [{ x: Array(n).fill(0.25), y: Array(n).fill(1) },
                      { x: Array(n).fill(0.55), y: Array(n).fill(0) }];
const POP_I = { x: [0.34], y: [1.45] };  // overshoot in
const POP_O = { x: [0.64], y: [0] };

/* ---------- keyframe helpers ---------- */
// scalar keyframes: [[t, value], ...] with easing; last keyframe holds
function K1(frames, easeIn = EASE[0], easeOut = EASE[1]) {
  return {
    a: 1,
    k: frames.map(([t, s], i) => {
      const kf = { t, s };
      if (i < frames.length - 1) { kf.i = easeIn; kf.o = easeOut; }
      return kf;
    }),
  };
}
// vector keyframes: [[t, [x,y(,z)]], ...]
function KV(frames, dims = 3) {
  const [ei, eo] = EASE3(dims);
  return {
    a: 1,
    k: frames.map(([t, s], i) => {
      const kf = { t, s };
      if (i < frames.length - 1) { kf.i = ei; kf.o = eo; }
      return kf;
    }),
  };
}
const S = (v) => ({ a: 0, k: v }); // static

/* ---------- shape helpers ---------- */
function TR(o = {}) {
  return {
    ty: "tr",
    p: o.p || S([0, 0]), a: o.a || S([0, 0]), s: o.s || S([100, 100]),
    r: o.r || S(0), o: o.o || S(100), nm: "Transform",
  };
}
function GR(items, nm = "Group") { return { ty: "gr", nm, it: [...items, TR()] }; }
function RC(w, h, r) { return { ty: "rc", d: 1, s: S([w, h]), p: S([0, 0]), r: S(r), nm: "Rect" }; }
function EL(w, h) { return { ty: "el", d: 1, s: S([w, h]), p: S([0, 0]), nm: "Ellipse" }; }
function SH(pts, closed = false) {
  return {
    ty: "sh", nm: "Path",
    ks: S({ i: pts.map(() => [0, 0]), o: pts.map(() => [0, 0]), v: pts.map((p) => [p[0], p[1]]), c: closed }),
  };
}
function ST(color, w, extra = {}) {
  return { ty: "st", nm: "Stroke", c: S(color), o: S(100), w: S(w), lc: 2, lj: 2, bm: 0, ...extra };
}
function DST(color, w, dash, gap, offsetFrames) {
  // dashed stroke with marching-ant offset animation
  const d = [
    { n: "d", nm: "dash", v: S(dash) },
    { n: "g", nm: "gap", v: S(gap) },
    { n: "o", nm: "offset", v: offsetFrames ? K1(offsetFrames) : S(0) },
  ];
  return ST(color, w, { d });
}
function FL(color) { return { ty: "fl", nm: "Fill", c: S(color), o: S(100), r: 1, bm: 0 }; }
function TM(sFrames, eFrames) {
  const wrap = (f) => (typeof f === "number" ? S(f) : K1(f));
  return { ty: "tm", nm: "Trim", s: wrap(sFrames), e: wrap(eFrames), o: S(0), m: 1 };
}
function layer(ind, nm, shapes, o = {}) {
  return {
    ddd: 0, ind, ty: 4, nm, sr: 1,
    ks: {
      o: o.o || S(100), r: o.r || S(0),
      p: o.p || S([120, 120, 0]), a: S([0, 0, 0]), s: o.s || S([100, 100, 100]),
    },
    ao: 0, shapes, ip: 0, op: o.op || 96, st: 0, bm: 0,
  };
}
function DOC(nm, layers, op = 96) {
  return { v: "5.7.4", fr: 30, ip: 0, op, w: 240, h: 240, nm, ddd: 0, assets: [], layers };
}
const FADE = (t0, t1) => K1([[t0, 100], [t1, 0]]); // loop-friendly fade out

/* ==================================================================
   1. hiw-submit — document draws in, lines write, badge pops
   ================================================================== */
function hiwSubmit() {
  const OP = 96, F = FADE(84, 94);
  const layers = [
    layer(1, "doc", [
      GR([RC(132, 152, 14), ST(INK, 7), TM(0, [[0, 0], [26, 100]])]),
    ], { p: S([112, 116, 0]), o: F, op: OP }),
    layer(2, "line1", [
      GR([SH([[-42, 0], [42, 0]]), ST(BLUE, 7), TM(0, [[14, 0], [32, 100]])]),
    ], { p: S([112, 84, 0]), o: F, op: OP }),
    layer(3, "line2", [
      GR([SH([[-42, 0], [42, 0]]), ST(BLUE, 7), TM(0, [[22, 0], [40, 100]])]),
    ], { p: S([112, 114, 0]), o: F, op: OP }),
    layer(4, "line3", [
      GR([SH([[-42, 0], [-4, 0]]), ST(BLUE, 7), TM(0, [[30, 0], [46, 100]])]),
    ], { p: S([112, 144, 0]), o: F, op: OP }),
    layer(5, "badge", [
      GR([EL(56, 56), FL(BLUE)]),
    ], {
      p: S([168, 172, 0]),
      s: { a: 1, k: [
        { i: POP_I, o: POP_O, t: 48, s: [0, 0, 100] },
        { i: EASE[0], o: EASE[1], t: 62, s: [100, 100, 100] },
        { i: EASE[0], o: EASE[1], t: 70, s: [92, 92, 100] },
        { t: 78, s: [100, 100, 100] },
      ]},
      o: F, op: OP,
    }),
    layer(6, "badge-check", [
      GR([SH([[-11, 1], [-3, 9], [12, -10]]), ST(WHITE, 7), TM(0, [[58, 0], [72, 100]])]),
    ], { p: S([168, 172, 0]), o: F, op: OP }),
  ];
  return DOC("hiw-submit", layers, OP);
}

/* ==================================================================
   2. hiw-quote — document + spinning clock badge (24h turnaround)
   ================================================================== */
function hiwQuote() {
  const OP = 96, F = FADE(86, 95);
  const layers = [
    layer(1, "doc", [
      GR([RC(132, 152, 14), ST(INK, 7), TM(0, [[0, 0], [26, 100]])]),
    ], { p: S([108, 122, 0]), o: F, op: OP }),
    layer(2, "line1", [
      GR([SH([[-40, 0], [40, 0]]), ST(BLUE, 7), TM(0, [[14, 0], [32, 100]])]),
    ], { p: S([108, 92, 0]), o: F, op: OP }),
    layer(3, "line2", [
      GR([SH([[-40, 0], [8, 0]]), ST(BLUE, 7), TM(0, [[22, 0], [38, 100]])]),
    ], { p: S([108, 122, 0]), o: F, op: OP }),
    layer(4, "clock", [
      GR([EL(64, 64), ST(BLUE, 7), TM(0, [[30, 0], [52, 100]])]),
    ], { p: S([170, 66, 0]), o: F, op: OP }),
    layer(5, "min-hand", [
      GR([SH([[0, 0], [0, -20]]), ST(INK, 6)]),
    ], {
      p: S([170, 66, 0]),
      r: K1([[44, 0], [80, 360]]),
      o: F, op: OP,
    }),
    layer(6, "hour-hand", [
      GR([SH([[0, 0], [0, -13]]), ST(INK, 6)]),
    ], {
      p: S([170, 66, 0]),
      r: K1([[44, -90], [80, 30]]),
      o: F, op: OP,
    }),
    layer(7, "pin", [GR([EL(10, 10), FL(BLUE)])], { p: S([170, 66, 0]), o: F, op: OP }),
  ];
  return DOC("hiw-quote", layers, OP);
}

/* ==================================================================
   3. hiw-build — code chevrons draw, lines type, cursor blinks
   ================================================================== */
function hiwBuild() {
  const OP = 96, F = FADE(88, 95);
  const blink = K1([[52, 100], [58, 0], [64, 100], [70, 0], [76, 100], [82, 0], [88, 100]]);
  const layers = [
    layer(1, "chev-l", [
      GR([SH([[16, -24], [-16, 0], [16, 24]]), ST(BLUE, 10), TM(0, [[0, 0], [24, 100]])]),
    ], { p: S([48, 108, 0]), o: F, op: OP }),
    layer(2, "chev-r", [
      GR([SH([[-16, -24], [16, 0], [-16, 24]]), ST(BLUE, 10), TM(0, [[6, 0], [30, 100]])]),
    ], { p: S([192, 108, 0]), o: F, op: OP }),
    layer(3, "code1", [
      GR([SH([[-30, 0], [30, 0]]), ST(INK, 7), TM(0, [[20, 0], [38, 100]])]),
    ], { p: S([120, 78, 0]), o: F, op: OP }),
    layer(4, "code2", [
      GR([SH([[-30, 0], [18, 0]]), ST(INK, 7), TM(0, [[30, 0], [48, 100]])]),
    ], { p: S([120, 108, 0]), o: F, op: OP }),
    layer(5, "code3", [
      GR([SH([[-30, 0], [30, 0]]), ST(INK, 7), TM(0, [[40, 0], [58, 100]])]),
    ], { p: S([120, 138, 0]), o: F, op: OP }),
    layer(6, "cursor", [GR([RC(10, 24, 2), FL(BLUE)])], { p: S([164, 138, 0]), o: blink, op: OP }),
  ];
  return DOC("hiw-build", layers, OP);
}

/* ==================================================================
   4. hiw-deliver — ring draws, check stamps, ticks radiate
   ================================================================== */
function hiwDeliver() {
  const OP = 96, F = FADE(86, 95);
  const layers = [
    layer(1, "ring", [
      GR([EL(118, 118), ST(BLUE, 8), TM(0, [[0, 0], [32, 100]])]),
    ], { p: S([120, 120, 0]), o: F, op: OP }),
    layer(2, "check", [
      GR([SH([[-28, 4], [-7, 25], [32, -24]]), ST(GREEN, 12), TM(0, [[28, 0], [50, 100]])]),
    ], { p: S([120, 120, 0]), o: F, op: OP }),
  ];
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4;
    const x1 = 120 + Math.cos(a) * 76, y1 = 120 + Math.sin(a) * 76;
    const x2 = 120 + Math.cos(a) * 92, y2 = 120 + Math.sin(a) * 92;
    const t = 50 + i * 3;
    layers.push(layer(3 + i, `tick${i}`, [
      GR([SH([[x1 - 120, y1 - 120], [x2 - 120, y2 - 120]]), ST(INK, 6)]),
    ], {
      p: S([120, 120, 0]),
      o: { a: 1, k: [{ t, s: [0] }, { i: EASE[0], o: EASE[1], t: t + 8, s: [100] }, { t: 86, s: [100] }, { t: 95, s: [0] }] },
      s: { a: 1, k: [{ i: POP_I, o: POP_O, t, s: [60, 60, 100] }, { t: t + 10, s: [100, 100, 100] }] },
      op: OP,
    }));
  }
  return DOC("hiw-deliver", layers, OP);
}

/* ==================================================================
   5. intake — paper plane flies a dotted arc into an inbox dot
   ================================================================== */
function quad(p0, p1, p2, t) {
  const u = 1 - t;
  return [u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0],
          u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1]];
}
function intake() {
  const OP = 120, F = FADE(110, 119);
  const P0 = [36, 184], P1 = [120, 20], P2 = [204, 64];
  const N = 14, pos = [], trail = [];
  for (let i = 0; i <= N; i++) {
    const t = i / N, p = quad(P0, P1, P2, t);
    pos.push(p); trail.push([p[0] - 36, p[1] - 184]); // relative to layer origin
  }
  const t0 = 10, t1 = 92;
  const posKf = pos.map((p, i) => [t0 + ((t1 - t0) * i) / N, [p[0], p[1], 0]]);
  const rotKf = pos.map((p, i) => {
    const q = pos[Math.min(i + 1, N)];
    const ang = (Math.atan2(q[1] - p[1], q[0] - p[0]) * 180) / Math.PI;
    return [t0 + ((t1 - t0) * i) / N, ang];
  });
  const layers = [
    layer(1, "trail", [
      GR([SH(trail, false), DST(MUTED, 5, 1, 12, [[t0, 0], [t1, -140]]), TM(0, [[t0, 0], [t1, 100]])]),
    ], { p: S([36, 184, 0]), o: F, op: OP }),
    layer(2, "plane", [
      GR([SH([[18, 0], [-12, 11], [-6, 0], [-12, -11]], true), FL(BLUE)]),
    ], {
      p: KV(posKf), r: KV(rotKf.map(([t, a]) => [t, a]), 1),
      s: { a: 1, k: [
        { i: POP_I, o: POP_O, t: 6, s: [0, 0, 100] },
        { i: EASE[0], o: EASE[1], t: 16, s: [100, 100, 100] },
        { t: t1, s: [100, 100, 100] },
        { t: t1 + 6, s: [0, 0, 100] },
      ]},
      o: F, op: OP,
    }),
    layer(3, "target", [GR([EL(34, 34), ST(BLUE, 6)])], {
      p: S([204, 64, 0]),
      s: { a: 1, k: [
        { i: POP_I, o: POP_O, t: t1 - 4, s: [0, 0, 100] },
        { t: t1 + 8, s: [100, 100, 100] },
      ]},
      o: F, op: OP,
    }),
  ];
  return DOC("intake", layers, OP);
}

/* ==================================================================
   6. gallery — frames pop in, plus pulses ("more work coming")
   ================================================================== */
function gallery() {
  const OP = 96, F = FADE(88, 95);
  const frames = [
    { x: 58, y: 104, t: 0 }, { x: 120, y: 128, t: 14 }, { x: 182, y: 104, t: 28 },
  ];
  const layers = frames.map((f, i) =>
    layer(i + 1, `frame${i}`, [GR([RC(88, 66, 10), ST(INK, 6)])], {
      p: S([f.x, f.y, 0]),
      s: { a: 1, k: [
        { i: POP_I, o: POP_O, t: f.t, s: [55, 55, 100] },
        { t: f.t + 14, s: [100, 100, 100] },
      ]},
      o: { a: 1, k: [{ t: f.t, s: [0] }, { i: EASE[0], o: EASE[1], t: f.t + 12, s: [100] }, { t: 88, s: [100] }, { t: 95, s: [0] }] },
      op: OP,
    })
  );
  layers.push(layer(4, "plus-h", [
    GR([SH([[-14, 0], [14, 0]]), ST(BLUE, 7), TM(0, [[44, 0], [58, 100]])]),
  ], { p: S([120, 128, 0]), o: F, op: OP }));
  layers.push(layer(5, "plus-v", [
    GR([SH([[0, -14], [0, 14]]), ST(BLUE, 7), TM(0, [[48, 0], [62, 100]])]),
  ], {
    p: S([120, 128, 0]),
    s: { a: 1, k: [
      { t: 62, s: [100, 100, 100] },
      { i: EASE[0], o: EASE[1], t: 74, s: [114, 114, 100] },
      { t: 86, s: [100, 100, 100] },
    ]},
    o: F, op: OP,
  }));
  return DOC("gallery", layers, OP);
}

/* ---------- write ---------- */
fs.mkdirSync(OUT, { recursive: true });
const jobs = {
  "hiw-submit.json": hiwSubmit(),
  "hiw-quote.json": hiwQuote(),
  "hiw-build.json": hiwBuild(),
  "hiw-deliver.json": hiwDeliver(),
  "intake.json": intake(),
  "gallery.json": gallery(),
};
for (const [file, doc] of Object.entries(jobs)) {
  const json = JSON.stringify(doc);
  fs.writeFileSync(path.join(OUT, file), json);
  console.log(file, (json.length / 1024).toFixed(1) + "KB", doc.layers.length + " layers");
}
