import Image from "next/image";
import styles from "./page.module.css";

/**
 * Hero signature visual: one elegant, realistic browser mockup of a
 * believable business website. Real text, real photography, restrained
 * palette, soft shadow. No floating cards, no stickers.
 */
export default function HeroVisual() {
  return (
    <figure
      className={styles.heroMock}
      role="img"
      aria-label="Preview of a professional business website in the ProjectKaro style: a dental clinic homepage"
    >
      <div className={styles.mockChrome} aria-hidden="true">
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockUrl}>yourbusiness.com</span>
      </div>
      <div className={styles.mockPage} aria-hidden="true">
        <div className={styles.mockNav}>
          <span className={styles.mockLogo} />
          <span className={styles.mockBrand}>Smile Studio</span>
          <span className={styles.mockLinks}>
            <span>Services</span>
            <span>About</span>
            <span>Reviews</span>
            <span>Contact</span>
          </span>
          <span className={styles.mockNavCta}>Book a visit</span>
        </div>
        <div className={styles.mockHero}>
          <div className={styles.mockHeroCopy}>
            <span className={styles.mockEyebrow}>Dental care in Hyderabad</span>
            <span className={styles.mockH1}>A healthier smile starts here.</span>
            <span className={styles.mockSub}>
              Painless treatments, transparent pricing, and appointments that run on time.
            </span>
            <span className={styles.mockCtas}>
              <span className={styles.mockBtn}>Book an appointment</span>
              <span className={styles.mockBtnGhost}>Call 040 1234 5678</span>
            </span>
          </div>
          <div className={styles.mockHeroMedia}>
            <Image
              src="/images/dental-care.jpg"
              alt=""
              width={800}
              height={533}
              priority
              className={styles.mockMediaImg}
            />
          </div>
        </div>
        <div className={styles.mockStrip}>
          <div className={styles.mockStripItem}>
            <span className={styles.mockStripTitle}>General dentistry</span>
            <span className={styles.mockStripDesc}>Checkups, fillings, root canals</span>
          </div>
          <div className={styles.mockStripItem}>
            <span className={styles.mockStripTitle}>Braces and aligners</span>
            <span className={styles.mockStripDesc}>For teens and adults</span>
          </div>
          <div className={styles.mockStripItem}>
            <span className={styles.mockStripTitle}>Cosmetic dentistry</span>
            <span className={styles.mockStripDesc}>Whitening, veneers, smile design</span>
          </div>
        </div>
        <div className={styles.mockFoot}>
          <span>Open Mon to Sat, 9 am to 8 pm</span>
          <span>Book online in under a minute</span>
        </div>
      </div>
    </figure>
  );
}
