import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Benjamin Velie</title>
        <meta name="description" content="A site for all things Ben." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className={styles.topnav}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Benjamin Velie</h1>
        <p className={styles.description}>
          I&apos;m a software developer who&apos;s also really interested in brains.
        </p>
      </main>
    </div>
  );
}
