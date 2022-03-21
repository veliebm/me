import styles from "../styles/Page.module.css";

export default function Home() {
  return (
    <div>
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
