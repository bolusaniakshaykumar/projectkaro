import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./BlogArticle.module.css";

interface BlogArticleProps {
  title: string;
  date: string;
  dateTime?: string;
  children: ReactNode;
}

export default function BlogArticle({ title, date, dateTime, children }: BlogArticleProps) {
  return (
    <div className={styles.wrapper}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/" className={styles.crumbLink}>
          Home
        </Link>
        <span className={styles.crumbSep} aria-hidden="true">
          /
        </span>
        <Link href="/blogs" className={styles.crumbLink}>
          Blogs
        </Link>
        <span className={styles.crumbSep} aria-hidden="true">
          /
        </span>
        <span className={styles.crumbCurrent} aria-current="page">
          {title}
        </span>
      </nav>
      <header className={styles.header}>
        <p className={styles.eyebrow}>ProjectKaro Blog</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.meta}>
          By <span className={styles.author}>ProjectKaro</span>
          <span className={styles.metaSep} aria-hidden="true">
            ·
          </span>
          <time dateTime={dateTime}>{date}</time>
        </p>
      </header>
      <article className={styles.article}>{children}</article>
    </div>
  );
}
