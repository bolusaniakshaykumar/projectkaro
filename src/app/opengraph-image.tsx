import { ImageResponse } from "next/og";
import { SITE_CONFIG } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE_CONFIG.name} — Web Development & Student Project Solutions`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #080c14 0%, #111827 55%, #1e3a5f 100%)",
          color: "#f0f4ff",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7aadff",
            marginBottom: 24,
          }}
        >
          {SITE_CONFIG.name}
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.04em",
            maxWidth: 900,
          }}
        >
          Web Development & Student Project Solutions
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            lineHeight: 1.5,
            color: "#8b9cb8",
            maxWidth: 820,
          }}
        >
          Websites, full-stack apps, major projects, research work — fixed pricing, on-time delivery.
        </div>
      </div>
    ),
    { ...size }
  );
}
