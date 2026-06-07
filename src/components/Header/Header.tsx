"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/start-a-project", label: "Get a Quote" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header} role="banner">
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="ProjectKaro home">
            <Image
              src="/logo.png"
              alt="ProjectKaro academic project platform logo"
              width={180}
              height={45}
              sizes="(max-width: 768px) 140px, 180px"
              className={styles.logoImage}
            />
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <nav
            id="main-nav"
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            aria-label="Main navigation"
          >
            <ul className={styles.navList}>
              {NAV_LINKS.map(({ href, label }) => {
                const isActive = pathname === href;
                const isCta = href === "/start-a-project";
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""} ${isCta ? styles.navLinkCta : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          {menuOpen && (
            <button
              type="button"
              className={styles.overlay}
              aria-hidden
              tabIndex={-1}
              onClick={() => setMenuOpen(false)}
            />
          )}
        </div>
      </div>
    </header>
  );
}
