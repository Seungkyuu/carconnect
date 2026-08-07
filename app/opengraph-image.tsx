import { ImageResponse } from "next/og";

// 빌드 시점에 PNG로 미리 생성해 CDN 정적 자산으로 서빙한다. edge 런타임으로
// 두면 요청마다 즉석 렌더(ƒ)라 카카오톡 같은 스크래퍼가 타임아웃될 수 있다.
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
        {/* ⚠ CCM 모노그램은 여기 넣지 않는다 — Satori가 SVG 원호의
            large-arc-flag를 무시하고 짧은 쪽으로 그려서 C가 납작하게
            찌그러진다. 모노그램은 실제 브라우저가 그리는 헤더·파비콘에서만
            쓰고, OG 이미지는 워드마크로만 간다. */}
        <div
          style={{
            display: "flex",
            fontSize: 42,
            fontWeight: 500,
            letterSpacing: 10,
            borderBottom: "2px solid #d4af6a",
            paddingBottom: 20,
            // Satori는 width:"fit-content"를 지원하지 않아 렌더가 통째로 실패한다.
            // 컬럼 플렉스에서 내용 너비로 줄이려면 alignSelf를 쓴다.
            alignSelf: "flex-start",
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
