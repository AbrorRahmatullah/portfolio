import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "#d4aa7d",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 13,
          fontWeight: 800,
          color: "#1a1a1a",
          letterSpacing: "-0.03em",
          fontFamily: "sans-serif",
        }}
      >
        AR
      </div>
    ),
    { ...size }
  );
}
