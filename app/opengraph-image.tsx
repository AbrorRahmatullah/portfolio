import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Abror Rahmatullah — Full-Stack Python Developer & AI Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#1a1a1a",
          padding: "72px 80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Warm ambient glow */}
        <div
          style={{
            position: "absolute",
            top: -80,
            left: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,170,125,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            right: -60,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(196,144,96,0.10) 0%, transparent 70%)",
          }}
        />

        {/* Top: avatar + label */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 40 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#d4aa7d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
              color: "#1a1a1a",
              letterSpacing: "-0.03em",
              flexShrink: 0,
            }}
          >
            AR
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 18px",
              borderRadius: 999,
              border: "1px solid rgba(212,170,125,0.30)",
              background: "rgba(212,170,125,0.08)",
            }}
          >
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#a8c4a0",
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: 15, color: "#9a9490", letterSpacing: "0.06em" }}>
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: "#f0ece6",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            marginBottom: 18,
          }}
        >
          Abror Rahmatullah
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            color: "#d4aa7d",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            marginBottom: 28,
          }}
        >
          Full-Stack Python Developer &amp; AI Engineer
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {["Python", "FastAPI", "Flask", "PostgreSQL", "AWS Bedrock", "LangChain", "RAG"].map(
            (tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  fontSize: 16,
                  color: "#9a9490",
                  letterSpacing: "0.03em",
                }}
              >
                {tag}
              </div>
            )
          )}
        </div>

        {/* Bottom: URL */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            right: 80,
            fontSize: 16,
            color: "#6a6460",
            fontFamily: "monospace",
            letterSpacing: "0.04em",
          }}
        >
          abrorrahmatullah.vercel.app
        </div>

        {/* Thin top accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 3,
            background: "linear-gradient(90deg, #d4aa7d, #c49060, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
