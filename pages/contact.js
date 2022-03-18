import Head from "next/head";
import Nav from "../components/nav/nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Contact - Benjamin Velie</title>
        <meta name="description" content="A site for all things Ben." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.description}>
          You can contact me via <a href="mailto:veliebm@gmail.com">email</a> if
          you&apos;d like.
        </p>
        <p className={styles.description}>
          Consider also checking out my{" "}
          <a href="https://github.com/veliebm">GitHub</a>.
        </p>
      </main>
    </div>
  );
}
