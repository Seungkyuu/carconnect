/**
 * 카커넥트 미디어 워드마크 — 심볼 없이 자간 넓은 세리프 텍스트 + 얇은 밑줄만
 * 쓰는 "워드마크 전용"안(와이어프레임 C안, 대표님 확정). 색면 배지 없이도
 * 정제된 인상을 준다는 게 이 안을 고른 이유라, 어떤 배경에서도 아이콘을
 * 추가하지 않는다.
 */
export function Wordmark({
  size = "md",
  showTagline = true,
}: {
  size?: "sm" | "md" | "lg";
  showTagline?: boolean;
}) {
  const nameSize = { sm: 16, md: 20, lg: 40 }[size];
  const tagSize = { sm: 9.5, md: 10.5, lg: 14 }[size];
  const tracking = { sm: "0.12em", md: "0.16em", lg: "0.22em" }[size];

  return (
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
}
