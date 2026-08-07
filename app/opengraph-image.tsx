import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "카커넥트 미디어 — 프라이빗 모빌리티 어드바이저리";
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
          justifyContent: "center",
          padding: "90px",
          background: "#0d0c0a",
          color: "#f2ede0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: 10,
            borderBottom: "2px solid #d4af6a",
            paddingBottom: 20,
            width: "fit-content",
          }}
        >
          CARCONNECT MEDIA
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, marginTop: 52, lineHeight: 1.4 }}>
          재무 상황까지 살펴, 최적의 오토금융을
        </div>
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, lineHeight: 1.4 }}>
          제안드립니다
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#a39b87", marginTop: 28 }}>
          Private Mobility Advisory · 카커넥트 미디어
        </div>
      </div>
    ),
    { ...size },
  );
}
