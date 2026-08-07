import styles from "./home.module.css";
import { Wordmark } from "./components/Logo";

const PHONE = "010-9716-4560";
const PHONE_HREF = "tel:01097164560";
const EMAIL = "car_connect@gmail.com";
const FAX = "02-6953-4691";
const COMPANY_NAME = "주식회사 카커넥트 미디어";
const CEO_NAME = "최우현";
const BIZ_REG_NO = "464-88-03723";
const COMPANY_ADDRESS = "서울특별시 강서구 공항대로 525, 15층 나-306호(등촌동, 비원오피스텔)";

const NAV = [
  { label: "서비스", href: "#services" },
  { label: "진행 방식", href: "#process" },
  { label: "카커넥트가 다른 이유", href: "#why" },
  { label: "문의", href: "#contact" },
];

const SERVICES = [
  {
    name: "매입·매도 대행",
    desc: "시세 파악부터 서류, 명의 이전까지 신차·중고차 매입과 매도를 대신 진행해드립니다.",
  },
  {
    name: "리스·렌트 맞춤 설계",
    desc: "예산과 신용 조건을 먼저 파악해, 여러 상품 중 가장 유리한 하나만 정리해 제안드립니다.",
  },
  {
    name: "정비·차량관리",
    desc: "정기점검과 소모품 교체 시기를 챙겨, 관리가 늦어지는 일이 없도록 합니다.",
  },
  {
    name: "세차·디테일링",
    desc: "방문 세차와 디테일링 일정을 잡아드려, 차량 상태를 항상 최상으로 유지합니다.",
  },
  {
    name: "탁송",
    desc: "전국 어디든 안전하게, 약속된 시간에 차량을 인도해드립니다.",
  },
  {
    name: "사고·보험 처리 지원",
    desc: "사고 발생 시 처리 절차와 필요한 서류를 함께 안내해드립니다.",
  },
];

const PROCESS = [
  { name: "상담 접수", desc: "전화 또는 상담 신청서로 편하게 접수해 주십시오." },
  { name: "전담 매니저 배정", desc: "전담 매니저가 배정되어 예산·신용·이용 목적을 면밀히 파악합니다." },
  { name: "답을 제안드립니다", desc: "파악한 조건을 종합해 가장 알맞은 답 하나만 제안드립니다." },
  { name: "진행 및 사후관리", desc: "계약과 실행은 물론, 이후 관리까지 책임지고 이어갑니다." },
];

const TRUST = [
  {
    name: "감이 아니라, 데이터로 정합니다",
    desc: "자체 비교 시스템으로 여러 캐피탈사의 금리·잔가 조건을 관리합니다. 담당자의 감이나 친분이 아니라, 축적된 데이터를 근거로 답을 찾습니다.",
  },
  {
    name: "제안에서 끝나지 않습니다",
    desc: "조건 비교부터 계약, 탁송, 이후 관리까지 같은 담당자가 끝까지 실행합니다. 자문만 드리고 떠나지 않습니다.",
  },
];

export default function CarConnectHome() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.headerInner}`}>
          <a href="#top" aria-label="카커넥트 미디어 홈">
            <Wordmark size="sm" showTagline={false} />
          </a>
          <nav className={styles.nav} aria-label="주요 메뉴">
            {NAV.map((item) => (
              <a key={item.label} href={item.href}>{item.label}</a>
            ))}
          </nav>
          <a href={PHONE_HREF} className={`${styles.btn} ${styles.primary} ${styles.headerCta}`}>
            상담 신청
          </a>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Private Mobility Advisory</div>
            <h1 className={`${styles.headline} ${styles.serif}`}>
              재무 상황까지 살펴,<br />최적의 오토금융을<br />제안드립니다
            </h1>
            <p className={styles.sub}>
              여러 상품을 나열해 고르시게 하지 않습니다. 예산과 이용 목적, 신용·금융 조건을 면밀히 살핀 뒤,
              그 안에서 가장 합리적인 답 하나를 전담 매니저가 찾아 제안드립니다. 매입·매도부터 리스·렌트,
              이후 정비·세차·탁송까지 — 그 답을 실행하는 과정 역시 끝까지 동행합니다.
            </p>
            <div className={styles.ctaRow}>
              <a href={PHONE_HREF} className={`${styles.btn} ${styles.primary} ${styles.lg}`}>상담 신청</a>
              <a href="#services" className={styles.btn}>서비스 살펴보기</a>
            </div>
          </div>
        </section>

        <section className={styles.statement}>
          <blockquote className={`${styles.serif}`}>
            선택지를 드리지 않습니다.<br /><em>고객님께 맞는,</em><br />하나의 답을 드립니다.
          </blockquote>
        </section>

        <section id="services" className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Service</div>
              <h2 className={styles.serif}>무엇이든, 맡겨 주십시오</h2>
              <p>매입·매도부터 정비·관리까지, 차량에 관한 모든 여정을 한 곳에서 책임지고 진행해드립니다.</p>
            </div>
            <div className={styles.svcList}>
              {SERVICES.map((s, i) => (
                <div key={s.name} className={styles.svcRow}>
                  <div className={styles.svcNum}>{String(i + 1).padStart(2, "0")}</div>
                  <div className={styles.svcName}>{s.name}</div>
                  <div className={styles.svcDesc}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>How It Works</div>
              <h2 className={styles.serif}>진행 방식</h2>
              <p>상담부터 사후관리까지, 전담 매니저와 함께하는 네 단계입니다.</p>
            </div>
            <div className={styles.processRow}>
              {PROCESS.map((p, i) => (
                <div key={p.name} className={styles.processStep}>
                  <div className={`${styles.pnum} ${styles.serif}`}>{i + 1}</div>
                  <div className={styles.pname}>{p.name}</div>
                  <div className={styles.pdesc}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <div className={styles.eyebrow}>Why CarConnect</div>
              <h2 className={styles.serif}>카커넥트가 다른 이유</h2>
            </div>
            <div className={styles.trustGrid}>
              {TRUST.map((t) => (
                <div key={t.name} className={styles.trustItem}>
                  <div className={styles.trustMark} />
                  <div>
                    <h3>{t.name}</h3>
                    <p>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className={styles.cta}>
          <div className={styles.wrap}>
            <div className={styles.eyebrow}>Get In Touch</div>
            <h2 className={styles.serif}>지금 상담을 신청하시면<br />전담 매니저가 곧 연락드립니다</h2>
            <p>전화·이메일로 언제든 문의해 주십시오.</p>
            <a href={PHONE_HREF} className={`${styles.btn} ${styles.primary} ${styles.lg}`}>상담 신청</a>
            <div className={styles.contactGrid}>
              <div className={styles.citem}><div className={styles.clabel}>Tel</div><div className={styles.cval}>{PHONE}</div></div>
              <div className={styles.citem}><div className={styles.clabel}>Email</div><div className={styles.cval}>{EMAIL}</div></div>
              <div className={styles.citem}><div className={styles.clabel}>Fax</div><div className={styles.cval}>{FAX}</div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={`${styles.wrap} ${styles.footerInner}`}>
          <Wordmark size="sm" showTagline={false} />
          <div className={styles.footerRight}>
            <span>카커넥트 미디어</span>
            <span>{PHONE}</span>
            <span>{EMAIL}</span>
          </div>
        </div>
        <div className={styles.wrap}>
          <p className={styles.footerLegal}>
            {COMPANY_NAME} · {CEO_NAME} 대표 · {COMPANY_ADDRESS} · 사업자등록번호 {BIZ_REG_NO}
            <br />
            {PHONE} · {EMAIL} · 팩스 {FAX}
          </p>
        </div>
      </footer>
    </div>
  );
}
