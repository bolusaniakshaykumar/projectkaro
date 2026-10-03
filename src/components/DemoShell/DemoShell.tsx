"use client";

import Link from "next/link";
import styles from "./DemoShell.module.css";

export default function DemoShell({
  businessName,
  children,
}: {
  businessName: string;
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
      </footer>
    </div>
  );
}
