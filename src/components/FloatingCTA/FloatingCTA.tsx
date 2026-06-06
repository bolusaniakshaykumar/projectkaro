"use client";

import Link from "next/link";
import styles from "./FloatingCTA.module.css";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show after scrolling a bit (e.g., 300px)
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <Link
            href="/start-a-project"
            className={`${styles.floatingBtn} ${isVisible ? styles.visible : ""}`}
            aria-label="Get a free quote"
        >
            <div className={styles.iconWrapper}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                </svg>
            </div>
            <span className={styles.label}>Get a Free Quote</span>
        </Link>
    );
}
