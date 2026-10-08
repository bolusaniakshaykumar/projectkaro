"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { INDUSTRY_LINKS } from "@/lib/industry-links";
import styles from "./Header.module.css";

interface NavChild {
  href: string;
  label: string;
  section?: string;
}

interface NavGroup {
  label: string;
  children: NavChild[];
}

const NAV_GROUPS: NavGroup[] = [
  {
    label: "Services",
    children: [
      { href: "/services/website-development", label: "Website Development" },
      { href: "/services/startup-mvp-development", label: "Startup MVP Development" },
      { href: "/services/ai-solutions", label: "AI Solutions" },
      { href: "/services/full-stack-development", label: "Full-Stack Development" },
      { href: "/services", label: "All Services" },
    ],
  },
  {
    label: "Websites",
    children: [
      { href: "/websites-for-businesses", label: "Websites for Businesses", section: "Overview" },
      { href: "/website-development-hyderabad", label: "Website Development in Hyderabad", section: "Overview" },
      { href: "/pricing", label: "Pricing", section: "Overview" },
      ...INDUSTRY_LINKS.map((link) => ({
        href: link.href,
        label: `Websites for ${link.label}`,
        section: "By industry",
      })),
    ],
  },
  {
    label: "Students",
    children: [
      { href: "/academic-projects", label: "Academic Projects" },
      { href: "/btech-major-projects-hyderabad", label: "B.Tech Major Projects in Hyderabad" },
      { href: "/btech-final-year-projects-hyderabad", label: "B.Tech Final Year Projects in Hyderabad" },
      { href: "/cse-projects-hyderabad", label: "CSE Projects in Hyderabad" },
      { href: "/ai-ml-projects-hyderabad", label: "AI & ML Projects in Hyderabad" },
      { href: "/academic-projects/major-projects", label: "Major Projects" },
      { href: "/academic-projects/minor-projects", label: "Minor Projects" },
    ],
  },
];

/* Top-level links: Home and About lead, then the groups, then How It Works
   and Blogs, with the Get a Quote button last. */
const TOP_LINKS: NavChild[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
];

const HOW_IT_WORKS_HREF = "/how-it-works";
const BLOGS_HREF = "/blogs";
const CTA_HREF = "/start-a-project";

/** Group children by their section label, preserving order. */
function sectionsOf(children: NavChild[]): { label: string | null; items: NavChild[] }[] {
  const sections: { label: string | null; items: NavChild[] }[] = [];
  for (const child of children) {
    const key = child.section ?? null;
    const existing = sections.find((s) => s.label === key);
    if (existing) existing.items.push(child);
    else sections.push({ label: key, items: [child] });
  }
  return sections;
}

function matches(href: string, pathname: string): boolean {
  if (pathname === href) return true;
  return href !== "/" && pathname.startsWith(`${href}/`);
}

function activeChildFor(group: NavGroup, pathname: string): NavChild | null {
  const matched = group.children.filter((child) => matches(child.href, pathname));
  if (matched.length === 0) return null;
  return matched.reduce((a, b) => (b.href.length > a.href.length ? b : a));
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, []);

  /* Close everything when the route changes. */
  useEffect(() => {
    closeMenu();
  }, [pathname, closeMenu]);

  /* Single source of truth: hover or click, at most one submenu is ever open. */
  const canHover = useCallback(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(hover: hover) and (pointer: fine)").matches,
    []
  );

  const hoverOpen = (label: string) => {
    if (canHover()) setOpenGroup(label);
  };

  const hoverClose = () => {
    if (canHover()) setOpenGroup(null);
  };

  const focusGroupButton = (label: string) => {
    navRef.current
      ?.querySelector<HTMLElement>(`[data-group-btn="${label}"]`)
      ?.focus();
  };

  const focusFirstLink = (label: string) => {
    navRef.current
      ?.querySelector<HTMLElement>(`[data-group="${label}"] [data-drop-link]`)
      ?.focus();
  };

  const onNavKeyDown = (e: React.KeyboardEvent) => {
    const target = e.target as HTMLElement;

    if (e.key === "Escape") {
      const groupEl = target.closest("[data-group]");
      closeMenu();
      const label = groupEl?.getAttribute("data-group");
      if (label) focusGroupButton(label);
      return;
    }

    if (target.hasAttribute("data-group-btn")) {
      const label = target.getAttribute("data-group-btn") ?? "";
      const buttons = Array.from(
        navRef.current?.querySelectorAll<HTMLElement>("[data-group-btn]") ?? []
      );
      const index = buttons.indexOf(target);

      if (e.key === "ArrowRight") {
        e.preventDefault();
        buttons[(index + 1) % buttons.length]?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        buttons[(index - 1 + buttons.length) % buttons.length]?.focus();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setOpenGroup(label);
        requestAnimationFrame(() => focusFirstLink(label));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setOpenGroup(null);
      }
      return;
    }

    if (target.hasAttribute("data-drop-link")) {
      const groupEl = target.closest("[data-group]");
      const links = Array.from(
        groupEl?.querySelectorAll<HTMLElement>("[data-drop-link]") ?? []
      );
      const index = links.indexOf(target);

      if (e.key === "ArrowDown") {
        e.preventDefault();
        links[(index + 1) % links.length]?.focus();
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (index === 0) {
          const label = groupEl?.getAttribute("data-group");
          if (label) focusGroupButton(label);
        } else {
          links[index - 1]?.focus();
        }
      } else if (e.key === "Tab" && !e.shiftKey && index === links.length - 1) {
        /* Tabbing past the last link leaves the submenu: close it. */
        setOpenGroup(null);
      } else if (e.key === "Tab" && e.shiftKey && index === 0) {
        /* Shift-tabbing back to the group button: close it. */
        setOpenGroup(null);
      }
    }
  };

  const isBlogsActive = matches(BLOGS_HREF, pathname);
  const isHowItWorksActive = matches(HOW_IT_WORKS_HREF, pathname);
  const isCtaActive = pathname === CTA_HREF;

  return (
    <header className={styles.header} role="banner">
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="ProjectKaro home, also known as Project Karo">
            <Image
              src="/logo.png"
              alt="ProjectKaro (Project Karo) academic project platform logo"
              width={180}
              height={45}
              priority
              sizes="(max-width: 1024px) 140px, 180px"
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
            onKeyDown={(e) => {
              if (e.key === "Escape" && menuOpen) setMenuOpen(false);
            }}
          >
            <span className={styles.menuIcon} aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <nav
            id="main-nav"
            ref={navRef}
            className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}
            aria-label="Main navigation"
            onKeyDown={onNavKeyDown}
          >
            <ul className={styles.navList} onMouseLeave={hoverClose}>
              {TOP_LINKS.map((link) => {
                const isActive = matches(link.href, pathname);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.navLinkActive : ""}`}
                      aria-current={isActive ? "page" : undefined}
                      onClick={closeMenu}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
              {NAV_GROUPS.map((group) => {
                const activeChild = activeChildFor(group, pathname);
                const isOpen = openGroup === group.label;
                const sections = sectionsOf(group.children);
                const grouped = sections.length > 1;
                return (
                  <li
                    key={group.label}
                    data-group={group.label}
                    className={`${styles.navItem} ${isOpen ? styles.navItemOpen : ""}`}
                    onMouseEnter={() => hoverOpen(group.label)}
                  >
                    <button
                      type="button"
                      data-group-btn={group.label}
                      className={`${styles.navLink} ${styles.groupButton} ${
                        activeChild ? styles.navLinkActive : ""
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="true"
                      aria-current={activeChild ? "page" : undefined}
                      onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    >
                      <span>{group.label}</span>
                      <span className={styles.caret} aria-hidden="true" />
                    </button>
                    <div
                      className={`${styles.dropdown} ${grouped ? styles.dropdownGrouped : ""}`}
                      role="group"
                      aria-label={`${group.label} submenu`}
                    >
                      {sections.map((section) => (
                        <div key={section.label ?? "main"} className={styles.dropSection}>
                          {section.label && (
                            <p className={styles.dropSectionLabel} aria-hidden="true">
                              {section.label}
                            </p>
                          )}
                          <ul
                            className={`${styles.dropList} ${
                              section.label === "By industry" ? styles.industryGrid : ""
                            }`}
                            aria-label={
                              section.label ? `${group.label}, ${section.label}` : `${group.label} submenu`
                            }
                          >
                            {section.items.map((child) => {
                              const isChildActive = activeChild?.href === child.href;
                              return (
                                <li key={child.href}>
                                  <Link
                                    href={child.href}
                                    data-drop-link
                                    className={`${styles.dropdownLink} ${
                                      isChildActive ? styles.dropdownLinkActive : ""
                                    }`}
                                    aria-current={isChildActive ? "page" : undefined}
                                    onClick={closeMenu}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>
                );
              })}
              <li>
                <Link
                  href={HOW_IT_WORKS_HREF}
                  className={`${styles.navLink} ${isHowItWorksActive ? styles.navLinkActive : ""}`}
                  aria-current={isHowItWorksActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href={BLOGS_HREF}
                  className={`${styles.navLink} ${isBlogsActive ? styles.navLinkActive : ""}`}
                  aria-current={isBlogsActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href={CTA_HREF}
                  className={`${styles.navLink} ${styles.navLinkCta} ${
                    isCtaActive ? styles.navLinkActive : ""
                  }`}
                  aria-current={isCtaActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  Get a Quote
                </Link>
              </li>
            </ul>
          </nav>
          {menuOpen && (
            <button
              type="button"
              className={styles.overlay}
              aria-hidden
              tabIndex={-1}
              onClick={closeMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
}
