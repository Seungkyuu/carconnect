import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";

const TITLE = "카커넥트 미디어 — 프라이빗 모빌리티 어드바이저리";
const DESCRIPTION =
  "예산과 신용 조건을 먼저 파악해, 고객님께 맞는 오토금융 하나를 제안드립니다. 매입·매도부터 리스·렌트, 정비·세차·탁송까지 전담 매니저가 끝까지 함께합니다.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "카커넥트",
    "카커넥트미디어",
    "오토금융",
    "자동차 리스",
    "장기렌트",
    "차량관리 대행",
    "탁송",
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    siteName: "카커넥트 미디어",
    locale: "ko_KR",
    type: "website",
  },
  // ⚠ 구글/네이버 서치콘솔 소유확인 코드는 도메인마다 새로 발급받아야 한다
  // (RENTO 코드를 그대로 두면 엉뚱한 사이트를 인증하려다 실패한다) — 실제
  // 배포 도메인 확정 후 각 서치콘솔에서 새로 받아 채워 넣는다.
};

// ⚠ 사업자등록증 정보(대표자명·사업자등록번호·주소)를 받으면 address 필드를
// 채워 구조화 데이터로 노출한다 — 확인 전까지는 잘못된 정보(RENTO 주소 등)를
// 노출하느니 비워두는 쪽이 안전하다.
const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "카커넥트 미디어",
  description: DESCRIPTION,
  telephone: "010-9716-4560",
  email: "car_connect@gmail.com",
  faxNumber: "02-6953-4691",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        {/* Pretendard — 한국 금융앱 사실상 표준 서체(카카오뱅크·K뱅크 등).
            동적 서브셋 CDN이라 실제 쓰는 글자만 내려받는다. */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Noto Serif KR — 홈 화면 세리프 헤드라인·워드마크 전용(카커넥트 미디어
            "워드마크 전용" 로고 C안, 얇은 획의 격식 있는 인상을 위해 사용). */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;500&display=swap"
        />
        {/* 하이드레이션 전에 저장된 테마를 먼저 적용 — 라이트→다크 깜빡임 방지.
            기본값은 시스템 설정과 무관하게 항상 라이트 — 사용자가 토글을
            직접 눌러야만 다크로 바뀐다(시스템이 다크면 자동으로 어두워지는
            동작 없음). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('rento-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        {/* 검색엔진에 회사 정보를 구조화 데이터로 제공 — 네이버·구글 검색결과에
            상호·주소가 더 풍부하게 노출되도록 돕는다. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
