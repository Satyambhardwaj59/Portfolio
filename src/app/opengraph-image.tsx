import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/site";

export const alt = siteConfig.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0c0d",
          color: "#f2f0ea",
          padding: 80,
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: "#c6f432", textTransform: "uppercase" }}>
          {siteConfig.role}
        </div>
        <div style={{ fontSize: 96, fontWeight: 700, lineHeight: 1.05 }}>{siteConfig.name}</div>
        <div style={{ fontSize: 30, color: "#a1a1a8" }}>
          React · Next.js · TypeScript · Node.js · MongoDB
        </div>
      </div>
    ),
    size,
  );
}
