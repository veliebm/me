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
        <p className={styles.description}>My resume:</p>
        <iframe
          className={styles.embedded}
          src="https://docs.google.com/document/d/e/2PACX-1vQajbIrCueAv_H4BsU5TOF4pL54rYGjav2T-VXMylafMRHf-tjKk01rWpCkGeY0w_cppjJt0MAIwsuy/pub?embedded=true"
        ></iframe>
      </main>
    </div>
  );
}
