import type { Metadata, Viewport } from "next";
import "./globals.css";
import Providers from "./providers";

const TITLE = "카커넥트 미디어 — 프라이빗 모빌리티 어드바이저리";
const DESCRIPTION =
  "예산과 신용 조건을 먼저 파악해, 고객님께 맞는 오토금융 하나를 제안드립니다. 매입·매도부터 리스·렌트, 정비·세차·탁송까지 전담 매니저가 끝까지 함께합니다.";

export const metadata: Metadata = {
  metadataBase: new URL("https://carconnect-xi.vercel.app"),
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
    url: "https://carconnect-xi.vercel.app",
    siteName: "카커넥트 미디어",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    // 네이버 서치어드바이저에서 이 도메인으로 새로 발급받은 코드.
    // ⚠ 구글 서치콘솔 코드는 아직 미발급 — 발급 후 google 필드를 추가한다.
    other: { "naver-site-verification": "d3a91aa5459ec5125282ad1aaf45853a2c302134" },
  },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  legalName: "주식회사 카커넥트 미디어",
  name: "카커넥트 미디어",
  description: DESCRIPTION,
  founder: { "@type": "Person", name: "최우현" },
  taxID: "464-88-03723",
  telephone: "010-9716-4560",
  email: "car_connect@gmail.com",
  faxNumber: "02-6953-4691",
  address: {
    "@type": "PostalAddress",
    streetAddress: "공항대로 525, 15층 나-306호(등촌동, 비원오피스텔)",
    addressLocality: "강서구",
    addressRegion: "서울특별시",
    addressCountry: "KR",
  },
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
