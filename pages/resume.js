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
        <p className={styles.description}>My resume:</p>
        <iframe
          className={styles.embedded}
          src="https://docs.google.com/document/d/e/2PACX-1vQajbIrCueAv_H4BsU5TOF4pL54rYGjav2T-VXMylafMRHf-tjKk01rWpCkGeY0w_cppjJt0MAIwsuy/pub"
        ></iframe>
      </main>
    </div>
  );
}
