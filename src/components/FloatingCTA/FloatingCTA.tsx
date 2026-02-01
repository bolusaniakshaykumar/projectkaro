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
            aria-label="Start a Project"
        >
            <div className={styles.iconWrapper}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <span className={styles.label}>Start a Project</span>
        </Link>
    );
}
