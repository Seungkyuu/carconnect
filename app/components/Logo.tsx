"use client";

import { useId } from "react";

/**
 * 카커넥트 미디어 CCM 브래킷 모노그램 — 좌우 C가 가운데 M을 감싸는 구조.
 * 획을 굵게(6.6) 닫힌 형태로 잡아 명함·파비콘처럼 작게 줄여도 뭉개지지 않는다.
 *
 * 금속 질감은 겹쳐 그린 4개 레이어로 만든다(단색 채우기는 평면적으로 보임):
 *   1) 아래로 살짝 민 어두운 획 → 그림자
 *   2) 대각선 골드 그라데이션 획 → 몸통
 *   3) 위로 살짝 민 밝은 얇은 획 → 금속 엣지 하이라이트
 * 그라데이션은 userSpaceOnUse라 획마다 끊기지 않고 마크 전체를 하나로 가로지른다.
 */
export function LogoMark({ size = 30 }: { size?: number }) {
  // 한 문서에 여러 번 렌더돼도 <defs> id가 충돌하지 않게 인스턴스마다 분리한다.
  const uid = useId().replace(/:/g, "");
  const gold = `ccmGold-${uid}`;
  const paths = `ccmPaths-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      style={{ display: "block", flexShrink: 0 }}
    >
      <defs>
        <linearGradient id={gold} gradientUnits="userSpaceOnUse" x1="8" y1="4" x2="92" y2="96">
          <stop offset="0%" stopColor="#6e5124" />
          <stop offset="18%" stopColor="#a97c34" />
          <stop offset="34%" stopColor="#e8c473" />
          <stop offset="48%" stopColor="#fff3d2" />
          <stop offset="58%" stopColor="#d7a94e" />
          <stop offset="74%" stopColor="#8c6528" />
          <stop offset="86%" stopColor="#eecb84" />
          <stop offset="100%" stopColor="#684c1f" />
        </linearGradient>
        <g id={paths}>
          <path d="M 41.3 37.1 A 20 20 0 1 1 41.3 62.9" />
          <path d="M 58.7 37.1 A 20 20 0 1 0 58.7 62.9" />
          <path d="M 42 70 V 30 L 50 50 L 58 30 V 70" />
        </g>
      </defs>

      {/* 그림자·하이라이트를 작은 크기에도 다 얹으면 획 사이가 메워져 뭉개진다.
          40px 미만에서는 몸통 그라데이션만 남겨 형태를 또렷하게 유지한다. */}
      {size >= 40 && (
        <g stroke="#1c1305" strokeWidth="7.6" strokeLinecap="round" strokeLinejoin="round" opacity="0.4" transform="translate(0,1.1)">
          <use href={`#${paths}`} />
        </g>
      )}
      <g stroke={`url(#${gold})`} strokeWidth="6.6" strokeLinecap="round" strokeLinejoin="round">
        <use href={`#${paths}`} />
      </g>
      <g stroke="#fff8e6" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" transform="translate(-0.55,-0.65)">
        <use href={`#${paths}`} />
      </g>
    </svg>
  );
}

/**
 * 워드마크 — 자간 넓은 세리프 텍스트 + 얇은 밑줄(와이어프레임 C안 확정).
 * showMark를 켜면 CCM 모노그램을 왼쪽에 붙인 가로형 락업이 된다.
 */
export function Wordmark({
  size = "md",
  showTagline = true,
  showMark = false,
}: {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
  showMark?: boolean;
}) {
  const nameSize = { sm: 16, md: 20, lg: 40 }[size];
  const tagSize = { sm: 9.5, md: 10.5, lg: 14 }[size];
  const tracking = { sm: "0.12em", md: "0.16em", lg: "0.22em" }[size];
  const markSize = { sm: 34, md: 40, lg: 72 }[size];

  const text = (
    <div style={{ display: "inline-flex", flexDirection: "column", gap: 4 }}>
      <span
        style={{
          fontFamily: '"Noto Serif KR", Georgia, serif',
          fontSize: nameSize,
          fontWeight: 500,
          letterSpacing: tracking,
          borderBottom: "1px solid var(--cc-accent)",
          paddingBottom: size === "lg" ? 10 : 5,
          lineHeight: 1,
        }}
      >
        CARCONNECT MEDIA
      </span>
      {showTagline && (
        <span
          style={{
            fontSize: tagSize,
            color: "var(--cc-ink-soft)",
            letterSpacing: "0.02em",
            fontWeight: 500,
          }}
        >
          카커넥트 미디어
        </span>
      )}
    </div>
  );

  if (!showMark) return text;

  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: size === "sm" ? 10 : 14 }}>
      <LogoMark size={markSize} />
      {text}
    </div>
  );
}
