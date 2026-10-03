import styles from "./page.module.css";

/**
 * Hero signature visual: a browser mockup of a sample business website,
 * with two floating proof cards. Pure CSS, no images, mobile-safe.
 * The sample business is fictional and labeled as a sample concept.
 */
export default function HeroVisual() {
  return (
    <div className={styles.mockWrap}>
      <figure
        className={styles.heroMock}
        role="img"
        aria-label="Sample concept: a professional business website designed by ProjectKaro"
      >
        <span className={styles.mockSample}>Sample concept</span>
        <div className={styles.mockChrome} aria-hidden="true">
          <span className={styles.mockDot} />
          <span className={styles.mockDot} />
          <span className={styles.mockDot} />
          <span className={styles.mockUrl}>yourbusiness.com</span>
        </div>
        <div className={styles.mockPage} aria-hidden="true">
          <div className={styles.mockNav}>
            <span className={styles.mockLogo} />
            <span className={styles.mockBrand}>Northwind Traders</span>
            <span className={styles.mockLinks}>
              <span>Services</span>
              <span>Work</span>
              <span>About</span>
              <span>Contact</span>
            </span>
            <span className={styles.mockNavCta}>Get a quote</span>
          </div>
          <div className={styles.mockHero}>
            <div className={styles.mockHeroCopy}>
              <span className={styles.mockEyebrow}>Trusted since 2012</span>
              <span className={styles.mockH1}>Built for business. Designed to convert.</span>
              <span className={styles.mockSub}>
                A fast, professional website that turns visitors into enquiries.
              </span>
              <span className={styles.mockCtas}>
                <span className={styles.mockBtn}>Get a free quote</span>
                <span className={styles.mockBtnGhost}>See our work</span>
              </span>
            </div>
            <div className={styles.mockHeroMedia}>
              <span className={styles.mockMediaBlock}>
                <span className={styles.mockMediaBar} />
                <span className={styles.mockMediaBarShort} />
              </span>
            </div>
          </div>
          <div className={styles.mockStrip}>
            <div className={styles.mockStripItem}>
              <span className={styles.mockStripTitle}>Web design</span>
              <span className={styles.mockStripDesc}>Custom, fast, mobile-first</span>
            </div>
            <div className={styles.mockStripItem}>
              <span className={styles.mockStripTitle}>SEO ready</span>
              <span className={styles.mockStripDesc}>Found on Google, built to rank</span>
            </div>
            <div className={styles.mockStripItem}>
              <span className={styles.mockStripTitle}>Support</span>
              <span className={styles.mockStripDesc}>Documentation included</span>
            </div>
          </div>
        </div>
      </figure>
      <div className={styles.floatCardA} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
        <span>
          <strong>Quote in 24 hours</strong>
          <em>Detailed, in writing</em>
        </span>
      </div>
      <div className={styles.floatCardB} aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.59 13.41 11 3.83A2 2 0 0 0 9.59 3.24H4a1 1 0 0 0-1 1v5.59a2 2 0 0 0 .59 1.41l9.58 9.59a2 2 0 0 0 2.83 0l4.59-4.59a2 2 0 0 0 0-2.83z" /><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
        </svg>
        <span>
          <strong>Starting from ₹15,000</strong>
          <em>Priced per project</em>
        </span>
      </div>
    </div>
  );
}
