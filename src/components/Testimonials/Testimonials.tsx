"use client";

import styles from "./Testimonials.module.css";
import { useRef } from "react";

const REVIEWS = [
    {
        name: "Rohan S.",
        role: "Final Year CSE",
        text: "I was stuck with my IoT project for weeks. ProjectKaro's mentor helped me debug the hardware and code in just 2 sessions. Submitted on time!",
        rating: 5,
    },
    {
        name: "Priya M.",
        role: "ECE Student",
        text: "The documentation support is a lifesaver. They provided a proper report format that my college accepted immediately. Highly recommended.",
        rating: 5,
    },
    {
        name: "Aditya K.",
        role: "B.Tech IT",
        text: "Expert guidance indeed. I learned more about React in 3 days of building this project than I did in my whole semester. The code explanation was crystal clear.",
        rating: 5,
    },
    {
        name: "Sneha P.",
        role: "EEE Final Year",
        text: "Built a Smart Grid simulation. The logic and MATLAB simulation help was top-notch. It was complex, but they made it simple.",
        rating: 5,
    },
    {
        name: "Karthik R.",
        role: "CS Semester 5",
        text: "Needed a quick Python mini-project. Got it done in a weekend with their starter kit and guidance. Super affordable too.",
        rating: 5,
    },
    {
        name: "Anjali D.",
        role: "Portfolio Builder",
        text: "I wanted a unique project for my placement resume. We built a full-stack e-commerce app. It definitely helped me crack my interview.",
        rating: 5,
    },
];

export default function Testimonials() {
    const scrollRef = useRef<HTMLDivElement>(null);

    // Optional: Auto-scroll or buttons can be added here

    return (
        <section className={styles.section} aria-labelledby="testimonials-heading">
            <div className="container">
                <p className={styles.eyebrow}>Success Stories</p>
                <h2 id="testimonials-heading" className={styles.title}>
                    Trusted by students across India
                </h2>

                {/* Carousel Container */}
                <div className={styles.carouselWrapper}>
                    <div className={styles.carousel} ref={scrollRef}>
                        {REVIEWS.map((review, i) => (
                            <div key={i} className={styles.cardWrapper}>
                                <div className={styles.card}>
                                    <div className={styles.stars} aria-label={`${review.rating} out of 5 stars`}>
                                        {[...Array(review.rating)].map((_, j) => (
                                            <svg key={j} width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className={styles.star}>
                                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
                                    <div className={styles.author}>
                                        <div className={styles.avatar}>
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className={styles.name}>{review.name}</div>
                                            <div className={styles.role}>{review.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Fading Edges for Visual Cue */}
                    <div className={styles.fadeLeft} aria-hidden="true" />
                    <div className={styles.fadeRight} aria-hidden="true" />
                </div>
            </div>
        </section>
    );
}
