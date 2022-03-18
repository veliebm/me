import Head from "next/head";
import Nav from "../components/nav/nav.js";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div>
      <Head>
        <title>{useRouter().asPath} - Benjamin Velie</title>
        <meta name="description" content="A site for all things Ben." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Nav />

      <main className={styles.main}>
        <h1 className={styles.title}>Resume</h1>
        <p className={styles.description}>
          Click{" "}
          <a href="http://docs.google.com/document/d/1xBtPqaJIJh2-B5lSKAosCDThjqCF55ZrNGABK-p4G6E/export?format=pdf">
            here
          </a>{" "}
          to download.
        </p>
      </main>
    </div>
  );
}
