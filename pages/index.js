import Head from "next/head";
import Nav from "../components/nav/nav";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Benjamin Velie</title>
        <meta name="description" content="A site for all things Ben." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>Benjamin Velie</h1>
        <p className={styles.description}>I like software and I like brains.</p>
        <p className={styles.description}>
          Currently a software developer at the Center for the Study of Emotion
          and Attention.
        </p>
      </main>
    </div>
  );
}
