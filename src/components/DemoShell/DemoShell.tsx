"use client";

import Link from "next/link";
import styles from "./DemoShell.module.css";

export default function DemoShell({
  businessName,
  industryPath,
  industryLabel,
  children,
}: {
  businessName: string;
  industryPath?: string;
  industryLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.shell}>
      <div className={styles.badgeBar}>
        <span className={styles.badge}>Demo Concept</span>
        <span className={styles.badgeText}>
          A sample website crafted by{" "}
          <Link href="https://projectkaro.com" className={styles.badgeLink}>
            ProjectKaro
          </Link>
        </span>
      </div>
      {children}
      <footer className={styles.creditFooter}>
        <p>
          {businessName} is a fictional sample business created for demonstration.{" "}
          <Link href="https://projectkaro.com" className={styles.creditLink}>
            Built by ProjectKaro
          </Link>
        </p>
        {industryPath && industryLabel && (
          <p>
            <Link href={industryPath} className={styles.creditLink}>
              See how ProjectKaro builds websites for {industryLabel}
            </Link>
          </p>
        )}
      </footer>
    </div>
  );
}
