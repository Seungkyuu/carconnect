/**
 * 사이트 전역 상수 — 배포 도메인의 단일 출처(single source of truth).
 *
 * 도메인은 layout.tsx의 metadataBase·openGraph.url, sitemap.ts, robots.ts
 * 네 군데에서 쓰인다. 각자 상수를 들고 있으면 도메인이 바뀔 때 하나만 고치고
 * 나머지를 놓치기 쉬운데, 그러면 링크 미리보기 이미지가 안 뜨거나(og:image가
 * 엉뚱한 호스트를 가리킴) 검색엔진에 잘못된 사이트맵을 신고하게 된다.
 * 자매 사이트(서동·탑고)에서 실제로 발생한 사고라 여기서는 한 곳에서만 정의한다.
 *
 * ⚠ 배포 도메인이 변경되면 이 값만 바꾸면 된다.
 */
export const SITE_URL = "https://carconnect-xi.vercel.app";

export const SITE_NAME = "카커넥트 미디어";
