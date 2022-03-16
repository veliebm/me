import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
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
        <Link href="/about">
          <a>About</a>
        </Link>
      </header>

      <main className={styles.main}>
        <h1 className={styles.title}>Benjamin Velie</h1>
        <p className={styles.description}>
          I code things and I research brains.
        </p>
      </main>
    </div>
  );
}
