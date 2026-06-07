import Image from "next/image";
import styles from "./TechStack.module.css";

// Using simpleicons.org CDN for consistent SVGs
const ICON_BASE_URL = "https://cdn.simpleicons.org";

const TECH_STACK = [
    { name: "Python", slug: "python" },
    { name: "Java", slug: "java" },
    { name: "C", slug: "c" },
    { name: "C++", slug: "cplusplus" },
    { name: "JavaScript", slug: "javascript" },
    { name: "TypeScript", slug: "typescript" },
    { name: "HTML5", slug: "html5" },
    { name: "CSS3", slug: "css3" },
    { name: "React", slug: "react" },
    { name: "Next.js", slug: "nextdotjs" },
    { name: "Node.js", slug: "nodedotjs" },
    { name: "Express", slug: "express" },
    { name: "MySQL", slug: "mysql" },
    { name: "PostgreSQL", slug: "postgresql" },
    { name: "MongoDB", slug: "mongodb" },
    { name: "SQLite", slug: "sqlite" },
    { name: "Firebase", slug: "firebase" },
    { name: "NumPy", slug: "numpy" },
    { name: "Pandas", slug: "pandas" },
    // Matplotlib removed (no Simple Icon)
    { name: "Scikit-learn", slug: "scikitlearn" },
    { name: "TensorFlow", slug: "tensorflow" },
    { name: "PyTorch", slug: "pytorch" },
    { name: "Arduino", slug: "arduino" },
    { name: "Raspberry Pi", slug: "raspberrypi" },
    { name: "Espressif", slug: "espressif" },
    { name: "MQTT", slug: "mqtt" },
    { name: "AWS", slug: "amazonaws" },
    { name: "Google Cloud", slug: "googlecloud" },
    { name: "Docker", slug: "docker" },
    { name: "Git", slug: "git" },
    { name: "GitHub", slug: "github" },
    { name: "VS Code", slug: "vscode" },
    { name: "Jupyter", slug: "jupyter" },
    { name: "Postman", slug: "postman" },
    { name: "Figma", slug: "figma" },
];

export default function TechStack() {
    return (
        <section className={styles.section} aria-labelledby="tech-stack-heading">
            <div className="container">
                <div className={styles.header}>
                    <p className={styles.eyebrow}>Tech Stack</p>
                    <h2 id="tech-stack-heading" className={styles.title}>
                        Technologies we work with
                    </h2>
                    <p className={styles.subtitle}>
                        We work with industry-relevant and academic-friendly technologies to deliver reliable project outcomes.
                    </p>
                </div>

                <div className={styles.carouselContainer}>
                    {/* Continuous scrolling track */}
                    <div className={styles.track}>
                        {/* Set 1 */}
                        {TECH_STACK.map((tech) => (
                            <div key={tech.name} className={styles.logoItem}>
                                <Image
                                    src={`${ICON_BASE_URL}/${tech.slug}`}
                                    alt=""
                                    aria-hidden
                                    className={styles.logo}
                                    width={40}
                                    height={40}
                                    sizes="40px"
                                    loading="lazy"
                                    unoptimized
                                />
                            </div>
                        ))}
                        {/* Set 2 (Duplicate for loop) */}
                        {TECH_STACK.map((tech) => (
                            <div key={`${tech.name}-duplicate`} className={styles.logoItem}>
                                <Image
                                    src={`${ICON_BASE_URL}/${tech.slug}`}
                                    alt=""
                                    aria-hidden
                                    className={styles.logo}
                                    width={40}
                                    height={40}
                                    sizes="40px"
                                    loading="lazy"
                                    unoptimized
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hidden list for SEO */}
                <div className={styles.srOnly}>
                    <ul>
                        {TECH_STACK.map((tech) => (
                            <li key={`list-${tech.name}`}>{tech.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
