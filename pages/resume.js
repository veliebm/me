import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
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
