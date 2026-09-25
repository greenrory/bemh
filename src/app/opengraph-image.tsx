import { ImageResponse } from "next/og"
import { site } from "@/data/site"

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

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
          padding: "80px",
          background: "#FFFFFF",
          color: "#0A163C",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <svg width="64" height="64" viewBox="0 0 24 24">
            <path
              d="M12 21s-7.5-4.6-9.6-9.4C.9 8 3 4 6.8 4c2.2 0 3.7 1.2 5.2 3 1.5-1.8 3-3 5.2-3C21 4 23.1 8 21.6 11.6 19.5 16.4 12 21 12 21Z"
              fill="#00874F"
            />
          </svg>
          <div style={{ fontSize: 36, fontWeight: 700, color: "#0C5A46" }}>
            {site.name}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>
          You don’t have to carry it alone.
        </div>
        <div style={{ display: "flex", fontSize: 30, color: "#0A163C", opacity: 0.7 }}>
          {site.fullName} · {site.domainLabel}
        </div>
      </div>
    ),
    size
  )
}
